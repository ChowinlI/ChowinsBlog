<template>
  <div id="article">
    <div class="article-section">
      <div class="tag">真皮沙发</div>
      <div class="article-title"># 文章标题</div>
      <div class="article-attr">
        <div class="article-attr-item"><span class="iconfont icon-author"></span><span>Chowin</span></div>
        <div class="article-attr-item"><span class="iconfont icon-time"></span><span>2018-11-19 11:30</span></div>
        <div class="article-attr-item"><span class="iconfont icon-comments"></span><span>7</span></div>
        <div class="article-attr-item"><span class="iconfont icon-views"></span><span>4396</span></div>
      </div>
      <div class="article-content">文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容</div>
      <v-comment></v-comment>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Comment from '../components/Comment.vue'
  export default{
    props: [],
    components:{
      'v-comment': Comment
    },
    data(){
      return {}
    },

    methods:{

    }
  }
</script>

<style lang="less">
  @import "../assets/css/common.less";
  @import "../assets/css/article.less";
</style>
