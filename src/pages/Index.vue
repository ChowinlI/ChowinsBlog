<template>
  <div id="index">
    <div class="main">
      <v-header></v-header>
      <main>

      </main>
      <v-footer></v-footer>
    </div>
      <!--<canvas id="canvas" class="canvas"></canvas>-->
  </div>
</template>

<script>

  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'

export default {
  name: 'Index',
  components:{
    'v-header': Header,
    'v-footer': Footer
  },
  data () {
    return {

    }
  },
  created(){

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
  @import "../assets/css/iconfont.css";
  @import "../assets/css/index.css";
</style>
