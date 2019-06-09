import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import log from './components/log.vue'
import seat from './components/seat.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {path:'/',name:'home',component:Home},
    {path:'/log',component:log},
    {path:'/seat',component:seat},
  ]
})
