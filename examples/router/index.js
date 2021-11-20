import Vue from 'vue'
import Router from 'vue-router'
import { pageRouterMap } from './router.config'
import Layout from '../layout'
Vue.use(Router);
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Layout,
      meta: { title: '主页', hiddenHeaderContent: true },
      children: [
        {
          path: '/',
          name: 'Home',
          hidden: true,
          component: () => import('../views/Home.vue'),
          meta: { title: '主页' }
        },
        ...pageRouterMap
      ]
    },
    {
      path: '*',
      redirect: '/',
      hidden: true
    }
  ]
})

export default router