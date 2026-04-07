/**
 * Contact & Hours — Bar Aurora Dai Chimici
 * Design: Warm Trattoria Energy
 * Google Maps embed, hours table, contact info, how-to-order steps.
 */
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const WA_LINK = "https://wa.me/393315403799?text=Ciao!%20Vorrei%20fare%20un%20ordine.%20Quando%20posso%20passare%20a%20ritirare%3F";

const hours = [
  { day: "Lunedì", time: "07:00 – 20:00", open: true },
  { day: "Martedì", time: "07:00 – 20:00", open: true },
  { day: "Mercoledì", time: "07:00 – 20:00", open: true },
  { day: "Giovedì", time: "07:00 – 20:00", open: true },
  { day: "Venerdì", time: "07:00 – 20:00", open: true },
  { day: "Sabato", time: "Chiuso", open: false },
  { day: "Domenica", time: "Chiuso", open: false },
];

const steps = [
  { n: "1", text: "Scegli dal menu" },
  { n: "2", text: "Clicca 'Ordina su WhatsApp'" },
  { n: "3", text: "Ritira in 15 minuti" },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(`Ciao! Mi chiamo ${name} (${email}).\n\n${message}`);
    window.open(`https://wa.me/393315403799?text=${msg}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section
      id="contatti"
      style={{ background: "#FDF6EC", paddingTop: "5rem", paddingBottom: "5rem" }}
    >
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "3rem" }}
        >
          <div className="section-label" style={{ marginBottom: "0.5rem" }}>
            Contatti
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
            Vienici a Trovare
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3rem",
          }}
        >
          {/* Left: Map + Hours + Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Map — standard iframe embed, works on all deployments */}
            <div
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                height: "280px",
                marginBottom: "1.5rem",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
            >
              <iframe
                title="Bar Aurora Dai Chimici — Via Marzolo 4, Padova"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1430.4!2d11.87456!3d45.40640!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477eda3c6e2a6a6d%3A0x5f2c8e9b1d3a4c5e!2sBar+dai+Chimici%2C+Via+Francesco+Marzolo%2C+4%2C+35121+Padova+PD%2C+Italy!5e0!3m2!1sen!2sit!4v1712500000001!5m2!1sen!2sit"
                width="100%"
                height="280"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Address */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.75rem",
                marginBottom: "1rem",
              }}
            >
              <MapPin size={20} color="#8B0000" style={{ flexShrink: 0, marginTop: "2px" }} />
              <div>
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    color: "#2C2C2C",
                  }}
                >
                  Via Marzolo 4, 35131 Padova
                </div>
                <a
                  href="https://maps.google.com/?q=Via+Marzolo+4+Padova"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.8rem",
                    color: "#8B0000",
                    textDecoration: "none",
                  }}
                >
                  Ottieni indicazioni →
                </a>
              </div>
            </div>

            {/* Phone */}
            <a
              href="tel:+390498753731"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "0.75rem",
                textDecoration: "none",
              }}
            >
              <Phone size={20} color="#8B0000" />
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  color: "#2C2C2C",
                }}
              >
                +39 049 875 3731
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:2frasrl@gmail.com"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "0.75rem",
                textDecoration: "none",
              }}
            >
              <Mail size={20} color="#8B0000" />
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  color: "#2C2C2C",
                }}
              >
                2frasrl@gmail.com
              </span>
            </a>

            {/* WhatsApp */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1.5rem",
                textDecoration: "none",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  color: "#25D366",
                }}
              >
                +39 331 540 3799
              </span>
            </a>

            {/* Hours */}
            <div
              style={{
                background: "white",
                borderRadius: "12px",
                padding: "1.5rem",
                border: "1px solid rgba(139,0,0,0.08)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "1rem",
                }}
              >
                <Clock size={18} color="#8B0000" />
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 800,
                    fontSize: "0.9rem",
                    color: "#2C2C2C",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  Orari
                </span>
              </div>
              {hours.map((h) => (
                <div
                  key={h.day}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0.4rem 0",
                    borderBottom: "1px solid rgba(0,0,0,0.05)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "0.875rem",
                      color: "#555",
                    }}
                  >
                    {h.day}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      color: h.open ? "#2C5F2D" : "#999",
                    }}
                  >
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: How to order + Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* How to order */}
            <div
              style={{
                background: "#8B0000",
                borderRadius: "16px",
                padding: "2rem",
                marginBottom: "2rem",
                color: "#FDF6EC",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 800,
                  fontSize: "1.4rem",
                  marginBottom: "1.5rem",
                }}
              >
                Come Ordinare
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.5rem" }}>
                {steps.map((step) => (
                  <div key={step.n} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        background: "rgba(253,246,236,0.2)",
                        border: "2px solid rgba(253,246,236,0.4)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 800,
                        fontSize: "1rem",
                        flexShrink: 0,
                      }}
                    >
                      {step.n}
                    </div>
                    <span
                      style={{
                        fontFamily: "'Open Sans', sans-serif",
                        fontSize: "1rem",
                        color: "rgba(253,246,236,0.9)",
                      }}
                    >
                      {step.text}
                    </span>
                  </div>
                ))}
              </div>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Ordina Ora
              </a>
            </div>

            {/* Contact form */}
            <div
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "2rem",
                border: "1px solid rgba(139,0,0,0.08)",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 800,
                  fontSize: "1rem",
                  color: "#2C2C2C",
                  marginBottom: "1.25rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                Hai Domande?
              </h3>

              {sent && (
                <div
                  style={{
                    background: "#2C5F2D",
                    color: "white",
                    padding: "0.75rem 1rem",
                    borderRadius: "8px",
                    marginBottom: "1rem",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                  }}
                >
                  ✓ Messaggio inviato!
                </div>
              )}

              <form onSubmit={handleContact} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { label: "Nome", value: name, setter: setName, type: "text" },
                  { label: "Email", value: email, setter: setEmail, type: "email" },
                ].map((f) => (
                  <div key={f.label}>
                    <label
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.8rem",
                        color: "#555",
                        display: "block",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      value={f.value}
                      onChange={(e) => f.setter(e.target.value)}
                      required
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        borderRadius: "8px",
                        border: "1.5px solid rgba(139,0,0,0.2)",
                        fontFamily: "'Open Sans', sans-serif",
                        fontSize: "1rem",
                        color: "#2C2C2C",
                        background: "#FDF6EC",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                ))}
                <div>
                  <label
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.8rem",
                      color: "#555",
                      display: "block",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Messaggio
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      borderRadius: "8px",
                      border: "1.5px solid rgba(139,0,0,0.2)",
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "1rem",
                      color: "#2C2C2C",
                      background: "#FDF6EC",
                      outline: "none",
                      resize: "vertical",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="btn-burgundy"
                  style={{ justifyContent: "center" }}
                >
                  Invia Messaggio
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
