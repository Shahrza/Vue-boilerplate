import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
// import Auth from '../methods/helper'

Vue.use(Router);

const customRouter = new Router({
  routes
});

customRouter.beforeEach((to, from, next) => {
  // Auth.userCheckByToken();
  const token = localStorage.token;

  if (token) {
    if (to.matched.some(route => route.meta.isLogin)) {
      next();
    } else {
      next({name: 'home'})
    }
  } else if (!token && to.name === 'auth.login') {
    next()
  } else {
    next({name: 'auth.login'});
  }

});

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
