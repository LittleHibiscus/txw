<template>
    <div class="searchBox">
        <table></table>
        <div class="search">
            <div class="search1">
                <input type="radio" id="bothway" name="kindWay" checked>
                <label for="bothway">往返</label>
                <input type="radio" id="singleway" name="kindWay">
                <label for="singleway">单程</label>
                <input type="radio" id="ways" name="kindWay">
                <label for="ways">国际多程（含缺口）</label>
            </div>
            <div class="search2">
                 <!--出发地-->
                <div class="div1">
                    <div @click="div1Click">
                        <input type="text" v-model="div1Text">
                        <span>出发地</span>
                    </div>
                    <!--隐藏栏-->
                    <div class="searchCity" v-show="div1open">
                        <div class="cityBox">
                            <header class="stHeader">
                                热门城市(可直接输入中文名/拼音/英文名)<span @click="close">x</span>
                            </header>
                            <div class="cbDiv1">
                                <!--导航栏1-->
                                <span>国家/地区</span>
                                <a href="javascript:;" :class="continent1? 'aChecked' : ''"
                                 @click="continentC1">Top20</a>
                                <a href="javascript:;" :class="continent2? 'aChecked' : ''"
                                 @click="continentC2">亚洲/大洋洲</a>
                                <a href="javascript:;" :class="continent3? 'aChecked' : ''"
                                 @click="continentC3">美洲</a>
                                <a href="javascript:;" :class="continent4? 'aChecked' : ''"
                                 @click="continentC4">欧洲</a>
                                <a href="javascript:;" :class="continent5? 'aChecked' : ''"
                                 @click="continentC5">非洲</a>
                            </div>
                            <!--内容1-->
                            <div class="cbDiv2">
                                <a href="javascript:;" v-for="(item,index) of List1" 
                                :key="index" :id="index" @click="cbDiv2Click">
                                {{item}}</a>
                            </div>
                            <!--导航栏2-->
                            <div class="cbDiv3">
                                <span>国内城市</span>
                                <a href="javascript:;" :class="city1? 'aChecked' : ''"
                                 @click="cityC1">热门</a>
                                <a href="javascript:;" :class="city2? 'aChecked' : ''"
                                 @click="cityC2">ABCDE</a>
                                <a href="javascript:;" :class="city3? 'aChecked' : ''"
                                 @click="cityC3">FGHIJ</a>
                                <a href="javascript:;" :class="city4? 'aChecked' : ''"
                                 @click="cityC4">KLMN</a>
                                <a href="javascript:;" :class="city5? 'aChecked' : ''"
                                 @click="cityC5">OPQRST</a>
                                <a href="javascript:;" :class="city6? 'aChecked' : ''"
                                 @click="cityC6">UVWXYZ</a>
                            </div>
                            <!--内容2-->
                            <div class="cbDiv4">
                                <a href="javascript:;" v-for="(item,index) of List2" 
                                :key="index" :id="index" @click="cbDiv4Click">
                                {{item}}</a>
                            </div>
                            <div class="cbDiv5"></div>
                        </div>
                    </div>
                </div>
                <!--切换箭头-->
                <span @click="switchImg">
                    <img src="img/seat/bothway.png"  alt="">
                </span>    
                <!--目的地-->
                <div class="div2">
                    <div @click="div2Click">
                        <input type="text" v-model="div2Text">
                        <span>目的地</span>
                    </div>
                    <!--隐藏栏-->
                    <div class="searchCity" v-show="div2open">
                        <div class="cityBox">
                            <header class="stHeader">
                                热门城市(可直接输入中文名/拼音/英文名)<span @click="close">x</span>
                            </header>
                            <div class="cbDiv1">
                                <!--导航栏1-->
                                <span>国家/地区</span>
                                <a href="javascript:;" :class="continent1? 'aChecked' : ''"
                                 @click="continentC1">Top20</a>
                                <a href="javascript:;" :class="continent2? 'aChecked' : ''"
                                 @click="continentC2">亚洲/大洋洲</a>
                                <a href="javascript:;" :class="continent3? 'aChecked' : ''"
                                 @click="continentC3">美洲</a>
                                <a href="javascript:;" :class="continent4? 'aChecked' : ''"
                                 @click="continentC4">欧洲</a>
                                <a href="javascript:;" :class="continent5? 'aChecked' : ''"
                                 @click="continentC5">非洲</a>
                            </div>
                            <!--内容1-->
                            <div class="cbDiv2">
                                <a href="javascript:;" v-for="(item,index) of List1" 
                                :key="index" :id="index" @click="cbDiv2Click">
                                {{item}}</a>
                            </div>
                            <!--导航栏2-->
                            <div class="cbDiv3">
                                <span>国内城市</span>
                                <a href="javascript:;" :class="city1? 'aChecked' : ''"
                                 @click="cityC1">热门</a>
                                <a href="javascript:;" :class="city2? 'aChecked' : ''"
                                 @click="cityC2">ABCDE</a>
                                <a href="javascript:;" :class="city3? 'aChecked' : ''"
                                 @click="cityC3">FGHIJ</a>
                                <a href="javascript:;" :class="city4? 'aChecked' : ''"
                                 @click="cityC4">KLMN</a>
                                <a href="javascript:;" :class="city5? 'aChecked' : ''"
                                 @click="cityC5">OPQRST</a>
                                <a href="javascript:;" :class="city6? 'aChecked' : ''"
                                 @click="cityC6">UVWXYZ</a>
                            </div>
                            <!--内容2-->
                            <div class="cbDiv4">
                                <a href="javascript:;" v-for="(item,index) of List2" 
                                :key="index" :id="index" @click="cbDiv4Click">
                                {{item}}</a>
                            </div>
                            <div class="cbDiv5"></div>
                        </div>
                    </div>
                </div>
                <!--出发时间-->
                <div class="div3">
                    
                    <DatePicker class="div3Time"></DatePicker>
                    <img src="img/seat/date.png" alt="">
                </div>
                <!--返回时间-->
                <div class="div4">
                    
                    <DatePicker class="div3Time"></DatePicker>
                    <img src="img/seat/date.png" alt="">
                </div>
                <!--乘客情况-->
                <div class="div5">
                    <div class="click5" @click="div5Click">
                        <span>1位乘客，{{msgP}}</span>
                        <img src="img/seat/down.png" alt="">
                    </div>
                    <div class="passenger"  v-show="div5open">
                        <select name="" id="" v-model="p_sel" @change="sel">
                            <option value="经济舱">经济舱</option>
                            <option value="高端经济舱">高端经济舱</option>
                            <option value="商务舱">商务舱</option>
                            <option value="头等舱">头等舱</option>
                        </select>
                        <div class="passengerKind">
                            <img src="img/seat/teen.png" alt="">
                            <span>(12岁以上)</span>
                            <div class="p_btn">
                                <button>-</button>
                                <input type="text" :value="val1"/>
                                <button>+</button>
                            </div>
                        </div>
                        <div class="passengerKind">
                            <img src="img/seat/boy.png" alt="">
                            <span>(2到12岁)</span> 
                            <div class="p_btn">
                                <button>-</button>
                                <input type="text" :value="val2"/>
                                <button>+</button>
                            </div>   
                        </div>
                        <div class="passengerKind">
                            <img src="img/seat/baby.png" alt="">
                            <span>(2岁以下)</span> 
                            <div class="p_btn">
                                <button>-</button>
                                <input type="text" :value="val3"/>
                                <button>+</button>
                            </div>
                        </div>
                   </div>
                </div>
                <button class="btn">搜索</button>
            </div>
        </div>
        <table></table>        
    </div>
