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
  {
    path: "/ficha-people/:id",
    name: "FichaPeople",
    component: () =>
      import(/* webpackChunkName: "ficha-people" */ "../views/FichaPeople.vue"),
  },
  {
    path: "/starships",
    name: "Starships",
    component: () =>
      import(/* webpackChunkName: "starships" */ "../views/Starships.vue"),
  },
  {
    path: "/ficha-starships/:id",
    name: "FichaStarships",
    component: () =>
      import(/* webpackChunkName: "ficha-starships" */ "../views/FichaStarships.vue"),
  },
  {
    path: "*",
    name: "404",
    redirect: { name: 'Home' },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
