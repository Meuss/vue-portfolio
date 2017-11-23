import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Projects from '@/components/Projects';
import Sandbox from '@/components/Sandbox';
import Resources from '@/components/Resources';
import Skills from '@/components/Skills';
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
      path: '/resources',
      name: 'Resources',
      component: Resources,
    },
    {
      path: '/skills',
      name: 'Skillss',
      component: Skills,
    },
    {
      path: '*',
      component: Page404,
    },
  ],
  mode: 'history',
});
