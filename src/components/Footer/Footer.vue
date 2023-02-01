<template>
  <div class="footer-container">
    <p>ICP备案/许可证号: <a href="https://beian.miit.gov.cn/">浙ICP备2022032978号-1</a></p>
    <p><a>我的邮箱: 1737381081@qq.com</a></p>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="less" scoped>
@footerHeight: 60px;
.footer-container {
  position: relative;
  height: @footerHeight;
  line-height: @footerHeight;
  background-color: #f5f5f5;
  z-index: 12;

  p {
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    text-align: center;
  }
}

</style>