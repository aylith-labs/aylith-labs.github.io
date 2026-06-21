const BY=216, W=14;
const LET=[['A',32,158],['Y',72,150],['L',112,131],['I',152,102],['T',192,63],['H',228,20]];
function glyph(ch,cx,top){const h=BY-top,mid=(top+BY)/2,L=cx-W,R=cx+W;
 switch(ch){
  case 'A':return [`M${L} ${BY} L${cx} ${top} L${R} ${BY}`,`M${cx-W*0.62} ${(top+h*0.6).toFixed(2)} L${cx+W*0.62} ${(top+h*0.6).toFixed(2)}`];
  case 'Y':{const j=(top+h*0.4).toFixed(2);return [`M${L} ${top} L${cx} ${j} L${R} ${top}`,`M${cx} ${j} L${cx} ${BY}`];}
  case 'L':return [`M${L} ${top} L${L} ${BY} L${R} ${BY}`];
  case 'I':return [`M${L} ${top} L${R} ${top}`,`M${cx} ${top} L${cx} ${BY}`,`M${L} ${BY} L${R} ${BY}`];
  case 'T':return [`M${L} ${top} L${R} ${top}`,`M${cx} ${top} L${cx} ${BY}`];
  case 'H':return [`M${L} ${top} L${L} ${BY}`,`M${R} ${top} L${R} ${BY}`,`M${L} ${mid} L${R} ${mid}`];
 }}
const sparkle=(cx,cy,R,r)=>`M${cx} ${cy-R} L${cx+r} ${cy-r} L${cx+R} ${cy} L${cx+r} ${cy+r} L${cx} ${cy+R} L${cx-r} ${cy+r} L${cx-R} ${cy} L${cx-r} ${cy-r} Z`;
const letters=LET.map(([c,x,t])=>glyph(c,x,t).map(d=>`    <path d="${d}"/>`).join("\n")).join("\n");
// icon-logo sparkle cluster (big + medium) in the open top-left, plus the Y-dot tittle. All copper.
const sparks=[ [52,56,52,12], [108,36,22,5], [72,130,12,2.8] ]
  .map(s=>`  <path fill="#c97a3a" d="${sparkle(...s)}"/>`).join("\n");
const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 230" shape-rendering="geometricPrecision">
  <defs>
    <linearGradient id="aylith-wm" gradientUnits="userSpaceOnUse" x1="16" y1="0" x2="244" y2="0">
      <stop offset="0" stop-color="#a8632c"/>
      <stop offset="1" stop-color="#dd9a52"/>
    </linearGradient>
  </defs>
  <g fill="none" stroke="url(#aylith-wm)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round">
${letters}
  </g>
${sparks}
</svg>
`;
process.stdout.write(svg);
