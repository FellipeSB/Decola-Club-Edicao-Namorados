export interface CollectionItem {
  id: string;
  title: string;
  description: string;
  image?: string;
  category: "sublimation" | "laser" | "mugs" | "basket" | "instagram";
  features: string[];
}

export interface BenefitCard {
  title: string;
  description: string;
  icon: string;
}

export interface TargetAudience {
  text: string;
  description: string;
}

export interface BonusItem {
  title: string;
  description: string;
  badge: string;
  estimatedValue: string;
  image?: string;
}

export interface TransformationHighlight {
  title: string;
  description: string;
}
