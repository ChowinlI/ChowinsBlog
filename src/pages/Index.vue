<template>
  <div id="index">
      <!--<canvas id="canvas" class="canvas"></canvas>-->
    <div class="index-title"># 首页</div>
    <div class="tags">
      <div class="tags-item">学无止境</div>
      <div class="tags-item">供想时间</div>
      <div class="tags-item">真皮沙发</div>
      <div class="tags-item">你怎么说</div>
    </div>
    <section class="article-list">
      <div v-for="item in article_list" class="article-list-item">
        <div class="article-info-wrap">
          <div class="article-author-img">
            <img :src="item.author_pf">
          </div>
          <div class="vertical-line-div">
            <div class="vertical-line"></div>
          </div>
          <div class="article-info">
            <div class="article-info-title">
              <a href="">{{item.title}}</a>
            </div>
            <div class="article-info-others">
              <span class="author">{{item.author}}</span>
              <span class="created_at">{{item.created_time}}</span>
            </div>
          </div>
        </div>
        <div v-if="item.page" class="article-picture-wrap"><img class="article-picture" :src="item.page" alt=""></div>
        <div class="article-summary-div">
          <a href="javascript:void (0);">
            <p class="article-summary-p">{{item.desc}}</p>
          </a>
        </div>
        <div class="article-tags"><div v-for="i in item.tags" class="article-tags-item">{{i.name}}</div></div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'Index',
//  directives: { // 页面滚动时文章列表子项左右切入
//    scrollSlide:{
//      inserted:function (el) {
//          var h = window.innerHeight;
//          var s_top = $('#app').scrollTop(); //相当于是窗口垂直方向已滚动的距离
//          var t = $(el).offset().top + $("#header").height() - s_top; //元素距浏览器可视区域顶端的距离
//        //$("#header").height()是头部的高度，因为offsetTop是相对$('#index')即article_item[i]的offsetParent来计算的
//          if(t-h < -$(el).height()/2){
//            $(el).css('opacity',1);
//          }
//          document.getElementById('app').addEventListener('scroll',function () {
//            var s_top = $('#app').scrollTop(); //相当于是窗口垂直方向已滚动的距离
//            var t = $(el).offset().top + $("#header").height() - s_top; //元素距浏览器可视区域顶端的距离
//            if(t-h < -$(el).height()/2){
//              $(el).css('opacity',1);
//            }
//          });
//        }
//    }
//  },
  data () {
    return {
      article_list:[
        {
            title: "要不平凡，好像很难",
            author: "Chowin",
            author_pf: require('../assets/images/pf-photo2.jpg'),
            author_id: 1,
            created_time: "2018-06-15 17:10",
            page: require('../assets/images/page.jpg'),
            desc: "有的事情，平常心对待就好……",
            tags: [{name:"真皮沙发",id:1}]
        },
        {
          title: "我请贝爷吃皮蛋",
          author: "Chowin",
          author_pf: require('../assets/images/pf-photo2.jpg'),
          author_id: 1,
          created_time: "2018-06-15 17:10",
          page: require('../assets/images/page.jpg'),
          desc: "探险家贝爷曾说：万物去头皆可食……",
          tags: [{name:"真皮沙发",id:1}]
        }
      ]
    }
  },

  created(){
    $('body,html').animate({scrollTop:1},100);

  },
  mounted(){

  },
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../assets/css/common.less";
  @import "../assets/css/index.less";
</style>
