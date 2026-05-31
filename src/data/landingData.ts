import { 
  BenefitCard, 
  TargetAudience, 
  BonusItem, 
  TransformationHighlight,
  CollectionItem 
} from "../types";

// Literal string paths of our generated premium images for perfect compiler and bundler resolution
import heroImg from "../assets/images/hero_showcase_1780233248751.png";
import sublimationImg from "../assets/images/sublimation_mug_1780233266220.png";
import laserImg from "../assets/images/laser_cut_gift_1780233285955.png";
import basketImg from "../assets/images/gift_basket_1780233306436.png";
import instagramImg from "../assets/images/instagram_posts_1780233321294.png";
import expertHeroBg from "../assets/images/expert_hero_bg_1780234800690.png";
import decolaLogo from "../assets/images/logo.png";

export const IMAGES = {
  hero: heroImg,
  sublimation: sublimationImg,
  laser: laserImg,
  basket: basketImg,
  instagram: instagramImg,
  expertHeroBg: expertHeroBg,
  logo: decolaLogo
};

export const WHAT_YOU_RECEIVE: BenefitCard[] = [
  {
    title: "3 Coleções Exclusivas",
    description: "Lançamentos de Coleções de artes premium com arquivos preparados para sublimação, laser, canecas e canecas de chopp.",
    icon: "Layers"
  },
  {
    title: "Artes para Sublimação",
    description: "Modelos ilustrados prontos para aplicar direto em canecas e azulejos.",
    icon: "Printer"
  },
  {
    title: "Artes para Laser",
    description: "Arquivos criativos de gravação testados para copos térmicos e gravação em tábuas.",
    icon: "Flame"
  },
  {
    title: "Canecas e Chopp",
    description: "Estampas arrasadoras focadas em datas comemorativas, presentes personalizados e campeões de vendas em todo comércio local.",
    icon: "CupSoda"
  },
  {
    title: "Montagem de Cestas",
    description: "Ideias práticas de cestas e listas de itens prontos para montar cestas de Dia dos Namorados e faturar alto.",
    icon: "Gift"
  }
];

export const FOR_WHOM: TargetAudience[] = [
  {
    text: "Trabalha com personalizados",
    description: "Seja você iniciante ou com ateliê consolidado buscando otimizar sua produção e portfólio."
  },
  {
    text: "Vende canecas, cestas, brindes ou lembranças",
    description: "Quer produtos atraentes que seus clientes comprem imediatamente sem hesitar pelo preço."
  },
  {
    text: "Usa sublimação, laser ou impressão",
    description: "Precisa de imagens em alta definição e prontas para usar de forma imediata, sem complicações."
  },
  {
    text: "Quer economizar tempo criando artes",
    description: "Diga adeus às madrugadas em claro tentando vetorizar logos ou procurar fontes no Google."
  },
  {
    text: "Precisa de ideias novas para vender mais",
    description: "Coleções temáticas prontas para atrair clientes toda semana e expandir seu nicho."
  },
  {
    text: "Quer postar melhor no Instagram",
    description: "Deseja que seu perfil pareça uma marca de alto padrão, valorizando o valor percebido de cada peça."
  }
];

export const BIG_BONUSES: BonusItem[] = [
  {
    title: "Lista Secreta de Fornecedores",
    description: "Acesso aos fornecedores indicados para renovar seu estoque, criar seus personalizados e lucrar neste dia dos namorados.",
    badge: "BÔNUS VIP",
    estimatedValue: "R$ 147,00"
  },
  {
    title: "Pack de Posts Editáveis no Canva Pro",
    description: "Posts das artes para postar nas redes sociais editáveis no Canva Pro. Altere cores, fotos de produtos e textos de forma pratica.",
    badge: "ACESSÓRIO DE OURO",
    estimatedValue: "R$ 97,00"
  },
  {
    title: "Posts Prontos para Instagram",
    description: "Templates para postagens no feed do instagram, Facebook marketplace, stories e status.",
    badge: "MÁQUINA DE POSTAGEM",
    estimatedValue: "R$ 119,00"
  },
  {
    title: "Coleções & Materiais Extras",
    description: "Materiais exclusivos surpresa liberados de forma gratuita dentro do clube para você sair na frente da concorrência local.",
    badge: "SURPRESA",
    estimatedValue: "R$ 89,00"
  }
];

export const TRANSFORMATION_STATISTICS: TransformationHighlight[] = [
  {
    title: "Mais velocidade para produzir",
    description: "Menos tempo na tela do computador significa mais tempo focado em confeccionar, despachar e gerenciar seu lucro."
  },
  {
    title: "Mais ideias para vender",
    description: "Tenha um estoque infinito de artes conceituais para testar a demanda antes mesmo de produzir a primeira peça."
  },
  {
    title: "Mais profissionalismo no Instagram",
    description: "Atraia um público disposto a pagar um valor premium pelo capricho visual do seu perfil."
  }
];

// Content showcase tabs
export const SHOWCASE_PRODUCTS: CollectionItem[] = [
  {
    id: "subli",
    title: "Artes Prontas para Sublimação",
    description: "Estampas de altíssima qualidade visual calibradas para transferência perfeita de cores em cerâmica e polímeros.",
    category: "sublimation",
    image: sublimationImg,
    features: [
      "Artes de caneca prontas em formato 21cm x 9.5cm",
      "Arquivos prontos de alta resolução (300 DPI)",
      "Arquivos para Divulgação com Fotos e Vídeo em Alta Qualidade",
      "Mockups realistas de divulgação inclusos"
    ]
  },
  {
    id: "laser",
    title: "Arquivos para Copos Térmicos & Laser",
    description: "Artes vetorizadas de altíssima qualidade para gravação em copos térmicos e gravação em tábuas.",
    category: "laser",
    image: laserImg,
    features: [
      "Suporte para gravações de alta fidelidade",
      "Arquivos para Divulgação com Fotos e Vídeo em Alta Qualidade",
      "Excelente para copos térmicos e gravação em tábuas no laser",
      "Arquivos prontos para produção rápida"
    ]
  },
  {
    id: "basket",
    title: "Montagem de Cestas Rentáveis",
    description: "Ideias de montagens de cestas para vender muito no dia dos namorados e com alta lucratividade",
    category: "basket",
    image: basketImg,
    features: [
      "Guia visual de montagem de fitas e cestas",
      "Lista de compras otimizada de alta lucratividade",
      "Arquivos para Divulgação com Fotos e Vídeo em Alta Qualidade",
      "Artes de caneca de chopp e canecas decorativas combinando"
    ]
  },
  {
    id: "insta",
    title: "Templates de Divulgação Instagram",
    description: "Ganhe postagens prontas para postar no Instagram, Facebook e WhatsApp, mostrando os produtos e vendendo mais.",
    category: "instagram",
    image: instagramImg,
    features: [
      "Artes para feed com títulos magnéticos",
      "Packs editáveis no Canva para sua identidade visual"
    ]
  }
];
