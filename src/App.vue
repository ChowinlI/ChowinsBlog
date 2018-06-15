<template>
  <div id="app">
    <v-header class="header"></v-header>
    <div class="main">
      <router-view class="main-wrapper" transition="fade" transition-mode="out-in" />
    </div>
    <v-footer class="footer"></v-footer>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components:{
      'v-header': Header,
      'v-footer': Footer
  }
}
</script>

<style>
  @import "./assets/css/common.css";
  #app{
    /*width: 100%;*/
    /*height: 100%;*/
  }
</style>
