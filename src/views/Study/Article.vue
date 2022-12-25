<template>
  <div class="article-container">
    <div class="article-img">img</div>
    <div class="article-main">main</div>
  </div>
</template>

<script>
export default {
  name: 'Article'
}
</script>

<style lang="less" scoped>
.article-container {
  background-color: #750303;
  display: flex;

  .article-img {
    width: 300px;
    height: 300px;
    background-color: #f5f5f5;
  }

  .article-main {
    background-color:aqua;
  }
}
</style>