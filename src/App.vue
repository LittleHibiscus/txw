<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import appHeader from "@/views/Header";
import appFooter from "@/views/Footer";
import "../public/css/normalize.css";
import "../public/css/base.css";
import "../public/css/icon.css";
export default {
  components: { appHeader, appFooter }
};
</script>
<style>
</style>
