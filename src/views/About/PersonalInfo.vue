<template>
  <div class="personal-info-container">
    <h5>/ PersonalInfo // 个人信息</h5>
    <div class="personal-info-main">
      <div class="avatar">
        <img :src="defaultUrl">
        <ul>
          <li>姓名:周闹闹</li>
          <li>求职:JAVA开发工程师</li>
        </ul>
      </div>
      <div class="center">

      </div>
      <div class="right">
        <ul>
          <li>年龄: 23</li>
          <li>政治面貌: 共产党员</li>
          <li>专业: 计算机应用技术</li>
          <li>手机: 13028902352</li>
          <li>邮箱: 1737381081@qq.com</li>
        </ul>
      </div>

    </div>
    <div class="bottom">
      <h6>我和JAVA</h6>
      <p>有丰富的Java知识体系做基础，对于Java后端方面的前沿和动向有一定的了解，善于分析和吸取经验；个性开朗，容易相处，团队荣誉感强，<span class="highlight">代码编写习惯良好，喜欢分析源码。</span></p>
      <p>热爱Java后端，自步入社会以来，已经在空闲时间自学了Java高级和Java后端，简单学习并了解了Spring框架的Ioc和Aop机制。</p>
      <p>深入学习了SpringBoot的自动装配，使用SpringBoot整合过大部分中间件和框架，使用Aop注解自定义了一个日志注解，使用Import自定义了一个开关注解，使用Kaptcha实现了验证码功能等。</p>
      <p>本人最大的优势就是求知好学，自学能力强，并且真心喜欢Java这门语言，从认真学习Java到现在已经积累了很多有用的知识，并为此感到开心。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalInfo',
  components: {},
  data() {
    return {
      defaultUrl: 'http://znn23.top/2023/01/%E5%91%A8%E9%97%B9%E9%97%B9.jpg'
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
    max-width: 800px;
    margin: 0 auto;
    p {
      padding: 10px 0;
      font-size: 0.6rem;
      text-indent: 1.2rem;
    }
  }
}

</style>