import { createWebHistory, createRouter } from "vue-router";
import homepage from "../components/mainpage/homepage.vue";
import login from "../components/content/login.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: homepage,

  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;