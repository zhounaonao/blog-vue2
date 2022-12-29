<template>
  <div class="user-container">
    <div class="user-main">
      <div v-if="!logined" class="login">
        <Login></Login>
        
      </div>
      <div v-else>
        个人信息
      </div>
    </div>
  </div>
</template>

<script>
import ButtonShine from '@/components/Button/ButtonShine.vue'
import Login from '@/components/Login/Login.vue'
export default {
  name: 'User',
  components: {
    Login,
    ButtonShine
  },
  computed: {
    logined() {
      return this.$store.state.logined
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.user-container {
  .user-main {
    padding: 60px;

    .login {
      padding: 100px 0 0 0;
    }

    /deep/ .card {
      margin: auto;
    }

  }
}
</style>