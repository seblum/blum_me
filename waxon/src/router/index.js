import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../views/NotFound.vue";
import Main from "../views/Main.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    meta: {
      title: "Main",
    },
    component: Main,
  },
  {
    path: "*",
    name: NotFound,
    meta: {
      title: "404",
    },
    component: () => import("../views/NotFound.vue"),
  },
];
const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title =
      "Blum.me";
  }
});

export default router;
