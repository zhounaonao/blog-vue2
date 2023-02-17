<template>
  <div class="study-container page-head">
    <div class="study-main page-width">
      <div>
        <Tabs v-if="tabList[0]" :tabList="tabList"></Tabs>
        <router-view></router-view>
        <!-- <el-tabs v-model="activeName" type="border-card">
          <el-tab-pane v-for="tab in categoryList" :key="tab.id" :label="tab.name" :name="tab.name"
          >
            <ArticleList :categoryId="tab.id"></ArticleList>
          </el-tab-pane>
        </el-tabs> -->
      </div>
      <!-- <router-view></router-view> -->
    </div>
  </div>
</template>

<script>
import { getCategoryList } from '@/api/CategoryAPI.js'
import ArticleList from './ArticleList.vue'
import Tabs from '@/components/Tabs/Tabs.vue'
export default {
  name: 'Study',
  components: {
    ArticleList, Tabs
  },
  data() {
    return {
      activeName: 'JAVA',
      categoryList: [],
      tabList: [
        
      ]
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
      this.tabList = []
      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        element.path = "/study/type/" + element.id
        this.tabList.push(element)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.study-container {
  min-height: 979px;
  background: transparent
    url(../../assets/images/study-bg.png)
    no-repeat fixed 0% 0%;

  .study-main {
    margin: 0 auto;

  }
}
</style>