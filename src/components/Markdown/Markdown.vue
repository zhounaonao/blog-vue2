<template>
  <div class="markdown-container">
    <div class="markdown-main">
      <div class="markdown-edit">

        <!--编辑文章内容-->
        <el-form class="markdown-form" :model="blog" ref="ref" label-width="100px">
          <el-form-item label="博客标题" prop="title">
            <el-input v-model="blog.title" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="博客分类" prop="categoryName">
            <el-input v-model="blog.categoryName" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="博客封面" prop="summary">
            <el-input v-model="blog.thumbnail" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="博客摘要" prop="summary">
            <el-input type="textarea" v-model="blog.summary"></el-input>
          </el-form-item>

          <el-form-item label="博客内容" prop="content">
            <mavon-editor ref="md" v-model="blog.content" placeholder="请编辑文章内容" :ishljs="true" />

          </el-form-item>

          <el-form-item>
            <el-button type="danger" @click="resetForm" icon="el-icon-warning">重 置</el-button>
            <el-button type="primary" @click="submitForm" icon="el-icon-s-promotion">发 布</el-button>
          </el-form-item>

        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Markdown',
  data() {
    return {
      blog: {}
    }
  },
  methods: {
    resetForm() {
      this.blog = {}
    },
    submitForm() {

    }
  }
}
</script>

<style lang="less" scoped>
.markdown-main {
  padding: 60px 0;
}

</style>