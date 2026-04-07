/**
 * Gallery — Bar Aurora Dai Chimici
 * Design: Warm Trattoria Energy
 * Photo grid using real user-provided images (no AI generation).
 */
import { motion } from "framer-motion";

const photos = [
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663452707407/GFxwXvVrzFksaCXXGMeyQt/bar-tramezzini-1_7a20b8e9.jpg",
    alt: "Tramezzini e panini freschi al Bar Aurora",
    caption: "Tramezzini freschi ogni giorno",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663452707407/GFxwXvVrzFksaCXXGMeyQt/bar-tramezzini-2_a1f0a90d.jpg",
    alt: "Vetrina panini Bar Aurora",
    caption: "Oltre 40 varietà di panini",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663452707407/GFxwXvVrzFksaCXXGMeyQt/bar-counter_b19dff7c.jpg",
    alt: "Il bancone del Bar Aurora",
    caption: "Il nostro bancone",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663452707407/GFxwXvVrzFksaCXXGMeyQt/bar-display_9c305c82.jpg",
    alt: "Esposizione panini e focacce",
    caption: "Focacce e panini del giorno",
  },
];

export default function Gallery() {
  return (
    <section
      style={{ background: "white", paddingTop: "5rem", paddingBottom: "5rem" }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "2.5rem" }}
        >
          <div className="section-label" style={{ marginBottom: "0.5rem" }}>
            Il Nostro Bar
          </div>
          <div className="red-rule" style={{ marginBottom: "1rem" }} />
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              color: "#2C2C2C",
            }}
          >
            Foto dal Bar
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1rem",
          }}
        >
          {photos.map((photo, i) => (
            <motion.div
              key={photo.alt}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                position: "relative",
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "linear-gradient(to top, rgba(20,5,5,0.8), transparent)",
                  padding: "1.5rem 1rem 0.75rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "0.8rem",
                    color: "rgba(253,246,236,0.9)",
                  }}
                >
                  {photo.caption}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
