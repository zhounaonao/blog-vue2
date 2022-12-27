<template>
  <div class="header-container">
    <div class="header-top">
      <el-menu mode="horizontal" router :default-active="this.$route.path" :background-color="bgc" text-color="#000" active-text-color="#000000" @select="onSelect">
        <el-menu-item index="/test">测试</el-menu-item>
        <el-menu-item index="/study">学习</el-menu-item>
        <el-menu-item index="/write">写作</el-menu-item>
        <!-- <el-submenu index="/study">
          <template #title>学习</template>
          <el-menu-item :index="'/study/type/' + item.id" v-for="item in categoryList" :key="item.id">
            {{ item.name }}</el-menu-item>
        </el-submenu> -->
        <!-- <el-menu-item index="/star">收藏</el-menu-item> -->
        <!-- <el-menu-item index="/about">关于</el-menu-item> -->
        <el-menu-item index="/user">我的</el-menu-item>
      </el-menu>

      <div class="left">
        <div class="logo">
          <router-link to="/home">Nn</router-link>
        </div>
      </div>
    </div>
    <!-- <div class="header-bottom">
    </div> -->
  </div>

</template>

<script>
import { getCategoryList } from '@/api/CategoryAPI.js'
import Button01 from '@/components/Button/Button01.vue'
export default {
  name: 'Header',
  components: {
    Button01
  },
  computed: {
    logined() {
      return this.$store.state.logined
    }
  },
  data() {
    return {
      bgc: 'transparent',
      categoryList: [
        { id: 1, name: 'Java' },
        { id: 2, name: 'Vue' },
        { id: 3, name: 'English' }
      ]
    }
  },
  created() {
    // 学习里的分类展示全面
    this.getCategory()
  },
  mounted() {
    /* 监听滚轮事件 */
    // window.addEventListener("scroll", this.scrolling);
  },
  methods: {
    onSelect(index, indexPath, e) {
      // 导航改变的时候
      // console.log(index)
    },
    async getCategory() {
      const { data } = await getCategoryList()
      this.categoryList = data
    },
    scrolling() {
      this.bgc = '#fff'
    }
  }
}
</script>

<style lang="less" scoped>
@headerHeight: 60px;

.header-top {
  width: 100%;
  height: @headerHeight;
  line-height: @headerHeight;
  position: fixed;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  /* 有定位的盒子才能指定z-index属性 */
  z-index: 1;

  .el-menu {
    border: none;
  }

  .left {
    height: @headerHeight;
    line-height: @headerHeight;
    display: flex;

    .logo {
      font-size: 50px;
      color: #000;
      font-style: oblique;
      font-weight: bold;
    }
  }
}

.header-bottom {
  height: @headerHeight;
}
</style>