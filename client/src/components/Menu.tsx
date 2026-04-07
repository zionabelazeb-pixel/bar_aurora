/**
 * Menu Section — Bar Aurora Dai Chimici
 * Design: Warm Trattoria Energy
 * Tabbed interface: Panini | Insalatone | Colazione | Menu Studente
 * Each item has WhatsApp order button with pre-filled message.
 * NO food images per user instruction.
 */
import { motion } from "framer-motion";
import { useState } from "react";

const WA_BASE = "https://wa.me/393315403799?text=";

function waLink(item: string, price: string) {
  const msg = encodeURIComponent(
    `Ciao! Vorrei ordinare: ${item} - ${price}. Quando posso passare a ritirare?`
  );
  return `${WA_BASE}${msg}`;
}

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

type Item = {
  name: string;
  ingredients: string;
  price: string;
  hot?: boolean;
  veg?: boolean;
};

function ItemCard({ item }: { item: Item }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      style={{
        background: "white",
        borderRadius: "10px",
        padding: "1.25rem",
        border: "1px solid rgba(139,0,0,0.08)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem" }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", flexWrap: "wrap" }}>
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 800,
                fontSize: "0.9rem",
                color: "#2C2C2C",
              }}
            >
              {item.name}
            </span>
            {item.hot && (
              <span style={{ fontSize: "0.7rem", background: "#8B0000", color: "white", padding: "0.1rem 0.4rem", borderRadius: "9999px", fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}>
                🔥 Top
              </span>
            )}
            {item.veg && (
              <span style={{ fontSize: "0.7rem", background: "#2C5F2D", color: "white", padding: "0.1rem 0.4rem", borderRadius: "9999px", fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}>
                🌿 Veg
              </span>
            )}
          </div>
          <div
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "0.8rem",
              color: "#777",
              marginTop: "0.2rem",
              lineHeight: 1.4,
            }}
          >
            {item.ingredients}
          </div>
        </div>
        <div
          className="price-tag"
          style={{ fontSize: "1rem", whiteSpace: "nowrap", flexShrink: 0 }}
        >
          {item.price}
        </div>
      </div>
      <a
        href={waLink(item.name, item.price)}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.4rem",
          background: "#25D366",
          color: "white",
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 700,
          fontSize: "0.75rem",
          padding: "0.5rem 0.75rem",
          borderRadius: "6px",
          textDecoration: "none",
          letterSpacing: "0.03em",
          transition: "background 0.2s",
          minHeight: "36px",
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Ordina
      </a>
    </motion.div>
  );
}

const tabs = [
  { id: "panini", label: "Panini" },
  { id: "insalatone", label: "Insalatone" },
  { id: "colazione", label: "Colazione" },
  { id: "combo", label: "Menu Studente" },
];

