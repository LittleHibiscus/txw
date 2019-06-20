<template>
    <div class="cityBox">
        <header class="stHeader">
            热门城市(可直接输入中文名/拼音/英文名)<span @click="closeCityBox">x</span>
        </header>
        <div class="cbDiv1">
            <span>国家/地区</span>
            <a href="javascript:;" :class="{aChecked: index == tab_nav.ul1}"  
             v-for="(item,index) of list1" :key="index" 
             @click="cbDiv1Click('ul1',index)">{{item}}</a>
            <!--
            <a href="javascript:;" :class="TList ? 'aChecked' : '' " 
            @click="cbDiv1A">Top20</a>
            <a href="javascript:;" :class="AList ? 'aChecked' : '' " 
            @click="cbDiv1B">亚洲/大洋洲</a>
            <a href="javascript:;" :class="UList ? 'aChecked' : '' " 
            @click="cbDiv1C">美洲</a>
            <a href="javascript:;" :class="EList ? 'aChecked' : '' " 
            @click="cbDiv1D">欧洲</a>
            <a href="javascript:;" :class="Flist ? 'aChecked' : '' " 
            @click="cbDiv1E">非洲</a>
            -->
        </div>
        <div class="cbDiv2"  v-for="(item,index) of List11" 
            :key="index" v-show="index==tab_nav.ul1">
            <a href="javascript:;" @click='getCity(item)' v-for="(item,index1) of List11[index]" :key="'info-'+index1"
            >{{item}}</a>
        </div>
        <div class="cbDiv3">
            <span>国内城市</span>
            <a href="javascript:;" :class="{aChecked: index == tab_nav.ul2}"  
             v-for="(item,index) of list2" :key="index" 
             @click="cbDiv3Click('ul2',index)">
             {{item}}</a>
            <!--
            <a href="javascript:;" class="aChecked">热门</a>
            <a href="javascript:;">ABCDE</a>
            <a href="javascript:;">FGHIJ</a>
            <a href="javascript:;">KLMN</a>
            <a href="javascript:;">OPQRST</a>
            <a href="javascript:;">UVWXYZ</a>
            -->
        </div>
        <div class="cbDiv4"  v-for="(item,index) of List22" 
            :key="index" v-show="index==tab_nav.ul2">
            <a href="javascript:;" @click="getCity(item)" v-for="(item,index2) of List22[index]" :key="'info-'+index2"
            >{{item}}</a>
        </div>
        <div class="cbDiv5"></div>
    </div>
</template>
<script>
export default {
    /*
    props:{
        List:{default:Array},
        d2:{default:""},
        close:{type:Function},
        cbDiv2Click:{type:Function},
        cbDiv4Click:{type:Function}
    },
    */
    data(){
        return{
            list1:["Top20","亚洲/大洋洲","美洲","欧洲","非洲"],
            List11:[
                [123,123,123,123,123,123,123,123,123,123,123,123],
                [234,123,123,123,123,123,123,123,123,123,123,123],
                [323,123,123,123,123,123,123,123,123,123,123,123],
                [423,123,123,123,123,123,123,123,123,123,123,123],
                [523,123,123,123,123,123,123,123,123,123,123,123]
            ],
            list2:["热门","ABCDE","FGHIJ","KLMN","OPQRST","UVWXYZ"],
            List22:[
                [123,123,123,123,123,123,123,123,123,123,123,123],
                [234,123,123,123,123,123,123,123,123,123,123,123],
                [323,123,123,123,123,123,123,123,123,123,123,123],
                [423,123,123,123,123,123,123,123,123,123,123,123],
                [523,123,123,123,123,123,123,123,123,123,123,123],
                [623,123,123,123,123,123,123,123,123,123,123,123],
            ],
            tab_nav:{
                ul1:0,
                ul2:0,
            }

        }
    },
    methods:{
        cbDiv1Click(key,index){
            this.tab_nav["ul1"]=index;
            
        },
        cbDiv3Click(key,index){
            this.tab_nav["ul2"]=index;
            
        },
        getCity(city){
            this.$emit("selectCity",city);
        },
        // 关闭列表
        closeCityBox(){
            this.$emit("closeCityBox");
        }
    }
}
</script>

<style scoped>
    .cityBox{
        width:540px;
        background:#6aa3ed;
    }
    .stHeader{
        background-color:#00B2D6;
        font-size:16px;
        color: #fff;
        padding:1% 2%;
        height:33px;
        line-height:33px;
        position: relative;
        font-weight: 700;
    }
    .stHeader>span{
        position: absolute;
        right:20px;top:10px;
        width:25px;
        height:25px;
        border-radius:50%;
        line-height:22px;
        text-align: center;
        font-size:20px;
        cursor:pointer;
    }
    .stHeader>span:hover{
        background-color:#f6f5f7;
        color: #00B2D6;
    }
    .cbDiv1,.cbDiv3{
        margin:10px 10px 8px 10px;
        border-bottom:1px solid #dfe0e6;
    }
    .cbDiv1>span,.cbDiv3>span{
        font-size:16px;
        margin-right:10px;
    }
    .cbDiv1>a,.cbDiv3>a{
        display:inline-block;
        text-decoration: none;
        color: #00b2d6;
        font-size:12px;
        margin:0 5px;padding:2px 8px;
        border-radius:3px 3px 0 0;
    }
    .cbDiv2,.cbDiv4{
        display:flex;
        flex-wrap:wrap;
        margin:5px;
    }
    .cbDiv2>a,.cbDiv4>a{
        display:inline-block;
        width: 14.6%;
        padding-left:2%;
        color: #453d54;
    }
    .cbDiv5{
        margin-bottom:15px;
    }
    .aChecked{
        background-color: #00b2d6;
        color: #fff !important;
    }
</style>


