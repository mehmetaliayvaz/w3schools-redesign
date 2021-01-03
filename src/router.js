import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from './components/Home';
import Article from './components/Article';

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
  },
  {
    path: '/article',
    component: Article,
    name: 'article',
  },
  { path : "*", 
    redirect : "/"
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});


router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;