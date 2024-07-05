<template>
  <div class="p-4 bg-white rounded-lg shadow">
    <h2 class="text-2xl font-bold mb-4">{{ t('productList') }}</h2>
    <ul class="space-y-4">
      <li
        v-for="product in products"
        :key="product.id"
        class="border p-4 rounded-lg shadow-md bg-gray-50"
      >
        <h3 class="text-xl font-semibold">
          {{ product.name }} - ${{ product.price }}
        </h3>
        <p>{{ product.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import type { Product } from '~/types';

const { t } = useI18n();

const props = defineProps<{
  products: Product[];
}>();
</script>
