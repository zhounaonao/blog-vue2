<template>
    <div class="article-container box-btm">
      <div class="article-img">
        <img :src="article.thumbnail">
      </div>
      <div class="article-main">
        <div class="article-title">{{ article.title }}</div>
        <div class="article-summary">{{ article.summary }}</div>
        <a href="javascript:;" class="article-category-name" @click.stop="gotoCategory">{{ article.categoryName }}</a>
        <!-- <div class="article-category-name" @click.stop="gotoCategory">{{ article.categoryName }}</div> -->
        <div class="article-last">
          <div class="article-create-time">发布时间：{{ article.createTime }}</div>
          <div class="article-view-count">浏览: {{ article.viewCount }} ,</div>
          <div class="article-like-count">喜欢: {{ article.likeCount }} ,</div>
          <div class="article-star-count">收藏: {{ article.starCount }} </div>
        </div>
      </div>
    </div>

</template>

<script>
export default {
  name: 'ArticleInfo',
  props: {
    id: {
      type: [Number, String],
      default: 1
    },
    article: {
      type: Object
    }
  },
  data() {
    return {

    }
  },
  methods: {
    gotoCategory() {
      if (this.article && this.article.categoryId) {
        this.$router.push('/study/type/' + this.article.categoryId)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.article-container {
  // background-color: #b09563;
  display: flex;
  margin: 10px 0;
  /* 动画效果 */
  transition: all .5s;

  .article-img {
    // width: 16rem;
    height: 6rem;
    padding: 1px;
    text-align: center;
    img {
      // width: 16rem;
      height: 100%;
      border-radius: 8px;
    }
  }

  .article-main {
    width: 100%;
    position: relative;
    padding: 0.1rem 0.4rem;
    overflow: hidden; // 溢出部分不显示
    font-size: 36px;
    font-family: PingFang SC,Hiragino Sans GB,Arial,Microsoft YaHei;

    .article-title {
      // text-align: center;
      // padding: 0.2rem 1rem 0 0;
      /* font-size 和 font-family不可以省略
          font: font-style font-weight font-size/line-height font-family */
      font-weight: 600;
      font-size: .6em;
    }

    .article-category-name {
      width: 2rem;
      height: 1rem;
      font-size: .3em;
      line-height: 1rem;
      text-align: center;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 2px;
      background-size: 2rem 1rem;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      transition: all .5s;
    }

    .article-category-name:hover {
      box-shadow: 0 2px 12px 0 rgba(255, 0, 0, 0.3);
    }

    .article-summary {
      font-size: 0.4em;
    }

    .article-last {
      position: absolute;
      bottom: 5px;
      font-size: 0.3em;
      text-align: center;
      display: flex;
      justify-content: center;
      .article-create-time {
        padding-right: 1rem;
      }
    }
  }
}

.article-container:hover {
    transform: translateY(-5px);
  }
</style>