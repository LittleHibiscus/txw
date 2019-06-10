
import Vue from "vue";
import Router from "vue-router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import log from './components/log/log.vue'
import seat from './components/seat/seat.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {path:'/log',component:log},
    {path:'/seat',component:seat},
    {path: "/", components: {} },
  ]
});