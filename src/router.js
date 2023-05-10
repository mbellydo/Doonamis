import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Series",
    component: () => import ('./views/CarteleraDoonamis.vue')
  },
  {
    path: "/series/:id", //TLOU: /series/?id=100088
    name: "SerieDetails",
    component: () => import ('./views/MoreInfoDoonamis.vue')
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});