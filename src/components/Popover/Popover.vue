<template>
  <div class="popover-container">

  </div>
</template>

<script>
export default {
  name: 'Popover'
}
</script>

<style lang="less" scoped>
.popover-container {
  position: absolute;
  left: -160px;
  width: 200px;
  height: 200px;
  border: 1px solid #000;
  transition: width 1s linear 0s;
}
</style>