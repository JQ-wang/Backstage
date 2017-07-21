import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home.vue'
import Readme from '@/components/readme.vue'
import Basetable from '@/components/basetable.vue'
import Register from '@/components/register.vue'
import Chart from '@/components/chart.vue'
import Mainactive from '@/components/mainactive.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: Home,
      children: [
        {
          path: '/home/',
          redirect: '/home/readme',
          component: Readme,
          children: [
            {
              path: '/home/readme/'
            }
          ]
        },
        {
          path: '/home/basetable',
          component: Basetable
        },
        {
          path: '/home/register',
          component: Register
        },
        {
          path: '/home/charts',
          component: Chart
        },
        {
          path: '/home/mainActive',
          component: Mainactive
        }
      ]
    }
  ]
})
