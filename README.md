# Vue 3 + TypeScript + Vite

# Vue Folder Structure
```
src/
├─ assets/
│  ├─ images/
│  │   └─ profile.jpg       # example profile image
│  └─ main.css              # Tailwind + global styles
│
├─ components/
│  ├─ common/
│  │   └─ Button.vue
│  ├─ sections/
│  │   ├─ HeroSection.vue
│  │   ├─ AboutSection.vue
│  │   ├─ ProjectSection.vue
│  │   └─ ContactSection.vue
│  └─ ui/
│      ├─ Navbar.vue
│      └─ Footer.vue
│
├─ layouts/
│  └─ DefaultLayout.vue
│
├─ pages/
│  ├─ Home.vue
│  ├─ About.vue
│  ├─ Projects.vue
│  ├─ Contact.vue
│  └─ NotFound.vue
│
├─ router/
│  └─ index.ts
│
├─ utils/
│  └─ links.ts
│
├─ App.vue
├─ main.ts
└─ env.d.ts
```

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).
