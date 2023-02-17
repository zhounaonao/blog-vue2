<template>
  <div class="article-list-container">
    <ul>
      <li v-for="item in articleList" :key="item.id">
        <router-link :to="userId?'/write/' + item.id:'/article/' + item.id">
          <ArticleInfo :id="item.id" :article="item"
          ></ArticleInfo>
        </router-link>
      </li>
    </ul>
    <el-pagination
      v-if="articleList[0]"
      background
      layout="prev, pager, next"
      :total="total"
      @current-change="handleCurrentChange">
    </el-pagination>
  </div>
</template>

<script>
import ArticleInfo from '@/views/Study/ArticleInfo.vue'
import { articleList } from '@/api/ArticleAPI.js'

export default {
  name: 'ArticleList',
  components: {
    ArticleInfo
  },
  props: {
    categoryId: {
      type: [Number, String],
      default: 0
    },
    userId: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {
      pageNum: 1,
      pageSize: 10,
      articleList: [],
      total: 0
    }
  },
  created() {
    this.getArticleList()
  },
  watch: {
    $route() {
      if (this.$route) {
        this.getArticleList()
      }
    }
  },
  methods: {
    async getArticleList() {
      const { data: res } = await articleList(
        this.pageNum,
        this.pageSize,
        this.categoryId,
        this.userId
      )
      this.articleList = res.rows
      this.total = res.total
    },
    handleCurrentChange(pageNum) {
      this.pageNum = pageNum
      this.getArticleList()
    }
  }
}
</script>

<style lang="less" scoped>
.article-list-container {
  margin: 0 auto;

  ul li {
    padding: 2px;
  }
  /* :nth-child 和:nth-of-type 权重为 10 */
  /* 结构伪类选择器:nth-child(-n + 3) n从0开始，当前结果为选择ul的3，2，1前三个子元素 nth-of-type会找前三个子li */
  /* 总权重12 */
  ul li:nth-child(-n + 3) {
    padding: 5px 0;
  }

  /* nth-child 会先判断 nth-child(-n + 3)  之后回去看前面的 li，所以会选到 header li li，之后排除header */

  /* nth-of-type 会先判断 li 之后判断 nth-of-type(-n + 3)， 所以会选到前三个 li */
  ul li:nth-of-type(-n + 3) {
    padding: 5px 0;
  }

  .el-pagination {
    margin: 0 auto;
    width: 0;
  }
}


</style>