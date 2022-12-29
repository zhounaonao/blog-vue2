<template>
  <div class="article-list-container">
    <ul>
      <header>文章</header>
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

  /* :nth-child 和:nth-of-type 权重为 10 */
  /* 结构伪类选择器:nth-child(-n + 3) n从0开始，当前结果为选择ul的3，2，1前三个子元素 nth-of-type会找前三个子li */
  /* 总权重12 */
  ul li:nth-child(-n + 3) {
    padding: 10px 0;
  }

  /* nth-child 会先判断 nth-child(-n + 3)  之后回去看前面的 li，所以会选到 header li li，之后排除header */

  /* nth-of-type 会先判断 li 之后判断 nth-of-type(-n + 3)， 所以会选到前三个 li */
  ul li:nth-of-type(-n + 3) {
    padding: 10px 0;
  }

}


</style>