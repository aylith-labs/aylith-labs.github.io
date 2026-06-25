#!/usr/bin/env bash
# Roll out .github/workflows/notify-catalog.yml to every product repo in the
# aylith-labs org, so each one pings aylith.com to rebuild on push to its default
# branch. Skips archived repos, the site repo itself, and any repo carrying the
# exclusion topic. Idempotent — creates or updates the workflow via the GitHub
# contents API (no clone). Requires `gh` authed with `repo` + `workflow` scope.
#
# Usage:
#   scripts/rollout-notifier.sh            # apply to all eligible repos
#   scripts/rollout-notifier.sh --dry-run  # list what would change, touch nothing
set -euo pipefail

ORG="aylith-labs"
SELF_REPO="aylith-com"
EXCLUDE_TOPIC="aylith-meta"
WORKFLOW_PATH=".github/workflows/notify-catalog.yml"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TEMPLATE="$SCRIPT_DIR/../.aylith/templates/notify-catalog.yml"

DRY_RUN=0
[[ "${1:-}" == "--dry-run" ]] && DRY_RUN=1

if [[ ! -f "$TEMPLATE" ]]; then
  echo "Template not found: $TEMPLATE" >&2
  exit 1
fi

CONTENT_B64="$(base64 -w0 "$TEMPLATE")"

echo "Listing repos for org \"$ORG\"…"
# nameWithOwner + flags so we can filter archived + excluded-topic repos locally.
REPOS_JSON="$(gh repo list "$ORG" --no-archived --limit 500 \
  --json name,isArchived,repositoryTopics)"

# Emit one repo name per line, dropping the site repo and any excluded-topic repo.
mapfile -t REPOS < <(
  echo "$REPOS_JSON" | jq -r --arg self "$SELF_REPO" --arg topic "$EXCLUDE_TOPIC" '
    .[]
    | select(.isArchived | not)
    | select(.name != $self)
    | select([.repositoryTopics[]?.name] | index($topic) | not)
    | .name
  '
)

echo "${#REPOS[@]} eligible repos."

for repo in "${REPOS[@]}"; do
  full="$ORG/$repo"
  # Look up an existing file's sha so we update-in-place rather than 422.
  # Gate on gh's exit code: on 404 gh dumps the error body to stdout and skips
  # --jq, so only trust the output when the call actually succeeded.
  if sha="$(gh api "repos/$full/contents/$WORKFLOW_PATH" --jq '.sha' 2>/dev/null)"; then
    :
  else
    sha=""
  fi

  if [[ "$DRY_RUN" == "1" ]]; then
    if [[ -n "$sha" ]]; then
      echo "  would UPDATE $full"
    else
      echo "  would CREATE $full"
    fi
    continue
  fi

  payload="$(mktemp)"
  if [[ -n "$sha" ]]; then
    jq -n --arg msg "chore: update Aylith catalog notifier" \
          --arg content "$CONTENT_B64" --arg sha "$sha" \
          '{message:$msg, content:$content, sha:$sha}' > "$payload"
  else
    jq -n --arg msg "chore: add Aylith catalog notifier" \
          --arg content "$CONTENT_B64" \
          '{message:$msg, content:$content}' > "$payload"
  fi

  gh api -X PUT "repos/$full/contents/$WORKFLOW_PATH" --input "$payload" >/dev/null
  rm -f "$payload"
  echo "  ✓ $full"
  # Stay gentle on the API and the box.
  sleep 1
done

echo "Done."
