<template>
  <div class="write-container">
    <div class="write-main">
      <Markdown ref="markdown" :blog="form" :imgUrl="imgUrl" @submit-form="submitForm" @submit-upload="submitUpload"></Markdown>
    </div>
  </div>
</template>

<script>
import Markdown from '@/components/Markdown/Markdown.vue'
import { writeArticle } from '@/api/ArticleAPI.js'
import { uploadFile } from '@/api/UploadAPI.js'
export default {
  name: 'Write',
  components: {
    Markdown
  },
  data() {
    return {
      form: {
        title: ''
      },
      imgUrl: ''
    }
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
    }
  }
}
</script>

<style lang="less" scoped>
.write-main {
  width: 80%;
  margin: 0 auto;
  padding: 60px;
}
</style>