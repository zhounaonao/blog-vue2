<template>
  <div class="article-container">
    <div class="article-tools box-sha">
      <ArticleTools :likeCount="blog.likeCount" :starCount="blog.starCount" @update-count="updateCount"></ArticleTools>
      <!-- <div class="tool" @click="updateViewCount"><span class="heart"></span><span class="count">{{ blog.likeCount }}</span></div> -->
    </div>
    <div class="article-main page-width">
      <router-view :blog="blog"></router-view>
    </div>
    <div class="comment-main page-width">
      <div class="create-comment">
        <CreateComment></CreateComment>
      </div>
      <div class="comment-list">
        <ul>
          <Comment @submit-content="submitComment"></Comment>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticleDetail, updateViewCount, updateCount } from '@/api/ArticleAPI.js'
import { addComment } from '@/api/CommentAPI.js'
import ArticleTools from '@/components/Article/ArticleTools.vue'
import Comment from '@/components/Comment/Comment.vue'
import CreateComment from '@/components/Comment/CreateComment.vue'
export default {
  name: 'Article',
  components: {
    ArticleTools,
    Comment,
    CreateComment
  },
  props: {
    id: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {
      blog: {},
      content: ''
    }
  },
  created() {
    this.getArticleDetail()
    this.updateViewCount()
  },
  methods: {
    async getArticleDetail() {
      const { data:res } = await getArticleDetail(this.id)
      this.blog = res
    },
    async updateViewCount() {
      const res = await updateViewCount(this.id)
    },
    async updateCount(countString) {
      const res = await updateCount(this.id, countString)
      console.log(res);
    },
    async submitComment(e) {
      const res = await addComment({
        articleId: this.id,
        content: e
      })
      console.log(res);
    }
  }
}
</script>

<style lang="less" scoped>
.article-container {
  padding: 60px 0 0 0;

  .article-main {
    margin: 0 auto;
  }
  .article-tools {
    position: fixed;
    top: 120px;
    left: 50%;
    margin-left: 600px;

  }
  .comment-main {
    .create-comment {
    }
  }

}
</style>