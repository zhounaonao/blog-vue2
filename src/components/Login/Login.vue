<template>
  <div class="login-container">
    <el-button class="login-button" @click="showLogin">登录</el-button>
    <el-dialog class="login-dialog" :visible.sync="dialogFormVisible" :modal="false">
      <div style="color: dodgerblue;font-size: 30px;text-align: center;margin:20px auto;">欢迎登录</div>
      <el-form :model="form" size="large" :rules="rules" ref="form">
        <el-form-item prop="userName">
          <el-input prefix-icon="Avatar" v-model="form.userName" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input prefix-icon="Lock" v-model="form.password" type="password" placeholder="请输入密码" show-password />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login" style="width: 100%">登录</el-button>
        </el-form-item>
        <el-form-item>
          <el-button @click="register" style="width: 100%;">注册</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
    dialogFormVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      form: {},
      rules: {}
    }
  },
  methods: {
    login() {
      this.$emit('login', this.form)
    },
    showLogin() {
      this.$emit('update-visible', true)
    },
    register() {
      
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  .login-button {
    vertical-align: text-top;

  }

  .login-dialog {
    background-color: rgba(0,0,0,.5);
    z-index: 2000;
  }

  /deep/ .el-dialog {
    width: 500px;
    border-radius: 25px;
  }
}

</style>