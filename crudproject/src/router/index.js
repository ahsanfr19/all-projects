import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

import UpdateForm from "@/components/UpdateForm.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/update/:id",
    name: "update",
    props: true,
    component: UpdateForm,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
