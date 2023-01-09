<template>
  <div class="article-tools-container">
    <div class="like" ref="like" @click="updateCount('like')">
      <span class="icon-class">&#xe7df;</span><span class="count">{{ likeCount }}</span>
    </div>
    <div class="star" @click="updateCount('star')">
      <span class="icon-class">&#xe7e0;</span><span class="count">{{ starCount }}</span>
    </div>
  </div>
</template>

<script>
import { ARTICLE_COUNT_STRING } from '@/constants/ArticleConstants.js'
export default {
  name: 'ArticleTools',
  computed: {
    logined() {
      return this.$store.state.logined
    }
  },
  props: {
    likeCount: {
      type: [Number, String],
      default: 0
    },
    starCount: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {
    }
  },
  methods: {
    updateCount(countString) {
      // 不是登录状态就提示未登录
      if (!this.logined) {
        this.$message.error('未登录，请先登录');
        return;
      }
      if (countString === 'like') {
        this.$emit('update-count', ARTICLE_COUNT_STRING.ARTICLE_LIKE_COUNT)
        console.log(this.$refs.like);
      }
      if (countString === 'star') {
        this.$emit('update-count', ARTICLE_COUNT_STRING.ARTICLE_STAR_COUNT)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.article-tools-container {
  .like, .star {
    line-height: 60px;
    padding: 0 10px 0 2px;
    span {
      display: inline-block;
      height: 60px;
    }
    .icon-class {
      width: 40px;
      text-align: center;
      cursor: pointer;
      
    }
    .icon-class {
      text-align: center;
      font-family: 'iconfont' !important;
      color: red;
      font-size: 30px;
      vertical-align: middle;
      transition: all 0.5s;
    }
    .icon-class:hover {
      font-size: 40px;
    }
    .count {
      font-size: 20px;
      vertical-align: top;
    }
  }
  .like {
    // .icon-class::before {
    //   content: '\e7df';
    // }

    // /* 动画效果 */
    // .icon-class:hover::before {
    //   font-size: 40px;
    //   content: '\e849';
    // }
  }
  .star {

  }
}
</style>