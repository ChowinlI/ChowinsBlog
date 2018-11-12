<template>
    <div id="comment" class="comment-section">
      <h3 class="comment-title" v-if="comment.length>0">共有{{comment.length}}条评论</h3>
      <h3 class="comment-title" v-else>暂无评论，快来发射几条(￣▽￣)／</h3>
      <hr>
      <ul class="comment-list">
        <li class="comment-item" v-for="(item,index) in comment">
          <v-comment-item :comment="item"></v-comment-item>
        </li>
      </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    import CommentItem from '../components/CommentItem.vue'
    export default{
        components:{
          'v-comment-item': CommentItem
        },
        props: [],
        data(){
            return{
                commenter: "", //评论人
                type: 0, //评论类型，0为评论作者，1为评论别人的评论，2为评论
                oldComment: null,
                chosenIndex: -1, //被选中的评论的index
                comment:[
                  {
                      name: "我请贝爷吃皮蛋",
                      time: "2018-11-07 16:05",
                      content: "感觉还行吧！",
                      reply: [
                        {
                          responder: "我请贝爷吃皮蛋",
                          reviewer: "有毒的五木君",
                          time: "2018-11-07 16:11",
                          content: "意思是真的不怎么样吧？"
                        },
                        {
                          responder: "我请贝爷吃皮蛋",
                          reviewer: "潘阿姨",
                          time: "2018-11-07 16:11",
                          content: "500"
                        }
                      ]
                  },
                  {
                      name: "Chowin不吃碧油鸡",
                      time: "2018-11-7 16:24",
                      content: "今晚开黑，我巴德贼6！",
                      reply: [
                        {
                          responder: "Chowin不吃碧油鸡",
                          reviewer: "英勇王者V",
                          time: "2018-11-07 16:30",
                          content: "求求你别秀了，对面0换5了"
                        }
                      ]
                  }
                ]
            }
        }
    }
</script>

<style lang="less">
  @import "../assets/css/common.less";
  @import "../assets/css/comment.less";
</style>
