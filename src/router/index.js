import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/pages/Login'
import Home from '@/pages/Home'

import GuestManage from '@/views/GuestManage'
import RoomManage from '@/views/RoomManage'

import AddGuest from '@/components/guest/AddGuest'
import QueryGuest from '@/components/guest/QueryGuest'
import AccurateQueryGuest from '@/components/guest/AccurateQueryGuest'
import QueryGuestResult from '@/components/guest/QueryGuestResult'

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
        path: '',
        redirect: 'guest'
      },
      {
        path: 'guest',
        component: GuestManage,
        children: [{
            path: '',
            component: QueryGuest
          }, {
            path: 'addGuest',
            component: AddGuest
          },
          {
            path: 'queryGuest',
            component: QueryGuest
          },
          {
            path: 'accurateQueryGuest',
            component: AccurateQueryGuest
          },
          {
            path: 'queryResult',
            component: QueryGuestResult
          }
        ]
      },
      {
        path: 'room',
        component: RoomManage
      }
    ]
  }
]

const router = new Router({
  mode: 'history',
  routes
})
export default router
