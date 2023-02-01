<template>
  <div class="about-container page-head">
    <div class="about-main page-width box-btm">
      <div class="my-info">
        <div class="left">
          <el-menu
            :default-active="this.$route.path"
            router
            class="el-menu-vertical-demo">
            <el-menu-item index="/about/personalInfo">
              <span slot="title">个人信息</span>
            </el-menu-item>
            <el-menu-item index="/about/skills">
              <span slot="title">熟练技能</span>
            </el-menu-item>
            <el-menu-item index="4">
              <span slot="title">获奖情况</span>
            </el-menu-item>
            <el-menu-item index="4">
              <span slot="title">工作经验</span>
            </el-menu-item>
            <el-menu-item index="/about/education">
              <span slot="title">教育背景</span>
            </el-menu-item>
          </el-menu>
        </div>
        <div class="right">
          <router-view></router-view>
        </div>
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
export default {
  name: 'About',
  components: {

  },
  data() {
    return {
      defaultUrl: 'http://znn23.top/2023/01/%E5%91%A8%E9%97%B9%E9%97%B9.jpg',
    }
  },
}
</script>

<style lang="less" scoped>
.about-container {
  .about-main {
    position: relative;
    background-color: #fff;
    opacity: .9;
    z-index: 12;

    .my-info {
      display: flex;

      .left {
        text-align: center;
      }
      .right {
        width: 1000px;
        margin: 0 auto;
      }
    }
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
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 300px;

  .bg1 {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 168px;
    background: url(../../assets/images/bg1.png);
    background-size: cover;
    z-index: 10;
    animation: bgRunning 30s linear infinite;
  }
  .bg2 {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 285px;
    background: url(../../assets/images/bg2.png);
    background-size: cover;
    opacity: 0.8;
    z-index: 1;
    animation: bgRunning 60s linear infinite;
  }
  .bear-running {
    position: absolute;
    bottom: 25px;
    width: 200px;
    height: 100px;
    background: url(../../assets/images/bear.png) no-repeat;
    animation: bearRunning 0.5s steps(8) infinite, move 5s linear forwards;
    z-index: 11;
  }
}
</style>