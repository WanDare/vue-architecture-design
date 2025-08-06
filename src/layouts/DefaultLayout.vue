<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <main class="flex-1">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from "../components/ui/Navbar.vue";
import Footer from "../components/ui/Footer.vue";
import { RouterView } from "vue-router";
</script>
