<template>
  <div id="article">
    <article-content v-bind:article="article"></article-content>
    <comment-textarea v-bind:type="type" v-bind:name="oldComment" v-on:submit="addComment"
                      v-on:canel="canelCommit"></comment-textarea>
    <commemt-content v-bind:comment="comment" v-on:change="changCommmer"></commemt-content>
  </div>
</template>

<script type="text/ecmascript-6">
  import ArticleText from '../components/ArticleText.vue' //文章组件
  import Comment from '../components/Comments.vue' //评论区组件
  import CommentTextarea from '../components/CommentBox.vue' //评论框组件
  export default{
    props: [],
    components:{
      'article-content': ArticleText,
      'commemt-content': Comment,
      'comment-textarea': CommentTextarea
    },
    data(){
      return {
        commenter: "鲁迅没说过", //当前评论人
        type: 0,  //评论类型，0为对文章的评论，1为二级评论
        commentAuthor: "",
        commentIndex: -1,
        article: {
          title: "电影《动物世界》所表达的几个主题",
          create_time: "2018-06-30",
          read_count: 50,
          content: "宁做小丑，不做人渣"
        },
        //评论列表
        comment: [
          {
            name: "我，九义毕业",
            time: "2018-06-30",
            content: "该打的仗，老子都打过了；要跑的路，也跑到了尽头。就算全世界都恶，我也要善良！",
            reply: [
              {
                responder: "阁下必定是十年寒窗",
                reviewer: "我，九义毕业",
                time: "2018-06-30",
                content: "真羡慕有钱补课的人"
              }
            ]
          }
        ]
      }
    },
    methods: {
      //添加评论
      addComment: function (data) {
        if (this.type == 0) {
          this.comment.push({
            name: '',
            time: '',
            content: data,
            reply: []
          });
          //服务器端
        } else if (this.type == 1) {
            var date = new Date();
          this.comment[this.commentIndex].reply.push({
            responder: 'session',
            reviewers: this.comment[this.chosedIndex].name,
            time: date.getTime(),
            content: data
          });
          //服务器端
          this.type = 0;
        }
      },
      //回复评论
      changeCommmer: function (name,index){
        this.commentAuthor = name;
        this.commentIndex = index;
        this.type = 1;
      },
      //取消回复
      canelCommit: function (){
        this.type = 0;
      }
    }
  }
</script>
