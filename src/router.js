import Vue from 'vue'
import Router from 'vue-router'

import log from "./views/log.vue";
import seat from "./views/seat.vue";
import NotFound from "./views/NotFound.vue";
import Index from "./views/Index.vue";
import DatePicker from "./components/index/DatePicker"

import order01 from "./components/tx/order01.vue"
import order02 from "./components/tx/order02.vue"
import order03 from "./components/tx/order03.vue"
import order04 from "./components/tx/order04.vue"
import order05 from "./components/tx/order05.vue"
import order06 from "./components/tx/order06.vue"
import bind_weibo from "./components/tx/bind_weibo.vue"



Vue.use(Router)
export default new Router({
  routes: [
    { path: "/", component: Index },
    { path: "/log", component: log },
    { path: "/seat", component: seat },
    { path: "*", component: NotFound },
    { path: "/DatePicker", component: DatePicker },
    /*子路由 */
    {
      path:'/order',
      name:'order',
      component:()=>import('./components/tx/order.vue'),
      children:[
        {
          path:'order01',
          component:order01
        },
        {
          path:'order02',
          component:order02
        },
         {
           path:'order03',
          component:order03
        },
         {
           path:'order04',
          component:order04
         },
         {
           path:'order05',
           component:order05
         },
         {
           path:'order06',
           component:order06
         },
         {
           path:'bind_weibo',
           component:bind_weibo
         },
      ]
      
    },

  ]
})
