<template>
  <div class="min-h-[70vh] flex flex-col items-center justify-center bg-red-100 rounded-xl p-10">
    <h1 class="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
    <p class="mt-4 text-gray-700">The page you are looking for does not exist.</p>
    <RouterLink to="/" class="mt-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
      Go Back Home
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
