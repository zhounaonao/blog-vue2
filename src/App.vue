<template>
  <div>
    <!-- 头部 -->
    <Header></Header>
    <!-- router页面 -->
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
export default {
  name: 'App',
  components: {
    Header
  },
  data() {
    return {
    }
  },
  created() {
  }
}
</script>

<style lang="less" scoped>

</style>