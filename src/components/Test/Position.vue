<template>
  <div class="position-container">
    <div class="relative">相对定位</div>
    <div class="absolute">绝对定位</div>
  </div>
</template>

<script>
export default {
    name: 'Position'
}
</script>

<style lang="less" scoped>
.position-container {
    position: relative;
    background-color:aquamarine;

  .relative {
    /* 相对定位，相对自己，原位置保留 */
    position: relative;
    top: 10px;
    right: 10px;
    width: 5rem;
    background-color: dodgerblue;
  }
  .absolute {
    /* 绝对定位，相对上一个有定位的祖先元素，没有则相对于页面 */
    position: absolute;
    top: 40px;
    width: 5rem;
    background-color: yellow;
  }
}
</style>