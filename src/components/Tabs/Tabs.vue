<template>
  <div class="tabs-container">
    <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
      <el-tab-pane v-for="tab in tabList" :key="tab.id" :label="tab.name" 
      >
        
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
    tabList: {
      type: Array,
      default: [{id:1, name:'1'}]
    }
  },
  data() {
    return {
      activeName: 1
      // tabList: [
      //   { id: 1, name: 'Java'},
      //   { id: 2, name: 'Vue', label: 'Vue'},
      //   { id: 3, name: 'English', label: 'English'}
      // ]
    }
  },
  methods: {
    handleClick() {
      // console.log('handleClick');
    }
  }
}
</script>

<style>

</style>