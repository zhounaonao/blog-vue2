<template>
  <div class="test-container page-head">
    <div class="test-main page-width">
      <div class="line1">
        <div class="father">
          <div class="children"></div>
        </div>
        <div class="card">
          <img src="http://znn23.top/file/caitou.png">
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
      <div class="line11">
        <Tabs></Tabs>
      </div>
      <div class="line2">
        <!-- <div class="promo">
        <img src="http://znn23.top/file/background/wallhaven-p981rj_600x600.png">
        <a href="#" class="prev"> &lt; </a>
        <a href="#" class="next"> &gt; </a>
        <ul class="promo-nav">
          <li class="selected"></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div> -->
      </div>
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
      <div class="line6">
        <div class="transition">
        </div>
        <div class="jdt">
          <div class="jdt_in"></div>
        </div>
      </div>
      <div class="line7">
        <div class="animation"></div>
        <div class="animation-simple"></div>
      </div>
      <div class="line8">
        <div class="steps-font">欢迎光临本店</div>
      </div>
      <div class="line9">
        <div class="bg1"></div>
        <div class="bg2"></div>
        <div class="bear-running">
        </div>
      </div>
      <div class="line10">
        <div class="translate3d"></div>
        <div class="rotate3d"></div>
        <div class="transform-style">
          <div class="t1"></div>
          <div class="t2"></div>
        </div>
        <!-- 前后翻转 -->
        <div class="two-box">
          <div class="box1">zyd</div>
          <div class="box2">znn</div>
        </div>
        <!-- 上下翻转 -->
        <div class="two-box-x">
          <div class="box1">zyd</div>
          <div class="box2">znn</div>
          <!-- 右 -->
          <div class="box3"></div>
          <!-- 上 -->
          <div class="box4"></div>
          <!-- 左 -->
          <div class="box5"></div>
        </div>
        <!-- 滚动 -->
        <div class="six-box">
          <div class="box1"></div>
          <div class="box2"></div>
          <div class="box3"></div>
          <div class="box4"></div>
          <div class="box5"></div>
          <div class="box6"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Position from '@/components/Test/Position.vue'
