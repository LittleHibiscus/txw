<template>
  <div class="search-controls relative">
    <search-option-switch></search-option-switch>
    <section id="search-box-s">
      <div class="search-places search-places-f1">
        <div class="origin fl">
          <label class="place-label">出发城市</label>
          <input
            id="depCity"
            type="text"
            class="tt-input js-city"
            value="中国(CN)"
            autocomplete="off"
          >

          <i class="origin-icon"></i>
        </div>
        <a class="swap-exchange">
          <i class="exchange-icon"></i>
        </a>
        <div class="destination fr">
          <label class="place-label" :value="destinationCity">目的城市</label>
          <span class="anywhere" v-show="showAnywhere">所有地点</span>
          <input
            type="text"
            id="dstCity"
            class="tt-input js-city default"
            @focus="showAnywhere=false"
            @blur="showAnywhere=true"
            autocomplete="off"
          >
          <input type="hidden" id="dstCityCountry" value autocomplete="off">
          <input type="hidden" id="dstCityCode" value autocomplete="off">
          <input type="hidden" id="dstCityCode4" value>
          <i class="destination-icon"></i>
        </div>
      </div>
      <div class="search-places search-places-f2">
        <div class="search-dates">
          <div class="depart fl">
            <label class="place-label">去程时间</label>
            <!-- <input
              value="2019-06-16"
              data-preval="2019-06-16"
              autocomplete="off"
              readonly="readonly"
            >-->
            <date-picker :value="date"></date-picker>
            <i class="dates-icon"></i>
          </div>
          <div class="return fr">
            <label class="place-label">回程时间</label>
            <!-- <input
              type="text"
              id="returnDate"
              value="2019-06-16"
              data-preval="2019-06-16"
              autocomplete="off"
              readonly="readonly"
            >-->
            <date-picker :value="date"></date-picker>
            <i class="dates-icon"></i>
          </div>
        </div>
        <div
          class="search-pax-cabin-class fr relative none"
          id="option-passengers-dom"
          style="display: none;"
        >
          <label class="place-label">舱位</label>
          <div class="cabin-class-travellers-trigger" id="option-cabin-input">
            <span id="cabin-class-dom">经济舱</span>
            <i class="down-arrow fr mgt6"></i>
            <input
              type="hidden"
              id="search-option-class-domestic"
              value="Economy"
              autocomplete="off"
            >
            <ul class="dropdownlist dropdownlist-cabin">
              <li data-val="Economy">经济舱</li>
              <li data-val="First">头等/商务舱</li>
            </ul>
          </div>
        </div>
        <div class="search-pax-cabin-class fr relative" id="option-passengers-intl">
          <label class="place-label">人数 &amp; 舱位</label>
          <div
            class="cabin-class-travellers-trigger"
            rel="option-passengers-box"
            id="option-passenger-input"
          >
            <span id="passengers">
              <i class="adult-icon"></i>
              <span class="mgr5">
                <span id="search-option-adult-txt">1</span>成人
              </span>，
            </span>
            <span id="cabin-class-intl">经济舱</span>
            <i class="down-arrow fr mgt6"></i>
          </div>
        </div>
      </div>
      <div id="compare-unit-box-wrap">
        <div class="compare-units none" id="compare-unit-box" style="display: none;">
          <span>价格核实(新窗口)</span>
          <ul class="clearfix" id="compare-unit"></ul>
        </div>
      </div>
      <button type="button" class="large-buttonB fr">立即搜索</button>
      <label class="sc-checkbox checked fr mgt10 mgr30" id="search-option-direct-box">
        <input type="checkbox" class="checkbox" id="search-option-direct" value="1"> 直飞
      </label>
      <input type="hidden" id="depCityCountryDefault" value="中国">
      <input type="hidden" id="depCityDefault" value="中国(CN)">
      <input type="hidden" id="depCityCodeDefault">
    </section>

    <section class="search-multi-city none" id="search-box-m">
      <div id="routes">
        <div class="search-places" index="0">
          <div class="route-origin">
            <input
              name="depCitys[]"
              type="text"
              class="tt-input js-city city_default"
              value
              id="dep-city-0"
              autocomplete="off"
            >
            <input name="depCityCodes[]" type="hidden" value id="dep-citycode-0" autocomplete="off">
            <i class="origin-icon"></i>
          </div>
          <span class="route-triangle">
            <span class="triangle-icon"></span>
          </span>
          <div class="route-origin">
            <input
              name="dstCitys[]"
              type="text"
              class="tt-input js-city city_default"
              id="dst-city-0"
              autocomplete="off"
            >
            <input name="dstCityCodes[]" type="hidden" id="dst-citycode-0" autocomplete="off">
            <i class="origin-icon"></i>
          </div>
          <div class="route-date">
            <input
              name="checkinDates[]"
              type="text"
              class="tt-input checkin-date"
              id="checkin-date-0"
              autocomplete="off"
              value="2019-06-12"
              readonly="readonly"
            >
            <i class="dates-icon"></i>
          </div>
          <div class="remove-route-button disabled">
            <span class="route-close-icon"></span>
          </div>
        </div>
        <div class="search-places" index="1">
          <div class="route-origin">
            <input
              name="depCitys[]"
              type="text"
              class="tt-input js-city city_default"
              id="dep-city-1"
              autocomplete="off"
            >
            <input name="depCityCodes[]" type="hidden" id="dep-citycode-1" autocomplete="off">
            <i class="origin-icon"></i>
          </div>
          <span class="route-triangle">
            <span class="triangle-icon"></span>
          </span>
          <div class="route-origin">
            <input
              name="dstCitys[]"
              type="text"
              class="tt-input js-city city_default"
              id="dst-city-1"
              autocomplete="off"
            >
            <input name="dstCityCodes[]" type="hidden" id="dst-citycode-1" autocomplete="off">
            <i class="origin-icon"></i>
          </div>
          <div class="route-date">
            <input
              name="checkinDates[]"
              type="text"
              class="tt-input checkin-date"
              id="checkin-date-1"
              autocomplete="off"
              value="2019-06-16"
              readonly="readonly"
            >
            <i class="dates-icon"></i>
          </div>
          <div class="remove-route-button disabled">
            <span class="route-close-icon"></span>
          </div>
        </div>
      </div>
      <div>
        <input type="button" class="add-route-button" id="destinaion-add" value="增加航程">
      </div>
      <div class="search-pax-cabin-class fl relative" id="option-passengers-m"></div>
      <button class="large-buttonB"></button>
    </section>
  </div>
