<template>
    <div id="roast">
      <div class="roast-section">
        <div class="roast-title"># 吐槽</div>
        <hr>
        <div class="roast-content">
          <div class="roast-paragraph" style="margin-bottom: 4rem;">预留区，还没想好要弄什么有意思的东西</div>
          <hr>
          <blockquote>
            <div class="blockquote-title">我们来撩撩(￢_￢)</div>
            <div class="blockquote-paragraph">欢迎来到叁巷肆号，一个逗比web前端技术爱好者的世界。<br>
            这里我们不仅可以聊技术，还可以聊生活，聊兴趣爱好，聊时事热点……<br>
            LOL忠实玩家一枚，唯美食与自由不可辜负，喜欢夜跑、爬山，平时会看一些悬疑类的小说，最近在学英语和摄影，还希望dalao们能带一带~
            </div>
            <div class="blockquote-title">有丶东西啊っﾟДﾟ)っ</div>
            <div class="blockquote-paragraph">因为脑洞大（或者说是天真），而且不安分，平时会跟基友搞一些好玩且实用的APP或者小程序，如果你有想法，我们可以一起快乐地玩耍鸭！</div>
          </blockquote>
        </div>
      </div>
      <div class="comment-section">
        <v-comment></v-comment>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import Comment from "../components/Comment.vue"
    export default{
        props: [],
        components:{
            'v-comment': Comment
        }
    }
</script>
<style lang="less">
  @import "../assets/css/common.less";
  @import "../assets/css/roast.less";
</style>
