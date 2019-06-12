<template>
    <div class="loginPhone">
        <p class="loginPhone_logup"><a href="javascript:;" @click="tologup">☚其他方式注册</a></p>
        <h2>{{msg}}注册</h2>
        <h4>注册即可永久保存您的查询信息</h4>
        <div class="alerm">密码必须包含字母和数字且长度在8-32位之间</div>
        <div class="loginEmail_input" v-show="loginEmail">
            <input type="text" placeholder="请输入您的邮箱">
            <input type="password" placeholder="设置登陆密码">
            <input type="password" placeholder="确认您的密码">
        </div>
        <div class="loginPhone_input" v-show="loginPhone">
            <input type="text" placeholder="请输入您的手机号">
            <div class="picNum">
                <input type="text" placeholder="图像码">
                <img src="img/log/picNum.png" alt="">
            </div>
            <div class="btnNum">
                <input type="text" placeholder="验证码">
                <button>免费获取</button>
            </div>
            <input type="password" placeholder="设置登陆密码">
        </div>
        <div class="loginPhone_question">
            <div class="question1">
                <span>为了安全起见，请立即设置你的密保问题</span>
                <select name="" id="">
                    <option value="">请选择密保一问题</option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                </select>
                <input type="text" placeholder="确认您的答案">
            </div>
            <div class="question2">
                <select name="" id="">
                    <option value="">请选择密保二问题</option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                </select>
                <input type="text" placeholder="确认您的答案">
                <span>注册即表示您同意天巡的
                    <a href="javascript:;">服务条款</a>和
                    <a href="javascript:;">隐私政策</a>
                </span>
            </div>
            
        </div>
        <button class="loginPhone_sub">注册</button>
        <div class="loginPhone_chb">
            <input type="checkbox">接收目的地推荐及优惠邮件
        </div>
        <p class="loginPhone_login">已有账号?<a href="javascript:;" @click="tologin">直接登陆</a></p>
    </div>


</template>
<script>
    export default {
        props:{
            msg:{default:""},
            loginEmail:{default:false},
            loginPhone:{default:false},
            tologup:{type:Function},
            tologin:{type:Function}
        }
    }
</script>
<style scoped>
@import "../../../public/css/log/logPhone.css";

/*
    .loginPhone{
        display:flex;
        flex-direction:column;
        align-items:center;
        width:370px;
        background-color:rgba(255, 255, 255, 0.8);
    }
    .loginPhone_logup{
        margin:0;
        width:300px;
        text-align:left;
        font-size:12px;
        margin-top:40px;
    }
    .loginPhone_logup>a{
        font-size:12px;
        text-decoration: none;
        color:#00b2d6;
    }
    .loginPhone_input>input,.loginEmail_input>input{
        width:300px;
        height:38px;
        margin:7px 0;
        padding-left:10px;
        cursor:pointer;
        border:1px solid #ddd;
        font-size:14px
    }
    .picNum,.btnNum{
        width:312px;
        height:38px;
        margin:7px auto;
        border:1px solid #ddd;
        display:flex;
        justify-content: space-between;
    }
    .picNum>img{
        width:128px;
    }
    .picNum>input,.btnNum>input{
        padding-left:10px;
        cursor:pointer;
        border:0;
        font-size:14px
    }
    .picNum:hover,.btnNum:hover{
        border:1px solid #00b2d6
    }
    .btnNum>button{
        width:140px;
        background-color:#f6f5f7;
        color:#009dbd;
        outline:none;
        border:0;
        cursor:pointer;
        font-size:12px;
    }
    .btnNum>button:hover{
        background-color:#dfdce3;
    }
    .loginPhone_input>input:hover,.loginEmail_input>input:hover{
        border:1px solid #00b2d6
    }
    .question1,.question2{
        display:flex;
        flex-direction: column;
        width:312px;
        margin:20px;
    }
    .question1>span,.question2>span{
        font-size:12px;
        text-align:left;
    }
    .question2>span>a{
        color:#00b2d6;
        text-decoration:none
    }
    .question1>input,.question1>select,.question2>input,.question2>select{
        height:38px;
        padding-left:10px;
        cursor:pointer;
        border:1px solid #ddd;
        font-size:14px
    }
    .loginPhone_sub{
        background-color:#00b2d6;
        border:0px;
        border-radius:20px;
        outline:none;
        width:300px;
        height:42px;
        margin:16px auto;
        color:#ffffff;
        font-size:15px;
        text-align:center;
        line-height:10px;
        cursor:pointer;
    }
    .loginPhone_sub:hover{
        background-color:#009dbd;
    }
    .loginPhone_chb{
        width:300px;
        display:flex;
        font-size:12px;
        align-items:center;
    }
    .loginPhone_login{
        font-size:12px;
        margin-top:30px;
        margin-bottom:30px;
    }
    .loginPhone_login>a{
        color:#00b2d6;
        text-decoration:none
    }
    .loginPhone>h4{
        color:#b6b1bd;
        font-size:12px;
        margin-top:0;
    }
    */
</style>


