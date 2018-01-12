import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/views/Home'
import AddGuest from '@/components/AddGuest'
import QueryGuest from '@/components/QueryGuest'
import AccurateQueryGuest from '@/components/AccurateQueryGuest'
Vue.use(Router)


const routes = [{
    path: '/',
    name: 'Default',
    component: Login
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [{
        path: 'addGuest',
        component: AddGuest
      },
      {
        path: 'queryGuest',
        component: QueryGuest
      },
      {
        path: '',
        component: QueryGuest
      },
      {
        path: 'accurateQueryGuest',
        component: AccurateQueryGuest
      }
    ]


  }
]

const router = new Router({
  mode: 'history',
  routes
})
export default router
