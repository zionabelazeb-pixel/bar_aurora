/**
 * Hero — Bar Aurora Dai Chimici
 * Design: Warm Trattoria Energy
 * Full-viewport, real food photo background, dark overlay for text contrast.
 * Features: live open/closed badge, toned-down WhatsApp CTA, phone CTA.
 *
 * Opening hours (Italy time, Europe/Rome):
 *   Mon–Fri: 07:00–20:00
 *   Sat–Sun: Closed
 */
import { motion } from "framer-motion";
import { ChevronDown, Clock, Phone } from "lucide-react";
import { useEffect, useState } from "react";

const WA_LINK =
  "https://wa.me/393315403799?text=Ciao!%20Vorrei%20fare%20un%20ordine.%20Quando%20posso%20passare%20a%20ritirare%3F";

const HERO_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663452707407/GFxwXvVrzFksaCXXGMeyQt/bar-counter_b19dff7c.jpg";

/** Returns open/closed status based on Italy local time */
function getOpenStatus() {
  // Use Intl to get Italy local time regardless of user's timezone
  const now = new Date();
  const italyTime = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Rome",
    hour: "numeric",
    minute: "numeric",
    weekday: "short",
    hour12: false,
  }).formatToParts(now);

  const weekday = italyTime.find((p) => p.type === "weekday")?.value ?? "";
  const hour = parseInt(italyTime.find((p) => p.type === "hour")?.value ?? "0", 10);
  const minute = parseInt(italyTime.find((p) => p.type === "minute")?.value ?? "0", 10);
  const totalMins = hour * 60 + minute;

  // Sat (Sat) and Sun (Sun) are closed
  const isWeekend = weekday === "Sat" || weekday === "Sun";
  const isOpenHours = totalMins >= 7 * 60 && totalMins < 20 * 60; // 07:00–20:00

  const isOpen = !isWeekend && isOpenHours;

  // Next opening info
  let nextOpen = "";
  if (!isOpen) {
    if (isWeekend) {
      nextOpen = weekday === "Sat" ? "Apre Lunedì alle 7:00" : "Apre domani alle 7:00";
    } else if (totalMins < 7 * 60) {
      nextOpen = "Apre alle 7:00";
    } else {
      nextOpen = "Apre domani alle 7:00";
    }
  }

  return { isOpen, nextOpen };
}

function OpenBadge() {
  const [status, setStatus] = useState(getOpenStatus);

  useEffect(() => {
    // Refresh every minute
    const id = setInterval(() => setStatus(getOpenStatus()), 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        background: status.isOpen
          ? "rgba(44, 120, 46, 0.85)"
          : "rgba(100, 30, 30, 0.85)",
        color: "#FDF6EC",
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 700,
        fontSize: "0.72rem",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        padding: "0.4rem 0.9rem",
        borderRadius: "9999px",
        backdropFilter: "blur(6px)",
        border: `1px solid ${status.isOpen ? "rgba(100,220,100,0.3)" : "rgba(220,100,100,0.3)"}`,
      }}
    >
      <Clock size={11} />
      {status.isOpen ? "Aperto ora · Chiude alle 20:00" : `Chiuso · ${status.nextOpen}`}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100svh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          transform: "scale(1.05)",
        }}
      />

      {/* Dark gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(20,5,5,0.65) 0%, rgba(20,5,5,0.75) 50%, rgba(20,5,5,0.85) 100%)",
        }}
      />

      {/* Grain texture overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "5rem" }}>
        <div style={{ maxWidth: "680px" }}>

          {/* Row: stars badge + open/closed badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.5rem",
            }}
          >
            {/* Stars */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(139,0,0,0.85)",
                color: "#FDF6EC",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "0.4rem 1rem",
                borderRadius: "9999px",
              }}
            >
              <span style={{ color: "#FFD700" }}>★★★★★</span>
              &nbsp;4.5/5 · 147 Recensioni
            </div>

            {/* Live open/closed */}
            <OpenBadge />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900,
              fontSize: "clamp(2.2rem, 6vw, 3.8rem)",
              color: "#FDF6EC",
              lineHeight: 1.1,
              marginBottom: "1rem",
              textShadow: "0 2px 8px rgba(0,0,0,0.5)",
            }}
          >
            Ordina su WhatsApp,
            <br />
            <span style={{ color: "#FFD700" }}>Ritira in 15 Minuti</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "1.1rem",
              color: "rgba(253,246,236,0.9)",
              marginBottom: "2rem",
              lineHeight: 1.6,
              textShadow: "0 1px 4px rgba(0,0,0,0.4)",
            }}
          >
            Niente code. Niente attese. Solo buon cibo.
            <br />
            <span style={{ fontSize: "0.9rem", opacity: 0.8 }}>
              Il bar degli studenti dell'Università di Padova — Via Marzolo 4
            </span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "1.5rem" }}
          >
            {/* WhatsApp — toned down: solid but no pulse/glow animation */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "#25D366",
                color: "white",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                padding: "0.875rem 2rem",
                borderRadius: "9999px",
                textDecoration: "none",
                minHeight: "48px",
                letterSpacing: "0.02em",
                transition: "background 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#1ebe5d";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#25D366";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Ordina Ora
            </a>

            {/* Phone */}
            <a
              href="tel:+390498753731"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(253,246,236,0.15)",
                color: "#FDF6EC",
                border: "2px solid rgba(253,246,236,0.6)",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "0.9rem",
                padding: "0.875rem 1.75rem",
                borderRadius: "9999px",
                textDecoration: "none",
                minHeight: "48px",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                backdropFilter: "blur(4px)",
                transition: "all 0.2s ease",
              }}
            >
              <Phone size={16} />
              Chiama
            </a>
          </motion.div>

          {/* Subtle menu text link */}
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            href="#menu"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "0.9rem",
              color: "rgba(253,246,236,0.7)",
              textDecoration: "underline",
              textUnderlineOffset: "3px",
            }}
          >
            Vedi il nostro menu ↓
          </motion.a>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1,
        }}
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={28} color="rgba(253,246,236,0.6)" />
        </motion.div>
      </motion.div>
    </section>
  );
}
