<template>
  <div class="user-container">
    <div v-if="!logined" class="login">
      <Login></Login>
    </div>
    <div v-else>
      个人信息
      <ButtonShine class="button-logout" @shine-click="logout">
        <template #default>
          退出登录
        </template>
      </ButtonShine>
    </div>
  </div>
</template>

<script>
import Login from '@/components/Login/Login.vue'
import ButtonShine from '@/components/Button/ButtonShine.vue'
import { logout } from '@/api/LoginAPI.js'
import { removeToken } from '@/utils/auth.js'
export default {
  name: 'User',
  components: {
    Login,ButtonShine
  },
  computed: {
    logined() {
      return this.$store.state.logined
    }
  },
  methods: {
    async logout() {
      await logout()
      removeToken()
      this.$store.commit('setLogined', false)
    }
  }
}
</script>

<style lang="less" scoped>
.user-container {
  /deep/ .card {
    margin:auto;
  }

  .button-logout {
    float: right;
  }

}
</style>