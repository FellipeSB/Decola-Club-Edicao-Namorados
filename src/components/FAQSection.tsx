import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData: FAQItem[] = [
    {
      question: "Como funciona o acesso ao Decola Club?",
      answer: "O seu acesso é 100% imediato e vitalício. Assim que o pagamento for confirmado, você receberá automaticamente em seu e-mail os dados de login e senha para acessar nosso painel exclusivo com todos os arquivos organizados, prontos para baixar e usar."
    },
    {
      question: "Eu preciso de programas pagos ou complexos?",
      answer: "Não! A grande maioria das nossas artes e arquivos de sublimação são editáveis no Canva (inclusive na versão gratuita) ou já vêm prontos em formato universal como PNG para que você consiga usar sem nenhuma complicação."
    },
    {
      question: "Como funciona a gravação em copos e tábuas a laser?",
      answer: "Você receberá arquivos perfeitamente vetorizados e calibrados para gravação a laser. São designs otimizados e testados para copos térmicos e tábuas, garantindo máxima definição e rapidez no processo da sua máquina laser."
    },
    {
      question: "O que vem na Lista Secreta de Fornecedores?",
      answer: "Você terá acesso instantâneo aos contatos diretos dos melhores importadores e distribuidores nacionais de copos térmicos inox, canecas de sublimação e maquinários. Compre diretamente no atacado com preços imbatíveis para lucrar muito mais."
    },
    {
      question: "Se eu tiver alguma dúvida, terei suporte?",
      answer: "Com certeza! Oferecemos suporte completo e prioritário para todos os membros ativos. Qualquer dúvida sobre download, edição ou sugestões de arquivos, você contará com nossa equipe de suporte dedicada dentro da área de membros."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#FAF6F0] px-4 sm:px-6 lg:px-8 border-y border-neutral-250" id="faq-section">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-xs uppercase font-mono tracking-widest text-brand-red font-black flex items-center justify-center gap-1.5 bg-brand-red/10 px-3 py-1 rounded-full w-max mx-auto border border-brand-red/20">
            <HelpCircle className="w-4 h-4 text-brand-red" /> Perguntas Frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-neutral-900 tracking-tight leading-none uppercase italic">
            Dúvidas Frequentes • <span className="text-brand-red">FAQ</span>
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base font-medium max-w-xl mx-auto leading-relaxed">
            Tem alguma pergunta sobre o clube, as artes ou o acesso? Encontre a resposta rápida que você precisa logo abaixo.
          </p>
        </div>

        {/* Accordion Questions Grid/List */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:border-neutral-300 transition-all duration-300"
                id={`faq-item-${index}`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-neutral-900 focus:outline-none transition group cursor-pointer"
                >
                  <span className="text-sm sm:text-base md:text-lg group-hover:text-brand-red transition">
                    {item.question}
                  </span>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 group-hover:bg-brand-red/10 group-hover:text-brand-red transition-all duration-300">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {/* Smooth Max-Height Answer Panel */}
                <div 
                  className={`transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-[300px] border-t border-neutral-100 opacity-100 py-5 px-6" : "max-h-0 opacity-0 pointer-events-none"
                  } overflow-hidden`}
                >
                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-semibold">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom micro box trust indicator */}
        <div className="bg-white border border-neutral-200 p-6 rounded-2xl text-center max-w-xl mx-auto shadow-sm space-y-2">
          <p className="text-xs sm:text-sm font-bold text-neutral-900 leading-snug">
            Ainda tem alguma dúvida não listada aqui?
          </p>
          <p className="text-neutral-500 text-xs font-semibold">
            Nosso suporte técnico está de plantão para ajudar você pelo Whats ou e-mail pós compra de forma instantânea.
          </p>
        </div>
      </div>
    </section>
  );
}
