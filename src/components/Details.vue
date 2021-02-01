<template>
  <div class="details">
    <!-- 头部面包屑 -->
    <div class="tit">
      <h1>{{$store.state.routeName}}</h1>
    </div>
    <!-- 页面布局 -->
    <div class="box">
      <div>
        <h5>商品名称</h5> <span>{{obj.name}}</span>
      </div>
      <div>
        <h5>商品描述</h5><span>{{obj.subtitle}}</span>
      </div>
      <div>
        <h5>当前状态</h5><span v-if="obj.status==2">已下架</span><span v-else>上架</span>
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
        <el-input style="width:200px;" v-model="obj.price">
          <template slot="append">元</template>
        </el-input>
      </div>

      <div>
        <h5>商品库存</h5>
        <el-input style="width:200px;" v-model="obj.stock">
          <template slot="append">件</template>
        </el-input>
      </div>

      <div>
        <h5>商品图片</h5><img :src="obj.subImages" alt="">
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
      id: '',
      obj: {},
    }
  },
  mounted() {
    this.id = this.$route.query.id
    this.$axios.Details({ productId: this.id }).then((res) => {
      console.log(res)
      if (res.data.status == 0) {
        this.obj = res.data.data
      }
    })
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.details {
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
    }
  }
}
img {
  width: 60px !important;
  height: 60px !important;
  border: 2px solid #888;
}
</style>