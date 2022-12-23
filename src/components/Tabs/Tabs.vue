<template>
  <div class="tabs-container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane v-for="tab in tabList" :key="tab.id" :label="tab.label" 
      :name="tab.name">
    <slot></slot>
    <List></List>
    </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import List from '@/components/List/List.vue'
export default {
  name: 'Tabs',
  components: {
    List
  },
  props: {

  },
  data() {
    return {
      activeName: 'Java',
      tabList: [
        { id: 1, name: 'Java', label: 'Java'},
        { id: 2, name: 'Vue', label: 'Vue'},
        { id: 3, name: 'English', label: 'English'}
      ]
    }
  },
  methods: {
    handleClick() {
      console.log('handleClick');
    }
  }
}
</script>

<style>

</style>