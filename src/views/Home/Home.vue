<template>
  <!-- 首页 -->
  <div class="home-container">
    <div class="top-container page-width">
      <div class="top-center" :style="topCenterStyle">
        云想衣裳花想容，春风拂槛露华浓
      </div>
    </div>
    <div class="bottom-background">
      <div class="bottom-container page-width">
        <!-- <div class="home-left">
          <div class="home-left-top">
            <Card01></Card01>
          </div>
          <div class="home-left-center">
          </div>
          <div class="home-left-bottom">
          </div>
        </div> -->
        <div class="home-main">
          <div class="home-main-top">
            <ArticleList></ArticleList>
          </div>
        </div>
        <div class="home-right">

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Card01 from '@/components/Card/Card01.vue'
import ArticleList from '@/views/Study/ArticleList.vue'

export default {
  components: {
    Card01,
    ArticleList
  },
  computed: {
    topCenterStyle() {
      return {height: this.pageHeight}
    }
  },
  data() {
    return {
      pageHeight: '1080px'
    }
  },
  created() {
    // 监听窗口变化，设置表格高度
    this.setTopCenterHeight
    window.addEventListener('resize', this.setTopCenterHeight)
  },
  methods: {
    setTopCenterHeight() {
      this.pageHeight =
        window.innerHeight - 210 ||
        document.documentElement.clientHeight - 210 ||
        document.body.clientHeight - 210
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  padding: 60px 0 0 0;
  margin: 0 auto;
  background: transparent
    url(http://oss.znn23.top/file/background/wallhaven-85ox3j_1920x1080.png)
    no-repeat fixed 0% 0%;
  // background-size: 50% 30%;
  /* transparent 透明色 */
  /* background: 背景颜色 背景图片地址 背景平铺 背景图像滚动 背景图片位置 */
  /* background: background-color background-image background-repeat background-attachment background-position */
  /* 默认值 => background: transparent none repeat scroll 0% 0%; */
  .top-container {
    // width: 80%;
    margin: 0 auto;
    background-color: transparent;

    .top-center {
      padding: 220px 0 0 0;
      text-align: center;
      font-weight: 600;
    }
  }
  .bottom-background {
    background-color: #f5f5f5;
  }
  .bottom-container {
    display: flex;
    flex-direction: row;
    margin: 0 auto;

    /* 阴影 => box-shadow: x, y, 模糊度, 大小, 颜色 inset(内部阴影，可选) */
    // box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3);

    // .home-left-top {
    //   /* 粘性定位，浏览器可视区，必须有top，bottom，left，right等其中的一个 */
    //   position: sticky;
    //   top: 60px;
    // }

    .home-main {
      width: 100%;
    }
  }
}

// @media screen and (min-width: 400px) {
//   .bottom-container {
//     flex-direction: column;
//     .home-left {
//       width: 100%;
//       .card01-container {
//         width: 100%;
//       }
//     }
//     .home-main {
//       width: 100%;
//     }
//   }
// }

// @media screen and (min-width: 1000px) {
//   .bottom-container {
//     flex-direction: row;

//     .home-left {
//       width: 30%;

//       .home-left-top {
//         .card01-container {
//           width: 200px;
//           margin: 0 auto;
//         }
//       }
//     }

//     .home-main {
//       width: 100%;
//     }
//   }
// }
</style>