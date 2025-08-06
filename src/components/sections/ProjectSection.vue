<template>
  <section class="py-20 px-4 bg-gray-50">
    <h2 class="text-3xl font-bold text-gray-800 text-center mb-10">Projects</h2>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="bg-white rounded shadow p-6 hover:shadow-lg transition"
      >
        <h3 class="text-xl font-semibold text-blue-600 mb-2">{{ project.title }}</h3>
        <p class="text-gray-600">{{ project.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  { title: 'Portfolio Website', description: 'A personal website showcasing my work.' },
  { title: 'E-commerce UI', description: 'A modern, responsive UI for an e-commerce store.' },
  { title: 'Landing Page', description: 'A promotional landing page with animations.' }
]
</script>
