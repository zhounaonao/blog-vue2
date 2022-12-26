<template>
  <div class="article-info-container">
    <div>文章详情 {{ id }}</div>

    <!-- 
      categoryId: 1
      categoryName: null
      content: "## 课程介绍\n![image20211219121555979.png]("
      createBy: null
      createTime: "2022-01-23 11:20:11"
      id: 1
      summary: "SpringSecurity框架教程-Spring Security+JWT实现项目级前端分离认证授权"
      thumbnail: "http://oss.znn23.top/2022/12/wallhaven-x18lgl_1280x720.png"
      title: "SpringSecurity从入门到精通"
      viewCount: 37 -->
  </div>
</template>

<script>
import { getArticleDetail } from '@/api/ArticleAPI.js'
export default {
  name: 'ArticleInfo',
  props: {
    id: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {

    }
  },
  created() {
    this.getArticleDetail()
  },
  methods: {
    async getArticleDetail() {
      const { data:res } = await getArticleDetail(this.id)
      console.log(res);
    }
  }
}
</script>

<style>

</style>