</template>
<script>
import DatePicker from "../index/DatePicker"
export default {
    data(){
        return{
            List1:["123","123","1232","1123","123","123","1223","123","123","13","123","123"],
            List2:["1434","123","1232","1123","123","4","23","43","623","13","123","123"],
            div1Text:"中国(CN)",
            div2Text:"所有地点",
            div1open:false,
            div2open:false,
            div5open:false,
            //
            continent1:true,
            continent2:false,
            continent3:false,
            continent4:false,
            continent5:false,
            //
            city1:true,
            city2:false,
            city3:false,
            city4:false,
            city5:false,
            city6:false,
            //
            val1:1,
            val2:0,
            val3:0,
            p_sel:"经济舱",
            msgP:"经济舱"
        }
    },
    methods:{
        div1Click(){
            if(!this.div1open){
                this.div1open=true;
                this.div2open=false;
            }
        },
        div2Click(){
            this.div2Text="";
            if(!this.div2open){
                this.div1open=false;
                this.div2open=true;
            }
        },
        div5Click(){
            if(!this.div5open){
                this.div5open=true;
            }else{
                this.div5open=false;
            }
        },
        cbDiv2Click(e){
            var index1=e.target.id;
            //console.log(index1)
            if(this.div1open==true){
                this.div1Text=this.List1[index1];
                this.div1open=false;
            }else if(this.div2open==true){
                this.div2Text=this.List1[index1];
                this.div2open=false;
            }
        },
        cbDiv4Click(e){
            var index2=e.target.id;
            //console.log(index2)
            if(this.div1open==true){
                this.div1Text=this.List2[index2];
                this.div1open=false;
            }else if(this.div2open==true){
                this.div2Text=this.List2[index2];
                this.div2open=false;
            }
        },
        continentC1(){
            this.continent1=true;
            this.continent2=false;
            this.continent3=false;
            this.continent4=false;
            this.continent5=false;
            this.List1=["123","123","1232","1123","123",
            "123","1223","123","123","13","123","123"];
        },
        continentC2(){
            this.continent1=false;
            this.continent2=true;
            this.continent3=false;
            this.continent4=false;
            this.continent5=false;
            this.List1=["32","543","1","233","yr","ge","yr","ge"];
        },
        continentC3(){
            this.continent1=false;
            this.continent2=false;
            this.continent3=true;
            this.continent4=false;
            this.continent5=false;
            this.List1=["32","543","1","ge","yr","ge"];
        },
        continentC4(){
            this.continent1=false;
            this.continent2=false;
            this.continent3=false;
            this.continent4=true;
            this.continent5=false;
            this.List1=["32","233","yr12","ge","yr","ge"];
        },
        continentC5(){
            this.continent1=false;
            this.continent2=false;
            this.continent3=false;
            this.continent4=false;
            this.continent5=true;
            this.List1=["32","233","yr12","yr12","yr12","ge","yr","ge"];
        },
        cityC1(){
            this.city1=true;
            this.city2=false;
            this.city3=false;
            this.city4=false;
            this.city5=false;
            this.city6=false;             
        },
        cityC2(){
            this.city1=false;
            this.city2=true;
            this.city3=false;
            this.city4=false;
            this.city5=false;
            this.city6=false;
        },
        cityC3(){
            this.city1=false;
            this.city2=false;
            this.city3=true;
            this.city4=false;
            this.city5=false;
            this.city6=false;
        },
        cityC4(){
            this.city1=false;
            this.city2=false;
            this.city3=false;
            this.city4=true;
            this.city5=false;
            this.city6=false;
        },
        cityC5(){
            this.city1=false;
            this.city2=false;
            this.city3=false;
            this.city4=false;
            this.city5=true;
            this.city6=false;
        },
        cityC6(){
            this.city1=false;
            this.city2=false;
            this.city3=false;
            this.city4=false;
            this.city5=false;
            this.city6=true;
        },                                
        close(){
            this.div1open=false;
            this.div2open=false;
            this.div2Text="所有地点";
        },
        switchImg(){
            if(this.div1Text!="中国(CN)" && this.div2Text!="所有地点"){
                var txt=this.div1Text;
                this.div1Text=this.div2Text
                this.div2Text=txt;
                
            }
        },
        //
        sel(){
           this.msgP=this.p_sel   
        }
    },
    components:{
        DatePicker
    }
}
</script>

