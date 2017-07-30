import Vue from 'vue'
import Router from 'vue-router'

import users from '@/components/users/users'
import location from '@/components/location/location'
import setting from '@/components/setting/setting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
    },
    { path: '/users', name:"users", component: users },
    { path: '/location',name:"location", component: location },
    { path: '/setting',name:"setting", component: setting },
  ]
})
