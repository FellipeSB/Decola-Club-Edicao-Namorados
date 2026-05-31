import { Sparkles, Trophy, Lock } from "lucide-react";

interface NavbarProps {
  onCTAClick: () => void;
}

export default function Navbar({ onCTAClick }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 bg-[#0e0c0a]/90 backdrop-blur-xl border-b border-neutral-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 md:h-16 flex items-center justify-between">
        {/* Brand/Logo */}
        <div className="flex items-center gap-2">
          <span 
            className="text-white font-normal uppercase tracking-widest text-[10px] leading-[26px] h-6 w-[163px] font-sans cursor-pointer hover:text-brand-red transition-colors inline-block text-left"
            id="brand-logo-text"
            onClick={onCTAClick}
          >
            bora decolar
          </span>
        </div>

        {/* Access Status & Action Indicator */}
        <div className="hidden md:flex items-center gap-5">
          <div className="flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-850 rounded-full text-xs text-neutral-350">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[10px] tracking-wide uppercase">Inscrições Liberadas Hoje</span>
          </div>
          
          <div className="flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-850 rounded-full text-xs text-neutral-350">
            <Lock className="w-3.5 h-3.5 text-brand-red" />
            <span className="font-mono text-[10px] tracking-wide uppercase">Acesso Vitalício Exclusivo</span>
          </div>
        </div>

        {/* Action Button */}
        <div>
          <button
            onClick={onCTAClick}
            className="flex items-center gap-1.5 px-4 py-2 bg-brand-red hover:bg-brand-red-hover text-white text-xs md:text-sm font-bold uppercase tracking-wider rounded-xl transition cursor-pointer shadow-lg shadow-brand-red/10"
            id="nav-cta-btn"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Ver Oferta
          </button>
        </div>
      </div>
    </header>
  );
}
