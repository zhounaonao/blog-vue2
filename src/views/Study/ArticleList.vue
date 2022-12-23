<template>
  <div class="article-list-container">
    <span>{{ id }}</span>
    <ul>
      <Article></Article>
    </ul>
  </div>
</template>

<script>
import Article from '@/views/Study/Article.vue'
import { login } from '@/api/LoginAPI.js'
export default {
  name: 'ArticleList',
  components: {
    Article
  },
  props: {
    id: {
      type: [Number, String],
      default: 1
    }
  },
  created() {
    const a = login()
    console.log(a);
  }
}
</script>

<style>

</style>