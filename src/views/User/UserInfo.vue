<template>
  <div class="user-info-container">
    <div class="avatar" @click="dialogCropperVisible=!dialogCropperVisible">
      <img :src="userInfo.avatar?userInfo.avatar:defaultUrl">
    </div>
    <div class="user-info-main">
      <el-form ref="form" :model="userInfo" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="userInfo.userName"></el-input>
        </el-form-item>
        <el-form-item label="用户昵称">
          <el-input v-model="userInfo.nickName"></el-input>
        </el-form-item>
        <el-form-item label="手机号码">
          <el-input v-model="userInfo.phonenumber"></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱">
          <el-input v-model="userInfo.email"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="userInfo.sex"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-input v-model="userInfo.status"></el-input>
        </el-form-item>
        <el-form-item label="类型">
          <el-input v-model="userInfo.type"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="saveUserInfo">保存</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <el-dialog :visible.sync="dialogCropperVisible" width="500px" :show-close="false" :modal="false">
        <slot></slot>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import Upload from '@/components/Upload/Upload.vue'
export default {
  name: 'UserInfo',
  components: {
    Upload
  },
  props: {
    userInfo: {
      type: Object
    }
  },
  computed: {
    // userInfoCopy() {
    //   return this.userInfo
    // }
  },
  data() {
    return {
      dialogCropperVisible: false,
      defaultUrl: 'http://znn23.top/file/caitou.png'
    }
  },
  created() {
  },
  methods: {
    saveUserInfo() {
      this.$emit('save-user-info', this.userInfo)
    }
  }
}
</script>

<style lang="less" scoped>
.user-info-container {
  width: 80%;
  margin: 0 auto;
  padding: 35px 0 5px 0;
  z-index: 12;
  .avatar {
    width: 200px;
    margin: auto;
    transition: all 0.5s;
    cursor: pointer;
    img {
      width: 100%;
      border-radius: 50%;
    }
  }
  .avatar:hover {
    transform: rotateZ(360deg);
  }
  .user-info-main {
    padding: 20px 0 0 0;
  }
}

</style>