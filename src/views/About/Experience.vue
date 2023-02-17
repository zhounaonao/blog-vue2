<template>
  <div class="skills-container">
    <h5>/ Skills // 熟练技能</h5>
    <div class="skills-main">
      <div class="left">
        <span>JAVA基础:</span>
        <el-popover
          placement="top-start"
          title="集合"
          width="200"
          trigger="hover"
          content="集合。">
          <div slot="reference" class="tag">集合</div>
        </el-popover>
        <div class="tag">反射</div>
        <div class="tag">IO</div>
        <div class="tag">Lambda</div>
        <div class="tag">stream</div>
        <div class="tag">thread</div>
      </div>
      <div class="center">
        <span>框架:</span>
        <div class="tag">集合</div>
        <div class="tag">反射</div>
        <div class="tag">IO</div>
        <div class="tag">Lambda</div>
        <div class="tag">stream</div>
        <div class="tag">thread</div>
      </div>
      <div class="right">
      </div>
      <span>中间件:</span>
        <div class="tag">集合</div>
        <div class="tag">反射</div>
        <div class="tag">IO</div>
        <div class="tag">Lambda</div>
        <div class="tag">stream</div>
        <div class="tag">thread</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Experience',
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
      width: 100px;
      height: 50px;
      margin: 10px;
      font-size: 16px;
      text-align: center;
      line-height: 50px;
      border: 1px solid #ff0000;
      border-radius: 40% 60% 40% 60%;
      cursor:pointer;
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