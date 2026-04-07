/**
 * Menu Section — Bar Aurora Dai Chimici
 * Design: Warm Trattoria Energy
 * Homepage shows a compact preview (6 featured items + 4 category cards).
 * "Vedi Menu Completo" opens a full-screen modal with all tabs.
 * NO food images per user instruction.
 */
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const WA_BASE = "https://wa.me/393315403799?text=";

function waLink(item: string, price: string) {
  const msg = encodeURIComponent(
    `Ciao! Vorrei ordinare: ${item} - ${price}. Quando posso passare a ritirare?`
  );
  return `${WA_BASE}${msg}`;
}

const WA_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const panini = [
  { name: "RUSTICO", ingredients: "Speck, patè di olive, mozzarella", price: "€4.00", hot: true },
  { name: "MATTIA", ingredients: "Speck, radicchio, brie", price: "€4.00" },
  { name: "GORGO", ingredients: "Speck, gorgonzola, zucchine", price: "€4.00" },
  { name: "BRIOSO", ingredients: "Speck, rucola, brie", price: "€4.00", hot: true },
  { name: "DELICATO", ingredients: "Crudo, stracchino, rucola", price: "€4.00", hot: true },
  { name: "CRUDO E MOZZARELLA", ingredients: "Prosciutto crudo, mozzarella fresca", price: "€4.00" },
  { name: "MICHI", ingredients: "Bresaola, rucola, pomodoro, philadelphia", price: "€4.00" },
  { name: "DOLLY", ingredients: "Sopressa, asiago, rucola", price: "€4.00" },
  { name: "GOLOSO", ingredients: "Sopressa, funghi, asiago", price: "€4.00" },
  { name: "TOSCANO", ingredients: "Cotto, melanzane, scamorza", price: "€4.00" },
  { name: "SEB", ingredients: "Cotto, zucchine, philadelphia", price: "€4.00" },
  { name: "LEGGERO", ingredients: "Cotto, stracchino, pomodori secchi", price: "€4.00" },
  { name: "IDEALE", ingredients: "Cotto, carciofini, asiago", price: "€4.00" },
  { name: "COTOLETTA", ingredients: "Cotoletta, lattuga", price: "€4.00" },
  { name: "PEPITO", ingredients: "Porchetta, salsa piccante, fontina", price: "€4.00" },
  { name: "MONTANARO", ingredients: "Porchetta, funghi, fontina, maionese", price: "€4.00" },
  { name: "PASCAL", ingredients: "Pancetta, scamorza, peperoni", price: "€4.00" },
  { name: "TERRY", ingredients: "Lattuga, pomodoro, tonno", price: "€4.00" },
  { name: "ESTIVO", ingredients: "Pomodoro, mozzarella, lattuga", price: "€4.00", veg: true },
  { name: "MINÙ", ingredients: "Pomodoro, melanzane, scamorza", price: "€4.00", veg: true },
  { name: "PIG", ingredients: "Mortadella, salsa zingara, fontina", price: "€4.00" },
  { name: "OASI", ingredients: "Tonno, pomodoro, lattuga, mais", price: "€3.30" },
  { name: "MAX", ingredients: "Prosciutto cotto, formaggio, insalata", price: "€3.50" },
  { name: "MARYG", ingredients: "Salumi misti, formaggio, verdure", price: "€3.50" },
];

const insalatone = [
  { name: "BASE", ingredients: "Misticanza, rucola, carote, pomodoro", price: "€5.50", veg: true },
  { name: "DELIZIOSA", ingredients: "Base + gamberetti, mais", price: "€6.50" },
  { name: "STELLA", ingredients: "Base + surimi, peperoni", price: "€6.50" },
  { name: "ROMANA", ingredients: "Base + cotto, scamorza, carciofini", price: "€6.50" },
  { name: "MARINA", ingredients: "Base + tonno, mozzarella, olive", price: "€6.50" },
  { name: "VALDOSTANA", ingredients: "Base + bresaola, grana, champignon", price: "€6.50" },
  { name: "ROMANTICA", ingredients: "Base + sfilacci di cavallo, grana, noci", price: "€6.50" },
];

const colazione = [
  { name: "Caffè Espresso", ingredients: "Arabica 100%", price: "€1.10" },
  { name: "Cappuccino", ingredients: "Espresso + latte montato", price: "€1.50" },
  { name: "Latte Macchiato", ingredients: "Latte caldo + espresso", price: "€1.50" },
  { name: "Brioche", ingredients: "Vuota o con crema/marmellata", price: "€1.30" },
  { name: "Cornetto", ingredients: "Vuoto o farcito", price: "€1.30" },
  { name: "Cappuccino + Brioche", ingredients: "Colazione completa", price: "€2.70" },
  { name: "Cappuccino + Croissant", ingredients: "Con succo fresco", price: "€6.00" },
  { name: "Succo di Frutta Fresco", ingredients: "Frutta di stagione", price: "€2.50" },
  { name: "Coppa Yogurt", ingredients: "Yogurt + granola + frutta", price: "€2.00" },
  { name: "Cioccolata Calda", ingredients: "Cioccolato fondente", price: "€2.00" },
];

