<template>
  <div class="min-h-[70vh] flex flex-col items-center justify-center bg-yellow-100 rounded-xl p-10">
    <h1 class="text-4xl font-bold text-yellow-600">📦 Product Page</h1>
    <p class="mt-4 text-gray-700">Product ID: {{ route.params.id }}</p>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
