import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/components/Home')
    },
    {
      path: '/testBoard',
      name: 'testBoard',
      component: require('@/components/TestBoard')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
