import { motion } from "framer-motion";
import { Clock, Leaf, MapPin, Wallet } from "lucide-react";

const features = [
  {
    icon: <Clock size={24} className="relative z-10" />,
    bgIcon: <Clock strokeWidth={1} className="absolute -right-4 -bottom-4 w-32 h-32 text-black/10 z-0 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12" />,
    title: "Veloce Come Il Vento",
    text: "Ordina su WhatsApp e passa a ritirare in 15 minuti. Dimentica le code tra le lezioni.",
    className: "col-span-1 md:col-span-2 bg-[#8B0000] text-[#FDF6EC]",
    titleClass: "text-[#FDF6EC]",
    textClass: "text-white/80",
    iconColor: "text-[#FDF6EC]"
  },
  {
    icon: <Wallet size={24} className="relative z-10" />,
    bgIcon: <Wallet strokeWidth={1} className="absolute -right-2 -bottom-2 w-28 h-28 text-black/5 z-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />,
    title: "Prezzi Da Studente",
    text: "Panini farciti da 4€ e menu completi pensati per le tasche degli universitari.",
    className: "col-span-1 bg-white text-[#2C2C2C] border border-[#8B0000]/10",
    titleClass: "text-[#2C2C2C]",
    textClass: "text-[#666]",
    iconColor: "text-[#2C5F2D]"
  },
  {
    icon: <Leaf size={24} className="relative z-10" />,
    bgIcon: <Leaf strokeWidth={1} className="absolute -right-2 -bottom-2 w-28 h-28 text-black/5 z-0 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12" />,
    title: "Sempre Fresco",
    text: "Oltre 40 combinazioni diverse di panini. Tantissime opzioni vegetariane disponibili.",
    className: "col-span-1 bg-white text-[#2C2C2C] border border-[#8B0000]/10",
    titleClass: "text-[#2C2C2C]",
    textClass: "text-[#666]",
    iconColor: "text-[#8B0000]"
  },
  {
    icon: <MapPin size={24} className="relative z-10" />,
    bgIcon: <MapPin strokeWidth={1} className="absolute -right-4 -bottom-4 w-32 h-32 text-black/10 z-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />,
    title: "Il Tuo Bar Sotto Casa",
    text: "Ci trovi in Via Marzolo 4, a 2 minuti a piedi dalle aule. Il ritrovo perfetto.",
    className: "col-span-1 md:col-span-2 bg-[#2C5F2D] text-[#FDF6EC]",
    titleClass: "text-[#FDF6EC]",
    textClass: "text-white/80",
    iconColor: "text-[#FDF6EC]"
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
        {/* Header */}
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
            style={{ margin: "0 auto 1.5rem" }}
          />
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              color: "#2C2C2C",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.1
            }}
          >
            Al Servizio Degli Studenti
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative overflow-hidden group rounded-2xl p-6 flex flex-col justify-center ${feat.className} shadow-sm`}
            >
              {/* Background large icon */}
              {feat.bgIcon}
              
              <div
                className={`mb-4 p-3 inline-flex rounded-xl bg-black/5 w-max relative z-10 backdrop-blur-sm ${feat.iconColor}`}
              >
                {feat.icon}
              </div>
              <h3
                className={`text-xl lg:text-2xl font-bold mb-2 relative z-10 ${feat.titleClass}`}
                style={{
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                {feat.title}
              </h3>
              <p
                className={`text-[0.95rem] leading-snug relative z-10 ${feat.textClass}`}
                style={{
                  fontFamily: "'Open Sans', sans-serif",
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
