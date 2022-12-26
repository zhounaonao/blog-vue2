<template>
  <div class="study-container">
    <router-view></router-view>
  </div>
</template>

<script>
import Tabs from '@/components/Tabs/Tabs.vue'
export default {
  name: 'Study',
  components: {
    Tabs
  }
}
</script>

<style lang="less" scoped>
.study-container {
  padding-top: 60px;
}
</style>