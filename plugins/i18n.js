import { createI18n } from 'vue-i18n';

export default defineNuxtPlugin(({ vueApp }) => {
  const messages = {
    en: {
      welcome: "Welcome",
      intro: "Intro",
      productList: "Product List",
      addProduct: "Add Product",
      productName: "Product Name",
      price: "Price",
      description: "Description",
    },
    es: {
      welcome: "Bienvenido",
      intro: "Introducción",
      productList: "Lista de Productos",
      addProduct: "Agregar Producto",
      productName: "Nombre del Producto",
      price: "Precio",
      description: "Descripción",
    },
    fr: {
      welcome: "Bienvenue",
      intro: "Introduction",
      productList: "Liste des Produits",
      addProduct: "Ajouter un Produit",
      productName: "Nom du Produit",
      price: "Prix",
      description: "Description",
    },
  };

  const i18n = createI18n({
    locale: 'en',
    messages,
  });

  vueApp.use(i18n);
});
