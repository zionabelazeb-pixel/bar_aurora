/**
 * Footer — Bar Aurora Dai Chimici
 * Design: Warm Trattoria Energy
 */
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const WA_LINK = "https://wa.me/393315403799?text=Ciao!%20Vorrei%20fare%20un%20ordine.%20Quando%20posso%20passare%20a%20ritirare%3F";

export default function Footer() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "#1A0A0A",
        paddingTop: "3rem",
        paddingBottom: "1.5rem",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2.5rem",
            marginBottom: "2.5rem",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900,
                fontSize: "1.4rem",
                color: "#FDF6EC",
                lineHeight: 1.1,
                marginBottom: "0.25rem",
              }}
            >
              Bar Aurora
            </div>
            <div
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#2C5F2D",
                marginBottom: "1rem",
              }}
            >
              Dai Chimici
            </div>
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "0.85rem",
                color: "rgba(253,246,236,0.5)",
                lineHeight: 1.6,
                marginBottom: "1.25rem",
              }}
            >
              Il bar degli studenti dell'Università di Padova. Panini freschi, colazione e pranzo dal lunedì al venerdì.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ fontSize: "0.85rem", padding: "0.6rem 1.25rem", minHeight: "40px" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Ordina Ora
            </a>
          </div>

          {/* Quick links */}
          <div>
            <div
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 800,
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#8B0000",
                marginBottom: "1rem",
              }}
            >
              Navigazione
            </div>
            {[
              { label: "Menu", href: "#menu" },
              { label: "Feste & Lauree", href: "#feste" },
              { label: "Contatti", href: "#contatti" },
              { label: "Colazione", href: "#colazione" },
            ].map((link) => (
              <button
                key={link.href}
                onClick={() => handleScroll(link.href)}
                style={{
                  display: "block",
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "0.875rem",
                  color: "rgba(253,246,236,0.6)",
                  background: "none",
                  border: "none",
                  padding: "0.3rem 0",
                  textAlign: "left",
                  transition: "color 0.2s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FDF6EC")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(253,246,236,0.6)")}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 800,
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#8B0000",
                marginBottom: "1rem",
              }}
            >
              Contatti
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <a
                href="https://maps.google.com/?q=Via+Marzolo+4+Padova"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                  textDecoration: "none",
                  color: "rgba(253,246,236,0.6)",
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "0.875rem",
                }}
              >
                <MapPin size={16} style={{ flexShrink: 0, marginTop: "2px" }} />
                Via Marzolo 4, 35131 Padova
              </a>
              <a
                href="tel:+390498753731"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  textDecoration: "none",
                  color: "rgba(253,246,236,0.6)",
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "0.875rem",
                }}
              >
                <Phone size={16} />
                049 875 3731
              </a>
              <a
                href="mailto:2frasrl@gmail.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  textDecoration: "none",
                  color: "rgba(253,246,236,0.6)",
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "0.875rem",
                }}
              >
                <Mail size={16} />
                2frasrl@gmail.com
              </a>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                  color: "rgba(253,246,236,0.6)",
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "0.875rem",
                }}
              >
                <Clock size={16} style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  Lun–Ven: 07:00–20:00
                  <br />
                  Sab–Dom: Chiuso
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(253,246,236,0.08)",
            paddingTop: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <span
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "0.8rem",
              color: "rgba(253,246,236,0.35)",
            }}
          >
            © {new Date().getFullYear()} Bar Aurora – Dai Chimici · P.IVA 2FRASRL · Via Marzolo 4, Padova
          </span>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Privacy Policy", "Cookie Policy"].map((link) => (
              <span
                key={link}
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "0.75rem",
                  color: "rgba(253,246,236,0.3)",
                  cursor: "pointer",
                }}
              >
                {link}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