type Item = { name: string; ingredients: string; price: string; hot?: boolean; veg?: boolean };

const tabs = [
  { id: "panini", label: "Panini", items: panini, count: panini.length },
  { id: "insalatone", label: "Insalatone", items: insalatone, count: insalatone.length },
  { id: "colazione", label: "Colazione", items: colazione, count: colazione.length },
];

const WA_COMBO =
  "https://wa.me/393315403799?text=Ciao!%20Vorrei%20ordinare%20il%20MENU%20STUDENTE%20(Panino%20%2B%20Bibita%20%2B%20Caff%C3%A8)%20-%20%E2%82%AC6.50.%20Quale%20panino%20posso%20scegliere%3F";

// Featured items shown in the homepage preview
const FEATURED = [panini[0], panini[3], panini[4], insalatone[0], colazione[1], colazione[4]];

function ItemRow({ item }: { item: Item }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "0.75rem",
        padding: "0.75rem 0",
        borderBottom: "1px solid rgba(139,0,0,0.07)",
      }}
    >
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", flexWrap: "wrap" }}>
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 800,
              fontSize: "0.85rem",
              color: "#2C2C2C",
            }}
          >
            {item.name}
          </span>
          {item.hot && (
            <span
              style={{
                fontSize: "0.65rem",
                background: "#8B0000",
                color: "white",
                padding: "0.1rem 0.35rem",
                borderRadius: "9999px",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
              }}
            >
              Top
            </span>
          )}
          {item.veg && (
            <span
              style={{
                fontSize: "0.65rem",
                background: "#2C5F2D",
                color: "white",
                padding: "0.1rem 0.35rem",
                borderRadius: "9999px",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
              }}
            >
              Veg
            </span>
          )}
        </div>
        <div
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "0.78rem",
            color: "#888",
            marginTop: "0.1rem",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {item.ingredients}
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexShrink: 0 }}>
        <span
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 800,
            fontSize: "0.95rem",
            color: "#8B0000",
          }}
        >
          {item.price}
        </span>
        <a
          href={waLink(item.name, item.price)}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.3rem",
            background: "#25D366",
            color: "white",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: "0.7rem",
            padding: "0.35rem 0.65rem",
            borderRadius: "6px",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          {WA_ICON}
          Ordina
        </a>
      </div>
    </div>
  );
}

/** Full-screen modal with all menu tabs */
function MenuModal({ onClose }: { onClose: () => void }) {
  const [activeTab, setActiveTab] = useState("panini");

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const currentItems =
    activeTab === "panini" ? panini :
    activeTab === "insalatone" ? insalatone :
    activeTab === "colazione" ? colazione : [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(20,5,5,0.7)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(1rem, 5vw, 2rem)",
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 30 }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        style={{
          background: "#FDF6EC",
          borderRadius: "24px",
          width: "100%",
          maxWidth: "720px",
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
        }}
      >
        {/* Modal header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1.25rem 1.5rem 0",
            flexShrink: 0,
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 800,
                fontSize: "1.5rem",
                color: "#2C2C2C",
                marginBottom: "0.1rem",
              }}
            >
              Il Nostro Menu
            </h2>
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "0.8rem",
                color: "#888",
              }}
            >
              Ordina su WhatsApp · Ritiro in 15 minuti
            </p>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "rgba(139,0,0,0.08)",
              border: "none",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#8B0000",
              flexShrink: 0,
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            padding: "1rem 1.5rem",
            overflowX: "auto",
            flexShrink: 0,
            scrollbarWidth: "none",
          }}
        >
          {[...tabs, { id: "combo", label: "Menu Studente", count: 1 }].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "0.8rem",
                padding: "0.45rem 1.1rem",
                borderRadius: "9999px",
                border: "2px solid",
                borderColor: activeTab === tab.id ? "#8B0000" : "rgba(139,0,0,0.2)",
                background: activeTab === tab.id ? "#8B0000" : "transparent",
                color: activeTab === tab.id ? "#FDF6EC" : "#8B0000",
                transition: "all 0.2s",
                whiteSpace: "nowrap",
                cursor: "pointer",
              }}
            >
              {tab.label}
              {tab.id !== "combo" && (
                <span style={{ opacity: 0.7, marginLeft: "0.3rem", fontSize: "0.7rem" }}>
                  ({tab.count})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Scrollable items */}
        <div style={{ flex: 1, overflowY: "auto", padding: "0 1.5rem 1.5rem" }}>
          {activeTab !== "combo" ? (
            <div>
              {currentItems.map((item) => (
                <ItemRow key={item.name} item={item} />
              ))}
            </div>
          ) : (
            <div
              style={{
                background: "#8B0000",
                borderRadius: "16px",
                padding: "2rem",
                color: "#FDF6EC",
                textAlign: "center",
                marginTop: "0.5rem",
              }}
            >
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.7rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  opacity: 0.7,
                  marginBottom: "0.5rem",
                }}
              >
                Offerta Speciale
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 800,
                  fontSize: "1.6rem",
                  marginBottom: "0.5rem",
                }}
              >
                Menu Studente
              </h3>
              <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "1rem", opacity: 0.9, marginBottom: "1rem" }}>
                Panino + Bibita + Caffè
              </p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "1rem", textDecoration: "line-through", opacity: 0.5 }}>€8.00</span>
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: "2.5rem", lineHeight: 1 }}>€6.50</span>
              </div>
              <a
                href={WA_COMBO}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  background: "#25D366",
                  color: "white",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  padding: "0.875rem 2rem",
                  borderRadius: "9999px",
                  textDecoration: "none",
                  width: "100%",
                }}
              >
                {WA_ICON}
                Ordina Menu Completo
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