export default function Menu() {
  const [activeTab, setActiveTab] = useState("panini");

  const WA_COMBO = "https://wa.me/393315403799?text=Ciao!%20Vorrei%20ordinare%20il%20MENU%20STUDENTE%20(Panino%20%2B%20Bibita%20%2B%20Caff%C3%A8)%20-%20%E2%82%AC6.50.%20Quale%20panino%20posso%20scegliere%3F";

  return (
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
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              color: "#2C2C2C",
              marginBottom: "0.5rem",
            }}
          >
            I Nostri Panini
          </h2>
          <p style={{ fontFamily: "'Open Sans', sans-serif", color: "#666", fontSize: "1rem" }}>
            Ingredienti freschi ogni giorno. Ordina su WhatsApp e ritira in 15 minuti.
          </p>
        </motion.div>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
            marginBottom: "2rem",
            position: "sticky",
            top: "64px",
            background: "#FDF6EC",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            zIndex: 10,
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "0.85rem",
                padding: "0.5rem 1.25rem",
                borderRadius: "9999px",
                border: "2px solid",
                borderColor: activeTab === tab.id ? "#8B0000" : "rgba(139,0,0,0.2)",
                background: activeTab === tab.id ? "#8B0000" : "transparent",
                color: activeTab === tab.id ? "#FDF6EC" : "#8B0000",
                transition: "all 0.2s",
                minHeight: "40px",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Panini grid */}
        {activeTab === "panini" && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "1rem",
            }}
          >
            {panini.map((item) => (
              <ItemCard key={item.name} item={item} />
            ))}
          </div>
        )}

        {/* Insalatone */}
        {activeTab === "insalatone" && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "1rem",
            }}
          >
            {insalatone.map((item) => (
              <ItemCard key={item.name} item={item} />
            ))}
          </div>
        )}

        {/* Colazione */}
        {activeTab === "colazione" && (
          <div
            id="colazione"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "1rem",
            }}
          >
            {colazione.map((item) => (
              <ItemCard key={item.name} item={item} />
            ))}
          </div>
        )}

        {/* Menu Studente combo */}
        {activeTab === "combo" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{ maxWidth: "500px", margin: "0 auto" }}
          >
            <div
              style={{
                background: "#8B0000",
                borderRadius: "16px",
                padding: "2.5rem",
                color: "#FDF6EC",
                textAlign: "center",
                boxShadow: "0 20px 60px rgba(139,0,0,0.3)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  opacity: 0.7,
                  marginBottom: "0.75rem",
                }}
              >
                Offerta Speciale
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 800,
                  fontSize: "1.8rem",
                  marginBottom: "0.5rem",
                }}
              >
                Menu Studente
              </h3>
              <div
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "1.1rem",
                  opacity: 0.9,
                  marginBottom: "1.5rem",
                }}
              >
                Panino + Bibita + Caffè
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                <span
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "1rem",
                    textDecoration: "line-through",
                    opacity: 0.5,
                  }}
                >
                  €8.00
                </span>
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 900,
                    fontSize: "3rem",
                    lineHeight: 1,
                  }}
                >
                  €6.50
                </span>
              </div>
              <div
                style={{
                  background: "rgba(255,255,255,0.15)",
                  borderRadius: "8px",
                  padding: "0.5rem 1rem",
                  marginBottom: "1.5rem",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                }}
              >
                💰 Risparmia €1.50
              </div>
              <a
                href={WA_COMBO}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ justifyContent: "center", width: "100%", fontSize: "1rem" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Ordina Menu Completo
              </a>
            </div>

            {/* Extras */}
            <div
              style={{
                background: "white",
                borderRadius: "12px",
                padding: "1.5rem",
                marginTop: "1.5rem",
                border: "1px solid rgba(139,0,0,0.08)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 800,
                  fontSize: "0.9rem",
                  color: "#2C2C2C",
                  marginBottom: "1rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                Extra
              </div>
              {[
                { name: "Salsa Rosa", price: "+€0.50" },
                { name: "Patatine", price: "+€1.00" },
              ].map((extra) => (
                <div
                  key={extra.name}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0.5rem 0",
                    borderBottom: "1px solid rgba(0,0,0,0.05)",
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "0.9rem",
                    color: "#555",
                  }}
                >
                  <span>{extra.name}</span>
                  <span className="price-tag" style={{ fontSize: "0.9rem" }}>{extra.price}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Sticky mobile WhatsApp bar */}
        <div
          className="md:hidden"
          style={{
            position: "fixed",
            bottom: "1rem",
            left: "1rem",
            right: "1rem",
            zIndex: 40,
            display: "flex",
          }}
        >
          <a
            href="https://wa.me/393315403799?text=Ciao!%20Vorrei%20fare%20un%20ordine.%20Quando%20posso%20passare%20a%20ritirare%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp wa-pulse"
            style={{ flex: 1, justifyContent: "center", fontSize: "1rem", borderRadius: "12px" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            🛒 Ordina su WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