</template>

<script>
import searchOptionSwitch from "./search-option-switch";
import datePicker from "./DatePicker";
export default {
  data() {
    return {
      date: "",
      // 所有地点胶囊
      showAnywhere: true,
      // 目的城市
      destinationCity: ""
    };
  },
  components: {
    searchOptionSwitch,
    datePicker
  }
};
</script>

<style scoped>
/* 通用
   ========================================================================== */
.depart input,
.return input,
.origin input,
.destination input,
input[type="text"] {
  background-color: #fff;
  border: none;
  border-radius: 3px;
  box-sizing: border-box;
  height: 36px;
  padding: 8px 8px 8px 32px;
  margin: 0;
  width: 100%;
  position: relative;
  font: 16px "Microsoft YaHei", "黑体", "simsun";
  line-height: 19px;
  font-weight: 600;
  color: #453d54;
}
.checkbox {
  margin-right: 3px;
  vertical-align: -2px;
}
/* 最外层
   ========================================================================== */
.search-controls {
  height: auto;
  left: 50%;
  transform: translateX(-50%);
  padding-bottom: 20px;
  background: rgba(69, 61, 84, 0.85) none repeat scroll 0 0;
  color: #fff;
  padding: 15px 20px;
  float: left;
  clear: both;
  border-radius: 8px;
  position: absolute;
  z-index: 10;
  margin-top: 90px;
  border: none;
  font-family: Arial, Lucida, Verdana, Helvetica, sans-serif;
  font-size: 12px;
  line-height: 150%;
}
@media (max-width: 1189px) {
  .search-controls {
    width: 624px;
    background: rgba(69, 61, 84, 0.85) none repeat scroll 0 0;
    position: relative;
    float: left;
    clear: both;
  }
}
/* 上面label样式
   ========================================================================== */
