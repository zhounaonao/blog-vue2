<template>
  <div class="article-list-container">
    <ul>
      <Article></Article>
    </ul>
  </div>
</template>

<script>
import Article from '@/views/Study/Article.vue'
import { articleList } from '@/api/ArticleAPI.js'
export default {
  name: 'ArticleList',
  components: {
    Article
  },
  props: {
    categoryId: {
      type: [Number, String],
      default: 1
    }
  },
  data() {
    return {
      pageNum: 1,
      pageSize: 10,
      articleList: []
    }
  },
  created() {
    this.getArticleList()
  },
  methods: {

    async getArticleList() {
      const { data:res } = await articleList(this.pageNum, this.pageSize, this.categoryId)
      this.articleList = res
    }

  }
}
</script>

<style lang="less" scoped>
.article-list-container {
  width: 90%;
  margin: 0 auto;
}
</style>