import Nav from '@/components/Nav/Nav.vue'
import Dialog from '@/components/Dialog/Dialog.vue'
import Tabs from '@/components/Tabs/Tabs.vue'
export default {
  name: 'Test',
  components: {
    Position,
    Nav,
    Dialog,
    Tabs
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
.test-container {
  .test-main {
    background-color: #fff;

  }
}
.line1 {
  display: flex;
  flex-direction: row;

  .father {
    height: 3rem;
    width: 3rem;
    background-color: aquamarine;
    // border: 1px solid red;
    // padding: 1px;
    overflow: hidden;

    .children {
      height: 2rem;
      width: 2rem;
      background-color: #000;
      margin-top: 20px;
    }
  }
  .card {
    width: 3rem;
    background-color: #f5f5f5;

    img {
      display: inline-block;
      height: 3rem;
      width: 3rem;
      margin: 0 auto;
      border-radius: 50%;
      transition: all 0.5s;
    }

    img:hover {
      transform: rotate(360deg);
    }

    .title {
      font-size: 12px;
    }

    .price-container {
      font-size: 8px;
      text-align: center;

      .price {
        color: red;
      }
    }
  }

  .shadow {
    .box {
      height: 5rem;
      width: 5rem;
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

.line11 {
  height: 100px;
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
      background-color: rgba(0, 0, 0, 0.3);
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
      background-color: rgba(255, 255, 255, 0.3);
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
    display: inline-block;
    font-family: 'iconfont' !important;
    transition: all 0.5s;
  }
  .fake:hover::after {
    /* transform: rotate 对行内元素无效 */
    /* 使用2D转换可以旋转 */
    transform: rotate(45deg);
  }
}

.line6 {
  display: flex;

  .transition {
    width: 100px;
    height: 50px;
    background-color: #ff5;
    /* transition: 要过度的属性 花费时间 运动曲线(可以省略) 何时开始(可以省略); */
    /* 属性: 想要变化的css属性，宽度高度背景颜色内外边距都可以，如果要所有属性都变化过度，写个all，需要单独写用逗号隔开 */
    /* 花费时间: 单位时秒（必须写单位）.5s */
    /* 运动曲线: 默认时ease, line=匀速,ease=逐渐慢下来,ease-in=加速,ease-out=减速,ease-in-out=先加速后减速 */
    /* 何时开始: 单位时秒（必须要写单位）可以设置延迟触发的事件 默认时0s */
    /* 谁过度给谁加transition */
    transition: all 0.5s, height 1s ease-in 1s, background-color 2s;
  }

  .transition:hover {
    /* 使用宽高会撑开盒子 */
    // width: 200px;
    // height: 100px;
    /* 使用2D转换缩放不会撑开盒子,scale的参数是宽和高的倍数 */
    transform: scale(2, 2);
    background-color: #ff5555;
    border: 2px solid #000;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }

  .jdt {
    width: 200px;
    height: 20px;
    border: 1px solid #ff5555;
    border-radius: 10px;
    padding: 1px;
    .jdt_in {
      width: 10%;
      height: 100%;
      background-color: #ff5555;
      border-radius: 10px;
      transition: width 1s;
    }
  }

  .jdt:hover .jdt_in {
    width: 100%;
  }
}

/* 定义动画 */
@keyframes move {
  // 0% {
  //   transform: translate(0, 0);
  // }
  // 100% {
  //   transform: translate(1000px, 0);
  // }
  /* from to 等价于 0% 100% */
  from {
    left: 0;
  }
  to {
    left: 50%;
    transform: translate(-50%, 0);
  }
}

.line7 {
  .animation-simple,
  .animation {
    position: relative;
    display: inline-block;
    width: 100px;
    height: 100px;
  }

  .animation {
    background-color: #ff5555;
    animation-name: move;
    animation-duration: 2s; // 持续时间
    animation-timing-function: ease-in; // 运动曲线 linear 匀速 steps() 就是分几步（几帧）来完成动画(可以完成打字)
    animation-delay: 2s; // 何时开始
    animation-iteration-count: infinite; //重复次数，默认 1 次，infinite 无限循环
    animation-direction: alternate; // 是否反向播放 默认是 normal 如果想要反方向 写 alternate
    animation-fill-mode: forwards; // 动画结束后的状态，默认是 backwards 回到初始状态，我们可以让他停留在结束状态 forwards
  }
  .animation:hover {
    animation-play-state: paused; // 暂停动画
  }
  .animation-simple {
    background-color: #46fa35c2;
    animation: move 2s linear 2s infinite alternate forwards;
  }
}

@keyframes stepsFont {
  0% {
    width: 0;
  }
  100% {
    width: 120px;
  }
}

.line8 {
  .steps-font {
    width: 0;
    height: 30px;
    /* 文字超出盒子不显示 */
    overflow: hidden;
    /* 文字一行显示 */
    white-space: nowrap;
    margin: 0 auto;
    background-color: #fff;
    font-size: 20px;
    animation: stepsFont 2s steps(6) forwards;
  }
}

@keyframes bearRunning {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -1600px 0;
  }
}

@keyframes bgRunning {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -3840px 0;
  }
}

.line9 {
  position: relative;
  height: 600px;

  .bg1 {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 336px;
    background: url(../../assets/images/bg1.png);
    z-index: 10;
    animation: bgRunning 30s linear infinite;
  }
  .bg2 {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 570px;
    background: url(../../assets/images/bg2.png);
    opacity: 0.8;
    z-index: 1;
    animation: bgRunning 60s linear infinite;
  }
  .bear-running {
    position: absolute;
    bottom: 50px;
    width: 200px;
    height: 100px;
    background: url(../../assets/images/bear.png) no-repeat;
    animation: bearRunning 0.5s steps(8) infinite, move 5s linear forwards;
    z-index: 11;
  }
}

.line10 {
  perspective: 1000px; // 透视，视距越大看的越小
  .six-box,
  .two-box-x,
  .two-box,
  .rotate3d,
  .translate3d {
    position: relative;
    display: inline-block;
    width: 100px;
    height: 100px;
    margin: 50px 50px;
    transition: all 0.5s;
    transform-style: preserve-3d;
    div {
      position: absolute;
      width: 100px;
      height: 100px;
      text-align: center;
      line-height: 100px;
    }
  }

  .translate3d {
    background-color: #ff5555;
  }
  .translate3d:hover {
    // transform: translate3d(10px, 10px, 50px);
    transform: translateZ(100px);
  }
  .rotate3d {
    background-color: #aa5555;
  }
  .rotate3d:hover {
    // transform: rotateX(180deg);
    transform: rotateY(60deg);
  }
  .transform-style {
    perspective: 500px;
    position: relative;
    display: inline-block;
    width: 100px;
    height: 100px;
    margin: 50px 50px;
    transition: all 0.5s;
    transform-style: preserve-3d; // 控制子元素是否开启立体空间

    .t1,
    .t2 {
      position: absolute;
      width: 100px;
      height: 100px;
    }

    .t1 {
      background-color: #ff4444;
    }

    .t2 {
      background-color: #aa1111;
      transform: rotateX(45deg);
    }
  }
  .transform-style:hover {
    transform: rotateY(60deg);
  }
  // 伪元素清除浮动
  .transform-style::after {
    content: '';
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }

  .two-box {
    // perspective: 500px;
    div {
      border-radius: 50%;
    }

    .box1 {
      background-color: green;
      transform: translateZ(-1px) rotateY(180deg);
      /* 不面向页面的时候不显示 */
      backface-visibility: hidden;
      color: #f5f5f5;
    }
    .box2 {
      background-color: bisque;
    }
  }
  .two-box:hover {
    transform: rotateY(180deg);
  }

  .two-box-x {
    height: 50px;
    div {
      height: 50px;
      line-height: 50px;
    }
    .box1 {
      background-color: #ff5555;
      transform: translateZ(-25px) rotateX(-90deg);
      transform-origin: bottom;
    }
    .box2 {
      background-color: #ccc222;
      transform: translateZ(25px);
    }
    .box3 {
      width: 50px;
      background-color: #000;
      transform: translateX(75px) rotateY(90deg);
    }
    .box4 {
      background-color: #000;
      transform: translateY(-25px) rotateX(90deg);
    }
    .box5 {
      width: 50px;
      background-color: #000;
      transform: translateX(-25px) rotateY(90deg);
    }
  }
  .two-box-x:hover {
    transform: rotateX(90deg);
  }

  .six-box {
    width: 150px;
    height: 100px;
    margin: 0 200px;
    transition: all 2s;
    div {
      width: 150px;
      height: 100px;
      background: #ff5555 url(http://znn23.top/file/%E6%A0%87%E7%AD%BE/dog.jpg)
        no-repeat;
      /* 
      1.宽，高，一个参数就是宽，高度等比例缩放，
      2.%就是当前容器的% 
      3.cover完全覆盖div盒子
      4.contain 高度和宽度等比例拉伸 当宽度或者高度铺满div盒子就不再拉伸(可能有部分空白区域)
      */
      // background-size: 150px;
      // background-size: cover;
      background-size: contain;
    }
    .box1 {
      transform: translateZ(150px);
    }
    .box2 {
      transform: rotateY(60deg) translateZ(150px);
    }
    .box3 {
      transform: rotateY(120deg) translateZ(150px);
    }
    .box4 {
      transform: rotateY(180deg) translateZ(150px);
    }
    .box5 {
      transform: rotateY(240deg) translateZ(150px);
    }
    .box6 {
      transform: rotateY(300deg) translateZ(150px);
    }
  }
  .six-box:hover {
    transform: rotateY(360deg);
  }
}
</style>