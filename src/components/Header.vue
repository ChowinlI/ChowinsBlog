<template>
    <header id="header">
      <div class="pf-wrap">
        <div class="pf-picture">
          <div class="pf-picture-wrap"><img src="../assets/images/pf-photo.jpg" alt=""></div>
        </div>
        <div class="pf-name"><span class="name">Chowin</span></div>
        <div class="pf-intro">一个懂得挖掘生活中的乐趣的Web前端爱好者,兼段子手</div>
      </div>
      <nav class="nav">
        <div class="nav-list">
          <router-link class="nav-list-item" to="/index">首页</router-link>
          <router-link class="nav-list-item" to="/toast">吐槽</router-link>
          <router-link class="nav-list-item" to="/friends">dalao</router-link>
          <router-link class="nav-list-item" to="/about">关于我</router-link>
          <div class="nav-list-item"><i class="iconfont icon-search"></i></div>
        </div>
      </nav>
      <div class="header-bg" :style="{ backgroundImage: 'url('+banner+')'}"></div>
    </header>
</template>

<script type="text/ecmascript-6">
    $(function () {
      var h = $('#header').height();
      $(window).on("scroll", function(){
        var s_top = $(document).scrollTop();
        if(s_top >= h){
          $('.nav').addClass('nav-scroll');
          $('.back-top').fadeIn(500);
          $('.pf-wrap').fadeOut(500);
          $('.header-bg').fadeOut(500);
        }else {
          $('.nav').removeClass('nav-scroll');
          $('.back-top').fadeOut(500);
          $('.pf-wrap').fadeIn(500);
          $('.header-bg').fadeIn(500);
        }
      })
    })
    export default{
        props: [],
        data(){
            return {
                banner: require('../assets/images/banner.jpg')
            }
        },
        created(){

        }
    }
</script>

<style lang="less">
  @import "../assets/css/header.less";
</style>
