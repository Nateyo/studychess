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
      path: '/hello',
      name: 'hello',
      component: require('@/components/Hello')
    },
    {
      path: '/world',
      name: 'world',
      component: require('@/components/World')
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  mode: 'history'
})
