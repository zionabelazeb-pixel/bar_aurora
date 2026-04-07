import { motion } from "framer-motion";
import { Coffee, MessageCircle, ShoppingBag } from "lucide-react";

const WA_LINK = "https://wa.me/393315403799?text=Ciao!%20Vorrei%20fare%20un%20ordine.%20Quando%20posso%20passare%20a%20ritirare%3F";

const steps = [
  { 
    n: "1", 
    icon: <Coffee size={28} />, 
    title: "Scegli dal Menu", 
    desc: "Consulta le nostre proposte e trova il panino perfetto per la tua pausa." 
  },
  { 
    n: "2", 
    icon: <MessageCircle size={28} />, 
    title: "Invia l'Ordine", 
    desc: "Clicca su prenota o scrivici un messaggio rapido tramite WhatsApp." 
  },
  { 
    n: "3", 
    icon: <ShoppingBag size={28} />, 
    title: "Ritira Senza Fila", 
    desc: "Il tuo ordine sarà pronto e impacchettato da ritirare in soli 15 minuti." 
  },
];

export default function HowToOrder() {
  return (
    <section className="bg-[#FDF6EC] py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#8B0000] rounded-[24px] p-8 md:p-12 lg:p-16 text-[#FDF6EC] flex flex-col items-center shadow-lg relative overflow-hidden"
        >
          {/* Subtle background decoration */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03]">
            <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white mix-blend-overlay"></div>
            <div className="absolute -bottom-24 -right-24 w-[30rem] h-[30rem] rounded-full bg-white mix-blend-overlay"></div>
          </div>

          <h3
            className="text-center font-bold text-3xl md:text-4xl lg:text-5xl mb-12 lg:mb-16 relative z-10"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Come Ordinare
          </h3>

          <div className="relative flex flex-col md:flex-row justify-between items-start gap-12 md:gap-4 lg:gap-8 w-full max-w-4xl mx-auto mb-14">
            {/* Connecting Line (Desktop only) */}
            <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-[2px] border-t-2 border-dashed border-white/30 z-0" />
            
            {steps.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center flex-1 group">
                <div className="relative w-24 h-24 rounded-2xl flex items-center justify-center bg-[#FDF6EC] text-[#8B0000] mb-6 shadow-xl transition-transform duration-300 group-hover:-translate-y-2">
                  {step.icon}
                  {/* Number Badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#2C5F2D] text-white flex items-center justify-center text-sm font-bold shadow-md border-2 border-[#FDF6EC]">
                    {step.n}
                  </div>
                </div>
                
                <h4 className="font-bold text-[1.1rem] md:text-xl text-white mb-3 tracking-wide uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {step.title}
                </h4>
                <p className="text-white/80 text-[0.95rem] leading-relaxed max-w-[240px]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp relative z-10 hover:scale-105 transition-transform duration-300 shadow-xl"
            style={{ padding: "1rem 2.5rem", fontSize: "1.1rem" }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Ordina Ora
          </a>
        </motion.div>
      </div>
    </section>
  );
}
