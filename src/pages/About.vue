<template>
    <div id="about">
      <div class="about-section">
        <div class="about-title"># 这个家伙有点矛盾</div>
        <div class="about-content">
          <p class="about-prologue">青春一记荒唐，却亦然学着疯狂……</p>
          <div class="about-pic"><img :src="pic" alt="" style="display:block;margin: 0 auto"></div>
          <hr>
          <blockquote><strong>关于博主</strong></blockquote>
          <p class="about-paragraph">被某个95后称为叔叔的95后，一个一点都不处女座的处女座，一个喜欢沉默的段子手。</p>
          <p class="about-paragraph">兴趣爱好广泛，但是没什么特长，有的事只是因为喜欢做而去做而且会很疯狂去做，只注重体验不注重结果。<br>
            2013年S赛期间被舍友带入召唤师峡谷，正式成为一名召唤师。比较喜欢开黑，并在坚持逗比玩法的路上越走越远直至今天。可能很多曾经一起战斗的小伙伴都离开了，但这毕竟是青春啊(:<br>
            喜欢玩桌游，在狼人、三国杀和UNO中被我坑过的队友和对手都不计其数。<br>
            夜跑、徒步和爬山都是我进行自我调整的方式，只有这时整个世界才是安静的。曾经也喜欢篮球，但多次崴脚后，就没有然后了。最近开始接触健身……<br>
            大二的时候接触H5,现在主要做前端，也会做小程序，并开始接触桌面端。这算是个能混口饭吃的兴趣吧，哈哈……<br>
            个人有点选择性内向，对陌生的人和事会不感冒，但要是兴趣起来了，又会很疯狂。最近有在了解摄影和PS方面的东西，有点被迫的感觉。<br>
            这个日常真香的人还要继续努力充实自己，争取解锁更多的技能！
          </p>
          <blockquote><strong>关于博客</strong></blockquote>
          <p class="about-paragraph">叁巷肆号诞生于2018年年末，这里记录了我的一些心路历程，日常吐槽还有技术分享与交流。</p>
          <p class="about-paragraph">欢迎大家来访━(*｀∀´*)ノ!</p>
          <hr>
          <p class="about-paragraph">日常唠嗑，请来这里：<a href="javascript:void (0);">no3lane4.com</a></p>
          <p class="about-paragraph">不想大声说，那就密一下<a href="javascript:void (0);">no3lane4@163.com</a>吧</p>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        props: [],
        data(){
          return{
            pic: require('../assets/images/pic.jpg')
          }
        }
    }
</script>

<style lang="less">
  @import "../assets/css/common.less";
  @import "../assets/css/about.less";
</style>
