import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import log from './components/log.vue'
import login from './components/common/login.vue'
import logup from './components/common/logup.vue'
import logPhone from './components/common/logPhone.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',name:'home',component:Home},
    {path:'/log',component:log},
    {path:'/login',component:login},
    {path:'/logup',component:logup},
    {path:'/logPhone',component:logPhone},
  ]
})
