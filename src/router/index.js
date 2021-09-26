import Vue from "vue";
import VueRouter from "vue-router";
import Home from '@/views/Home';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/people",
    name: "People",
    component: () =>
      import(/* webpackChunkName: "people" */ "../views/People.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
