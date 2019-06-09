import Vue from 'vue'
import Router from 'vue-router'
import Header from './components/Header/Header.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // 所有路由的头部
    {
      path: '*',
      components:{
        header:Header,
      }
    },
  ]
})
