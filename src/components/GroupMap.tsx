/** Hand-drawn diagram of the group: one engineering core, three companies, the products they run. */
export function GroupMap() {
  const products = [
    { x: 40, label: 'Tyashin' },
    { x: 140, label: 'Thridify' },
    { x: 240, label: 'YOM' },
    { x: 340, label: 'WonderlyAR' },
    { x: 440, label: 'Partner CRM' },
  ];
  const companies = [
    { x: 90, label: 'Pvt Ltd', sub: 'India' },
    { x: 240, label: 'OÜ', sub: 'EU and UK' },
    { x: 390, label: 'Canada Inc.', sub: 'Rest of world' },
  ];
  return (
    <svg viewBox="0 0 480 360" role="img" aria-labelledby="gm-title gm-desc" className="h-auto w-full">
      <title id="gm-title">How Aapastech is organised</title>
      <desc id="gm-desc">
        One shared engineering and support team runs five products. Three companies sell them: Aapastech Private Limited in India, Aapastech OÜ in the EU and UK, and 14818032 Canada Inc. everywhere else.
      </desc>
      <rect x="140" y="20" width="200" height="56" rx="10" fill="#0d1624" />
      <text x="240" y="44" textAnchor="middle" fill="#f6f5f1" fontSize="13" fontWeight="600">Shared engineering</text>
      <text x="240" y="63" textAnchor="middle" fill="#9fb3c4" fontSize="11">hosting · support · security</text>
      {products.map((p) => (
        <g key={p.label}>
          <path d={`M240 76 C240 110 ${p.x} 110 ${p.x} 146`} stroke="#0f5c55" strokeWidth="1.4" fill="none" className="draw" />
          <rect x={p.x - 46} y="146" width="92" height="34" rx="17" fill="#ffffff" stroke="#d9d6cc" />
          <text x={p.x} y="168" textAnchor="middle" fill="#131b28" fontSize="12" fontWeight="600">
            {p.label}
          </text>
        </g>
      ))}
      {companies.map((c) => (
        <g key={c.label}>
          <path d={`M${c.x} 220 V250`} stroke="#b4410f" strokeWidth="1.4" strokeDasharray="3 4" />
          <rect x={c.x - 66} y="250" width="132" height="62" rx="10" fill="#ffffff" stroke="#0d1624" strokeWidth="1.2" />
          <text x={c.x} y="276" textAnchor="middle" fill="#131b28" fontSize="13" fontWeight="600">
            {c.label}
          </text>
          <text x={c.x} y="296" textAnchor="middle" fill="#4a5565" fontSize="11">
            {c.sub}
          </text>
        </g>
      ))}
      <line x1="24" y1="220" x2="456" y2="220" stroke="#b4410f" strokeWidth="1.4" strokeDasharray="3 4" />
      <text x="240" y="212" textAnchor="middle" fill="#b4410f" fontSize="10" fontFamily="monospace" letterSpacing="1.5">
        SOLD AND SUPPORTED BY
      </text>
      <text x="240" y="340" textAnchor="middle" fill="#4a5565" fontSize="10" fontFamily="monospace" letterSpacing="1.5">
        ONE GROUP · THREE COMPANIES · SAME SERVICES
      </text>
    </svg>
  );
}
