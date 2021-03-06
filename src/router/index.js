import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Projects from '@/components/Projects';
import Sandbox from '@/components/Sandbox';
// import Resources from '@/components/Resources';
import Page404 from '@/components/Page404';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects,
    },
    {
      path: '/sandbox',
      name: 'Sandbox',
      component: Sandbox,
    },
    {
      path: '*',
      component: Page404,
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: 'history',
});
