<template>
    <div id="friends">
      <section class="friends-section">
        <h3 class="friends-title"># dalao们的TP眼位：</h3>
        <ul class="friends-ul">
          <li class="friends-li" v-for="item in friends">
            <div class="friends-li-div">
              <div class="friends-pf-img">
                <img :src="item.avatar">
              </div>
              <div class="vertical-line-div">
                <div class="vertical-line"></div>
              </div>
              <div class="friends-info">
                <div class="friends-info-name">
                  <a href="">{{item.name}}</a>
                </div>
                <div class="friends-info-others">
                  <span>{{item.desc}}</span>
                </div>
              </div>
            </div>
            <div class="friends-li-div">
              <h4 class="friends-motto">-- {{item.tag}}</h4>
            </div>
          </li>
        </ul>
      </section>
    </div>
</template>

<script type="text/ecmascript-6">

    export default{
        props: [],
        data(){
            return{
                friends:[
                  {
                      name:'asd',
                      avatar: require('../assets/images/pf-photo3.jpg'),
                      desc: '全栈开发',
                      tag: '一个程序员'
                  },
                  {
                    name:'Chowin',
                    avatar: require('../assets/images/pf-photo2.jpg'),
                    desc: '233333333333',
                    tag: '闹着玩的'
                  },
                  {
                    name:'Chowin的小号',
                    avatar: require('../assets/images/pf-photo.jpg'),
                    desc: '这样的小号还有好几个',
                    tag: '闹着玩的'
                  }
                ]
            }
        }
    }
</script>

<style lang="less">
  @import "../assets/css/common.less";
  @import "../assets/css/friends.less";
</style>
