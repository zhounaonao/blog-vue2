<template>
  <div class="education-container">
    <h5>/ Education // 教育背景</h5>
    <div class="education-main">
      <div class="left">
        <span>2018.9-2021.6</span>
        <span>浙江工贸职业技术学院</span>
        <span>计算机应用技术</span>
      </div>
      <div class="center">
      </div>
      <div class="right">
        <p>
          在校期间我优秀的完成了以下课程：Java，Python，高数，HTML，Echarts，JavaScript，MySQL，Mongodb，Centos和Ubuntu两种linux操作系统。
        </p>
        <p>
          较优秀完成了：C 语言程序设计， Python 网页爬虫，大数据原理，数据挖掘，数据结构。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Education',
  components: {},
  data() {
    return {
      defaultUrl: 'http://znn23.top/2023/01/%E5%91%A8%E9%97%B9%E9%97%B9.jpg'
    }
  }
}
</script>

<style lang="less" scoped>
.education-container {
  width: 100%;
  padding: 10px 0;
  .education-main {
    margin: 0 auto;
    padding: 10px 5px;
    font-size: 20px;
    span {
      padding: 0 10px;
    }
    .left {
    }
    .center {
    }
    .right {
    }
  }
}
</style>