import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import home from '../pages/home'
import category from '../pages/category'
import cart from '../pages/cart'
import my from '../pages/my'
import detail from '../pages/detail'
import login from '../pages/login'
import register from '../pages/register'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/index"
    },
    {
      path: "/index",
      redirect: "/index/home",
      component: index,
      children: [
        {
          path: 'home',
          component: home
        },{
          path: 'category',
          component: category
        },{
          path: 'cart',
          component: cart
        },{
          path: 'my',
          component: my
        }
      ]
    },
    {
      path: "/detail",
      component: detail
    },
    {
      path: "/login",
      component: login
    },
    {
      path: "/register",
      component: register
    }
  ]
})
