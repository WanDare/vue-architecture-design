<template>
  <section
    class="min-h-[80vh] flex flex-col items-center justify-center bg-gray-100 text-center px-4"
  >
    <img
      src="/src/assets/images/profile.png"
      alt="Profile"
      class="w-32 h-32 rounded-full mb-6 shadow"
    />
    <h1 class="text-4xl font-bold text-gray-800">Hi, I'm Wan Dare 👋</h1>
    <p class="mt-4 text-gray-600 max-w-xl">
      I'm a Frontend Developer specializing in building modern web applications
      with Next.js and TailwindCSS.
    </p>
    <Button class="mt-6">View My Work</Button>
  </section>
</template>

<script setup lang="ts">
import Button from "../common/Button.vue";
</script>
