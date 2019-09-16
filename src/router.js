import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home/Home'
import { ACCESS_TOKEN_KEY } from './domain/services/LoginService'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      beforeEnter(to,from,next) {
        console.info("BeforeEnter home route");
        const currentUserVal = localStorage.getItem(ACCESS_TOKEN_KEY);
        const currentUser = localStorage.getItem(ACCESS_TOKEN_KEY) ? JSON.parse(currentUserVal) : null;
        if(currentUser && currentUser.authenticated) {
          next();
        } else {
          next({name: 'login', query: { redirectFrom: to.fullPath }});
        }
      }
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './pages/login/Login.vue')
    },
    {
      path: '*',
      redirect: { name: 'home'}
    }
  ]
})
