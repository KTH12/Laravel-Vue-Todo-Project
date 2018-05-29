import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from './LoginPage';
import Feed from './FeedPage';
import Register from './RegisterPage';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/login',
      component: Login,
      meta: {
        forVisitors: true,
      },
    },
    {
      path: '/feed',
      component: Feed,
      meta: {
        forAuth: true,
      },
    },
    {
      path: '/register',
      component: Register,
      meta: {
        forVisitors: true,
      },
    },
  ],
});

router.beforeEach(
  (to, from, next) => {
    if (to.matched.some(record => record.meta.forVisitors)) {
      if (Vue.auth.isAuthenticated()) {
        next({
          path: '/feed',
        });
      } else next();
    } else if (to.matched.some(record => record.meta.forAuth)) {
      if (!Vue.auth.isAuthenticated()) {
        next({
          path: '/login',
        });
      } else next();
    } else next();
  },
);

export default router;
