<template>
  <div class="test-container">
    <div class="line1">
      <div class="father">
        <div class="children"></div>
      </div>
      <div class="card">
        <img src="http://oss.znn23.top/2022/12/7aeae696b2294ebab955a047e50c6b59.png">
        <p class="title">这是一个菜头，我是他的简介，他是一个图片</p>
        <div class="price-container"><span>价格</span><span>|</span><span class="price">￥20</span></div>
      </div>
      <div class="shadow">
        <div class="box">
          <p>阴影</p>
        </div>
      </div>
      <Position></Position>
    </div>
    <!-- <div class="line2">
      <div class="promo">
        <img src="http://oss.znn23.top/file/background/wallhaven-p981rj_600x600.png">
        <a href="#" class="prev"> &lt; </a>
        <a href="#" class="next"> &gt; </a>
        <ul class="promo-nav">
          <li class="selected"></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div> -->
    <div class="line3">
      <Nav></Nav>
    </div>
    <div class="line4">
      <input type="button" value="dialog" @click="showDialog">
      <Dialog class="dialog" :style="{display: isShowDialog }"></Dialog>
    </div>
    <div class="line5">
      <div class="fake"></div>
    </div>
  </div>
</template>

<script>
import Position from '@/components/Test/Position.vue'
import Nav from '@/components/Nav/Nav.vue'
import Dialog from '@/components/Dialog/Dialog.vue'
export default {
  name: 'Test',
  components: {
    Position, Nav, Dialog
  },
  data() {
    return {
      isShowDialog: 'none'
    }
  },
  methods: {
    showDialog() {
      this.isShowDialog = 'block'
    }
  }
}
</script>

<style lang="less" scoped>
/* 
选择器的权重：
  继承或者*< 元素选择器 < 类选择器，伪类选择器 < ID选择器 < 行内样式style="" < !important 重要的
  0000    < 0001      < 0010                <  0100     < 1000            < 无穷大
  
权重叠加：
  li {} 0,0,0,1 ul li {} 0,0,0,1+0,0,0,1 = 0,0,0,2 => ul li > li
  叠加不会进位 => 0,0,0,9 + 0,0,0,1 = 0,0,0,10
  .nav ul li = 0010 + 0001 + 0001 = 0012
  */

/* 边框的复合写法：
    border: 1px solid red;
    合并相邻的边框
    border-collapse: collapse;
    */

/* 
  border padding会影响盒子的大小
  没有指定width时，padding不会撑开盒子的大小
*/

/* 
margin: 0 auto; 块级元素水平居中
text-align: center; 保证子元素的行内元素居中 */

/* 
嵌套的父子关系的块元素，父元素有上外边距同时，子元素也有上外边距，此时
父元素会塌陷较大的外边距值
*/

/* 
嵌套的父子关系的块元素，父元素有上外边距同时，子元素也有上外边距，此时
父元素会塌陷较大的外边距值
解决方案：
1. 给父元素加边框
2. 给父元素加内边距
3. 给父元素加overflow:hidden

*/
/* 
css样式顺序：
  1.布局定位属性：display,position,float,clear,visibility,overflow
  2.自身属性：width,height,margin,padding,border,background
  3.文本属性：color,font,text-decoration,text-align,vertical-align,white-space,break-word
  4.其他属性(css3)：content,cursor,border-radius,box-shadow,texxt-shadow,background:linear-gradient...
*/

.line1 {
  display: flex;
  flex-direction: row;
  padding: 60px 0 0 0;

  .father {
    height: 15rem;
    width: 15rem;
    background-color: aquamarine;
    // border: 1px solid red;
    // padding: 1px;
    overflow: hidden;

    .children {
      height: 5rem;
      width: 5rem;
      background-color: #000;
      margin-top: 20px;
    }
  }
  .card {
    width: 10rem;
    background-color: #f5f5f5;

    img {
      height: 10rem;
      width: 10rem;
      margin: 0 auto;
    }

    .title {
      font-size: 10px;
      padding: 0 2em;
      margin: 1em 0;
    }

    .price-container {
      font-size: 8px;
      text-align: center;
      margin: 2em 0 0 0;

      .price {
        color: red;
      }
    }
  }

  .shadow {
    .box {
      height: 10rem;
      width: 10rem;
      background-color: #f5f5f5;
    }

    .box:hover {
      /* 阴影 => box-shadow: x, y, 模糊度, 大小, 颜色 inset(内部阴影，可选) */
      box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.3);
      p {
        /* 文字阴影 => text-shadow: x, y, 模糊度, 颜色 */
        text-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
      }
    }
  }
}

.line2 {
  .promo {
    position: relative;
    width: 300px;
    height: 300px;
    margin: 20px auto;

    img {
      width: 300px;
      height: 300px;
    }

    /* 并集选择器 */
    .prev,
    .next {
      position: absolute;
      top: 50%;
      margin-top: -15px;
      width: 20px;
      height: 30px;
      background-color: rgba(0,0,0,.3);
      font-size: 20px;
      text-align: center;
      
    }

    .prev {
      left: 0;
      border-radius: 0 50% 50% 0;
    }

    .next {
      right: 0;
      border-radius: 50% 0 0 50%;
    }

    .promo-nav {
      position: absolute;
      bottom: 10px;
      left: 50%;
      margin-left: -30px;
      width: 80px;
      height: 16px;
      background-color: rgba(255, 255, 255, .3);
      border-radius: 10px;

      li {
        float: left;
        width: 10px;
        height: 10px;
        margin: 3px;
        background-color: #fff;
        border-radius: 50%;
      }
      .selected {
        background-color: lightcoral;
      }
    }
  }
}

.line4 {
}

.line5 {
  /* 伪元素选择器，必须得有content属性权重为1 */
  /* 当前权重 2 */
  .fake::before {
    content: '我';
  }
  .fake::after {
    content: '\e7ee';
    font-family: "iconfont" !important;
  }
}
</style>