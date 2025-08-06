import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layouts/DefaultLayout.vue";

import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Projects from "../pages/Projects.vue";
import Contact from "../pages/Contact.vue";
import NotFound from "../pages/NotFound.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      { path: "", component: Home },
      { path: "about", component: About },
      { path: "projects", component: Projects },
      { path: "contact", component: Contact },
      { path: ":pathMatch(.*)*", component: NotFound }, 
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
