import Vue from "vue";
import Router from "vue-router"

import log from './views/log.vue'
import seat from './views/seat.vue'
import notFound from './components/404/notFound.vue'

Vue.use(Router);
export default new Router({
  routes: [
    {path:'/'},
    {path:'/log',component:log},
    {path:'/seat',component:seat},
    {path: '*', component:notFound},
  ]
});