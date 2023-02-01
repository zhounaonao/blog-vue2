<template>
  <div class="header-container">
    <div class="header-top header">
      <div class="left">
        <div class="logo">
          <router-link to="/home">Nn</router-link>
        </div>
      </div>
      <div class="center"></div>
      <el-menu mode="horizontal" router :default-active="this.$route.path" :background-color="bgc" text-color="#000" active-text-color="#000000" @select="onSelect">
        <el-menu-item index="/home">首页</el-menu-item>
        <el-menu-item index="/test">测试</el-menu-item>
        <el-menu-item index="/study">学习</el-menu-item>
        <el-menu-item index="/about/personalInfo">关于</el-menu-item>
      </el-menu>
      <div class="right">
        <div v-if="!logined" class="login">
          <login :dialogFormVisible="dialogFormVisible" @update-visible="updateVisible" @login="login"></login>
        </div>
        <div class="avatar-info" v-else>
          <el-popover placement="top-start" trigger="hover">
            <ButtonShine class="button-logout" @shine-click="$router.push('/write/0')">
              <template #default>
                写作
              </template>
            </ButtonShine>
            <ButtonShine class="button-logout" @shine-click="logout">
              <template #default>
                退出登录
              </template>
            </ButtonShine>
            <Avatar slot="reference" :avatar="userInfo.avatar"></Avatar>
          </el-popover>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { getUserInfo } from '@/api/UserAPI.js'
import { login, logout } from '@/api/LoginAPI.js'
import { setToken, removeToken } from '@/utils/auth.js'
import Button01 from '@/components/Button/Button01.vue'
import ButtonShine from '@/components/Button/ButtonShine.vue'
import Login from '@/components/Login/Login.vue'
import Avatar from '@/components/Avatar/Avatar.vue'
import Popover from '@/components/Popover/Popover.vue'
export default {
  name: 'Header',
  components: {
    Button01,
    ButtonShine,
    Login,
    Avatar,
    Popover
  },
  computed: {
    logined() {
      return this.$store.state.logined
    }
  },
  data() {
    return {
      dialogFormVisible: false,
      userInfo: {},
      bgc: 'transparent'
    }
  },
  created() {
    // 刷新的时候将头像衔接进去
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
  },
  mounted() {
    /* 监听滚轮事件 */
    // window.addEventListener("scroll", this.scrolling);
  },
  methods: {
    onSelect(index, indexPath, e) {
      // 导航改变的时候
      // console.log(index)
    },
    scrolling() {
      this.bgc = '#fff'
    },
    async logout() {
      await logout()
      removeToken()
      localStorage.removeItem('userInfo')
      this.$store.commit('setLogined', false)
      if (this.$route.path.indexOf('user') != -1) {
        this.$router.push('/home')
      }
    },
    updateVisible(bool) {
      this.dialogFormVisible = bool
    },
    async login(form) {
      const res = await login(form)
      if (res && res.data) {
        setToken(res.data.token)
        this.dialogFormVisible = false
        const { data: userInfo } = await getUserInfo()
        this.userInfo = userInfo
        localStorage.setItem('userInfo', JSON.stringify(userInfo))
        this.$store.commit('setLogined', true)
      }
    }
  }
}
</script>

<style lang="less" scoped>

.header-top {
  position: fixed;
  width: 100%;
  display: flex;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 5px 15px rgb(0 0 0 / 10%);
  align-items: center;
  /* 有定位的盒子才能指定z-index属性 */
  transition: 0.3s;
  z-index: 1000;

  .left {
    display: flex;

    .logo {
      font-size: 50px;
      color: #000;
      font-style: oblique;
      font-weight: bold;
    }
  }

  .center {
    flex-grow: 1;
  }

  .el-menu {
    border: none;
  }

  .right {
    line-height: 60px;

    .avatar-info {
      position: relative;

      .popover-container {
        opacity: 0;
      }
    }

    .avatar-info:hover {
      .popover-container {
        opacity: 1;
      }
    }
  }
}

.header-bottom {
}
</style>