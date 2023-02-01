<template>
  <div class="create-comment-container">
    <div class="create-comment-main">
      <el-input
          type="textarea"
          placeholder="添加评论"
          v-model="content"
          maxlength="600"
          show-word-limit
          :autosize="{ minRows: 3, maxRows: 8}"
        >
        </el-input>
        <div class="btn">
          <el-button size="small" round @click="resetContent">重置</el-button>
          <el-button size="small" round @click="submitContent">发布</el-button>

        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateComment',
  data() {
    return {
      content: ''
    }
  },
  methods: {
    resetContent() {
      this.content = ''
    },
    submitContent() {
      this.$emit('submit-content', this.content)
    }
  }
}
</script>

<style lang="less" scoped>
.create-comment-main {
  .btn {
    display: flex;
    width: 100px;
    margin: 0 auto;
  }
  .el-button {
  }

}
</style>