<template>
  <div class="show-markdown-container markdown-h">
    <!-- 预览文章内容 -->
    <mavon-editor class="markdown-editor" :value="blog.content" 
    :subfield="false" :defaultOpen="'preview'" :toolbarsFlag="false" :editable="false" :scrollStyle="true" :ishljs="true" />
  </div>
</template>

<script>
export default {
  name: 'ShowMarkdown',
  props: {
    blog: {
      type: Object,
      default: {
        content: '# 加载错误'
      }
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style>
</style>