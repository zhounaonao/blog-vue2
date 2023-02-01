<template>
  <div class="card01-container">
    <div class="box">
      <div class="card box-btm">
        <div class="avatar">
          <img src="http://znn23.top/2022/12/7aeae696b2294ebab955a047e50c6b59.png">
        </div>
        <div class="content">
          <div class="name">
            Nn
          </div>
          <div class="motto">
            还是很有意义的
          </div>
        </div>

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
.card01-container {
  width: 200px;
  .box {
    position: relative;
    width: 100%;
    height: 300px;
    /* 过度效果 */
    transition: 0.5s;
    z-index: 1;

    .card {
      width: 100%;
      position: relative;
      height: 300px;
      padding: 20px 40px;

      z-index: 1;
      transform: 0.5s;
      color: #fff;
      display: flex;
      flex-direction: column; 
      justify-content: center;
      align-items: center;

      .avatar {
        img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

      }
      .content {
        color: #000;
        margin-bottom: 10px;
        text-align: center;
        .name {
          /* font-size 和 font-family不可以省略
          font: font-style font-weight font-size/line-height font-family */
          font: italic 700 30px 'Microsoft yahei';
        }
        .motto {
          font: italic 700 20px 'Microsoft yahei';
        }
      }
    }


  }
  .box:before,
  .box:after {
    background: linear-gradient(315deg, #ffbc00, #ff0058);
  }
}

// .box::before {
//  card: ' ';
//  position: absolute;
//  top: 0;
//  left: 50px;
//  width: 50%;
//  height: 100%;
//  text-decoration: none;
//  background: #fff;
//  border-radius: 8px;
//  transform: skewX(15deg);
//  transition: 0.5s;
// }

// .box::after {
//  card: '';
//  position: absolute;
//  top: 0;
//  left: 50;
//  width: 50%;
//  height: 100%;
//  background: #fff;
//  border-radius: 8px;
//  transform: skewX(15deg);
//  transition: 0.5s;
//  filter: blur(30px);
// }

// .box:hover:before,
// .box:hover:after {
//  transform: skewX(0deg) scaleX(1.3);
// }
</style>