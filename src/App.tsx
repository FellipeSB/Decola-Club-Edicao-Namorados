import { 
  Layers, Printer, Flame, CupSoda, Gift, 
  Check, ArrowRight, ShieldCheck, 
  Package, Sparkles, Star,
  Lock, Trophy
} from "lucide-react";

import Navbar from "./components/Navbar";
import InteractiveShowcase from "./components/InteractiveShowcase";
import FAQSection from "./components/FAQSection";

import { 
  IMAGES, 
  WHAT_YOU_RECEIVE, 
  FOR_WHOM, 
  BIG_BONUSES, 
  TRANSFORMATION_STATISTICS 
} from "./data/landingData";

// Simple mapping for dynamic icons since Lucide includes these names
const getBenefitIcon = (iconName: string) => {
  switch (iconName) {
    case "Layers":
      return <Layers className="w-6 h-6 text-brand-red font-bold" />;
    case "Printer":
      return <Printer className="w-6 h-6 text-brand-red font-bold" />;
    case "Flame":
      return <Flame className="w-6 h-6 text-brand-red font-bold" />;
    case "CupSoda":
      return <CupSoda className="w-6 h-6 text-brand-red font-bold" />;
    case "Gift":
      return <Gift className="w-6 h-6 text-brand-red font-bold" />;
    default:
      return <Sparkles className="w-6 h-6 text-brand-red font-bold" />;
  }
};

