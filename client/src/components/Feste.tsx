/**
 * Feste & Lauree — Bar Aurora Dai Chimici
 * Design: Warm Trattoria Energy
 * Party calculator, what's included checklist, booking form.
 */
import { AnimatePresence, motion } from "framer-motion";
import { Check, GraduationCap, Truck } from "lucide-react";
import { useState } from "react";

const WA_PARTY = (n: number, date: string) => {
  const msg = encodeURIComponent(
    `Ciao! Vorrei informazioni per una festa di laurea per ${n} persone${date ? ` il ${date}` : ""}. Potete darmi un preventivo?`
  );
  return `https://wa.me/393315403799?text=${msg}`;
};

const included = [
  "2 mini tramezzini a persona",
  "3 salatini a persona",
  "3 pizzette di sfoglia a persona",
  "1 paninetto mignon a persona",
  "Patatine",
  "1 litro Spritz ogni 7 persone",
  "1 litro Prosecco ogni 7 persone",
  "Acqua minerale naturale/frizzante",
];

export default function Feste() {
  const [people, setPeople] = useState(15);
  const [date, setDate] = useState("");
  const [eventType, setEventType] = useState("Laurea");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [catering, setCatering] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const total = people * 15;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open WhatsApp with all details
    const msg = encodeURIComponent(
      `Ciao! Richiesta festa:\nNome: ${name}\nEmail: ${email}\nTelefono: ${phone}\nData: ${date}\nPersone: ${people}\nTipo: ${eventType}\nCatering esterno: ${catering ? "Sì" : "No"}\nNote: ${notes}`
    );
    window.open(`https://wa.me/393315403799?text=${msg}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      id="feste"
      style={{ background: "white", paddingTop: "5rem", paddingBottom: "5rem" }}
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
            Feste & Lauree
          </div>
          <div className="red-rule" style={{ marginBottom: "1rem" }} />
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              color: "#2C2C2C",
              marginBottom: "0.5rem",
            }}
          >
            Festeggia la Tua Laurea
            <br />
            <span style={{ color: "#8B0000" }}>da Noi</span>
          </h2>
          <p style={{ fontFamily: "'Open Sans', sans-serif", color: "#666", fontSize: "1rem" }}>
            Menu completo €15 a persona · Catering disponibile · Oltre 500 feste di laurea
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3rem",
          }}
        >
          {/* Left: Calculator + What's included */}
          <div>
            {/* Calculator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                background: "#FDF6EC",
                borderRadius: "16px",
                padding: "2rem",
                marginBottom: "2rem",
                border: "1px solid rgba(139,0,0,0.1)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1.5rem",
                }}
              >
                <GraduationCap size={24} color="#8B0000" />
                <h3
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    color: "#2C2C2C",
                  }}
                >
                  Calcola il Tuo Menu
                </h3>
              </div>

              <div style={{ marginBottom: "1.25rem" }}>
                <label
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    color: "#555",
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                >
                  Numero di persone
                </label>
                <input
                  type="number"
                  min="5"
                  max="200"
                  value={people}
                  onChange={(e) => setPeople(Math.max(1, parseInt(e.target.value) || 1))}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "8px",
                    border: "2px solid rgba(139,0,0,0.2)",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "#2C2C2C",
                    background: "white",
                    outline: "none",
                  }}
                />
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    color: "#555",
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                >
                  Data evento (opzionale)
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "8px",
                    border: "2px solid rgba(139,0,0,0.2)",
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "1rem",
                    color: "#2C2C2C",
                    background: "white",
                    outline: "none",
                  }}
                />
              </div>

              {/* Result & What's Included */}
              <div
                style={{
                  background: "#8B0000",
                  borderRadius: "12px",
                  padding: "1.5rem",
                  textAlign: "center",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.8rem",
                    color: "rgba(253,246,236,0.7)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "0.25rem",
                  }}
                >
                  Preventivo Immediato
                </div>
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 900,
                    fontSize: "2.5rem",
                    color: "#FDF6EC",
                    lineHeight: 1,
                  }}
                >
                  €{total.toFixed(2)}
                </div>
                <div
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "0.8rem",
                    color: "rgba(253,246,236,0.7)",
                    marginTop: "0.25rem",
                  }}
                >
                  {people} persone × €15/persona
                </div>
              </div>

              {/* What's included (now inside the same card) */}
              <div style={{ marginBottom: "1.5rem" }}>
                <h3
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 800,
                    fontSize: "0.95rem",
                    color: "#2C2C2C",
                    marginBottom: "1rem",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <Check size={18} color="#2C5F2D" /> Cosa Include il Menu da 15€
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {included.map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                      <span
                        style={{
                          fontFamily: "'Open Sans', sans-serif",
                          fontSize: "0.9rem",
                          color: "#444",
                          lineHeight: 1.4,
                        }}
                      >
                        • {item}
                      </span>
                    </div>
                  ))}
                </div>
                <p
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "0.75rem",
                    color: "#888",
                    marginTop: "0.75rem",
                    fontStyle: "italic",
                  }}
                >
                  * Eventuali extra (caffè, dolci) vengono conteggiati a parte
                </p>
              </div>

              <a
                href={WA_PARTY(people, date)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ width: "100%", justifyContent: "center", marginBottom: "1rem" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Richiedi Preventivo
              </a>

              {/* Catering banner */}
              <div
                style={{
                  background: "#2C5F2D",
                  borderRadius: "10px",
                  padding: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <Truck size={24} color="white" />
                <div>
                  <div
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 700,
                      color: "white",
                      fontSize: "0.85rem",
                    }}
                  >
                    Catering Dove Vuoi Tu
                  </div>
                  <div
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "0.75rem",
                      color: "rgba(255,255,255,0.8)",
                    }}
                  >
                    Portiamo il party a Padova
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Booking form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              style={{
                background: "#FDF6EC",
                borderRadius: "16px",
                padding: "2rem",
                border: "1px solid rgba(139,0,0,0.1)",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 800,
                  fontSize: "1.5rem",
                  color: "#2C2C2C",
                  marginBottom: "1.5rem",
                }}
              >
                Prenota la Tua Festa
              </h3>

              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    style={{
                      background: "#2C5F2D",
                      color: "white",
                      padding: "1rem",
                      borderRadius: "8px",
                      marginBottom: "1rem",
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                    }}
                  >
                    ✓ Richiesta inviata su WhatsApp! Ti contattiamo entro 24 ore.
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { label: "Nome completo *", value: name, setter: setName, type: "text", required: true },
                  { label: "Email", value: email, setter: setEmail, type: "email", required: false },
                  { label: "Telefono *", value: phone, setter: setPhone, type: "tel", required: true },
                ].map((field) => (
                  <div key={field.label}>
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
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      value={field.value}
                      onChange={(e) => field.setter(e.target.value)}
                      required={field.required}
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        borderRadius: "8px",
                        border: "1.5px solid rgba(139,0,0,0.2)",
                        fontFamily: "'Open Sans', sans-serif",
                        fontSize: "1rem",
                        color: "#2C2C2C",
                        background: "white",
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
                    Tipo di evento
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      borderRadius: "8px",
                      border: "1.5px solid rgba(139,0,0,0.2)",
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "1rem",
                      color: "#2C2C2C",
                      background: "white",
                      outline: "none",
                    }}
                  >
                    <option value="Laurea">Laurea</option>
                    <option value="Compleanno">Compleanno</option>
                    <option value="Aziendale">Aziendale</option>
                    <option value="Altro">Altro</option>
                  </select>
                </div>

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
                    Note / Richieste speciali
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={3}
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      borderRadius: "8px",
                      border: "1.5px solid rgba(139,0,0,0.2)",
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "1rem",
                      color: "#2C2C2C",
                      background: "white",
                      outline: "none",
                      resize: "vertical",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={catering}
                    onChange={(e) => setCatering(e.target.checked)}
                    style={{ width: "18px", height: "18px", accentColor: "#8B0000" }}
                  />
                  <span
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "0.9rem",
                      color: "#555",
                    }}
                  >
                    Richiedo catering esterno
                  </span>
                </label>

                <button
                  type="submit"
                  className="btn-whatsapp"
                  style={{ justifyContent: "center", width: "100%", fontSize: "1rem" }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Invia Richiesta su WhatsApp
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
