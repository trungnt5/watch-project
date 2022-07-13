import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../views/MainView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainView,
    params:true,
    props:true
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/design',
    name: 'design',
    component: () => import(/* webpackChunkName: "about" */ '../views/DesignView.vue'),
    params:true,
    props:true
  },
  {
    path: '/shipment',
    name: 'shipment',
    component: () => import(/* webpackChunkName: "about" */ '../views/ShipmentView.vue'),
    params:true,
    props:true
  },
  {
    path: '/thanks',
    name: 'thanks',
    component: () => import(/* webpackChunkName: "about" */ '../views/ThanksView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
