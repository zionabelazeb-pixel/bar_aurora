/**
 * Reviews — Bar Aurora Dai Chimici
 * Design: Warm Trattoria Energy
 * Auto-rotating carousel of real Google reviews. 4s interval.
 */
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const reviews = [
  {
    name: "Amirreza Fahimi",
    rating: 5,
    text: "Morirei per il latte macchiato che fanno qui. Anche i tavoli all'aperto sono fantastici.",
    time: "3 mesi fa",
    initials: "AF",
    color: "#8B0000",
  },
  {
    name: "Jack Pagn",
    rating: 5,
    text: "Cibo di qualità a prezzi davvero ottimi. Assolutamente consigliato agli studenti.",
    time: "6 anni fa",
    initials: "JP",
    color: "#2C5F2D",
  },
  {
    name: "Laura De Grandi",
    rating: 5,
    text: "Cameriere sempre gentili e cibo molto buono! Perfetto per gli studenti.",
    time: "7 anni fa",
    initials: "LG",
    color: "#8B0000",
  },
  {
    name: "Eddy",
    rating: 5,
    text: "Servizio eccellente. Il cibo è molto buono e i panini sono ottimi. Sempre pulito e ordinato.",
    time: "3 anni fa",
    initials: "E",
    color: "#2C5F2D",
  },
  {
    name: "Giulia Giacomazzi",
    rating: 5,
    text: "Ho festeggiato la mia laurea qui ed ero molto soddisfatta. Il cibo era buono, il personale gentilissimo e disponibile, anche durante la pianificazione del ricevimento via WhatsApp. Consiglio vivamente!",
    time: "6 mesi fa",
    initials: "GG",
    color: "#8B0000",
  },
  {
    name: "Mufti Mahmud",
    rating: 5,
    text: "Posto bello e persone in gamba!",
    time: "8 anni fa",
    initials: "MM",
    color: "#2C5F2D",
  },
  {
    name: "Natalia Shemiakina",
    rating: 5,
    text: "Prezzi buoni e atmosfera piacevole.",
    time: "7 anni fa",
    initials: "NS",
    color: "#8B0000",
  },
  {
    name: "Gabriele",
    rating: 5,
    text: "Ho pranzato benissimo qui! Nonostante fosse ora di punta, sono stato servito con allegria e cortesia dal personale. Ho preso una focaccia vegetariana con pomodori, rucola e mozzarella — eccellente.",
    time: "1 anno fa",
    initials: "G",
    color: "#2C5F2D",
  },
  {
    name: "Blanca Escrivá de Romaní",
    rating: 5,
    text: "La Caffetteria Marzolo si trova qui. Servono una colazione ottima (panino o croissant) con succo fresco per circa €6.",
    time: "2 mesi fa",
    initials: "BE",
    color: "#8B0000",
  },
  {
    name: "Michele Gastaldi",
    rating: 4,
    text: "Personale amichevole e disponibile, un po' affollato, ma una tappa obbligata per chi frequenta le facoltà vicine. I panini sono ottimi e i menu del giorno non sono male!",
    time: "1 anno fa",
    initials: "MG",
    color: "#2C5F2D",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ color: i < count ? "#FFD700" : "#ddd", fontSize: "1rem" }}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (i: number) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
  };

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 40 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir * -40 }),
  };

  return (
    <section
      style={{
        background: "#2C2C2C",
        paddingTop: "5rem",
        paddingBottom: "5rem",
      }}
    >
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <div
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#FFD700",
              marginBottom: "0.5rem",
            }}
          >
            Cosa Dicono di Noi
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              color: "#FDF6EC",
              marginBottom: "0.75rem",
            }}
          >
            Recensioni Google
          </h2>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(255,215,0,0.1)",
              border: "1px solid rgba(255,215,0,0.3)",
              padding: "0.5rem 1.25rem",
              borderRadius: "9999px",
            }}
          >
            <span style={{ color: "#FFD700", fontSize: "1.1rem" }}>★★★★★</span>
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                color: "#FDF6EC",
                fontSize: "0.9rem",
              }}
            >
              4.5/5 · 147 Recensioni
            </span>
          </div>
        </motion.div>

        {/* Carousel */}
        <div style={{ maxWidth: "680px", margin: "0 auto", position: "relative", minHeight: "220px" }}>
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
              style={{
                background: "rgba(253,246,236,0.05)",
                border: "1px solid rgba(253,246,236,0.1)",
                borderRadius: "16px",
                padding: "2.5rem",
                backdropFilter: "blur(4px)",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.25rem" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: reviews[current].color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FDF6EC",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 800,
                    fontSize: "0.9rem",
                    flexShrink: 0,
                  }}
                >
                  {reviews[current].initials}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 700,
                      color: "#FDF6EC",
                      fontSize: "0.95rem",
                    }}
                  >
                    {reviews[current].name}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Stars count={reviews[current].rating} />
                    <span
                      style={{
                        fontFamily: "'Open Sans', sans-serif",
                        fontSize: "0.75rem",
                        color: "rgba(253,246,236,0.5)",
                      }}
                    >
                      {reviews[current].time}
                    </span>
                  </div>
                </div>
              </div>
              <p
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "1rem",
                  color: "rgba(253,246,236,0.85)",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                }}
              >
                "{reviews[current].text}"
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.5rem",
              marginTop: "1.5rem",
            }}
          >
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                style={{
                  width: i === current ? "24px" : "8px",
                  height: "8px",
                  borderRadius: "9999px",
                  background: i === current ? "#8B0000" : "rgba(253,246,236,0.3)",
                  border: "none",
                  transition: "all 0.3s",
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
