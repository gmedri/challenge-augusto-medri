<script setup lang="ts">
import { computed, reactive } from 'vue';
import { useI18n } from 'vue-i18n';
import type { Product } from '~/types';

const emit = defineEmits<{
  (e: 'add-product', product: Omit<Product, 'id'>): void;
}>();

const product = reactive<Omit<Product, 'id'>>({
  name: '',
  price: 0,
  description: '',
});

function submitForm() {
  emit('add-product', { ...product });
  product.name = '';
  product.price = 0;
  product.description = '';
}

const { t } = useI18n();

const formattedPrice = computed(() => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return formatter.format(product.price);
});
</script>

<template>
  <div class="p-4 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-4">{{ t('addProduct') }}</h2>
    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700">{{
          t('productName')
        }}</label>
        <input
          v-model="product.name"
          id="name"
          type="text"
          required
          class="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div class="mb-4">
        <label for="price" class="block text-sm font-medium text-gray-700">{{
          t('price')
        }}</label>
        <input
          v-model.number="product.price"
          id="price"
          type="number"
          required
          class="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <p class="mt-2 text-sm text-gray-500">{{ formattedPrice }}</p>
      </div>
      <div class="mb-4">
        <label
          for="description"
          class="block text-sm font-medium text-gray-700"
          >{{ t('description') }}</label
        >
        <textarea
          v-model="product.description"
          id="description"
          required
          class="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        ></textarea>
      </div>
      <button
        type="submit"
        class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {{ t('addProduct') }}
      </button>
    </form>
  </div>
</template>
