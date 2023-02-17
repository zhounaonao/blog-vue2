<template>
  <div class="tabs-container">
    <ul class="box-btm">
      <li v-for="item in tabList" :key="item.path">
        <a :href="'#' + item.path" :class="isActive == item.path?'is-active':'no-active'" @click="changeActive(item.path)">
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
        { id: 1, name: '测试', path: '/test' }
      ]
    }
  },
  computed: {
  },
  data() {
    return {
      isActive: this.tabList[0].path
    }
  },
  created() {
    this.isActive = this.$route.path
    console.log(this.tabList[0].path);
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
  // background-color: #f5f5f5;
  margin: 0 auto;

  ul {
    display: flex;
    // position: absolute;
    // top: 0;
    // left: 0;

    // transform: translate(-50%);
    li {
      a {
        display: inline-block;
        height: 40px;
        line-height: 40px;
        padding: 0 20px;
        font-size: 14px;
        border-radius: 5px 5px 0 0;
        transition: all .5s;
      }

    }
    .is-active {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
}
</style>