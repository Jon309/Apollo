import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Team from './views/team.vue';
import Contact from './views/team.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/team',
      name: 'team',
      component: Team,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
  ],
});
