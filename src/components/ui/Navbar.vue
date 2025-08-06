<template>
  <div class="navbar bg-base-100 shadow">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl">My Portfolio</a>
    </div>

    <!-- Desktop Menu -->
    <div class="hidden md:flex">
      <ul class="menu menu-horizontal px-1">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
        <li><RouterLink to="/projects">Projects</RouterLink></li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
      </ul>
    </div>

    <!-- Mobile Menu Dropdown -->
    <div class="dropdown dropdown-end md:hidden">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </label>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
        <li><RouterLink to="/projects">Projects</RouterLink></li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
      </ul>
    </div>

    <!-- Dark Mode Toggle -->
    <button class="btn btn-ghost ml-2" @click="toggleTheme">
      {{ theme === "light" ? "🌙" : "☀️" }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";

const theme = ref("light");

onMounted(() => {
  document.documentElement.setAttribute("data-theme", theme.value);
});

function toggleTheme() {
  theme.value = theme.value === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", theme.value);
}
</script>
