import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import { createRouterLayout } from 'vue-router-layout'

Vue.use(Router)

const RouterLayout = createRouterLayout(layout => {
  return import('@/layouts/' + layout + '.vue')
})

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: RouterLayout,
      children: routes
    }
  ]
})
