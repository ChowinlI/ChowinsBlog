<template>
    <div class="comment-item">
      <div class="comment-author">
        <div class="comment-author-avatar"><img src="../assets/images/pf-photo2.jpg" alt=""></div>
        <div class="comment-author-name">
          <p class="name">{{comment.name}}</p>
          <p class="time">{{comment.time}}</p>
        </div>
      </div>
      <div class="comment-content">
        {{comment.content}}
        <span class="reply-btn" @click="handleReply(comment.name,1)">回复</span>
      </div>
      <div class="reply-wrap">
        <ul class="reply-list">
          <li class="reply-item" v-for="item in comment.reply">
            <div class="reply-author">
              <div class="reply-author-avatar"><img src="../assets/images/pf-photo2.jpg" alt=""></div>
              <div class="reply-author-name">
                <p class="name"><span>{{item.reviewer}}</span> 回复 <span>{{item.responder}}</span></p>
                <p class="time">{{item.time}}</p>
              </div>
            </div>
            <div class="reply-content">
              {{item.content}}
              <span class="reply-btn" @click="handleReply(item.reviewer,2)">回复</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        props: ['comment','index'],
        data(){
            return{

            }
        },
        created(){
//          console.log(this.comment);
        },
        methods:{
            handleReply(name,type){
              var data = {name:name,type:type,index:this.index};
              this.$emit('changeReplyStatus',data)
            }
        }
    }
</script>

<style lang="less">

</style>
