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
        <CreateComment @submit-content="submitComment"></CreateComment>
      </div>
      <div class="comment-list">
        <ul>
          <Comment v-for="item in commentList" :key="item.id" :comment="item" @update-count="updateCommentCount">
            <template #default>
              <CreateComment  @submit-content="submitReply(item.id, item.createBy, item.parentId, $event)"></CreateComment>
            </template>
        </Comment>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticleDetail, updateViewCount, updateCount } from '@/api/ArticleAPI.js'
import { addComment, getCommentList, updateCommentCount } from '@/api/CommentAPI.js'
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
      commentList: []
    }
  },
  created() {
    this.getArticleDetail()
    this.updateViewCount()
    this.getCommentList()

  },
  methods: {
    async getArticleDetail() {
      const { data:res } = await getArticleDetail(this.id)
      this.blog = res
    },
    async updateViewCount() {
      const res = await updateViewCount(this.id)
    },
    async getCommentList() {
      const res = await getCommentList(1, 10, this.id)
      this.commentList = res.data.rows
    },
    async updateCount(countString) {
      const res = await updateCount(this.id, countString)
      console.log(res)
    },
    async submitComment(e) {
      const comment = {
        articleId: this.id,
        content: e
      }
      const res = await addComment(comment)
      this.getCommentList()
    },
    async submitReply(id, userId, parentId, e) {
      if (parentId == 0) {
        parentId = id
      }
      const comment = {
        articleId: this.id,
        toCommentUserId: userId,
        toComment: id,
        parentId: parentId,
        content: e
      }
      const res = await addComment(comment)
      console.log(res);
      this.getCommentList()

    },
    async updateCommentCount(e) {
      const res = await updateCommentCount(e.id, e.countString)
      this.getCommentList()

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
    // left: 10%;
    background-color: #f5f5f5;
    border-radius: 10px;
    z-index: 100;
  }
  .comment-main {
    .create-comment {
    }
  }

}
</style>