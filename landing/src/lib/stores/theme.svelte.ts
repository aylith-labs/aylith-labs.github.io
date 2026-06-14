import { browser } from '$app/environment';

export type ThemePreference = 'system' | 'light' | 'dark';

export const THEME_STORAGE_KEY = 'theme';

function readStored(): ThemePreference {
	if (!browser) return 'system';
	const value = localStorage.getItem(THEME_STORAGE_KEY);
	return value === 'light' || value === 'dark' || value === 'system' ? value : 'system';
}

function systemDark(): boolean {
	return browser && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

/** Three-state theme preference resolved against the OS setting and applied as `.dark` on `<html>`. */
class ThemeState {
	preference = $state<ThemePreference>(readStored());

	get isDark(): boolean {
		return this.preference === 'dark' || (this.preference === 'system' && systemDark());
	}

	set(preference: ThemePreference) {
		this.preference = preference;
		if (browser) localStorage.setItem(THEME_STORAGE_KEY, preference);
		this.apply();
	}

	private apply() {
		if (browser) document.documentElement.classList.toggle('dark', this.isDark);
	}

	/** Call once on mount. Keeps the resolved theme current when the OS setting changes. */
	init(): () => void {
		if (!browser) return () => {};
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const sync = () => {
			if (this.preference === 'system') this.apply();
		};
		this.apply();
		mediaQuery.addEventListener('change', sync);
		return () => mediaQuery.removeEventListener('change', sync);
	}
}

export const theme = new ThemeState();
