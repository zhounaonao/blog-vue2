<template>
  <!-- 首页 -->
  <div class="home-container">
    <div class="top-container">
      <div class="top-center">
        你好,往下拉...
      </div>
    </div>
    <div class="bottom-container">
      <div class="home-left">
        <div class="home-left-top">
          <Card01></Card01>
        </div>
        <div class="home-left-center">
        </div>
        <div class="home-left-bottom">
        </div>
      </div>
      <div class="home-main">
        <div class="home-main-top">
          <ArticleList :articleList="articleList"></ArticleList>
        </div>
      </div>
      <div class="home-right">

      </div>
    </div>

  </div>
</template>

<script>
import Card01 from '@/components/Card/Card01.vue'
import ArticleList from '@/views/Study/ArticleList.vue'
import { articleList } from '@/api/ArticleAPI.js'

export default {
  components: {
    Card01,
    ArticleList
  },
  data() {
    return {
      pageNum: 1,
      pageSize: 10,
      articleList: []
    }
  },
  created() {
    this.getArticleList()
  },
  methods: {
    async getArticleList() {
      const { data: res } = await articleList(
        this.pageNum,
        this.pageSize,
        this.categoryId
      )
      this.articleList = res.rows
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  padding: 60px 0 0 0;
  margin: 0 auto;
  background: transparent
    url(http://oss.znn23.top/2022/12/wallhaven-85ox3j_1920x1080.png) no-repeat
    fixed 0% 0%;
  // background-size: 50% 30%;
  /* transparent 透明色 */
  /* background: 背景颜色 背景图片地址 背景平铺 背景图像滚动 背景图片位置 */
  /* background: background-color background-image background-repeat background-attachment background-position */
  /* 默认值 => background: transparent none repeat scroll 0% 0%; */
  .top-container {
    background-color: transparent;

    .top-center {
      padding: 300px;
      height: 1080px;
      margin: auto;
      text-align: center;
    }
  }
  .bottom-container {
    display: flex;
    padding: 60px 0 0 0;
    background-color: #f5f5f5;
    /* 阴影 => box-shadow: x, y, 模糊度, 大小, 颜色 inset(内部阴影，可选) */
    box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.3);
  }
}

@media screen and (min-width: 400px) {
  .bottom-container {
    flex-direction: column;
    .home-left {
      width: 100%;
      .card01-container {
        width: 100%;
      }
    }
    .home-main {
      width: 100%;
    }
  }
}

@media screen and (min-width: 1000px) {
  .bottom-container {
    flex-direction: row;

    .home-left {
      width: 20%;

      .home-left-top {
        .card01-container {
          width: 200px;
          margin: 0 auto;
        }
      }
    }

    .home-main {
      width: 80%;
    }
  }
}
</style>