<template>
  <div class="article-list-container">
    <ul>
      <li v-for="item in articleList" :key="item.id">
        <router-link :to="'/study/article/' + item.id">
          <Article :id="item.id" :img="item.thumbnail" 
          :title="item.title" :summary="item.summary" :categoryName="item.categoryName" 
          :viewCount="item.viewCount" :time="item.createTime"
          ></Article>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Article from '@/views/Study/Article.vue'

export default {
  name: 'ArticleList',
  components: {
    Article
  },
  props: {
    categoryId: {
      type: [Number, String],
      default: 0
    },
    articleList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {}
  },
  created() {},
  methods: {
    gotoArticleInfo() {
      console.log(this);
    },
    load(e) {
      this.$emit('load', '123')
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