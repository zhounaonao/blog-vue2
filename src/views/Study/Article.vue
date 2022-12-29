<template>
    <div class="article-container box-btm">
      <div class="article-img">
        <img :src="img">
      </div>
      <div class="article-main">
        <div class="article-title">{{ title }}</div>
        <div class="article-summary">{{ summary }}</div>
        <div class="article-category-name">{{ categoryName }}</div>
        <div class="article-last">
          <div class="article-create-time">发布时间：{{ time }}</div>
          <div class="article-view-count">已被浏览 {{ viewCount }} 次</div>
        </div>
      </div>
    </div>

</template>

<script>
export default {
  name: 'Article',
  props: {
    id: {
      type: [Number, String],
      default: 1
    },
    img: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    summary: {
      type: String,
      default: ''
    },
    categoryName: {
      type: String,
      default: ''
    },
    viewCount: {
      type: [Number, String],
      default: 0
    },
    time: {
      type: String,
      default: ''
    }
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.article-container {
  // background-color: #b09563;
  display: flex;
  margin: 10px 0;
  border: 1px solid #927e59;
  /* 合并相邻的边框 */
  border-collapse: collapse;

  .article-img {
    // width: 16rem;
    height: 9rem;
    text-align: center;
    img {
      // width: 16rem;
      height: 9rem;
      border-radius: 8px;
    }
  }

  .article-main {
    width: 100%;
    position: relative;
    padding: 0.2rem 0.4rem;
    overflow: hidden; // 溢出部分不显示

    .article-title {
      text-align: center;
      padding: 0.2rem 1rem 0 0;
      /* font-size 和 font-family不可以省略
          font: font-style font-weight font-size/line-height font-family */
      font: 600 1.2rem 'KaiTi';
    }

    .article-category-name {
      width: 2rem;
      height: 1rem;
      padding-left: 0.5rem;
      font: 600 0.6rem 'KaiTi';
      line-height: 1rem;
      text-align: center;
      position: absolute;
      top: 0.1rem;
      right: 0rem;
      background: transparent
        url(http://oss.znn23.top/file/%E6%A0%87%E7%AD%BE/label.png) no-repeat
        scroll top center;
      background-size: 2rem 1rem;
      box-shadow: 0.2rem 0.1rem 0.2rem 0.03rem rgba(0, 0, 0, 0.3);
    }

    .article-summary {
      font-size: 0.8rem;
    }

    .article-last {
      position: absolute;
      bottom: 5px;
      font-size: 0.6rem;
      text-align: center;
      display: flex;
      justify-content: center;
      .article-create-time {
        padding-right: 1rem;
      }
    }
  }
}
</style>