<script setup lang="ts">
import { useNuxtApp } from '#app';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import AddProductForm from '~/components/AddProductForm.vue';
import LanguageSwitcher from '~/components/LanguageSwitcher.vue';
import ProductList from '~/components/ProductList.vue';
import type { Product } from '~/types';

const { t } = useI18n();
const { $client } = useNuxtApp();
const products = ref<Product[]>([]);

async function fetchProducts() {
  const fetchedProducts = await $client.getProducts
    .useQuery()
    .catch(console.warn);
  if (Array.isArray(fetchedProducts)) {
    products.value = fetchedProducts;
  }
}

fetchProducts();

async function handleAddProduct(product: Omit<Product, 'id'>) {
  const newProduct = await $client.addProduct.mutate(product);
  products.value.push(newProduct);
}
</script>

<template>
  <div class="container mx-auto p-4">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-4xl font-bold">{{ t('welcome') }}</h1>
      <LanguageSwitcher />
    </div>
    <p class="mb-6 text-lg">{{ t('intro') }}</p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="md:col-span-2">
        <ProductList :products="products" />
      </div>
      <div class="md:col-span-1">
        <AddProductForm @add-product="handleAddProduct" />
      </div>
    </div>
  </div>
</template>
