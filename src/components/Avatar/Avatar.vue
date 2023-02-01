<template>
  <div class="avatar-container">
    <router-link class="avatar-link" to="/user/userInfo">
      <img :src="avatar?avatar:'http://znn23.top/file/caitou.png'">
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
  name: 'Avatar',
  props: {
    avatar: {
      type: String,
      default: 'http://znn23.top/file/caitou.png'
    }
  } 

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

    img {
      position: relative;
      height: 60px;
      border-radius: 40%;
      padding: 10px 0;
      vertical-align: sub;
    }
  }

  .avatar-link::after {
    /* 伪元素选择器必须有content属性 */
    content: '';
    position: absolute;
    top: 10px;
    right: -5px;
    display: inline-block;
    width: 12px;
    height: 12px;
    background-color: #ff5967;
    border: 2px solid #fff;
    border-radius: 50%;
  }

  .avatar-icon {
    vertical-align: super;
  }
}

.avatar-container:hover {
  background-color: rgba(222, 222, 222, 0.3);
}
</style>