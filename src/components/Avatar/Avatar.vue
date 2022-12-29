<template>
  <div class="avatar-container">
    <router-link class="avatar-link" to="/user">
      <img src="http://oss.znn23.top/file/caitou.png">
    </router-link>
    <span>
      <svg class="icon avatar-icon" aria-hidden="true">
        <use xlink:href="#icon-down"></use>
      </svg>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Avatar'
}
</script>

<style lang="less" scoped>

.avatar-container {
  height: 60px;
  border-radius: 20%;
  cursor: pointer;

  .avatar-link {
    position: relative;
    display: inline-block;
  }

  img {
    position: relative;
    height: 60px;
    border-radius: 40%;
    padding: 10px 0;
  }

  .avatar-link::after {
    /* 伪元素选择器必须有content属性 */
    content: '';
    position: absolute;
    top: 8px;
    right: 0px;
    display: inline-block;
    width: 12px;
    height: 12px;
    background-color: #ff5967;
    border: 2px solid #fff;
    border-radius: 50%;
  }

  .avatar-icon {
    vertical-align: text-top;
  }
}

.avatar-container:hover {
  background-color: rgba(222, 222, 222, .3);
  
}

</style>