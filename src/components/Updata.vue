<template>
  <div class="Updata">
    <!-- 头部面包屑 -->
    <div class="tit">
      <h1>{{$store.state.routeName}}</h1>
    </div>
    <!--内容布局 -->
    <!-- 页面布局 -->
    <div class="box">
      <div>
        <h5>商品名称</h5>
        <el-input v-model="obj.name"></el-input>
      </div>
      <div>
        <h5>商品描述</h5>
        <el-input v-model="obj.subtitle"></el-input>
      </div>
      <div>
        <h5>所属分类</h5>
        <el-select v-model="value" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="value" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </div>

      <div>
        <h5>商品价格</h5>
        <el-input type="number" style="width:200px;" v-model="obj.price">
          <template slot="append">元</template>
        </el-input>
      </div>

      <div>
        <h5>商品库存</h5>
        <el-input type="number" style="width:200px;" v-model="obj.stock">
          <template slot="append">件</template>
        </el-input>
      </div>

      <div>
        <h5>商品图片</h5>
        <el-upload class="upload-demo" action="http://admintest.happymmall.com/manage/product/upload.do" :on-change="handleChange" :headers="Cookie" :file-list="fileList">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </div>

      <div>
        <h5>商品详情</h5>
        <p v-html="obj.detail"></p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {},
      fileList: [],
      Cookie: { Cookie:  "JSESSIONID=B72BB3B8429895FF9535F5DD2A5B534E"},
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    //获取数据
    getData() {
      this.$axios.Details({ productId: this.$route.query.id }).then((res) => {
        console.log(res)
        
        if (res.data.status == 0) {
          this.obj = res.data.data
        }
      })
    },
    //图片上传
    handleChange(file, fileList) {
      this.fileList = fileList.slice(-3)
    },
  },
}
</script>

<style lang="scss" scoped>
.Updata {
  width: 100%;
  height: 100%;
  & > .box {
    width: 80%;
    height: 90%;
    margin: 10px auto;
    & > div {
      height: 60px;
      display: flex;
      align-items: center;
      h5 {
        margin: 0 20px;
      }
      .el-input {
        width: 300px;
        height: 20px;
      }
    }
  }
}
img {
  width: 60px !important;
  height: 60px !important;
  border: 2px solid #888;
}
</style>