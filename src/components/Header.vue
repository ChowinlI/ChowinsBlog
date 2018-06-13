<template>
    <header id="header">
      <div class="nav">
        <nav>
          <div class="logo">Chowin的博客</div>
          <li class="nav-item"><router-link to="">首页</router-link></li>
          <li class="nav-item"><router-link to="">学无止境</router-link></li>
          <li class="nav-item"><router-link to="">供想时间</router-link></li>
          <li class="nav-item"><router-link to="">关于我</router-link></li>
        </nav>
        <div class="search" id="search">
          <div class="input-wrap">
            <input type="text" name="search">
            <div class="input-empty">×</div>
          </div>
          <div class="search-btn"><i class="iconfont icon-search"></i><span>&nbsp;搜索</span></div>
        </div>
      </div>
    </header>
</template>

<script type="text/ecmascript-6">
    export default{
        props: []
    }
</script>

<style lang="less">
  @import "../assets/css/header.less";
  @import "//at.alicdn.com/t/font_694553_5f4tvxhd0d4.css";
</style>
