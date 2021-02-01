<template>
  <div class="shop">
    <!-- 头部面包屑 -->
    <div class="tit">
      <h1>{{$store.state.routeName}}</h1>
      <el-button type="primary" icon="el-icon-plus">添加商品</el-button>
    </div>
    <!-- 搜索 -->
    <div class="switch">
      <el-select v-model="region" placeholder="请选择活动区域">
        <el-option label="根据商品id查询" value="productId"></el-option>
        <el-option label="根据商品名称查询" value="productName"></el-option>
      </el-select>
      <el-input style="width:300px;" v-model="input" clearable>
      </el-input>
      <el-button size="medium" @click="Switch">查询</el-button>
    </div>
    <!-- 表格区域 -->
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="id" label="ID">
      </el-table-column>
      <el-table-column prop="name" label="信息">
      </el-table-column>
      <el-table-column label="价格">
        <template slot-scope="scope">
          {{scope.row.price |filterMoney}}
        </template>
      </el-table-column>
      <el-table-column prop="address" label="状态">
        <template slot-scope="scope">
          <div v-if="scope.row.status==1" class="xia">
            <span>在售</span>
            <el-button size="mini" type="warning" @click="xia(scope.row.id)">下架</el-button>
          </div>
          <div v-else class="xia">
            <span>已下架</span>
            <el-button size="mini" type="warning" @click="shang(scope.row.id)">上架</el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="操作">
        <template slot-scope="scope">
          <el-link type="primary" @click="$router.push(`/detail?id=${scope.row.id}`)">查看</el-link>
          <el-link type="primary" @click="$router.push(`/updata?id=${scope.row.id}`)">编辑</el-link>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页器 -->
    <el-pagination small layout="prev, pager, next" @current-change="handleCurrentChange" :total="total">
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      pagenum: 1,
      region: '',
      input: '',
      total: 0,
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    //获取列表数据
    getList() {
      this.$axios.shoplist({ pageNum: this.pagenum }).then((res) => {
        console.log(res)
        if (res.data.status == 0) {
          this.tableData = res.data.data.list
          this.total = res.data.data.total
        }
      })
    },
    //查询
    Switch() {
      console.log(this.region)
      if (this.region == 'productId') {
        // ID查询
        this.$axios.Switch({ productId: this.input }).then((res) => {
          // console.log(res)
          if (res.data.status == 0) {
            this.tableData = res.data.data.list
          }
        })
      } else {
        // 商品名查询
        this.$axios.Switch({ productName: this.input }).then((res) => {
          // console.log(res)
          if (res.data.status == 0) {
            this.tableData = res.data.data.list
          }
        })
      }
    },
    // 分页器
    handleCurrentChange(num) {
      this.pagenum = num
      this.getList()
    },
    //下架
    xia(id) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          this.$axios.By({ productId: id, status: 2 }).then((res) => {
            this.$message.success(res.data.data)
            this.getList()
          })
        })
        .catch(() => {
          this.$message.error('取消操作')
        })
    },
    //上架
    shang(id) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          this.$axios.By({ productId: id, status: 1 }).then((res) => {
            this.$message.success(res.data.data)
            this.getList()
          })
        })
        .catch(() => {
          this.$message.error('取消操作')
        })
    },
  },
  filters: {
    filterMoney(value) {
      return '￥' + value.toFixed(2)
    },
  },
}
</script>

<style scoped lang="scss">
.shop {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 10px;
  overflow: hidden;
  .switch {
    width: 100%;
    margin:20px 0px;
    .el-input {
      margin: 0 10px;
    }
  }
}
.el-link:nth-of-type(2) {
  margin-left: 5px;
}
</style>
