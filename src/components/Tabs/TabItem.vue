<template>
  <div class="tab-item-container">
    <el-tab-pane v-for="tab in tabList" :key="tab.id" :label="tab.name" 
      :name="tab.name">
        
      </el-tab-pane>
  </div>
</template>

<script>
export default {
  name: 'TabItem',
  data() {
    return {
      
    }
  }
}
</script>

<style>

</style>