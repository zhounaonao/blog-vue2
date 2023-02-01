<template>
  <div class="tabs-container">
    <ul>
      <li v-for="item in tabList" :key="item.id">
        <a :href="'#' + item.path" :class="isActive == item.id?'is-active':'no-active'" @click="changeActive(item.id)">
          {{ item.name }}
        </a>
      </li>

    </ul>

  </div>
</template>

<script>

export default {
  name: 'Tabs',
  props: {
    tabList: {
      type: Array,
      default: [
        { id: 1, name: '一', path: '/test' },
        { id: 2, name: '二', path: '/test' }
      ]
    }
  },
  computed: {
  },
  data() {
    return {
      isActive: this.tabList[0].id
    }
  },
  methods: {
    changeActive(tab) {
      this.isActive = tab
    }
  }
}
</script>

<style lang="less" scoped>
.tabs-container {
  position: relative;
  background-color: #f5f5f5;

  ul {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;

    // transform: translate(-50%);
    li {
      a {
        display: inline-block;
        height: 40px;
        line-height: 40px;
        padding: 0 20px;
        font-size: 14px;
        border-radius: 5px;
        transition: all .5s;
      }
      a:hover {
        color: #0099ff;
      }
    }
    .is-active {
      background-color: #fff;
      color: #0099ff;
    }
  }
}
</style>