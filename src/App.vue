<template>
  <div id="app">
    <v-header class="header"></v-header>
    <div class="main">
      <router-view class="main-wrapper" transition="fade" transition-mode="out-in" />
    </div>
    <v-footer class="footer"></v-footer>
    <div class="back-top" @click="scrollToTop">
      <span class="back-top-border"></span>
        <i class="iconfont icon-backtop"></i>
    </div>
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
  },
  created(){

  },
  methods:{
    scrollToTop(){
        $('html').animate({scrollTop:0},300);
    }
  }
}
</script>

<style>
  @import "//at.alicdn.com/t/font_694553_rglpkm3axpj.css";
  @import "./assets/css/common.css";
  #app{
    /*width: 100%;*/
    /*height: 100%;*/
  }
</style>
