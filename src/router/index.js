import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegistrationView from "../views/RegistrationView.vue";
import LoginView from "../views/LoginView.vue";
import FlightsData from "../views/FlightsData.vue";
import HotelView from "../views/HotelView.vue";

const routes = [
  {
    path: "/",
    name: "registration",
    component: RegistrationView,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },

  {
    path: "/flights/:from/:to/:date/:adult/:type/:currency",
    name: "flights",
    component: FlightsData,
  },
  {
    path: "/hotels",
    name: "hotels",
    component: HotelView,
  },

  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
