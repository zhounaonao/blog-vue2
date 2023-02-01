<template>
  <div class="user-container page-head">
    <div class="user-main page-width box-btm">
      <div class="top-tools">
        <Tabs :tabList="tabList"></Tabs>
      </div>
      <router-view :userInfo="userInfo" @save-user-info="saveUserInfo">
        <template #default>
          <Upload ref="upload" @submit-upload="submitUpload"></Upload>
        </template>
      </router-view>
    </div>
  </div>
</template>

<script>
import Upload from '@/components/Upload/Upload.vue'
import Tabs from '@/components/Tabs/Tabs.vue'
import { uploadFile } from '@/api/UploadAPI.js'
import { saveUserInfo } from '@/api/UserAPI.js'
export default {
  name: 'User',
  components: {
    Upload, Tabs
  },
  computed: {
    logined() {
      return this.$store.state.logined
    }
  },
  data() {
    return {
      isActive: 'userInfo',
      userInfo: {},
      tabList: [
        { id: 'userInfo', name: '个人信息', path: '/user/userInfo' },
        { id: 'myWorks', name: '我的作品', path: '/user/myWorks' }
      ]
    }
  },
  created() {
    this.getUserInfo()
  },
  methods: {
    async getUserInfo() {
      this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
    },
    async submitUpload(file) {
      const res = await uploadFile(file)
      if (res) {
        this.$refs.upload.showImg = true
        this.$refs.upload.url = res.data
        this.userInfo.avatar = res.data
        await saveUserInfo({
          id: this.userInfo.id,
          avatar: this.userInfo.avatar
        })
        console.log(this)
      }
    },
    async saveUserInfo() {
      const res = await saveUserInfo(this.userInfo)
      if (res) {
        localStorage.setItem('userInfo', JSON.stringify(this.userInfo))
        location.reload()
      }
    },
    changeActive(tab) {
      this.isActive = tab
    }
  }
}
</script>

<style lang="less" scoped>
.user-container {
  .user-main {
    position: relative;
    background-color: #fff;
    border-radius: 20px;
    z-index: 12;
    width: 100%;

    ul {
      display: flex;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #f5f5f5;

      // transform: translate(-50%);
      li {
        a {
          display: inline-block;
          height: 40px;
          line-height: 40px;
          padding: 0 20px;
          font-size: 14px;
          border-radius: 5px 5px 0 0;
        }
      }
      li:hover {
      }
      .is-active {
        a {
        background-color: #fff;

          color: #0099ff;
        }
      }
    }
  }
}
</style>