<template>
  <div class="navbar bg-base-100 shadow">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl text-base-content"
        >My Portfolio</a
      >
    </div>

    <div class="hidden md:flex">
      <ul class="menu menu-horizontal px-1 text-base-content">
        <li v-for="link in links" :key="link.to">
          <RouterLink :to="link.to">{{ link.label }}</RouterLink>
        </li>
      </ul>
    </div>

    <div class="dropdown dropdown-end md:hidden">
      <label tabindex="0" class="btn btn-ghost lg:hidden text-base-content">
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
        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-base-content"
      >
        <li v-for="link in links" :key="'mobile-' + link.to">
          <RouterLink :to="link.to">{{ link.label }}</RouterLink>
        </li>
      </ul>
    </div>

    <button class="btn btn-ghost ml-2 text-base-content" @click="toggleTheme">
      {{ theme === "light" ? "🌙" : "☀️" }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const theme = ref(localStorage.getItem("theme") || "light");

onMounted(() => {
  document.documentElement.setAttribute("data-theme", theme.value);
});

function toggleTheme() {
  theme.value = theme.value === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", theme.value);
  localStorage.setItem("theme", theme.value);
}
</script>
