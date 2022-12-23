<template>
  <div class="menu-container">
    <div class="nav">
      <a href="#">五彩导航</a>
      <a href="#">五彩导航</a>
      <a href="#">五彩导航</a>
      <a href="#">五彩导航</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<style lang="less" scoped>
.nav a{
  display: inline-block;
  width: 120px;
  height: 58px;
  line-height: 58px;
  text-align: center;
  text-decoration: none;
  color: #fff;

}

.nav a:hover{
  background-color: red;
}
</style>