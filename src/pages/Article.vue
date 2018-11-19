<template>
  <div id="article">
    <div class="article-section">
      <div class="tag">真皮沙发</div>
      <div class="article-title"># 文章标题</div>
      <div class="article-attr">
        <div class="article-attr-item">Chowin</div>
        <div class="article-attr-item">发表于：2018-11-19 11:30</div>
        <div class="article-attr-item">评论：7</div>
        <div class="article-attr-item">阅读数：4396</div>
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
