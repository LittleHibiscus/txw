import Vue from "vue";
import Router from "vue-router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

Vue.use(Router);

export default new Router({
  routes: [
    // 所有路由的头部 尾部
    // { path: "/", components: { Header, Footer } }
  ]
});