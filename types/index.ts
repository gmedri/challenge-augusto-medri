// types/index.ts
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export type Language = 'en' | 'es' | 'fr';

export interface State {
  currentLanguage: Language;
  products: Product[];
}