<style scoped>
    .searchBox{
        background-color:#f3f2f5;
    }
    .search{
        margin-left:13%;
        margin-right:13%;
        margin-top:30px;
        margin-bottom:30px;
    }
    .search1>input{
        margin:0 15px 15px 15px;
    }
    .search2{
        display:flex;
        align-items:center;
    }
    .search2>span>img{
        width:50px;height:25px;
        margin:3px;
    }
    .search2>div{
        height:33px;
        position: relative;
        border:1px solid #00B2D6;
        background-color: white;
    }
    .search2>div:hover{
        box-shadow: 1px solid #00B2D6;
        
    }
    .div1,.div2{
        width:18%;
    }
    .div2{
        margin-right:10px;
    }
    .div3,.div4{
        width:14%;
        margin-right:8px;
    }
    .div5{
        width:16%;
        margin-right:8px;
        line-height:33px;
        font-size:14px;
    }
    .div1>div>input,.div2>div>input{
        padding:0 4%;
        width:90%;
        font-weight:700;
    }
    .div3>input,.div4>input{
        padding-left:20%;
        width:80%
    }
    .div5>.click5>span{
        padding-left:5%;
    }
    .div3>img,.div4>img{
        position: absolute;
        left:0%;
        top:5%;
        width:30px;
        height:30px;
    }
    .div5>.click5>img{
        position: absolute;
        right:4%;
        top:34%;
        width:10px;
        height:10px;
    }
    .div1>div>span,.div2>div>span{
        position: absolute;
        right:5%;
        top:24%;
    }
    .search2>div input{
        border:0;
        line-height:33px;
        font-size:16px;
        color:black;
    }
    .btn{
        width:140px;
        background-color:#00BD68;
        height: 36px;
        border-radius: 20px;
        font-size: 18px;
        color: #fff;
        border: none;
    }
    .btn:hover{
        background-color:#00D775;
    }
    .searchCity{
        position:absolute;
        background-color:#fff;
        width:540px;
        top:35px;
        box-shadow: 0 2px 3px #b6b1bd;
    }
    /*
    .div3Time{
        width:80%;
        height:35px;
        position:absolute;
        right:0;
        top:0;
        font-weight:200;
    }
    */
/***************************************************************************/
    .cityBox{
        width:540px;
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
    .passenger{
        position:absolute;
        top:35px;
        background-color:#fff;
        width:212px;
        display:flex;
        flex-direction:column;
        border:1px solid #00B2D6;
    }
    .passenger>select{
        width:80%;
        padding:5px;
        margin:10px auto;
        border:1px solid #00B2D6;
    }
    .passengerKind{
        display:flex;
        justify-content:space-around;
        width:80%;
        align-items:center;
        margin:0 auto;
        font-size:12px;
        color:#858a99;
    }
    .passengerKind>img{
        width:20px;height:20px
    }
    .p_btn>button{
        width:15px;
        height:15px;
        line-height:9px;
    }
    .p_btn>input{
        width:13px;
        height:13px;
        outline:none;
        border:0;
        text-align:center;
        font-size:3px !important;
    }
</style>

