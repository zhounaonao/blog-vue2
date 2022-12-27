<template>
  <div class="write-container">
    <div class="write-main">
      <Markdown></Markdown>
    </div>
  </div>
</template>

<script>
import Markdown from '@/components/Markdown/Markdown.vue'
export default {
  name: 'Write',
  components: {
    Markdown
  }
}
</script>

<style lang="less" scoped>
.write-main {
  width: 80%;
  margin: 0 auto;
  padding: 60px;
}
</style>