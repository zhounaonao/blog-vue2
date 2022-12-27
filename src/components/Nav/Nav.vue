<template>
  <div class="nav-container">
    <div class="nav-main">
      <ul>
        <li><a href="#">首页</a></li>
        <li><a href="#">测试</a></li>
        <li><a href="#">学习</a></li>
        <li><a href="#">收藏</a></li>
        <li><a href="#">我的</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>

.nav-main {
  background-color: #ccc;
  
  ul {
    height: 60px;
  }

  li {
    float: left;
    padding: 0 20px;
    font-size: 0.6rem;
    line-height: 60px;
  }
  ul :hover {
    background-color: #f5f5f5;
  }

  ul :active {
    background-color: #f5f5f5;
  }
}

</style>