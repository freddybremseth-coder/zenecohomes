// Interaktivt, stilisert regionkart for forsiden – klikk et område for å se boliger der.
const coastal = [
  { key: "costa-blanca-nord", label: "Costa Blanca Nord", sub: "Altea · Calpe · Dénia", cx: 735, cy: 110, lx: 585, ly: 96 },
  { key: "costa-blanca-sor", label: "Costa Blanca Sør", sub: "Torrevieja · Orihuela", cx: 660, cy: 315, lx: 545, ly: 360 },
  { key: "costa-calida", label: "Costa Cálida", sub: "Mar Menor · Murcia", cx: 580, cy: 470, lx: 410, ly: 470 },
];

export function AreaMap() {
  return (
    <section className="section area-map-section">
      <div className="section-heading">
        <p className="eyebrow">Søk på område</p>
        <h2>Hvor i Spania vil du bo?</h2>
        <p>Klikk et område på kartet, så viser vi boligene der.</p>
      </div>
      <div className="area-map-wrap">
        <svg viewBox="0 0 1000 560" className="area-map" role="img" aria-label="Kart over Costa Blanca og Costa Cálida">
          <rect width="1000" height="560" fill="#e7eef0" />
          <path d="M0,0 L780,0 C700,170 620,330 500,560 L0,560 Z" fill="#f4f1e8" />
          <path d="M780,0 C700,170 620,330 500,560" fill="none" stroke="#cdd9db" strokeWidth="3" />
          <text x="860" y="500" textAnchor="middle" className="map-sea-label">
            Middelhavet
          </text>

          {/* Innlandet – klikkbar sone i landet */}
          <a href="/eiendommer?region=innlandet" className="map-region map-inland" aria-label="Se boliger i innlandet">
            <rect x="95" y="180" width="300" height="150" rx="18" className="map-zone" />
            <circle cx="160" cy="230" r="5" className="map-dot" />
            <circle cx="250" cy="215" r="5" className="map-dot" />
            <circle cx="215" cy="285" r="5" className="map-dot" />
            <circle cx="310" cy="270" r="5" className="map-dot" />
            <text x="245" y="245" textAnchor="middle" className="map-label">
              Innlandet
            </text>
            <text x="245" y="312" textAnchor="middle" className="map-sub">
              Biar · Villena · Pinoso
            </text>
          </a>

          {/* Kystregioner – klikkbare nåler */}
          {coastal.map((r) => (
            <a key={r.key} href={`/eiendommer?region=${r.key}`} className="map-region" aria-label={`Se boliger i ${r.label}`}>
              <line x1={r.lx} y1={r.ly + 6} x2={r.cx} y2={r.cy} className="map-leader" />
              <circle cx={r.cx} cy={r.cy} r="13" className="map-pin" />
              <circle cx={r.cx} cy={r.cy} r="5" className="map-pin-core" />
              <text x={r.lx} y={r.ly} textAnchor="middle" className="map-label">
                {r.label}
              </text>
              <text x={r.lx} y={r.ly + 24} textAnchor="middle" className="map-sub">
                {r.sub}
              </text>
            </a>
          ))}
        </svg>
      </div>
    </section>
  );
}
