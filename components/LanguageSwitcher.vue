<template>
  <div class="flex space-x-2">
    <button
      @click="changeLanguage('en')"
      class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      English
    </button>
    <button
      @click="changeLanguage('es')"
      class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Español
    </button>
    <button
      @click="changeLanguage('fr')"
      class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Français
    </button>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useStore } from '~/composables/useStore';
import type { Language } from '~/types';

const { setLanguage } = useStore();
const { locale } = useI18n();

const changeLanguage = (lang: Language): void => {
  setLanguage(lang);
  locale.value = lang;
};
</script>
