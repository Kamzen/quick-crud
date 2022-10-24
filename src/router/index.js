import { createRouter, createWebHistory } from "vue-router";

// lazy load routes
const page = (path) => {
  return () => import(`../views/${path}`).then((m) => m.default || m);
};

const routes = [
  {
    path: "/",
    name: "home",
    component: page("SuppliersView.vue"),
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: page("EditSupplierBuilder.vue"),
  },
  {
    path: "/add",
    name: "add",
    component: page("AddSupplier.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