export default function App() {
  const scrollToPricing = () => {
    const element = document.getElementById("pricing-offer");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark text-neutral-100 font-sans antialiased overflow-x-hidden relative selection:bg-brand-red selection:text-white" id="main-container">
      
      {/* Header Sticky Navigation */}
      <Navbar onCTAClick={scrollToPricing} />

      {/* ======================================= */}
      {/* 1. HERO SECTION                         */}
      {/* ======================================= */}
      <section 
        className="relative pt-6 pb-16 md:pt-10 md:pb-24 px-4 sm:px-6 lg:px-8 bg-brand-dark overflow-hidden" 
        id="hero-section"
      >

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Hero Left Content block */}
          <div className="space-y-5 md:space-y-6 text-center max-w-2xl mx-auto flex flex-col items-center">
            
            {/* Photo of the expert holding the gift basket with Logo and Title Overlay */}
            <div className="my-0 w-full max-w-md mx-auto relative rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-950 p-0 shadow-2xl group">
              <img
                src={IMAGES.expertHeroBg}
                alt="Especialista com cesta de presentes"
                className="w-full h-auto object-cover rounded-3xl hover:scale-[1.01] transition-transform duration-500"
                referrerPolicy="no-referrer"
                id="expert-hero-img"
                loading="eager"
                decoding="async"
              />
              
              {/* Premium dark gradient overlay carrying both the Logo and key Headline text */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/90 to-transparent pt-28 pb-6 px-5 sm:px-6 flex flex-col justify-end space-y-3">
                {/* Giant Logo Image */}
                <h1 className="sr-only">DECOLA CLUB</h1>
                <div className="flex justify-center py-1">
                  <img 
                    src={IMAGES.logo} 
                    alt="Decola Club Logo" 
                    className="w-full max-w-[260px] sm:max-w-[280px] h-auto object-contain hover:scale-[1.01] transition-transform duration-300"
                    referrerPolicy="no-referrer"
                    id="hero-logo-img"
                    loading="eager"
                    decoding="async"
                  />
                </div>

                {/* Subtitle strong */}
                <h2 className="text-base sm:text-lg font-black font-sans text-white text-center leading-snug drop-shadow-md">
                  O clube de artes prontas para quem trabalha com{" "}
                  <span className="underline decoration-brand-red decoration-2 underline-offset-4">personalizados</span> e quer vender mais no Dia dos Namorados.
                </h2>
              </div>
            </div>

            {/* Supporting paragraph text */}
            <p className="text-neutral-300 leading-relaxed text-sm sm:text-base max-w-lg mx-auto">
              Tenha acesso a coleções exclusivas para sublimação, laser, canecas, chopp, cestas e conteúdos prontos para postar no Instagram.
            </p>

            {/* Main call to action block */}
            <div className="space-y-4 pt-2 w-full max-w-md mx-auto">
              <button
                onClick={scrollToPricing}
                className="w-full flex items-center justify-center gap-3 py-4.5 sm:py-5 px-8 bg-brand-red hover:bg-[#ff3b54] text-white font-extrabold text-sm sm:text-base tracking-widest uppercase rounded-2xl transition-all duration-300 shadow-xl shadow-brand-red/30 transform hover:-translate-y-1 cursor-pointer"
                id="hero-cta-btn"
              >
                ENTRAR PARA O DECOLA CLUB
                <ArrowRight className="w-5 h-5 animate-bounce" />
              </button>

              {/* Status and Guarantee text summary */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-400 font-mono">
                <span className="flex items-center gap-1 font-bold font-sans">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" /> Compra 100% Segura
                </span>
                <span>•</span>
                <span className="font-bold font-sans">Acesso Vitalício Garantido</span>
                <span>•</span>
                <span className="font-bold font-sans">Acesso Imediato</span>
              </div>
            </div>

            {/* Quick trust metrics */}

          </div>

        </div>
      </section>

      {/* ======================================= */}
      {/* 2. SEÇÃO 2 — O QUE VOCÊ RECEBE (BEGE)   */}
      {/* ======================================= */}
      <section className="py-24 bg-[#F4EFE6] border-y border-neutral-200" id="receive-section">
        <div className="max-w-7xl mx-auto space-y-12 px-4 sm:px-6 lg:px-8">
          
          {/* Header block with RED accent keyword */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase font-mono tracking-widest text-brand-red font-black">
              BIBLIOTECA COMPLETA E EXCLUSIVA
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-neutral-900 tracking-tight leading-[1.12]">
              Tudo pronto para você <span className="text-brand-red italic underline decoration-brand-red">criar, postar e vender</span>
            </h2>
            <p className="text-neutral-700 text-sm sm:text-base font-medium">
              Esqueça a perda de tempo gerando arquivos do zero. Nossos materiais são únicos e prontos para faturar rapidamente no Dia dos Namorados.
            </p>
          </div>

          {/* Cards list - Clean light theme styling with beige background */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHAT_YOU_RECEIVE.slice(0, 5).map((benefit, index) => (
              <div 
                key={index}
                className="p-6 md:p-7 bg-white border border-neutral-200/80 rounded-2xl hover:border-brand-red/45 hover:shadow-xl transition-all duration-300 group flex gap-4 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FAF6F0] border border-neutral-200 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red/10 group-hover:border-brand-red/20 transition-all duration-300 shadow-inner">
                  {getBenefitIcon(benefit.icon)}
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-extrabold text-lg text-neutral-950 group-hover:text-brand-red transition">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-600 text-xs md:text-sm leading-relaxed font-medium">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Interactive Module Showcase element */}
          <div className="pt-10">
            <div className="text-center mb-6">
              <span className="text-[10px] text-neutral-600 font-mono tracking-wider uppercase p-2 bg-[#FAF6F0] border border-neutral-300 rounded-lg font-bold">
                CLIQUE EM CADA ITEM E VEJA SEUS DETALHES
              </span>
            </div>
            <InteractiveShowcase onCTAClick={scrollToPricing} />
          </div>

        </div>
      </section>

      {/* ======================================= */}
      {/* 3. SEÇÃO 3 — PARA QUEM É (PRETO)        */}
      {/* ======================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-b border-neutral-900" id="target-audience">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs uppercase font-mono tracking-widest text-brand-red font-bold">
              PÚBLICO-ALVO
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white italic">
              O Decola Club é para <span className="text-brand-red italic underline underline-offset-4 decoration-2">você</span> que...
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FOR_WHOM.map((item, index) => (
              <div 
                key={index} 
                className="p-6 bg-neutral-900 border border-neutral-850 rounded-2xl hover:border-brand-red/30 transition relative overflow-hidden group shadow-lg"
              >
                {/* Glowing red accent marker on hover */}
                <div className="absolute top-0 left-0 w-1 p-0.5 bg-brand-red group-hover:h-full transition-all duration-300" />
                
                <div className="space-y-2 pl-3">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red text-xs font-mono font-bold">
                      {index + 1}
                    </span>
                    <h3 className="font-bold text-base sm:text-lg text-white">
                      {item.text}
                    </h3>
                  </div>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================= */}
      {/* 4. SEÇÃO 4 — BÔNUS (BEGE)               */}
      {/* ======================================= */}
      <section className="py-24 bg-[#FAF6F0] border-y border-neutral-200 px-4 sm:px-6 lg:px-8" id="bonus-section">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase font-mono tracking-widest text-[#10b981] font-black flex items-center justify-center gap-1.5 bg-[#e6fbf3] px-3.5 py-1 rounded-full border border-emerald-250 w-max mx-auto">
              <Sparkles className="w-4 h-4 text-emerald-500" /> PACOTE EXTRA INDISPENSÁVEL
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-neutral-900 tracking-tight">
              Além das coleções, você ainda recebe <span className="text-brand-red font-black">bônus exclusivos</span>
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base font-medium">
              Mais de **R$ 450,00** em materiais adicionais empacotados gratuitamente de forma vitalícia no seu login.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BIG_BONUSES.map((bonus, idx) => (
              <div 
                key={idx}
                className="bg-white border border-neutral-200 hover:border-brand-red/40 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5 shadow-sm"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 bg-brand-red/10 text-brand-red text-[9px] font-black font-mono tracking-wider rounded-lg border border-brand-red/20 uppercase">
                      {bonus.badge}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400 line-through">
                      {bonus.estimatedValue}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-base md:text-lg text-neutral-950">
                    {bonus.title}
                  </h3>
                  <p className="text-neutral-600 text-xs leading-relaxed font-semibold">
                    {bonus.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-250 flex items-center justify-between text-xs">
                  <span className="text-emerald-600 font-extrabold uppercase tracking-wider text-[10px]">Grátis no Clube</span>
                  <Check className="w-4 h-4 text-emerald-500 font-bold" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================= */}
      {/* 5. SEÇÃO 5 — TRANSFORMAÇÃO (BRANCO)     */}
      {/* ======================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white text-neutral-900 border-b border-neutral-100" id="transformation">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase font-mono tracking-widest text-brand-red font-black">
              SEU NOVO RITMO DE TRABALHO
            </span>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-neutral-950 leading-tight">
              Pare de perder tempo <span className="text-brand-red font-black italic underline decoration-brand-red">pensando</span> no que criar
            </h2>

            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed font-semibold">
              Com o Decola Club, você não precisa começar do zero. Você recebe ideias, artes e modelos estruturados prontos para transformar em produtos físicos, postagens e ofertas magnéticas para os seus clientes.
            </p>

            <div className="pt-4">
              <button
                onClick={scrollToPricing}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-brand-red hover:bg-[#ee1a34] text-white font-extrabold text-xs sm:text-sm uppercase tracking-widest rounded-xl transition cursor-pointer shadow-lg shadow-brand-red/20 transform hover:-translate-y-0.5"
              >
                Acessar Todas as Ideias
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TRANSFORMATION_STATISTICS.map((stat, i) => (
              <div 
                key={i}
                className="p-5 bg-neutral-50 border border-neutral-200 rounded-2xl space-y-2 hover:border-neutral-300 hover:bg-neutral-100/50 transition-all duration-300 shadow-sm"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-red/10 flex items-center justify-center text-brand-red">
                  <Check className="w-4.5 h-4.5 text-brand-red font-bold" />
                </div>
                <h4 className="font-extrabold text-sm md:text-base text-neutral-950">
                  {stat.title}
                </h4>
                <p className="text-neutral-600 text-xs leading-relaxed font-semibold">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================= */}
      {/* 6. SEÇÃO 6 — OFERTA (BEGE E BRANCO)      */}
      {/* ======================================= */}
      <section className="py-24 bg-[#F4EFE6] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative border-y border-neutral-200" id="pricing-offer">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-brand-red/5 blur-[120px] rounded-full pointer-events-none animate-pulse" />

        {/* HIGH CONTRAST BLOCK: WHITE PREDOMINANT BG */}
        <div className="relative bg-white text-black rounded-[32px] p-6 sm:p-8 md:p-12 shadow-2xl space-y-8 border-4 border-neutral-900 max-w-4xl mx-auto">
          
          <div className="absolute -top-4 right-4 sm:right-10 bg-brand-red border border-red-500 hover:scale-105 text-white font-mono text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 bg-red-650 rounded-xl shadow-lg flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-white text-white" /> Lançamento Exclusivo
          </div>

          <div className="text-center space-y-3">
            <span className="text-xs uppercase font-mono tracking-widest text-brand-red font-extrabold">
              FAÇA SUA INSCRIÇÃO AGORA
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-neutral-950 uppercase italic leading-none">
              Entre hoje para o <span className="text-brand-red">Decola Club</span>
            </h2>
            <p className="text-neutral-700 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-medium">
              Tenha acesso completo e vitalício às coleções, arquivos prontos e bônus incríveis especiais para faturar muito no Dia dos Namorados.
            </p>
          </div>

          {/* Pricing Highlight Tagline */}
          <div className="bg-[#FAF6F0] rounded-2xl p-6 text-center max-w-lg mx-auto border-2 border-neutral-200 shadow-inner space-y-2">
            <p className="text-xs text-brand-red tracking-widest font-black uppercase">Decola Club Edição Dia dos Namorados</p>
            
            <div className="flex flex-col items-center justify-center pt-1 gap-1">
              <span className="text-sm text-neutral-400 line-through font-mono">R$ 197,90</span>
              <span className="text-4xl md:text-5xl font-black font-display text-brand-red tracking-tight font-mono text-center">
                R$ 79,90 <span className="text-xs text-neutral-600 block sm:inline font-sans normal-case font-extrabold">ou 2x de R$42,06 no cartão</span>
              </span>
            </div>
          </div>

          <div className="space-y-4 max-w-md mx-auto">
            {/* Direct External checkout redirect */}
            <a
              href="https://pay.kiwify.com.br/ma7g9z4"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 py-5 px-8 bg-brand-red hover:bg-[#ff3b54] text-white font-extrabold text-sm sm:text-base tracking-widest uppercase rounded-2xl transition shadow-xl shadow-brand-red/25 cursor-pointer hover:scale-[1.01] text-center"
              id="pricing-cta-btn"
            >
              COMPRAR ACESSO NO SITE OFICIAL
              <ArrowRight className="w-5 h-5 animate-pulse" />
            </a>
          </div>

          {/* Core inclusions Checklist columns */}
          <div className="mt-8 bg-[#FAF6F0] p-6 rounded-2xl border-2 border-dashed border-brand-red/30 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm font-bold text-neutral-900 shadow-md">
            <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-neutral-200/60 shadow-sm">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-red/10 flex items-center justify-center">
                <Check className="w-3.5 h-3.5 text-brand-red font-black" />
              </span>
              <span className="leading-tight pt-0.5">Painel de Membros completo + Lançamentos</span>
            </div>
            <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-neutral-200/60 shadow-sm">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-red/10 flex items-center justify-center">
                <Check className="w-3.5 h-3.5 text-brand-red font-black" />
              </span>
              <span className="leading-tight pt-0.5 font-sans">Todas as estampas de sublimação em canecas e azulejos</span>
            </div>
            <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-neutral-200/60 shadow-sm">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-red/10 flex items-center justify-center">
                <Check className="w-3.5 h-3.5 text-brand-red font-black" />
              </span>
              <span className="leading-tight pt-0.5 font-sansAndBold">Arquivos para copos térmicos e tábuas a laser</span>
            </div>
            <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-neutral-200/60 shadow-sm">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-red/10 flex items-center justify-center">
                <Check className="w-3.5 h-3.5 text-brand-red font-black" />
              </span>
              <span className="leading-tight pt-0.5 font-sans">Lista de fornecedores + Bônus Canva Editável</span>
            </div>
          </div>

        </div>
      </section>

      {/* ======================================= */}
      {/* 7. SEÇÃO 7 — PERGUNTAS FREQUENTES (FAQ) */}
      {/* ======================================= */}
      <FAQSection />

      {/* ======================================= */}
      {/* 8. SEÇÃO FINAL                          */}
      {/* ======================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto space-y-8" id="final-cta-block">
        
        <div className="space-y-4">
          <span className="px-3 py-1 bg-brand-red/10 border border-brand-red/30 text-brand-red text-xs font-mono font-bold uppercase tracking-widest rounded-full inline-block">
            Sua Oportunidade Única
          </span>
          <h2 className="text-4xl sm:text-5xl font-black font-display tracking-tight text-white leading-none">
            Suas próximas artes <span className="text-brand-red italic underline underline-offset-4 decoration-2 leading-tight">já estão prontas</span>.
          </h2>
          <p className="text-neutral-300 text-base max-w-2xl mx-auto leading-relaxed">
            Entre para o Decola Club e comece a vender personalizados com muito mais velocidade, criatividade e profissionalismo.
          </p>
        </div>

        <div>
          <button
            onClick={scrollToPricing}
            className="inline-flex items-center justify-center gap-3 py-5 px-10 bg-brand-red hover:bg-[#ff3b54] text-white font-extrabold uppercase rounded-2xl transition cursor-pointer text-sm sm:text-base tracking-widest shadow-xl shadow-brand-red/15 hover:scale-105"
            id="final-page-cta-btn"
          >
            ENTRAR PARA O DECOLA CLUB
            <ArrowRight className="w-5 h-5 animate-bounce" />
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-500 font-mono uppercase font-bold">
          <span>Acesso Imediato</span>
          <span>•</span>
          <span>Atualizações e Suporte</span>
          <span>•</span>
          <span>Sem burocracia</span>
        </div>

      </section>

      {/* ======================================= */}
      {/* FOOTER                                  */}
      {/* ======================================= */}
      <footer className="border-t border-neutral-900 bg-neutral-950 py-8 text-center text-xs text-neutral-500 font-sans">
        <div className="max-w-7xl mx-auto px-4 space-y-3">
          <div className="flex justify-center mb-1">
            <img 
              src={IMAGES.logo} 
              alt="Decola Club" 
              className="h-8 w-auto object-contain"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
            />
          </div>
          <p className="text-[10px] text-neutral-500">
            © {new Date().getFullYear()} Decola Club. Todos os direitos reservados.
          </p>
          <p className="text-[10px] text-neutral-600 max-w-md mx-auto leading-relaxed">
            AVISO: O Decola Club disponibiliza arquivos de design e layouts digitais. A confecção física dos produtos, uso de prensas, maquinário laser e insumos é de total responsabilidade do comprador.
          </p>
        </div>
      </footer>
    </div>
  );
}
