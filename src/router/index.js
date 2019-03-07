import Vue from 'vue'
import Router from 'vue-router'
// 一级
import Home from '@/components/Home';
import Menu from '@/components/Menu';
import Admin from '@/components/Admin';
import About from '@/components/About';
import Login from '@/components/Login';
import Register from '@/components/Register';
// 二级
import Activity from '@/components/about/Activity';
import Contact from '@/components/about/Contact';
import Delivery from '@/components/about/Delivery';
import History from '@/components/about/History';
// 三级路由
import Address from '@/components/about/contact/Address';
import Person from '@/components/about/contact/Person';
import Phone from '@/components/about/contact/Phone';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      redirect: '/contact',
      children: [//二级
        {
          path: '/contact',
          name: 'Contact',
          component: Contact,
          redirect: '/contact/address',
          children: [{//三级
            path: '/contact/address',
            name: 'Address',
            component: Address,
          },
          {
            path: '/contact/person',
            name: 'Person',
            component: Person,
          },
          {
            path: '/contact/phone',
            name: 'Phone',
            component: Phone,
          },
          ]
        },
        {
          path: '/activity',
          name: 'Activity',
          component: Activity
        },
        {
          path: '/delivery',
          name: 'Delivery',
          component: Delivery
        },
        {
          path: '/history',
          name: 'History',
          component: History
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
  ],
  mode: 'history',
  scrollBehavior(to, from, saveedPosition) {
    return { x: 0, y: 200 }
  }
})

