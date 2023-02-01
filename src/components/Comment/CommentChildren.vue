<template>
  <div class="comment-children-container">
    <span>{{ comment.userName }}: </span>回复<span>{{ comment.toCommentUserName }}: </span><span>{{ comment.content }}</span>
  </div>
</template>

<script>
export default {
  name: 'CommentChildren',
  props: {
    comment: {
      type: Object,
      default: function() {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
.comment-children-container:hover::after {
  content: '回复';
  padding-left: 10px;
  color: #000;
}
</style>