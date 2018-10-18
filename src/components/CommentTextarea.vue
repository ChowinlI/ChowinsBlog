<template>
  <div class="commentBox">
    <h3>发表评论</h3>
    <b v-if="type">你回复&nbsp;{{name}}</b>
    <textarea name="" value="请填写评论内容" v-model="commentText"></textarea>
    <button class="btn" @click="addComment">发表</button>
    <button class="btn" @click="cancelComment">取消</button>
  </div>
</template>

<script type="text/ecmascript-6">
    export default{
        props: ["type","name"],
        data(){
            return{
                commentText: ""
            }
        },
      methods:{
            addComment:function () {
              this.$emit("submit",this.commentText);
              this.commentText = "";
            },
            cancelComment:function () {
              this.$emit("cancel");
              this.commentText = "";
            }
      }
    }
</script>
