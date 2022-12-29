<template>
  <div class="study-container">
    <div class="study-main">
      <div>

      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Tabs from '@/components/Tabs/Tabs.vue'
import { getCategoryList } from '@/api/CategoryAPI.js'
export default {
  name: 'Study',
  components: {
    Tabs
  },
  data() {
    return {
      categoryList: []
    }
  },
  created() {
    // 学习里的分类展示全面
    this.getCategory()
  },
  methods: {
    async getCategory() {
      const { data } = await getCategoryList()
      this.categoryList = data
    }
  }
}
</script>

<style lang="less" scoped>
.study-container {
  height: 1080px;
  padding-top: 60px;
  background: transparent
    url(http://oss.znn23.top/file/background/wallhaven-969gpd_1920x1080.png)
    no-repeat fixed 0% 0%;

  .study-main {
    width: 80%;
    margin: 0 auto;
  }
}
</style>