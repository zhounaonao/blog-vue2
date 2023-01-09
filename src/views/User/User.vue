<template>
  <div class="user-container">
    <div class="user-main page-width">
      <div class="user-left">
        <div class="avatar">
          <img src="http://oss.znn23.top/file/caitou.png">
        </div>

      </div>
      <div class="user-right">

      </div>
    </div>
    <div class="line9">
      <div class="bg1"></div>
      <div class="bg2"></div>
      <div class="bear-running">
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
  methods: {}
}
</script>

<style lang="less" scoped>
.user-container {
  .user-main {
    display: flex;
    padding: 60px;
    .user-left {
      width: 40%;
      .avatar {
        width: 200px;
        margin: auto;
        transition: all 0.5s;
        img {
          width: 100%;
          border-radius: 50%;
        }
      }
      .avatar:hover {
        transform: rotateY(360deg);
      }
    }
    .user-right {
      width: 60%;
      background-color: #ff5555;
    }
  }
  @keyframes move {
    0% {
      left: 0;
    }
    100% {
      left: 50%;
      transform: translate(-50%, 0);
    }
  }

  @keyframes bearRunning {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: -1600px 0;
    }
  }

  @keyframes bgRunning {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: -3840px 0;
    }
  }

  .line9 {
    position: relative;
    height: 600px;

    .bg1 {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 336px;
      background: url(../../assets/images/bg1.png);
      z-index: 10;
      animation: bgRunning 30s linear infinite;
    }
    .bg2 {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 570px;
      background: url(../../assets/images/bg2.png);
      opacity: 0.8;
      z-index: 1;
      animation: bgRunning 60s linear infinite;
    }
    .bear-running {
      position: absolute;
      bottom: 50px;
      width: 200px;
      height: 100px;
      background: url(../../assets/images/bear.png) no-repeat;
      animation: bearRunning 0.5s steps(8) infinite, move 5s linear forwards;
      z-index: 11;
    }
  }
}
</style>