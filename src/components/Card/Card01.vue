<template>
  <div>
    <div class="box">
      <!-- <span></span> -->
      <div class="content">
        <h2>Hover me!</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card01'
}
</script>

<style lang="less" scoped>
.box {
 position: relative;
 width: 220px;
 height: 300px;
 display: flex;
 justify-content: center;
 align-items: center;
 transition: 0.5s;
 z-index: 1;
}

.box::before {
 content: ' ';
 position: absolute;
 top: 0;
 left: 50px;
 width: 50%;
 height: 100%;
 text-decoration: none;
 background: #fff;
 border-radius: 8px;
 transform: skewX(15deg);
 transition: 0.5s;
}

.box::after {
 content: '';
 position: absolute;
 top: 0;
 left: 50;
 width: 50%;
 height: 100%;
 background: #fff;
 border-radius: 8px;
 transform: skewX(15deg);
 transition: 0.5s;
 filter: blur(30px);
}

.box:hover:before,
.box:hover:after {
 transform: skewX(0deg) scaleX(1.3);
}

.box:before,
.box:after {
 background: linear-gradient(315deg, #ffbc00, #ff0058)
}


.box .content {
 position: relative;
 width: 190px;
 height: 254px;
 padding: 20px 40px;
 // 半透明色
 background: rgba(255, 255, 255, 0.05);
 backdrop-filter: blur(10px);
 // 半透明色
 box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
 border-radius: 8px;
 z-index: 1;
 transform: 0.5s;
 color: #fff;
 display: flex;
 justify-content: center;
 align-items: center;
}

.box .content h2 {
 color: #fff;
 margin-bottom: 10px;
 /* font-size 和 font-family不可以省略
 font: font-style font-weight font-size/line-height font-family */
  font: italic 700 20px 'Microsoft yahei';
}
</style>