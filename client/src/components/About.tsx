/**
 * About + Quick Access Cards — Bar Aurora Dai Chimici
 * Design: Warm Trattoria Energy
 * Asymmetric layout with real photos, heritage story, and 3 quick-access cards.
 */
import { motion } from "framer-motion";
import { Coffee, GraduationCap, Sandwich } from "lucide-react";

const PHOTO_1 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452707407/GFxwXvVrzFksaCXXGMeyQt/bar-tramezzini-1_7a20b8e9.jpg";
const PHOTO_2 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452707407/GFxwXvVrzFksaCXXGMeyQt/bar-display_9c305c82.jpg";

const WA_PARTY = "https://wa.me/393315403799?text=Ciao!%20Vorrei%20informazioni%20per%20una%20festa%20di%20laurea.%20Potete%20darmi%20un%20preventivo%3F";

const cards = [
  {
    icon: <Sandwich size={28} />,
    label: "Menu & Ordina",
    text: "40+ Panini, Piadine, Focacce",
    cta: "Vedi Menu",
    href: "#menu",
    color: "#8B0000",
  },
  {
    icon: <GraduationCap size={28} />,
    label: "Feste & Lauree",
    text: "Menu Completo €15/persona",
    cta: "Prenota Festa",
    href: "#feste",
    color: "#2C5F2D",
  },
  {
    icon: <Coffee size={28} />,
    label: "Colazione",
    text: "Brioche, Cappuccino, Cornetti",
    cta: "Vedi Colazione",
    href: "#colazione",
    color: "#8B0000",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function About() {
  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      style={{ background: "#FDF6EC", paddingTop: "5rem", paddingBottom: "5rem" }}
    >
      <div className="container">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "3rem" }}
        >
          <div className="section-label" style={{ marginBottom: "0.5rem" }}>
            Il Nostro Bar
          </div>
          <div className="red-rule" />
        </motion.div>

        {/* Asymmetric 2-col layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3rem",
            alignItems: "center",
            marginBottom: "4rem",
          }}
        >
          {/* Photos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ position: "relative" }}
          >
            <div
              style={{
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(139,0,0,0.15)",
              }}
            >
              <img
                src={PHOTO_1}
                alt="I panini del Bar Aurora"
                style={{ width: "100%", height: "320px", objectFit: "cover" }}
                loading="lazy"
              />
            </div>
            {/* Floating second photo */}
            <div
              style={{
                position: "absolute",
                bottom: "-2rem",
                right: "-1rem",
                width: "55%",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 12px 40px rgba(0,0,0,0.2)",
                border: "4px solid #FDF6EC",
              }}
            >
              <img
                src={PHOTO_2}
                alt="Il bancone del Bar Aurora"
                style={{ width: "100%", height: "160px", objectFit: "cover" }}
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ paddingBottom: "2rem" }}
          >
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                color: "#2C2C2C",
                lineHeight: 1.2,
                marginBottom: "1.25rem",
              }}
            >
              Dal Cuore dell'Università
              <br />
              <span style={{ color: "#8B0000" }}>di Padova</span>
            </h2>
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "1rem",
                color: "#555",
                lineHeight: 1.8,
                marginBottom: "1rem",
              }}
            >
              Bar Aurora — Dai Chimici è il punto di riferimento per gli studenti
              della Facoltà di Scienze di Via Marzolo. A due passi dalle aule,
              serviamo panini freschi, colazione e pranzo con prezzi pensati per
              chi studia.
            </p>
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "1rem",
                color: "#555",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              Oltre 40 tipi di panini preparati ogni mattina, insalatone fresche,
              e un servizio di catering per feste di laurea che ha reso speciale
              il giorno di tanti studenti padovani.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <div
                style={{
                  background: "rgba(139,0,0,0.08)",
                  borderLeft: "3px solid #8B0000",
                  padding: "0.75rem 1rem",
                  borderRadius: "0 6px 6px 0",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.5rem",
                    color: "#8B0000",
                  }}
                >
                  40+
                </div>
                <div
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "0.8rem",
                    color: "#555",
                  }}
                >
                  Tipi di Panini
                </div>
              </div>
              <div
                style={{
                  background: "rgba(44,95,45,0.08)",
                  borderLeft: "3px solid #2C5F2D",
                  padding: "0.75rem 1rem",
                  borderRadius: "0 6px 6px 0",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.5rem",
                    color: "#2C5F2D",
                  }}
                >
                  4.5★
                </div>
                <div
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "0.8rem",
                    color: "#555",
                  }}
                >
                  Su Google
                </div>
              </div>
              <div
                style={{
                  background: "rgba(139,0,0,0.08)",
                  borderLeft: "3px solid #8B0000",
                  padding: "0.75rem 1rem",
                  borderRadius: "0 6px 6px 0",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.5rem",
                    color: "#8B0000",
                  }}
                >
                  15'
                </div>
                <div
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "0.8rem",
                    color: "#555",
                  }}
                >
                  Ritiro Rapido
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Access Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.5rem",
            marginTop: "2rem",
          }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{
                background: "white",
                borderRadius: "12px",
                padding: "2rem 1.5rem",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                border: "1px solid rgba(139,0,0,0.08)",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "0.75rem",
                transition: "transform 0.2s, box-shadow 0.2s",
                cursor: "pointer",
              }}
              whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.12)" }}
              onClick={() => {
                if (card.href.startsWith("http")) {
                  window.open(card.href, "_blank");
                } else {
                  handleClick(card.href);
                }
              }}
            >
              <div
                style={{
                  color: card.color,
                  background: `${card.color}15`,
                  padding: "0.75rem",
                  borderRadius: "10px",
                }}
              >
                {card.icon}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 800,
                    fontSize: "1rem",
                    color: "#2C2C2C",
                    marginBottom: "0.25rem",
                  }}
                >
                  {card.label}
                </div>
                <div
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "0.875rem",
                    color: "#666",
                  }}
                >
                  {card.text}
                </div>
              </div>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  color: card.color,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  marginTop: "auto",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                }}
              >
                {card.cta} →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
