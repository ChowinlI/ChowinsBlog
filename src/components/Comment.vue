<template>
    <div id="comment" class="comment-section">
      <h3 class="comment-title" v-if="comment.length>0">共有{{comment.length}}条评论</h3>
      <h3 class="comment-title" v-else>暂无评论，快来发射几条(￣▽￣)／</h3>
      <hr>
      <ul class="comment-list">
        <li class="comment-item" v-for="(item,index) in comment">
          <v-comment-item :comment="item" :index="index" @changeReplyStatus="toReply"></v-comment-item>
        </li>
      </ul>
      <v-comment-box ref="commentBox" :type="type" :responder="responder" @changeReplyStatus="toReply" @submit="submit" @cancel="cancel"></v-comment-box>
    </div>
</template>

<script type="text/ecmascript-6">
    import CommentItem from '../components/CommentItem.vue'
    import CommentBox from '../components/CommentBox.vue'
    export default{
        components:{
          'v-comment-item': CommentItem,
          'v-comment-box': CommentBox
        },
        props: [],
        data(){
            return{
                responder:"",
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
        },
      methods:{
            toReply(data){
                this.type = data.type;
                this.responder = data.name;
                this.chosenIndex = data.index;
                this.$refs.commentBox = "";
                window.location.href = "#comment-box";
            },
            submit(data){
                this.commenter = data.commenter;
                var time = this.getTime();
                if(this.chosenIndex == -1){
                    var item = {name: data.name, time: time, content: data.content,reply:[]};
                    this.comment.push(item);
                }else {
                    var item = { reviewer: this.commenter, responder: this.responder, time: time, content: data.content};
                    this.comment[this.chosenIndex].reply.push(item)
                }
                this.type = 0;
                this.chosenIndex = -1;
//                this.$refs.commentBox.content = "";
                console.log(this.$refs.commentBox.content);
            },
            cancel(data){
                this.type = data.type;
                this.chosenIndex = data.index;
                this.commenter  = data.commenter;
//                this.$refs.commentBox.content = "";
              console.log(this.$refs.commentBox.content);
            },
            getTime(){
              var date = new Date();
              var year = date.getFullYear();
              var month = date.getMonth() + 1;
              var day = date.getDate();
              var hour = date.getHours();
              var minute = date.getMinutes();
              month.length < 2 ? "0" + month : month;
              day.length < 2 ? "0" + day : day;
              hour.length< 2 ? "0" + hour : hour;
              minute.length < 2 ? "0" + minute : minute;
              return year + "-" + month + "-" + day + " " + hour + ":" + minute;
            }
      }
    }
</script>

<style lang="less">
  @import "../assets/css/common.less";
  @import "../assets/css/comment.less";
</style>
