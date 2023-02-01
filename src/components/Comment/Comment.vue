<template>
  <div class="comment-container">
    <div class="comment-main">
      <div class="avatar">
        <img :src="comment.avatar">
      </div>
      <div class="comment-right">
        <div class="tools">
          <div class="time">{{ comment.createTime }}</div>
          <div class="center"></div>
          <div class="reply" @click="createCommentVisible=!createCommentVisible">
            <a href="javascript:;">
              <span class="icon-class">&#xe78a;</span><span>回复</span>
            </a>
          </div>
          <div class="like" @click="updateCount">
            <a href="javascript:;">
              <span class="icon-class">&#xe7c8;</span><span>{{ comment.likeCount }}</span>
            </a>
          </div>
        </div>
        <div class="comment-content">
          <span>{{ comment.userName }}: </span><span>{{ comment.content }}</span>
        </div>
        <div class="reply-area" v-if="comment.children[0]">
          <CommentChildren v-for="item in comment.children" :key="item.id" :comment="item"></CommentChildren>
        </div>
        <slot v-if="createCommentVisible"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import CreateComment from '@/components/Comment/CreateComment.vue'
import CommentChildren from '@/components/Comment/CommentChildren.vue'
import { COMMENT_COUNT_STRING } from '@/constants/CommentConstants.js'

export default {
  name: 'Comment',
  components: {
    CreateComment,
    CommentChildren
  },
  props: {
    comment: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data() {
    return {
      createCommentVisible: false
    }
  },
  methods: {
    updateCount() {
      this.$emit('update-count', {id: this.comment.id, countString: COMMENT_COUNT_STRING.COMMENT_LIKE_COUNT})
    }
  }
}
</script>

<style lang="less" scoped>
.comment-container {
  .comment-main {
    display: flex;
    padding: 16px 0;
    border-bottom: 1px solid #ececec;
    font-size: 14px;
    .avatar {
      padding: 0 10px 0 0;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }

    .comment-right {
      width: 100%;

      .tools {
        display: flex;
        width: 100%;
        justify-content: center;
        .time {
          font-size: 12px;
        }
        .center {
          flex: 1;
        }
        .reply,
        .like {
          padding: 0 10px;
        }
      }
      .comment-content {

      }
      .reply-area {
        padding: 16px;
        background-color: #efefef;
        font-size: 12px;
        line-height: 20px;
        border-radius: 4px;
      }
    }

  }
}
</style>