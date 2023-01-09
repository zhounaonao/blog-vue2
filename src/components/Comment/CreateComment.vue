<template>
  <div class="create-comment-container">
    <div class="create-comment-main">
      <el-input
          type="textarea"
          placeholder="添加评论"
          v-model="content"
          maxlength="800"
          show-word-limit
          :autosize="{ minRows: 5, maxRows: 8}"
        >
        </el-input>
        <div class="btn">
          <el-button @click="resetContent">重置</el-button>
          <el-button @click="submitContent">发布</el-button>

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
      console.log(this.content);
      this.$emit('submit-content', this.content)
    }
  }
}
</script>

<style lang="less" scoped>
.create-comment-main {
  display: flex;
  .btn {
    width: 100px;
    padding: 0 10px;
  }
  .el-button {
    margin-left: 0px;
  }

}
</style>