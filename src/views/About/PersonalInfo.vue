<template>
  <div class="personal-info-container">
    <h5>/ PersonalInfo // 个人信息</h5>
    <div class="personal-info-main">
      <div class="avatar">
        <img :src="avatarUrl">
        <ul>
          <li>{{ authorName }}</li>
        </ul>
      </div>
      <div class="center">

      </div>
      <div class="right">
        <ul>
          <li>年龄: 23</li>
          <li>求职意向:JAVA开发工程师</li>
          <li>求职城市:杭州</li>
          <li>专业: 计算机应用技术</li>
          <li>手机: {{ authorPhone }}</li>
          <li>邮箱: 1737381081@qq.com</li>
        </ul>
      </div>
    </div>
    <div class="bottom">
      <h6>我和JAVA</h6>
      <p>有丰富的Java知识体系做基础，对于Java后端方面的前沿和动向有一定的了解，善于分析和吸取经验；个性开朗，容易相处，团队荣誉感强，<span class="highlight">代码编写习惯良好，喜欢分析源码。</span></p>
      <p>热爱Java后端，自步入社会以来，已经在空闲时间自学了<span class="highlight">Java高级</span>和Java后端，简单学习并了解了Spring框架的<span class="highlight">Ioc和Aop机制</span>。</p>
      <p>深入学习了<span class="highlight">SpringBoot的自动装配</span>，使用SpringBoot整合过大部分中间件和框架，使用<span class="highlight">Aop注解自定义了一个日志注解</span>，使用Import自定义了一个开关注解，使用Kaptcha实现了验证码功能等。</p>
      <p>本人最大的优势就是求知好学，自学能力强，并且真心喜欢Java这门语言，从认真学习Java到现在已经积累了很多有用的知识，并为此感到开心。</p>
    </div>
  </div>
</template>

<script>
import aboutMeJpg from '@/assets/images/aboutMe.jpg'
export default {
  name: 'PersonalInfo',
  components: {},
  props: {
    password: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    avatarUrl() {
      return this.password == 20000203?this.myUrl:this.$store.state.defaultAvatar
    },
    authorName() {
      return this.password == 20000203?'周闹闹':'周先生'
    },
    authorPhone() {
      return this.password == 20000203?'13028902352':'130****2352'
    }
  },
  data() {
    return {
      myUrl: aboutMeJpg
    }
  }
}
</script>

<style lang="less" scoped>
.personal-info-container {
  width: 100%;
  padding: 10px 0;
  .personal-info-main {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding: 10px 5px;
    .avatar {
      max-width: 400px;
      text-align: center;
      img {
        height: 150px;
        border-radius: 5px;
      }
      ul {
        li {
          font-size: .6rem;
        }
      }
    }
    .center {
      flex: 0.2;
    }
    .right {
      max-width: 400px;
      padding: 0 10px;
      ul {
        li {
          font-size: 0.5rem;
        }
      }
    }
  }
  .bottom {
    max-width: 1000px;
    margin: 0 auto;
    p {
      padding: 10px 5px;
      font-size: 0.6rem;
      text-indent: 1.2rem;
    }
  }
}

</style>