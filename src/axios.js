<<<<<<< HEAD
//引入axios库并且设置
//1.引入vue
import Vue from "vue"
//2.引入axios库
import axios from "axios"
//3.设置跨域请求保存session
axios.defaults.withCredentials=true
//4.设置请求服务器基础路径
axios.defaults.baseURL="http://127.0.0.1:3000/"
//5.将axios注册Vue实例
Vue.prototype.axios=axios
//7.在main.js中引入
=======
//src/axios
//引入axios库并且配置
//1:引入Vue
import Vue from "vue"
//2:引入axios库
import axios from "axios"
//3:设置跨域请求保存session
axios.defaults.withCredentials=true
//4:设置请求服务器基础路径
axios.defaults.baseURL="http://127.0.0.1:3000/"
//5:将axios注册 Vue实例
Vue.prototype.axios = axios

//7:在main.js 引入axios.js即可
>>>>>>> e47934cbc97f40d578aff3c9492d1340584678f4
