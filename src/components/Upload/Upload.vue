<template>
  <div class="upload-container">
    <el-upload ref="upload" class="upload-class" action="#" :limit="1" :auto-upload="false" :show-file-list="false" :on-change="handleChange" :on-exceed="handleExceed">
              <!-- <el-image style="width: 140px; height: 140px" :src="blog.thumbnail"/> -->
              <img v-if="showImg" :src="setSrc">
              <i v-else class="el-icon-plus uploader-icon"></i>
            </el-upload>
  </div>
</template>

<script>
export default {
  name: 'Upload',
  props: {
    imgUrl: {
      type: String,
      default: ''
    }
  },
  computed: {
    setSrc() {
      return this.url
    }
  },
  data() {
    return {
      url: '',
      files: {},
      showImg: false,
    }
  },
  methods: {
    handleChange(files) {
      console.log(files);
      this.files = files
      let file = this.files
      if (this.files.raw) {
        file = this.files.raw
      }
      if (file) {
        this.$emit('submit-upload', file)
      }
    },
    handleExceed(newFile, fileList) {
      this.$refs.upload.clearFiles()
      this.$refs.upload.handleStart(newFile[0])
    },
  }
}
</script>

<style lang="less" scoped>
.upload-container {
  width: 178px;
  height: 178px;
  margin: 0 auto;
  .upload-class {
    cursor: pointer;

    img,
    .uploader-icon {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
    }

    img {
      height: 178px;
    }
    .uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      line-height: 178px;
      text-align: center;
    }

    /deep/ .v-note-wrapper {
      z-index: 10 !important;
    }
  }
}

</style>