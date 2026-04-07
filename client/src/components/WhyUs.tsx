/**
 * WhyUs — Bar Aurora Dai Chimici
 * Design: Warm Trattoria Energy
 * 4 feature blocks with icons.
 */
import { motion } from "framer-motion";
import { Clock, Leaf, MapPin, Wallet } from "lucide-react";

const features = [
  {
    icon: <Clock size={28} />,
    title: "Veloce",
    text: "Ordina su WhatsApp e ritira in 15 minuti. Niente code, niente attese.",
    color: "#8B0000",
  },
  {
    icon: <Wallet size={28} />,
    title: "Conveniente",
    text: "Panini da €4, Menu completi da €6.50. Prezzi pensati per gli studenti.",
    color: "#2C5F2D",
  },
  {
    icon: <Leaf size={28} />,
    title: "Varietà",
    text: "Oltre 40 panini diversi, insalatone fresche, opzioni vegetariane.",
    color: "#8B0000",
  },
  {
    icon: <MapPin size={28} />,
    title: "Posizione",
    text: "A 2 minuti dalle aule di Via Marzolo. Il bar di casa tua.",
    color: "#2C5F2D",
  },
];

export default function WhyUs() {
  return (
    <section
      style={{
        background: "#FDF6EC",
        paddingTop: "5rem",
        paddingBottom: "5rem",
        borderTop: "1px solid rgba(139,0,0,0.08)",
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <div className="section-label" style={{ marginBottom: "0.5rem" }}>
            Perché Sceglierci
          </div>
          <div
            className="red-rule"
            style={{ margin: "0 auto 1rem" }}
          />
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              color: "#2C2C2C",
            }}
          >
            Al Servizio degli Studenti
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: "white",
                borderRadius: "12px",
                padding: "2rem 1.5rem",
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                borderTop: `3px solid ${feat.color}`,
              }}
            >
              <div
                style={{
                  color: feat.color,
                  marginBottom: "1rem",
                }}
              >
                {feat.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  color: "#2C2C2C",
                  marginBottom: "0.5rem",
                  letterSpacing: "0.03em",
                  textTransform: "uppercase",
                }}
              >
                {feat.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "0.9rem",
                  color: "#666",
                  lineHeight: 1.6,
                }}
              >
                {feat.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
