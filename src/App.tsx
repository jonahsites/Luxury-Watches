import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, Menu, MapPin, Phone, ArrowUpRight, MousePointer2 } from "lucide-react";
import Inventory from "./components/Inventory";
import JewelryArchive from "./components/JewelryArchive";
import { useState } from "react";

const navLinks = [
  { name: "Collections", href: "#archive" },
  { name: "Notre Histoire", href: "#home" },
  { name: "Boutiques", href: "#contact" },
];

const specs = [
  { val: "Lubumbashi", label: "Flagship" },
  { val: "Kolwezi", label: "Boutique" },
  { val: "Likasi", label: "Boutique" },
  { val: "Gratuite", label: "Livraison" },
];

export default function App() {
  const [showInventory, setShowInventory] = useState(false);
  
  return (
    <div className="relative bg-[#fdfbf7] font-sans selection:bg-[#D4AF37] selection:text-white overflow-x-hidden text-black" id="home">
      {/* Background HUD Layers - Luxury style */}
      <div className="fixed inset-0 z-0 bg-grid-scan opacity-[0.1] pointer-events-none" />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
      </div>

      {/* Luxury Navigation */}
      <nav className="fixed top-0 left-0 w-full z-100 flex items-center justify-between px-10 py-10 pointer-events-none">
        <div className="flex items-center gap-4 pointer-events-auto group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-14 h-14 border border-[#D4AF37]/30 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:border-[#D4AF37] transition-all overflow-hidden bg-white/80 backdrop-blur-md shadow-sm">
             <img 
               src="https://scontent-lga3-3.cdninstagram.com/v/t51.2885-19/408389581_1344772752840664_6986825354140330794_n.jpg?cb=8438d1d6-89aba764&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDQ0LmMyIn0&_nc_ht=scontent-lga3-3.cdninstagram.com&_nc_cat=104&_nc_oc=Q6cZ2gFvdTNUECFSAPKHJqLNwJzhwAipy_S79gu-xzHp9jiJx7QmoihWgQhxTSNTmJDO1rt5A051QI-EBFdwZpaeXV9l&_nc_ohc=g1EmyqXgRnIQ7kNvwGgSOgH&_nc_gid=rV102arKos8KMGQCLTK8rg&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_Af5CDSJ5E_yxV7p5sA0zPeOyGUaGq2ahOmLJjJoREsj8Rw&oe=6A0548F2&_nc_sid=7a9f4b" 
               alt="Jewelry Business Logo"
               className="w-full h-full object-cover"
               referrerPolicy="no-referrer"
             />
          </div>
          <div className="flex flex-col">
            <span className="text-[14px] font-serif font-bold text-black leading-none mb-1">Jewelry Business</span>
            <span className="text-[7px] uppercase tracking-[0.3em] text-[#D4AF37] font-bold">Lubumbashi • Kolwezi • Likasi</span>
          </div>
        </div>

        <div className="flex items-center gap-8 pointer-events-auto">
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-[10px] uppercase tracking-[0.3em] font-bold text-black/40 hover:text-[#D4AF37] transition-colors"
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
          <button 
            onClick={() => setShowInventory(true)}
            className="bg-[#D4AF37] text-white px-10 py-4 rounded-none text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#B8860B] transition-all shadow-[0_10px_30px_rgba(212,175,55,0.2)]"
          >
            La Collection
          </button>
          <button className="md:hidden text-black"><Menu size={24} /></button>
        </div>
      </nav>

      {/* JEWELRY ARCHIVE SECTION */}
      <div id="archive" className="relative z-10">
        <JewelryArchive />
      </div>

      {/* HERITAGE STRIP */}
      <div id="heritage" className="relative z-20 w-full bg-[#f8f5f0] py-40 border-y border-[#D4AF37]/10">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="flex flex-col items-center mb-20 text-center">
             <span className="font-luxury text-3xl text-[#D4AF37] mb-4 text-transform-none italic">L'Éclat du Raffinement</span>
             <h2 className="text-black text-6xl font-serif font-light tracking-tight whitespace-pre-line leading-tight">
               L'Excellence du <br/> <span className="gold-gradient">Bijou Artisanal</span>
             </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-20">
            {specs.map((spec, i) => (
              <div key={i} className="flex flex-col gap-4 group">
                <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-black/30 group-hover:text-[#D4AF37] transition-colors">[{i + 1}] {spec.label}</span>
                <span className="text-5xl font-serif text-black">{spec.val}</span>
                <div className="w-0 h-px bg-[#D4AF37] group-hover:w-full transition-all duration-700" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER: REFINED */}
      <footer id="contact" className="relative z-20 bg-white border-t border-black/5 px-10 pt-40 pb-20 md:px-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-[#D4AF37] mb-8 block font-serif text-lg">Jewelry Business</span>
            <p className="text-black/40 text-xs leading-loose uppercase tracking-[0.1em]">
              Entreprise spécialisée dans la vente de bijoux en ligne. Livraison gratuite à Lubumbashi, Kolwezi et Likasi. L'éclat à votre portée.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-4 opacity-40">Nos Boutiques</h4>
            <p className="text-black/60 text-xs uppercase tracking-widest hover:text-[#D4AF37] transition-colors cursor-pointer">Lubumbashi Centre</p>
            <p className="text-black/60 text-xs uppercase tracking-widest hover:text-[#D4AF37] transition-colors cursor-pointer">Kolwezi Plaza</p>
            <p className="text-black/60 text-xs uppercase tracking-widest hover:text-[#D4AF37] transition-colors cursor-pointer">Likasi Mall</p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-4 opacity-40">Services</h4>
            <p className="text-black/60 text-xs uppercase tracking-widest hover:text-[#D4AF37] transition-colors cursor-pointer">Expertise</p>
            <p className="text-black/60 text-xs uppercase tracking-widest hover:text-[#D4AF37] transition-colors cursor-pointer">Personnalisation</p>
            <p className="text-black/60 text-xs uppercase tracking-widest hover:text-[#D4AF37] transition-colors cursor-pointer">Livraison Gratuite</p>
          </div>

          <div className="flex flex-col gap-4 text-black">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-4 text-black/40">Contact</h4>
            <div className="flex items-center gap-3">
              <Phone size={14} className="text-[#D4AF37]" />
              <span className="text-xs tracking-[0.2em]">+243 XXX XXX XXX</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={14} className="text-[#D4AF37]" />
              <span className="text-xs tracking-[0.2em]">Lubumbashi, RDC</span>
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto pt-20 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[9px] uppercase tracking-[0.5em] text-black/20">© 2026 Jewelry Business RDC</p>
          <div className="flex gap-8">
            <span className="text-[9px] uppercase tracking-[0.2em] text-black/20 hover:text-black transition-colors cursor-pointer">Confidentialité</span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-black/20 hover:text-black transition-colors cursor-pointer">Mentions Légales</span>
          </div>
        </div>
      </footer>

      {/* Fleet Overlay Component - Hidden unless needed */}
      <AnimatePresence>
        {showInventory && (
          <Inventory onClose={() => setShowInventory(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}



