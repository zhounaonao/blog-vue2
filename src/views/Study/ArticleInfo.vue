<template>
  <div class="article-info-container">

    <div class="content-class">
      <h3 class="title-class">{{ blog.title }}</h3>
      <ShowMarkdown class="show-markdown-class" :blog="blog"></ShowMarkdown>
    </div>
    
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
import ShowMarkdown from '@/components/Markdown/ShowMarkdown.vue'
export default {
  components: { ShowMarkdown },
  name: 'ArticleInfo',
  props: {
    id: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {
      blog: {}
    }
  },
  created() {
    this.getArticleDetail()
  },
  methods: {
    async getArticleDetail() {
      const { data:res } = await getArticleDetail(this.id)
      this.blog = res
    }
  }
}
</script>

<style lang="less" scoped>

.article-info-container {

  .content-class {
    margin: 0 auto;
    text-align: center;

    .show-markdown-class {
      position: relative;
      z-index: 0;
      
    }
  }
}

@media screen and (min-width: 400px) {
  .content-class {
    width: 100%;
  }
}

@media screen and (min-width: 1000px) {
  .content-class {
    width: 90%;
  }
}

</style>