.type label,
.type a {
  color: #7fd7e8;
}
.type label {
  margin-right: 10px;
}
label {
  cursor: pointer;
}
/* 第一层
   ========================================================================== */
.search-places-f1 {
  margin-top: 10px;
  margin-bottom: 0;
}

.search-places {
  display: table;
  content: "";
  position: relative;
  width: 100%;
  margin: 15px 0;
}
/* 出发城市 */
.search-places .origin,
.search-places .destination {
  width: 48%;
  position: relative;
}
.search-places .place-label {
  color: #b6b1bd;
  font-size: 13px;
  margin-bottom: 3px;
}
/* 交换按钮 */
.search-places .swap-exchange {
  background: rgba(0, 0, 0, 0) none;
  border: none;
  cursor: pointer;
  height: 36px;
  left: 47.5%;
  padding: 0;
  position: absolute;
  top: 20px;
  width: 4%;
}
/* 目的城市 */
.search-places .destination {
  width: 48%;
  position: relative;
}
.search-places .place-label {
  color: #b6b1bd;
  font-size: 13px;
  margin-bottom: 3px;
}
.search-places .destination .anywhere {
  background-color: #ffd445;
  color: #544c63;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-size: 12px;
  left: 28px;
  padding: 3px 16px;
  position: absolute;
  top: 24px;
  z-index: 9;
  font-weight: bold;
}

/* 第二层
   ========================================================================== */
.search-places-f2 {
  margin-top: 15px;
  margin-bottom: 4px;
}
.search-places {
  display: table;
  content: "";
  position: relative;
  width: 100%;
  margin: 15px 0;
}
/* 时间 */
.search-dates {
  clear: left;
  float: left;
  width: 48%;
}
.search-dates .depart,
.search-dates .return {
  position: relative;
  width: 48%;
}
/* 人数&仓位 */
.search-pax-cabin-class {
  margin: 0 0 16px;
  width: 48%;
}
.search-places .place-label {
  color: #b6b1bd;
  font-size: 13px;
  margin-bottom: 3px;
}
.cabin-class-travellers-trigger {
  background-color: #fff;
  color: #453d54;
  border: medium none;
  border-radius: 2px;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 16px;
  height: 36px;
  margin: 0;
  padding: 8px;
  position: relative;
  text-align: left;
  width: 100%;
}
.cabin-class-travellers-trigger .down-arrow,
.dropdown i {
  border-radius: 3px;
  height: 0;
  width: 0;
  overflow: hidden;
  font-size: 0;
  line-height: 0;
  border-color: #898294 transparent transparent transparent;
  border-style: solid dashed dashed dashed;
  border-width: 10px;
  background-image: none;
}
/* 按钮
   ========================================================================== */
.large-buttonB {
  background-color: -webkit-linear-gradient(to top, #00bd68, #00d775);
  background-image: linear-gradient(to top, #00bd68, #00d775);
  background-color: #00bd68;
  border-radius: 22px;
  color: #fff;
  opacity: none !important;
  border: none 0;
  cursor: pointer;
  font: 20px "Microsoft YaHei", "黑体", "simsun";
  width: 170px;
  height: 44px;
  line-height: 22px;
  position: relative;
  text-align: left;
  text-indent: 26px;
}
.large-buttonB::after {
  background: url("../../assets/searchbox-icon.png") no-repeat;
  background-position: -375px -55px;
  width: 18px;
  height: 16px;
  display: block;
  position: absolute;
  top: 14px;
  right: 16%;
  content: "";
}
.large-buttonB::hover {
  background-color: -webkit-linear-gradient(to top, #00d775, #00d775);
  background-image: linear-gradient(to top, #00d775, #00d775);
  background-color: #00d775;
}
/* 自定义 
   ========================================================================== */
</style>