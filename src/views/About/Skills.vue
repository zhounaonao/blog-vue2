<template>
  <div class="skills-container">
    <h5>/ Skills // 熟练技能</h5>
    <div class="skills-main">
      <div class="row">
        <span>JAVA基础:</span>
        <div slot="reference" class="tag">集合</div>
        <div class="tag">反射</div>
        <div class="tag">IO</div>
        <div class="tag">Lambda</div>
        <div class="tag">Stream</div>
        <div class="tag">Thread</div>
      </div>
      <div class="row">
        <span>框架:</span>
        <div class="tag">Spring</div>
        <div class="tag">SpringBoot</div>
        <div class="tag">SpringCloud</div>
        <div class="tag">Mbatis</div>
        <div class="tag">SpringSecurity</div>
      </div>
      <div class="row">
        <span>中间件:</span>
        <div class="tag">redis</div>
        <div class="tag">nacos</div>
        <div class="tag">feign</div>
      </div>
      <div class="row">
        <span>工具:</span>
        <div class="tag">Docker</div>
        <div class="tag">MySql</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Expertise',
  components: {},
  data() {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
.skills-container {
  width: 100%;
  padding: 10px 0;
  .skills-main {
    max-width: 1000px;
    margin: 0 auto;
    padding: 10px 5px;
    font-size: 20px;
    span {
      display: inline-block;
      width: 120px;
      padding: 0 10px;
      text-align: right;
    }
    .tag {
      display: inline-block;
      min-width: 100px;
      height: 50px;
      margin: 0 10px;
      font-size: 16px;
      text-align: center;
      line-height: 50px;
      border: 2px solid #000000;
      border-radius: 40% 60% 40% 60%;
      cursor: pointer;
    }
    .tag:hover {
      border: 2px solid #0099ff;
      color: #0099ff;
    }
    .row {
      padding: 10px 0;
    }
  }
}
</style>