/** Category summary cards shown in the preview */
const categoryCards = [
  { label: "Panini", sub: "24 varianti · da €3.30", tab: "panini", emoji: "🥪" },
  { label: "Insalatone", sub: "7 varianti · da €5.50", tab: "insalatone", emoji: "🥗" },
  { label: "Colazione", sub: "10 varianti · da €1.10", tab: "colazione", emoji: "☕" },
  { label: "Menu Studente", sub: "Panino + Bibita + Caffè · €6.50", tab: "combo", emoji: "🎓" },
];

export default function Menu() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState("panini");

  const openModal = (tab = "panini") => {
    setModalTab(tab);
    setModalOpen(true);
  };

  return (
    <>
      <section
        id="menu"
        style={{ background: "#FDF6EC", paddingTop: "5rem", paddingBottom: "5rem" }}
      >
        <div className="container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: "2.5rem" }}
          >
            <div className="section-label" style={{ marginBottom: "0.5rem" }}>
              Il Nostro Menu
            </div>
            <div className="red-rule" style={{ marginBottom: "1rem" }} />
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
              <div>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 800,
                    fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                    color: "#2C2C2C",
                    marginBottom: "0.4rem",
                  }}
                >
                  Cosa Mangiamo Oggi?
                </h2>
                <p style={{ fontFamily: "'Open Sans', sans-serif", color: "#666", fontSize: "0.95rem" }}>
                  Ingredienti freschi ogni giorno. Ordina su WhatsApp e ritira in 15 minuti.
                </p>
              </div>
              <button
                onClick={() => openModal("panini")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  background: "#8B0000",
                  color: "#FDF6EC",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  padding: "0.65rem 1.4rem",
                  borderRadius: "9999px",
                  border: "none",
                  cursor: "pointer",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                  transition: "background 0.2s",
                }}
              >
                Menu Completo <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>

          {/* Category cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            {categoryCards.map((cat, i) => (
              <motion.button
                key={cat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                onClick={() => openModal(cat.tab)}
                style={{
                  background: "white",
                  border: "1px solid rgba(139,0,0,0.1)",
                  borderRadius: "12px",
                  padding: "1.25rem",
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
                whileHover={{ y: -3, boxShadow: "0 8px 24px rgba(139,0,0,0.12)" }}
              >
                <div style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>{cat.emoji}</div>
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 800,
                    fontSize: "0.95rem",
                    color: "#2C2C2C",
                    marginBottom: "0.2rem",
                  }}
                >
                  {cat.label}
                </div>
                <div
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "0.78rem",
                    color: "#888",
                  }}
                >
                  {cat.sub}
                </div>
                <div
                  style={{
                    marginTop: "0.75rem",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.72rem",
                    color: "#8B0000",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.2rem",
                  }}
                >
                  Vedi tutto <ChevronRight size={12} />
                </div>
              </motion.button>
            ))}
          </div>

          {/* Featured items preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "1.5rem",
              border: "1px solid rgba(139,0,0,0.08)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "0.25rem",
              }}
            >
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 800,
                  fontSize: "0.8rem",
                  color: "#8B0000",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                ★ I Più Amati
              </span>
              <button
                onClick={() => openModal("panini")}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  color: "#8B0000",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.2rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Vedi tutti <ChevronRight size={12} />
              </button>
            </div>
            {FEATURED.map((item) => (
              <ItemRow key={item.name} item={item} />
            ))}
            {/* Fade-out hint */}
            <div
              style={{
                textAlign: "center",
                paddingTop: "1rem",
                borderTop: "1px solid rgba(139,0,0,0.07)",
                marginTop: "0.25rem",
              }}
            >
              <button
                onClick={() => openModal("panini")}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  color: "#8B0000",
                  background: "rgba(139,0,0,0.06)",
                  border: "1px solid rgba(139,0,0,0.15)",
                  borderRadius: "9999px",
                  padding: "0.55rem 1.5rem",
                  cursor: "pointer",
                  letterSpacing: "0.04em",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                + 34 altri piatti nel menu completo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full-menu modal */}
      <AnimatePresence>
        {modalOpen && (
          <MenuModal
            key={modalTab}
            onClose={() => setModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
