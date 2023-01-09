<template>
  <div class="header-container">
    <div class="header-top">
      <div class="left">
        <div class="logo">
          <router-link to="/home">Nn</router-link>
        </div>
      </div>
      <div class="center"></div>
      <el-menu mode="horizontal" router :default-active="this.$route.path" :background-color="bgc" text-color="#000" active-text-color="#000000" @select="onSelect">
        <el-menu-item index="/test">测试</el-menu-item>
        <el-menu-item index="/study">学习</el-menu-item>
      </el-menu>
      <div class="right">
        <div v-if="!logined" class="login">
          <login></login>
        </div>
        <div class="avatar-info" v-else>
          <!-- <Popover></Popover> -->
          <el-popover placement="top-start" trigger="hover">
            <ButtonShine class="button-logout" @shine-click="$router.push('/write')">
              <template #default>
                写作
              </template>
            </ButtonShine>
            <ButtonShine class="button-logout" @shine-click="logout">
              <template #default>
                退出登录
              </template>
            </ButtonShine>
            <Avatar slot="reference"></Avatar>
          </el-popover>
        </div>
      </div>
    </div>
    <!-- <div class="header-bottom">
    </div> -->
  </div>

</template>

<script>
import { getCategoryList } from '@/api/CategoryAPI.js'
import { logout } from '@/api/LoginAPI.js'
import { removeToken } from '@/utils/auth.js'
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
      bgc: 'transparent'
    }
  },
  created() {

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
      this.$store.commit('setLogined', false)
    }
  }
}
</script>

<style lang="less" scoped>
@headerHeight: 60px;

.header-top {
  position: fixed;
  width: 100%;
  height: @headerHeight;
  line-height: @headerHeight;
  display: flex;
  align-items: center;
  /* 有定位的盒子才能指定z-index属性 */
  transition: 0.3s;
  z-index: 1000;

  .left {
    height: @headerHeight;
    line-height: @headerHeight;
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
  height: @headerHeight;
}
</style>