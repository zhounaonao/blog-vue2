<template>
  <div class="study-container page-head">
    <div class="study-main page-width">
      <div>
        <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
          <el-tab-pane v-for="tab in categoryList" :key="tab.id" :label="tab.name" :name="tab.name"
          >
            <ArticleList :categoryId="tab.id"></ArticleList>
          </el-tab-pane>
        </el-tabs>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { getCategoryList } from '@/api/CategoryAPI.js'
import ArticleList from './ArticleList.vue'
export default {
  name: 'Study',
  components: {
    ArticleList
  },
  data() {
    return {
      activeName: 'JAVA',
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
    },
    handleClick(tab, e) {
      console.log(tab, e);
    }
  }
}
</script>

<style lang="less" scoped>
.study-container {
  height: 1080px;
  background: transparent
    url(http://znn23.top/file/background/wallhaven-969gpd_1920x1080.png)
    no-repeat fixed 0% 0%;

  .study-main {
    margin: 0 auto;
    padding: 20px;
  }
}
</style>