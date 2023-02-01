<template>
  <div class="write-container page-head">
    <div class="write-main page-width">
      <Markdown ref="markdown" :blog="form" :categorys="categorys" @submit-form="submitForm" @submit-upload="submitUpload"></Markdown>
    </div>
  </div>
</template>

<script>
import Markdown from '@/components/Markdown/Markdown.vue'
import { getArticleDetail, writeArticle } from '@/api/ArticleAPI.js'
import { uploadFile } from '@/api/UploadAPI.js'
import { getAllCategoryList } from '@/api/CategoryAPI.js'
export default {
  name: 'Write',
  components: {
    Markdown
  },
  props: {
    id: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {
      form: {
        title: ''
      },
      imgUrl: '',
      categorys: []
    }
  },
  created() {
    this.getArticleDetail()
    this.getAllCategoryList()
  },
  methods: {
    async submitForm(blog) {
      const res = await writeArticle(blog)
      if (res) {
        this.$message({
          showClose: true,
          message: res.msg,
          type: 'success'
        })
      }
    },
    async submitUpload(file) {
      const res = await uploadFile(file)
      if (res) {
        this.form.thumbnail = res.data
        this.$refs.markdown.showImg = true
        this.$refs.markdown.url = res.data
      }
    },
    async getAllCategoryList() {
      const res = await getAllCategoryList()
      if (res) {
        this.categorys = res.data
      }
    },
    async getArticleDetail() {
      const { data:res } = await getArticleDetail(this.id)
      this.form = res
      if (res.thumbnail) {
        console.log(this.$refs.markdown);
        this.$refs.markdown.url = res.thumbnail
        this.$refs.markdown.showImg = true
      }
    }
  }
}
</script>

<style lang="less" scoped>
.write-main {
  margin: 0 auto;
}
</style>