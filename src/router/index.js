import { createRouter, createWebHistory } from "vue-router";
import WalletList from "../views/WalletList.vue";

const routes = [
  {
    path: "/wallet-list",
    name: "WalletList",
    component: WalletList,
  },
  {
    path: "/converter",
    name: "Converter",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Converter.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
