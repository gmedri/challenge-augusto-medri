declare module 'vue-i18n' {
  import { App } from 'vue';
  export function createI18n(options: any): App;
  const useI18n: () => any;
  export default useI18n;
}
