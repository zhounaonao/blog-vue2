<template>
  <div class="login-container">
    <el-button class="login-button" @click="showLogin">登录</el-button>
    <el-dialog class="login-dialog" :visible.sync="dialogFormVisible" :modal="false">
      <div style="color: dodgerblue;font-size: 30px;text-align: center;margin:20px auto;">欢迎{{ lOrRName }}</div>
      <el-form :model="form" size="large" :rules="rules" ref="form">
        <el-form-item prop="userName">
          <el-input prefix-icon="el-icon-user" v-model="form.userName" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item prop="nickName" v-if="!loginOrRegister">
          <el-input prefix-icon="el-icon-user" v-model="form.nickName" placeholder="请输入昵称" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input prefix-icon="el-icon-lock" v-model="form.password" type="password" placeholder="请输入密码" show-password/>
        </el-form-item>
        <el-form-item prop="email" v-if="!loginOrRegister">
          <el-input prefix-icon="el-icon-message" v-model="form.email" type="email" placeholder="请输入邮箱"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm" style="width: 100%">{{ lOrRName }}</el-button>
        </el-form-item>
        <el-form-item>
          <el-button @click="register" style="width: 100%;">{{ rOrLName }}</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
  },
  computed: {
    lOrRName() {
      return this.loginOrRegister?'登录':'注册'
    },
    rOrLName() {
      return this.loginOrRegister?'注册':'登录'
    }
  },
  data() {
    return {
      form: {},
      rules: {},
      loginOrRegister: true,
      dialogFormVisible: false
    }
  },
  methods: {
    submitForm() {
      if (this.loginOrRegister) {
        this.$emit('login', this.form)
      } else {
        this.$emit('register', this.form)
      }
    },
    showLogin() {
      this.dialogFormVisible = !this.dialogFormVisible
    },
    register() {
      this.loginOrRegister = !this.loginOrRegister
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