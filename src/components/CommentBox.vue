<template>
  <div class="commentBox" id="comment-box">
    <h3 class="commentBox-title">发射弹幕~</h3>
    <form id="comment_form">
      <div class="form-item">
        <label for="name">昵称</label>
        <input type="text" name="name" id="name" v-model="nickname" autocomplete="off" required>
      </div>
      <div class="form-item">
        <label for="email">邮箱</label>
        <input type="text" name="email" id="email" v-model="email" autocomplete="off" required>
      </div>
      <div class="form-item">
        <textarea name="content" id="content" rows="4" v-model="content" :placeholder="textarea_placeholder" autocomplete="off"></textarea>
      </div>
      <div class="form-footer">
        <button type="button" class="cancel" @click="cancel">算了，不秀了</button>
        <button type="button" class="submit" @click="submit">Biu~</button>
      </div>
    </form>
    <!--<button class="btn" @click="addComment">发表</button>-->
    <!--<button class="btn" @click="cancelComment">取消</button>-->
  </div>
</template>

<script type="text/ecmascript-6">
    export default{
        props: ["type","responder"],
        data(){
            return{
                nickname: "",
                email: "",
                content: ""
            }
        },
      computed:{
        textarea_placeholder:function(){
          if(this.type != 0){
            return "你回复 "+this.responder;
          }else {
            return "皮这一下很开心……"
          }
        }
      },
      mounted(){
        this.content = this.oldComment;
      },
      methods:{
            cancel:function () {
              this.nickname = "";
              var data = {commenter:"",type:0,index:-1}
              this.$emit('cancel',data);
            },
            submit:function () {
              var data = {commenter:this.nickname, email:this.email, content:this.content};
              this.$emit('submit',data);
            }
      }
    }
</script>

<style lang="less">
  @import "../assets/css/common.less";
  @import "../assets/css/commentBox.less";
</style>
