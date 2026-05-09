import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight, Search, Filter } from 'lucide-react';

const categories = ["Tout", "Bagues", "Colliers", "Bracelets", "Boucles d'oreilles", "Montres de Luxe", "Ensembles"];

const timepieces = [
  { id: 1, name: "Bague Diamant Solitaire", category: "Bagues", price: 2500, material: "Or Blanc 18K", detail: "Diamant 1.5 Carats", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800" },
  { id: 2, name: "Collier Émeraude Royale", category: "Colliers", price: 4200, material: "Or Jaune 18K", detail: "Émeraude de Zambie", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=800" },
  { id: 3, name: "Bracelet Tennis Diamant", category: "Bracelets", price: 3800, material: "Platine", detail: "Diamants F/VVS", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800" },
  { id: 4, name: "Boucles d'oreilles Perles", category: "Boucles d'oreilles", price: 1200, material: "Or Rose 18K", detail: "Perles d'Akoya", image: "https://images.unsplash.com/photo-1535633302704-b02923c59f6d?auto=format&fit=crop&q=80&w=800" },
  { id: 5, name: "Montre Pavée Diamants", category: "Montres de Luxe", price: 15000, material: "Or Blanc", detail: "Mouvement Suisse", image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&q=80&w=800" },
  { id: 6, name: "Ensemble Collier & Bague", category: "Ensembles", price: 6500, material: "Or Jaune", detail: "Saphirs Bleus", image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&q=80&w=800" },
  { id: 7, name: "Bague de Fiançailles", category: "Bagues", price: 3200, material: "Platine", detail: "Diamant Taille Princesse", image: "https://images.unsplash.com/photo-1588444837495-c6cfcb53ba5b?auto=format&fit=crop&q=80&w=800" },
  { id: 8, name: "Bracelet Jonc Or", category: "Bracelets", price: 1800, material: "Or Jaune 24K", detail: "Design Tribal", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800" },
];

interface InventoryProps {
  onClose: () => void;
}

const Inventory: React.FC<InventoryProps> = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState("Tout");
  const [search, setSearch] = useState("");

  const filteredTimepieces = timepieces.filter(item => 
    (activeCategory === "Tout" || item.category === activeCategory) &&
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-[#fdfbf7] overflow-y-auto px-6 py-10 md:px-16"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-20 text-black">
          <div>
            <div className="text-[#D4AF37] text-[10px] uppercase tracking-[0.5em] font-bold mb-4 font-serif">Archives de Joaillerie Privée</div>
            <h2 className="text-5xl md:text-7xl font-serif font-light tracking-tight leading-none text-black">
              La <span className="text-[#D4AF37]/20 text-outline">Collection</span> <br/> de Prestige.
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="p-4 border border-[#D4AF37]/20 rounded-full hover:bg-[#D4AF37]/5 transition-colors pointer-events-auto text-black"
          >
            <X size={24} />
          </button>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col lg:flex-row gap-8 justify-between items-center mb-16 border-b border-[#D4AF37]/10 pb-10">
          <div className="flex flex-wrap gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-none text-[10px] font-bold uppercase tracking-widest transition-all ${
                  activeCategory === cat ? 'bg-[#D4AF37] text-white' : 'bg-white border border-[#D4AF37]/10 text-black/40 hover:text-[#D4AF37]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-96 text-black">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]/40" size={16} />
            <input 
              type="text"
              placeholder="Rechercher par nom..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border border-[#D4AF37]/10 rounded-none py-4 pl-12 pr-6 text-sm text-black focus:outline-none focus:border-[#D4AF37]/30 placeholder:text-black/10"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredTimepieces.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white border border-[#D4AF37]/5 hover:border-[#D4AF37]/20 transition-all overflow-hidden"
              >
                {/* Image */}
                <div className="aspect-[4/5] overflow-hidden relative bg-[#f8f5f0]">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 flex flex-col gap-1">
                     <span className="text-[8px] font-mono text-[#D4AF37] tracking-[0.4em]">PIÈCE_00{item.id}</span>
                     <div className="w-8 h-px bg-[#D4AF37]/30" />
                  </div>
                </div>

                {/* Info */}
                <div className="p-10">
                  <div className="text-[9px] uppercase tracking-[0.4em] text-[#D4AF37] mb-4 font-bold">{item.category}</div>
                  <h3 className="text-xl font-serif tracking-tight mb-8 text-black group-hover:text-[#D4AF37] transition-colors">{item.name}</h3>
                  <div className="grid grid-cols-2 gap-8 border-t border-[#D4AF37]/10 pt-8">
                    <div>
                      <div className="text-[9px] uppercase text-black/20 tracking-widest mb-1">Matière</div>
                      <div className="text-xs font-bold tracking-tight text-black/60">{item.material}</div>
                    </div>
                    <div>
                      <div className="text-[9px] uppercase text-black/20 tracking-widest mb-1">Prix Est.</div>
                      <div className="text-sm font-bold tracking-tight text-[#D4AF37]">${item.price.toLocaleString()}</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                
                <button className="absolute bottom-10 right-10 w-12 h-12 bg-[#D4AF37] text-white flex items-center justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all delay-75 shadow-lg">
                  <ArrowUpRight size={20} />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredTimepieces.length === 0 && (
          <div className="py-40 text-center">
            <p className="text-black/20 uppercase tracking-[0.4em] text-xs">No matching references found in our private vault.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Inventory;
