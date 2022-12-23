<template>
  <div class="footer-container">
    <p>我是底栏</p>
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
  height: @footerHeight;
  line-height: @footerHeight;
  background-color: #409EFF;
  margin-top: 2%;
  
  p {
    color: #ffffff;
    text-align: center;
  }
}

</style>