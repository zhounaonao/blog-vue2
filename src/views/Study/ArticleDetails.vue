<template>
  <div class="article-details-container">
    <div class="article-details-main">
      <h4 class="title-class">{{ blog.title }}</h4>
      <ShowMarkdown class="show-markdown-class" :blog="blog"></ShowMarkdown>
    </div>
    
  </div>
</template>

<script>
import ShowMarkdown from '@/components/Markdown/ShowMarkdown.vue'
export default {
  components: { ShowMarkdown },
  name: 'ArticleDetails',
  props: {
    id: {
      type: [Number, String],
      default: 0
    },
    blog: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data() {
    return {
    }
  },
  created() {

  },
  methods: {

  }
}
</script>

<style lang="less" scoped>

.article-details-container {

  .article-details-main {
    margin: 0 auto;
    text-align: center;

    .show-markdown-class {
      position: relative;
      z-index: 0;
      
    }
  }
}

// @media screen and (min-width: 400px) {
//   .article-details-main {
//     width: 100%;
//   }
// }

// @media screen and (min-width: 1000px) {
//   .article-details-main {
//     width: 100%;
//   }
// }

</style>