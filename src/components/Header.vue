<template>
    <header id="header">
      <div class="header-wrap" :style="{ backgroundImage: 'url('+banner+')'}">
        <div class="avatar">
          <div class="avatar-wrap"><img :src="avatar" alt=""></div>
        </div>
        <div class="bloger-name"><span class="name">叁巷肆号 | Chowin</span></div>
        <div class="bloger-intro">一个懂得挖掘生活中的乐趣的Web前端爱好者,兼段子手</div>
        <nav class="nav">
          <div class="nav-list">
            <router-link class="nav-list-item" to="/index">首页</router-link>
            <router-link class="nav-list-item" to="/roast">吐槽</router-link>
            <router-link class="nav-list-item" to="/roast">归档</router-link>
            <router-link class="nav-list-item" to="/friends">dalao</router-link>
            <router-link class="nav-list-item" to="/about">关于我</router-link>
          </div>
        </nav>
        <nav class="collapse-nav">
          <div class="collapse" @click="showCollapseNav"><i class="iconfont icon-menu"></i></div>
          <ul class="bar" v-if="collapse_show">
            <li @click="collapse_show=!collapse_show"><router-link to="/index">首页</router-link></li>
            <li @click="collapse_show=!collapse_show"><router-link to="/roast">吐槽</router-link></li>
            <li @click="collapse_show=!collapse_show"><router-link to="/file">归档</router-link></li>
            <li @click="collapse_show=!collapse_show"><router-link to="/friends">dalao</router-link></li>
            <li @click="collapse_show=!collapse_show"><router-link to="/about">关于我</router-link></li>
          </ul>
        </nav>
      </div>
      <div class="contact">
        <div class="contact-item"><a href="javascript:void (0)"><span class="iconfont icon-github"></span></a></div>
        <div class="contact-item"><a href="javascript:void (0)"><span class="iconfont icon-wechat"></span></a></div>
        <div class="contact-item"><a href="javascript:void (0)"><span class="iconfont icon-qq"></span></a></div>
        <div class="contact-item"><a href="javascript:void (0)"><span class="iconfont icon-sina"></span></a></div>
      </div>
    </header>
</template>

<script type="text/ecmascript-6">
    $(function () {
      var h = $('#header').height();
      $('#app').on("scroll", function(){
        var s_top = $('#app').scrollTop();
        if(s_top >= h){
//          $('.nav').addClass('nav-scroll');
          $('.back-top').fadeIn(500);
          $('.header-wrap').fadeOut(500);
          $('.header-bg').fadeOut(500);
        }else {
//          $('.nav').removeClass('nav-scroll');
          $('.back-top').fadeOut(500);
          $('.header-wrap').fadeIn(500);
          $('.header-bg').fadeIn(500);
        }
      })
    })
    export default{
        props: [],
        data(){
            return {
                banner: require('../assets/images/bg2.jpg'),
                avatar: require('../assets/images/pf-photo2.jpg'),
                collapse_show: false
            }
        },
        created(){},
        methods:{
            showCollapseNav(){
              this.collapse_show=!this.collapse_show;
            }
        }
    }
</script>

<style lang="less">
  @import "../assets/css/header.less";
</style>
