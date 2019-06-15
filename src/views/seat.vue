<template>
    <div class="seat">
        <div class="watch">
            <div class="watch_left">
                <h3>网上选座说明</h3>
                <span>
                    在航班起飞前，您可以足不出户，根据自己的喜好事先在网上选择座位，并于航空公司柜台办理乘机。<br>
                    通过网络提前预订航班座位，让您从容、便捷、一步到位地享受从订票到选座的便捷高效服务。
                </span>
            </div>
            <div class="watch_right">
                <h3>网上选座流程</h3>
                <img src="img/watch_lc.jpg" alt="">
            </div>
        </div>
        <div class="wrap">
            <div class="wrap_tab">
                <span>选择您乘坐的航空公司,开始选座</span>
                &nbsp;&nbsp;
                <a href="javascript:;" 
                @click="toCN" :class="isCN?`clicking`:``">
                国内航空公司</a>
                &nbsp;&nbsp;
                <a href="javascript:;" 
                @click="toEN" :class="isCN?``:`clicking`">
                国际航空公司
                </a>
            </div>
            <hr>
            <div class="wrap_pic1" v-if="isCN">
                <a :href="item.href" v-for="(item,index) of CNlist" :key="index">
                    <img :src="`./${item.src1}`">
                    <span>{{item.name}}</span>
                </a>
            </div>
            <div class="wrap_pic2" v-else>
                <a :href="item.href" v-for="(item,index) of ENlist" :key="index">
                    <img :src="`./${item.src}`">
                    <span>{{item.name}}</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                isCN:true,
                CNlist:[
                    {name:"中国国航",src1:"img/planeCN/lg_gh.gif",
                    href:"http://www.airchina.com.cn/"},
                    {name:"南方航空",src1:"img/planeCN/lg_nh.png",
                    href:"https://www.csair.com/cn/index.shtml"},
                    {name:"东方航空",src1:"img/planeCN/lg_df.png",
                    href:"http://www.ceair.com/"},
                    {name:"海南航空",src1:"img/planeCN/lg_hn.png",href:""},
                    {name:"深圳航空",src1:"img/planeCN/lg_sz.png",href:""},
                    {name:"四川航空",src1:"img/planeCN/lg_sc.png",href:""},
                    {name:"厦门航空",src1:"img/planeCN/lg_xm.png",href:""},
                    {name:"上海航空",src1:"img/planeCN/lg_sh.png",href:""},
                    {name:"山东航空",src1:"img/planeCN/lg_sd.png",href:""},
                    {name:"成都航空",src1:"img/planeCN/lg_cd.jpg",href:""},
                    {name:"吉祥航空",src1:"img/planeCN/lg_jx.png",href:""},
                    {name:"中国联航",src1:"img/planeCN/lg_lh.png",href:""},
                    {name:"祥鹏航空",src1:"img/planeCN/lg_xp.png",href:""},
                    {name:"西部航空",src1:"img/planeCN/lg_xb.png",href:""},
                    {name:"天津航空",src1:"img/planeCN/lg_tj.png",href:""},
                    {name:"河北航空",src1:"img/planeCN/lg_hb.jpg",href:""},
                    {name:"春秋航空",src1:"img/planeCN/lg_cq.png",href:""}
                ],
                ENlist:[
                    {name:"国泰航空",src:"img/planeEN/gj_gt.png",
                    href:"https://www.cathaypacific.com/olci/#/sc_CN/login"},
                    {name:"皇家约旦航空",src:"img/planeEN/gj_hjyd.png",
                    href:"http://www.rj.com/en/get_your_boarding_pass_online.html?learn_more"},
                    {name:"老虎航空",src:"img/planeEN/gj_tiger.jpg",href:""},
                    {name:"捷星航空",src:"img/planeEN/gj_js.jpg",href:""},
                    {name:"吴哥航空",src:"img/planeEN/gj_wg.jpg",href:""},
                    {name:"马达加斯加航空",src:"img/planeEN/gj_md.jpg",href:""},
                    {name:"飞熒航空",src:"img/planeEN/gj_ff.jpg",href:""},
                    {name:"釜山航空",src:"img/planeEN/gj_fs.jpg",href:""},
                    {name:"西捷航空",src:"img/planeEN/gj_xj.jpg",href:""},
                    {name:"亚洲航空",src:"img/planeEN/gj_aa.jpg",href:""},
                    {name:"阿曼航空",src:"img/planeEN/gj_am.jpg",href:""},
                    {name:"西提捷航空CityJet",src:"img/planeEN/gj_xtj.jpg",href:""}
                ]
            }
        },
        methods:{
            toCN(){
                this.isCN=true;
            },
            toEN(){
                this.isCN=false;
            }
        }
    }

</script>

<style scoped>
    .watch{
        display:flex;
        text-align:center;
        margin-top:30px;
        margin-bottom:30px;
    }
    .watch_left{
        width:25%;
        text-align:left;
        margin-left:13%;
    }
    .watch_left>span{
        font-size:12px
    }
    .watch_right{
        width:50%;
        text-align:left;
        margin-left:4%;
    }
    .watch_left>h3,.watch_right>h3{
        margin-bottom:10px;
    }
    .wrap_tab{
        margin-top:30px;
        margin-bottom:10px;
        text-align:left;
    }
    .wrap_tab>span{
        font-size:18px;
    }
    .wrap_tab>a{
        text-decoration: none;
        font-size:12px;
        color:#666666;
        background:#fff;
        padding:3px;
    }
    .wrap_tab>a:hover{
        text-decoration: none;
        font-size:12px;
        color:#fff;
        background:#00b2d6;
        padding:3px;
    }
    .wrap_tab .clicking{
        color:#fff;
        background:#00b2d6;
    }
    .wrap_pic1,.wrap_pic2{
        display:flex;
        flex-wrap: wrap;
        margin-top:10px;
        margin-bottom:10px;
        border-top:1px solid #d9d9d9;
        border-left:1px solid #d9d9d9;
    }
    .wrap_pic1>a,.wrap_pic2>a{
        display:block;
        width:19.9%;
        display:flex;
        flex-direction:column;
        align-items:center;
        border-right:1px solid #d9d9d9;
        border-bottom:1px solid #d9d9d9;
        font-size:12px;
        text-decoration:none;
        color: #474747;
        padding-top:5px;
        padding-bottom:5px;
    }
    .wrap_pic1>a:hover,.wrap_pic2>a:hover{
        background: #fafafa
    }
    .wrap_pic1>a>img,.wrap_pic2>a>img{
        width:80%;height:69px;
        margin-bottom:5px;
    }
</style>

