<template>
  <div class="my-works-container">
    <ArticleList :userId="userInfo.id"></ArticleList>
  </div>
</template>

<script>
import ArticleList from '@/views/Study/ArticleList.vue'
export default {
  name: 'MyWorks',
  components: {
    ArticleList
  },
  props: {
    userInfo: {
      type: Object
    }
  },
  data() {
    return {
      userId: 0
    }
  },
  created() {
    console.log(this.userInfo);
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
</style>