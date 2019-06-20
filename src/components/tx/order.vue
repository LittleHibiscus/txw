<template>
<div class="w_member">
    <div class="left" id="leftSide" style="height: 600px;">
        <div class="left_lnfo">
            <dl>
            <dd>{{huanyinghuilai}}<p><b>{{nicheng}}</b></p><p></p></dd>
            </dl>
        </div>
        <ul class="menu">
            <router-link to="/order/order01"><li class="on">机票订单</li></router-link>
            <router-link to="/order/order02"><li class="">来自手机</li></router-link>
            <router-link to="/order/order03"><li class="">我的关注</li></router-link>
            <router-link to="/order/order04"> <li class="">常用信息</li></router-link>
            <router-link to="/order/order05"> <li class="">账号设置</li></router-link>
        </ul>
    </div> 
    <div>
        <router-view></router-view>
    </div>   
    <div class="cboth"></div>  
</div>
</template>
<script>
import '../../../public/member1.css'
export default {
    data(){
        return {
            huanyinghuilai:"",
            nicheng:""
        }
    },
    mounted(){
        var n=sessionStorage.getItem("userName");
        if(n){
            this.huanyinghuilai="欢迎回来"
            this.nicheng=n
        }else{
            this.huanyinghuilai="未登录"
            this.nicheng=""
        }
    }
}
</script>
<style scoped>

  
  
</style>