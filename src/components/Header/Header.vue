<template>
  <div class="header-container">
    <el-menu mode="horizontal" router :default-active="this.$route.path"
    @select="onSelect">
      <el-menu-item index="/home" >首页</el-menu-item>
      <el-menu-item index="/test" >测试</el-menu-item>
      <el-submenu index="/study">
        <template #title>学习</template>
        <el-menu-item :index="'/study/type/' + item.id" 
        v-for="item in categoryList" :key="item.id">
        {{ item.name }}</el-menu-item>
      </el-submenu>
      <el-menu-item index="/star">收藏</el-menu-item>
      <el-menu-item index="/about">关于</el-menu-item>
      <el-menu-item index="/user">我的</el-menu-item>
    </el-menu>
    <div class="logo">Nn</div>
  </div>
</template>

<script>
import { getCategoryList } from '@/api/CategoryAPI.js'
export default {
  name: 'Header',
  components: {
  },
  computed: {
  },
  data() {
    return {
      categoryList: ['Java', 'Vue', 'English'],
    }
  },
  created() {
    // 学习里的分类展示全面
    this.getCategory()
  },
  methods: {
    onSelect(index, indexPath, e) {
      // 导航改变的时候
      console.log(index);
    },
    async getCategory() {
      const {data} = await getCategoryList()
      this.categoryList = data
    }
  }
}
</script>

<style lang="less" scoped>
@headerHeight : 60px;
.header-container {
  height: @headerHeight;
  line-height: @headerHeight;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;

  .logo {
    height: @headerHeight;
    line-height: @headerHeight;
    font-size: 50px;
    color:#409EFF;
    font-style: oblique ;
    font-weight: bold;
  }

}


</style>