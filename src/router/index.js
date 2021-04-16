import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";
import Auth from "../utils/index";

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // Auth.checkToken();
  // @TODO 
  // remove true
  const token = localStorage.token || true; 
  if (token) {
    if (to.matched.some((route) => route.meta.isAuth)) {
      next();
      return;
    }
    next({ name: "home" });
  } else if (!token && to.name === "auth.login") {
    next();
  } else {
    next({ name: "auth.login" });
  }
});

export default router;
