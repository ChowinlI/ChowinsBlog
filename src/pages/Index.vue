<template>
  <div id="index">
      <!--<canvas id="canvas" class="canvas"></canvas>-->
    <div class="tags">
      <div class="tags-item">学无止境</div>
      <div class="tags-item">供想时间</div>
      <div class="tags-item">真皮沙发</div>
      <div class="tags-item">你怎么说</div>
    </div>
    <section class="article-list">
      <div class="article-list-item" v-scroll-slide>
        <div class="article-info-wrap">
          <div class="article-author-img">
            <img src="../assets/images/pf-photo.jpg">
          </div>
          <div class="vertical-line-div">
            <div class="vertical-line"></div>
          </div>
          <div class="article-info">
            <div class="article-info-title">
              <a href="">这个博客有 丶 东西</a>
            </div>
            <div class="article-info-others">
              <span class="author"><a href="">Chowin</a></span>
              <span class="created_at"><a href="">2018-06-15 17:10</a></span>
            </div>
          </div>
        </div>
        <div class="article-picture-wrap"><img class="article-picture" src="../assets/images/cat.png" alt=""></div>
        <div class="article-summary-div">
          <a href="">
            <p class="article-summary-p">噢？是吗（︶︿︶）＝╭∩╮</p>
          </a>
        </div>
        <div class="article-tags"><div class="article-tags-item">真皮沙发</div></div>
      </div>
      <div class="article-list-item" v-scroll-slide>
        <div class="article-info-wrap">
          <div class="article-author-img">
            <img src="../assets/images/pf-photo.jpg">
          </div>
          <div class="vertical-line-div">
            <div class="vertical-line"></div>
          </div>
          <div class="article-info">
            <div class="article-info-title">
              <a href="">这个博客有 丶 东西</a>
            </div>
            <div class="article-info-others">
              <span class="author"><a href="">Chowin</a></span>
              <span class="created_at"><a href="">2018-06-15 17:10</a></span>
            </div>
          </div>
        </div>
        <div class="article-picture-wrap"><img class="article-picture" src="../assets/images/cat.png" alt=""></div>
        <div class="article-summary-div">
          <a href="">
            <p class="article-summary-p">噢？是吗（︶︿︶）＝╭∩╮</p>
          </a>
        </div>
        <div class="article-tags"><div class="article-tags-item">真皮沙发</div></div>
      </div>
      <div class="article-list-item" v-scroll-slide>
        <div class="article-info-wrap">
          <div class="article-author-img">
            <img src="../assets/images/pf-photo.jpg">
          </div>
          <div class="vertical-line-div">
            <div class="vertical-line"></div>
          </div>
          <div class="article-info">
            <div class="article-info-title">
              <a href="">这个博客有 丶 东西</a>
            </div>
            <div class="article-info-others">
              <span class="author"><a href="">浏览&nbsp;16</a></span>
              <span class="author"><a href="">评论&nbsp;5</a></span>
              <span class="author"><a href="">Chowin</a></span>
              <span class="created_at"><a href="">2018-06-15 17:10</a></span>
            </div>
          </div>
        </div>
        <div class="article-picture-wrap"><img class="article-picture" src="../assets/images/cat.png" alt=""></div>
        <div class="article-summary-div">
          <a href="">
            <p class="article-summary-p">噢？是吗（︶︿︶）＝╭∩╮</p>
          </a>
        </div>
        <div class="article-tags"><div class="article-tags-item">真皮沙发</div></div>
      </div>
      <div class="article-list-item" v-scroll-slide>
        <div class="article-info-wrap">
          <div class="article-author-img">
            <img src="../assets/images/pf-photo.jpg">
          </div>
          <div class="vertical-line-div">
            <div class="vertical-line"></div>
          </div>
          <div class="article-info">
            <div class="article-info-title">
              <a href="">这个博客有 丶 东西</a>
            </div>
            <div class="article-info-others">
              <span class="author"><a href="">Chowin</a></span>
              <span class="created_at"><a href="">2018-06-15 17:10</a></span>
            </div>
          </div>
        </div>
        <div class="article-picture-wrap"><img class="article-picture" src="../assets/images/cat.png" alt=""></div>
        <div class="article-summary-div">
          <a href="">
            <p class="article-summary-p">噢？是吗（︶︿︶）＝╭∩╮</p>
          </a>
        </div>
        <div class="article-tags"><div class="article-tags-item">真皮沙发</div></div>
      </div>
      <div class="article-list-item" v-scroll-slide>
        <div class="article-info-wrap">
          <div class="article-author-img">
            <img src="../assets/images/pf-photo.jpg">
          </div>
          <div class="vertical-line-div">
            <div class="vertical-line"></div>
          </div>
          <div class="article-info">
            <div class="article-info-title">
              <a href="">这个博客有 丶 东西</a>
            </div>
            <div class="article-info-others">
              <span class="author"><a href="">Chowin</a></span>
              <span class="created_at"><a href="">2018-06-15 17:10</a></span>
            </div>
          </div>
        </div>
        <div class="article-picture-wrap"><img class="article-picture" src="../assets/images/cat.png" alt=""></div>
        <div class="article-summary-div">
          <a href="">
            <p class="article-summary-p">噢？是吗（︶︿︶）＝╭∩╮</p>
          </a>
        </div>
        <div class="article-tags"><div class="article-tags-item">真皮沙发</div></div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'Index',
  directives: { // 页面滚动时文章列表子项左右切入
    scrollSlide:{
        inserted:function (el) {
          var h = window.innerHeight;
          var s_top = $(window).scrollTop(); //相当于是窗口垂直方向已滚动的距离
          var t = $(el).offset().top + $("#header").height() - s_top; //元素距浏览器可视区域顶端的距离
          //$("#header").height()是头部的高度，因为offsetTop是相对$('#index')即article_item[i]的offsetParent来计算的
          if((t-h) < -50){
            $(el).css('left',0);
          }
          $(window).on('scroll',function () {
            var s_top = $(window).scrollTop(); //相当于是窗口垂直方向已滚动的距离
            var t = $(el).offset().top + $("#header").height() - s_top; //元素距浏览器可视区域顶端的距离
            if((t-h) < -50){
              $(el).css('left',0);
            }
          })
        }
    }
  },
  data () {
    return {

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
