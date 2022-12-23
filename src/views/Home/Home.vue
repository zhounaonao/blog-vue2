<template>
  <!-- 首页 -->
  <div class="home-container">
    <div class="home-left">
      <div class="home-left-top">
        <Card01></Card01>
      </div>
    </div>
    <div class="home-main">
      <div class="home-main-top">
        <Menu></Menu>

      </div>
    </div>
    <div class="home-right">

    </div>
  </div>
</template>

<script>
import Card01 from '@/components/Card/Card01.vue'
import Menu from '@/components/Menu/Menu.vue'
export default {
  components: {
    Card01, Menu
  }
}
</script>

<style lang="less" scoped>
.home-container {
  display: flex;
  width: 95%;
  height: 1000px;
  padding: 0 20px 40px 20px;
  margin: 0 auto;
  // background-image: url(http://oss.znn23.top/2022/12/wallhaven-j3m8y5_3840x2160.png);
  // background-size: 50% 30%;
  /* transparent 透明色 */
  /* background: 背景颜色 背景图片地址 背景平铺 背景图像滚动 背景图片位置 */
  /* background: background-color background-image background-repeat background-attachment background-position */
  /* 默认值 => background: transparent none repeat scroll 0% 0%; */
  background: transparent url(http://oss.znn23.top/2022/12/wallhaven-x18lgl_1280x720.png) 
  no-repeat fixed center top;
}

@media screen and (min-width: 400px) {
  .home-container {
    flex-direction: column;
    .home-left {
      width: 100%;
    }
    .home-main {
      width: 100%;
    }
  }
}

@media screen and (min-width: 800px) {
  .home-container {
    flex-direction: row;

    .home-left {
      width: 30%;
    }

    .home-main {
      width: 70%;
    }
  }
}
</style>