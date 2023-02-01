<template>
  <div id="CropperImage" style="margin-top: -50px">
    <el-row class="cut">
      <el-col :span="17">
        <VueCropper ref="cropper"
                    :img="option.img"
                    :output-size="option.size"
                    :output-type="option.outputType"
                    :info="option.info"
                    :full="option.full"
                    :fixed="option.fixed"
                    :fixed-number="option.fixedNumber"
                    :can-move="option.canMove"
                    :can-move-box="option.canMoveBox"
                    :fixed-box="option.fixedBox"
                    :original="option.original"
                    :auto-crop="option.autoCrop"
                    :center-box="option.centerBox"
                    :high="option.high"
                    mode="cover"
                    :max-img-size="option.maxImgSize"
                    @real-time="realTime"
                    @crop-moving="cropMoving"
                    @img-load="imgLoad">
        </VueCropper>
      </el-col>
      <el-col :span="7">
        <div class="show-preview"
             :style="{'width': previews.w + 'px', 'height': previews.h + 'px',  'overflow': 'hidden', 'margin': '5px'}">
          <div :style="previews.div">
            <img :src="previews.url" :style="previews.img">
          </div>
        </div>
      </el-col>
    </el-row>

    <div class="test-button">
      <el-upload
          ref="upload"
          class="upload-demo"
          action="#"
          :limit="1"
          :on-change="handleChange"
          :on-exceed="handleExceed"
          :auto-upload="false"
          list-type="picture"
          :show-file-list="false"
      >
        <template #trigger>
          <el-button style="margin-right: 10px;">上传</el-button>
        </template>
        <template #default>
          <el-button @click="refreshCrop" class="btn">刷新</el-button>
          <el-button @click="changeScale(1)" class="btn">+</el-button>
          <el-button @click="changeScale(-1)" class="btn">-</el-button>
          <el-button @click="rotateLeft" class="btn">左翻转</el-button>
          <el-button @click="rotateRight" class="btn">右翻转</el-button>
          <el-button @click="() => option.img = ''">清除</el-button>
          <el-button @click="down('base64')" class="btn">下载</el-button>
          <el-button @click="finish('blob')" class="btn">确定</el-button>
        </template>
      </el-upload>

    </div>
  </div>
</template>

<script>
import {toRefs} from "vue";

export default {
  name: "CropperImage",
  props: {
    url: {
      type: String,
      default: ''
    },
    visible: {
      type: Boolean,
      default: false
    },
    files: {
      type: Object
    },
    option: {
      img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F092919113248%2F1Z929113248-8-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666339531&t=88d5f75e4bbc6b6a7a7eb7ce2e94b2a7',
      size: 1, // 裁剪生成图片的质量
      info: false, // 裁剪框的大小信息
      full: true, //是否输出原图比例的截图
      fixed: true, // 锁定比例
      fixedNumber: [1, 1], // 截图框的宽高比例
      outputType: 'png', // 裁剪生成图片的格式
      canMove: true, // 上传图片是否可以移动
      fixedBox: false, // 固定截图框大小
      original: false, // 上传图片按照原始比例渲染
      canMoveBox: true, // 截图框能否拖动
      autoCrop: true, // 是否默认生成截图框
      // 只有默认生成截图框开启 宽度高度才生效
      autoCropWidth: 300, // 默认生成截图框宽度
      autoCropHeight: 300, // 默认生成截图框高度
      centerBox: false, // 截图框是否被限制在图片里面
      high: true, // 是否按照设备的dpr 输出等比例图片
      maxImgSize: 99999, // 限制图片最大宽度和高度
    },
  },
  setup(props, context) {
    // 其中props是响应式不能随便使用es6解构，context不是响应式可以使用es6解构
    let {name} = toRefs(props); // 将props转化为响应式，因为 props 是响应式的，你不能使用 ES6 解构，因为它会消除 prop 的响应性。
    let handleClick = () => {
      context.emit("handleClick", 324343);
    };
    return {
      handleClick,
      name,
    };
  },
  data() {
    return {
      previews: {}
    }
  },
  methods: {
    handleChange(files) {
      // 改变外面调用的v-model的值
      console.log(files)
      this.$emit("update:url", files.url);
      this.$emit("update:files", files);
      this.option.img = files.url
    },
    handleExceed(newFile, fileList) {
      this.$refs.upload.clearFiles()
      this.$refs.upload.handleStart(newFile[0])
    },
    // 刷新
    refreshCrop() {
      this.$refs.cropper.refresh();
    },
    // 图片伸缩
    changeScale(num) {
      num = num || 1;
      this.$refs.cropper.changeScale(num);
    },
    // 左旋转
    rotateLeft() {
      this.$refs.cropper.rotateLeft();
    },
    // 右旋转
    rotateRight() {
      this.$refs.cropper.rotateRight();
    },
    finish(type) {
      // 输出
      // var test = window.open('about:blank')
      // test.document.body.innerHTML = '图片生成中..'
      if (type === 'blob') {
        this.$refs.cropper.getCropBlob((data) => {
          let img = window.URL.createObjectURL(data);
          this.model = true;
          console.log(data)
          let file = new window.File([data],'avatar.png',{type: data.type})
          console.log(file)
          this.$emit("update:url", img);
          this.$emit("update:visible", false);
          this.$emit("update:files", file);
          // this.props.url = img
        });
      } else {
        this.$refs.cropper.getCropData((data) => {
          this.model = true;
          this.modelSrc = data;
        });
      }
    },
    down(type) {
      // event.preventDefault()
      let aLink = document.createElement('a');
      aLink.download = 'demo';
      // 输出
      if (type === 'blob') {
        this.$refs.cropper.getCropBlob((data) => {
          this.downImg = window.URL.createObjectURL(data);
          aLink.href = window.URL.createObjectURL(data);
          aLink.click();
        });
      } else {
        this.$refs.cropper.getCropData((data) => {
          this.downImg = data;
          aLink.href = data;
          aLink.click();
        });
      }
    },
    // 实时预览函数
    realTime(data) {
      this.previews = data;
    },
    // 截图框移动回调函数
    cropMoving(data) {
    },
    // 图片加载的回调, 返回结果 success, error
    imgLoad(msg) {
    },
  }
}
</script>

<style scoped>
.cut {
  width: 80%;
  height: 600px;
  margin: 30px auto;
}
</style>