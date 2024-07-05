import { reactive } from 'vue';
import type { Language, Product, State } from '~/types';

const state = reactive<State>({
  currentLanguage: 'en',
  products: [],
});

export function useStore() {
  function setLanguage(language: Language) {
    state.currentLanguage = language;
  }

  function setProducts(products: Product[]) {
    state.products = products;
  }

  return {
    state,
    setLanguage,
    setProducts,
  };
}
