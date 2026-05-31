import { useState } from "react";
import { SHOWCASE_PRODUCTS } from "../data/landingData";
import { Printer, Flame, Gift, Sparkles, Instagram, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface InteractiveShowcaseProps {
  onCTAClick: () => void;
}

export default function InteractiveShowcase({ onCTAClick }: InteractiveShowcaseProps) {
  const [activeTab, setActiveTab] = useState<"sublimation" | "laser" | "basket" | "instagram">("sublimation");

  const activeProduct = SHOWCASE_PRODUCTS.find(p => p.category === activeTab) || SHOWCASE_PRODUCTS[0];

  const getIcon = (category: string) => {
    switch (category) {
      case "sublimation":
        return <Printer className="w-5 h-5 flex-shrink-0" />;
      case "laser":
        return <Flame className="w-5 h-5 flex-shrink-0" />;
      case "basket":
        return <Gift className="w-5 h-5 flex-shrink-0" />;
      case "instagram":
        return <Instagram className="w-5 h-5 flex-shrink-0" />;
      default:
        return <Sparkles className="w-5 h-5 flex-shrink-0" />;
    }
  };

  return (
    <div className="space-y-8" id="interactive-showcase-root">
      {/* Navigation Buttons for categories */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3">
        {(["sublimation", "laser", "basket", "instagram"] as const).map((cat) => {
          const isActive = activeTab === cat;
          const label = 
            cat === "sublimation" ? "Sublimação" :
            cat === "laser" ? "Artes para Laser" :
            cat === "basket" ? "Cestas Especiais" : "Posts Instagram";

          return (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs md:text-sm font-semibold tracking-wide transition cursor-pointer ${
                isActive 
                  ? "bg-brand-red text-white shadow-lg shadow-brand-red/20 font-black scale-105" 
                  : "bg-white border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 text-neutral-700 shadow-sm"
              }`}
            >
              <span className={isActive ? "text-white" : "text-brand-red"}>
                {getIcon(cat)}
              </span>
              {label}
            </button>
          );
        })}
      </div>

      {/* Main product showcase display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-neutral-200 p-6 md:p-8 rounded-3xl shadow-xl"
        >
          {/* Visual Showcase Photo */}
          <div className="lg:col-span-6 relative group overflow-hidden rounded-2xl border border-neutral-150 bg-neutral-100">
            <span className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
            <img
              src={activeProduct.image}
              alt={activeProduct.title}
              referrerPolicy="no-referrer"
              className="w-full h-[280px] sm:h-[350px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            {/* Corner badge indicating premium artwork quality */}
            <span className="absolute top-4 left-4 z-25 px-3 py-1.5 bg-black/85 border border-neutral-800 rounded-xl text-[10px] font-mono font-bold uppercase tracking-wider text-brand-red flex items-center gap-1.5 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
              Kit Lançamento Dia dos Namorados
            </span>
          </div>

          {/* Details & Feature list */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="inline-block text-xs uppercase tracking-widest font-mono text-brand-red font-bold">
                CONTEÚDO EXCLUSIVO DO CLUBE
              </span>
              <h3 className="text-2xl md:text-3xl font-black font-display text-neutral-900 tracking-tight leading-tight">
                {activeProduct.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed text-sm md:text-base">
                {activeProduct.description}
              </p>
            </div>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {activeProduct.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5 animate-pulse" />
                  <span className="text-neutral-800 text-xs sm:text-sm leading-snug font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-neutral-200 flex justify-end">
              <button
                onClick={onCTAClick}
                className="w-full sm:w-auto px-8 py-3.5 bg-brand-red hover:bg-[#ff3b54] text-white text-xs md:text-sm font-black uppercase tracking-widest rounded-xl transition cursor-pointer shadow-lg shadow-brand-red/15 transform hover:-translate-y-0.5"
              >
                Garantir Esse Lote
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
