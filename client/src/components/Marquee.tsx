/**
 * Marquee Ticker — Bar Aurora Dai Chimici
 * Infinite CSS scroll strip with heritage phrases and burgundy separators.
 */
export default function Marquee() {
  const items = [
    "Panini Freschi Ogni Giorno",
    "Colazione dal Lunedì al Venerdì",
    "Ordina su WhatsApp",
    "Feste di Laurea su Misura",
    "Via Marzolo 4, Padova",
    "Aperto 7:00 – 20:00",
    "Menu Studente da €6.50",
    "40+ Panini Diversi",
    "Insalatone Fresche",
    "Catering Disponibile",
  ];

  const doubled = [...items, ...items];

  return (
    <div
      style={{
        background: "#8B0000",
        overflow: "hidden",
        padding: "0.75rem 0",
        borderTop: "2px solid rgba(255,255,255,0.1)",
        borderBottom: "2px solid rgba(255,255,255,0.1)",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "0",
          animation: "marquee 30s linear infinite",
          whiteSpace: "nowrap",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#FDF6EC",
              display: "inline-flex",
              alignItems: "center",
              gap: "1.5rem",
              paddingRight: "1.5rem",
            }}
          >
            {item}
            <span style={{ color: "rgba(253,246,236,0.4)", fontSize: "1rem" }}>◆</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
