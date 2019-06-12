import Vue from "vue";
import Router from "vue-router"

import log from './views/log.vue'
import seat from './views/seat.vue'
import NotFound from './views/NotFound.vue'
import Index from "./views/Index.vue"

Vue.use(Router);
export default new Router({
  routes: [
    {path:'/',component:Index},
    {path:'/log',component:log},
    {path:'/seat',component:seat},
    {path: '*', component:NotFound},
  ]
});