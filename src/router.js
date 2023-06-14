import {createRouter, createWebHistory} from 'vue-router';

import HomePage from './pages/HomePage.vue';
import SingleProject from './pages/SingleProject.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/project',
      name: 'project',
      component: SingleProject
    },
  ]
});

export { router };