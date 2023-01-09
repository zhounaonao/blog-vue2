<template>
  <div class="markdown-container">
    <div class="markdown-main">
      <div class="markdown-edit">

        <!--编辑文章内容-->
        <el-form class="markdown-form" :model="blog" ref="ref" label-width="100px">
          <el-form-item label="博客标题" prop="title">
            <el-input v-model="blog.title" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="博客内容" prop="content">
            <mavon-editor ref="md" v-model="blog.content" placeholder="请编辑文章内容" :ishljs="true" @imgAdd="$imgAdd" @imgDel="$imgDel" />
          </el-form-item>

          <el-form-item label="博客分类" prop="categoryId">
            <el-select v-model="blog.categoryId" placeholder="请选择文章分类">
              <el-option v-for="item in categorys" :key="item.id" :label="item.name" :value="item.id">
                <span style="float: left">{{ item.name }}</span>
                <span style="float: right">{{ item.id }}</span>
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="博客摘要" prop="summary">
            <el-input type="textarea" v-model="blog.summary"></el-input>
          </el-form-item>

          <el-form-item label="博客封面" prop="thumbnail">
            <el-upload ref="upload" class="upload-class" action="#" :limit="1" :auto-upload="false" :show-file-list="false" :on-change="handleChange" :on-exceed="handleExceed">
              <!-- <el-image style="width: 140px; height: 140px" :src="blog.thumbnail"/> -->
              <img v-if="showImg" :src="setSrc">
              <i v-else class="el-icon-plus uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="正文图片" prop="thumbnail">
            <el-button class="img-button" v-for="item in imgs" :key="item" @click="changeUrl(item)"><img :src="item"></el-button>
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
import request from '@/utils/request.js'
export default {
  name: 'Markdown',
  props: {
    blog: {
      type: Object,
      default: function () {
        return { title: '' }
      }
    },
    imgUrl: {
      type: String,
      default: ''
    },
    categorys: {
      type: Array,
      default: []
    }
  },
  computed: {
    setSrc() {
      return this.url
    }
  },
  data() {
    return {
      showImg: false,
      url: '',
      files: {},
      imgs: {},
      submiting: false
    }
  },
  methods: {
    resetForm() {
      this.blog = {}
    },
    submitForm() {
      if (this.submiting) {
        this.$message({
          message: '正在发布',
          type: 'warning'
        });
        return;
      }
      this.submiting = true
      this.$emit('submit-form', this.blog)
      this.submiting = false
    },
    handleChange(files) {
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
    $imgAdd(pos, $file) {
      request
        .post(
          '/upload/file',
          {
            file: $file
          },
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              isToken: true
            }
          }
        )
        .then((res) => {
          this.$refs.md.$img2Url(pos, res.data);
          this.imgs[pos] = res.data
        })
    },
    $imgDel(pos) {
      console.log(pos)
    },
    changeUrl(item) {
      this.showImg =true
      this.url = item
      this.blog.thumbnail = item
    }
  }
}
</script>

<style lang="less" scoped>
.markdown-main {
  padding: 60px 0;

  .upload-class {
    cursor: pointer;

    img,
    .uploader-icon {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
    }

    img {
      height: 6rem;
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

  .upload-class:hover {
    border-color: #409eff;
  }

  .img-button {
    padding: 0;
    img {
      height: 3rem;
    }
  }
}
</style>