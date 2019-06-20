<template>
  <div class="cityBox">
    <header class="stHeader">
      热门城市(可直接输入中文名/拼音/英文名)
      <span @click="close">x</span>
    </header>
    <div class="cbDiv1">
      <span>国家/地区</span>
      <a href="javascript:;" :class="TList ? 'aChecked' : '' " @click="cbDiv1A">Top20</a>
      <a href="javascript:;" :class="AList ? 'aChecked' : '' " @click="cbDiv1B">亚洲/大洋洲</a>
      <a href="javascript:;" :class="UList ? 'aChecked' : '' " @click="cbDiv1C">美洲</a>
      <a href="javascript:;" :class="EList ? 'aChecked' : '' " @click="cbDiv1D">欧洲</a>
      <a href="javascript:;" :class="Flist ? 'aChecked' : '' " @click="cbDiv1E">非洲</a>
    </div>
    <div class="cbDiv2">
      <a
        href="javascript:;"
        v-for="(item1,index) of List"
        :key="index"
        :id="index"
        @click="cbDiv2Click"
      >{{item1}}</a>
    </div>
    <div class="cbDiv3">
      <span>国内城市</span>
      <a href="javascript:;" class="aChecked">热门</a>
      <a href="javascript:;">ABCDE</a>
      <a href="javascript:;">FGHIJ</a>
      <a href="javascript:;">KLMN</a>
      <a href="javascript:;">OPQRST</a>
      <a href="javascript:;">UVWXYZ</a>
    </div>
    <div class="cbDiv4">
      <a href="javascript:;" v-for="(item,index) of 13" :key="index" @click="cbDiv4Click">{{d2}}</a>
    </div>
    <div class="cbDiv5"></div>
  </div>
</template>

<script>
export default {
  props: {
    List: { default: Array },
    index: { default: "" },
    d2: { default: "" },
    close: { type: Function },
    cbDiv2Click: { type: Function },
    cbDiv4Click: { type: Function }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.cityBox {
  width: 540px;
}
.stHeader {
  background-color: #00b2d6;
  font-size: 16px;
  color: #fff;
  padding: 1% 2%;
  height: 33px;
  line-height: 33px;
  position: relative;
  font-weight: 700;
}
.stHeader > span {
  position: absolute;
  right: 20px;
  top: 10px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  line-height: 22px;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
}
.stHeader > span:hover {
  background-color: #f6f5f7;
  color: #00b2d6;
}
.cbDiv1,
.cbDiv3 {
  margin: 10px 10px 8px 10px;
  border-bottom: 1px solid #dfe0e6;
}
.cbDiv1 > span,
.cbDiv3 > span {
  font-size: 16px;
  margin-right: 10px;
}
.cbDiv1 > a,
.cbDiv3 > a {
  display: inline-block;
  text-decoration: none;
  color: #00b2d6;
  font-size: 12px;
  margin: 0 5px;
  padding: 2px 8px;
  border-radius: 3px 3px 0 0;
}
.cbDiv2,
.cbDiv4 {
  display: flex;
  flex-wrap: wrap;
  margin: 5px;
}
.cbDiv2 > a,
.cbDiv4 > a {
  display: inline-block;
  width: 14.6%;
  padding-left: 2%;
  color: #453d54;
}
.cbDiv5 {
  margin-bottom: 15px;
}
.aChecked {
  background-color: #00b2d6;
  color: #fff !important;
}
</style>


