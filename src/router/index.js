import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/views/Home'
import AddGuest from '@/components/AddGuest'
Vue.use(Router)


const routes = [{
    path: '/',
    name: 'Login',
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
        path: '',
        component: AddGuest
      }
    ]


  }
]

const router = new Router({
  mode: 'history',
  routes
})
export default router
