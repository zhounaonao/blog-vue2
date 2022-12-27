<template>
  <div class="login-container">
    <div class="card">
      <h4 class="title">Log In!</h4>
      <form>
        <div class="field">
          <input v-model="userName" autocomplete="off" id="logemail" class="input-field" name="logemail">
        </div>
        <div class="field">
          <input v-model="password" autocomplete="off" id="logpass" placeholder="Password" class="input-field" name="logpass" type="password">
        </div>
        <button class="btn" type="submit" @click="login">Login</button>
        <a href="#" class="btn-link">Forgot your password?</a>
      </form>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/LoginAPI.js'
import { setToken } from '@/utils/auth.js'
export default {
  name: 'Login',
  data() {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    async login() {
      const { data:res } = await login(this.userName, this.password)
      setToken(res.token)
      this.$store.commit('setLogined', true)
    }
  }
}
</script>

<style lang="less" scoped>
.card {
 width: 10em;
 border-radius: 1em;
 padding: 0.5rem 1rem;
 text-align: center;
 background: #409EFF;
}

/*Inputs*/
.field {
 margin-top: .5rem;
 display: flex;
 align-items: center;
 justify-content: center;
 gap: .5em;
 background-color: #f5f5f5;
 border-radius: 4px;
 padding: .3em 1em;
}


.input-field {
 background: none;
 border: none;
 outline: none;
 width: 100%;
 color: #409EFF;
 font-size: .5em;
}

/*Text*/
.title {
 margin-bottom: 1rem;
 font-size: 1.4em;
 font-weight: 500;
 color: #f5f5f5;
}

/*Buttons*/
.btn {
 margin: .6rem 1rem;
 border: none;
 border-radius: 4px;
 font-weight: bold;
 font-size: .5em;
 text-transform: uppercase;
 padding: .6em 1.2em;
 background-color: #f5f5f5;
 color: #5e6681;
 box-shadow: 0 8px 24px 0 rgb(64 158 255 / 20%);
 transition: all .3s ease-in-out;
}

.btn-link {
 color: #f5f5f5;
 display: block;
 font-size: .5em;
 transition: color .3s ease-out;
}

/*Hover & focus*/
.field input:focus::placeholder {
 opacity: 0;
 transition: opacity .3s;
}

.btn:hover {
 background-color: #f5f5f5;
 color: #409EFF;
 box-shadow: 0 8px 24px 0 rgb(16 39 112 / 20%);
}

.btn-link:hover {
 color: #409EFF;
}

</style>