<template>
  <div class="shop">
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
      </el-table-column>
      <el-table-column prop="address" label="操作">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      pagenum: 1,
    }
  },
  mounted() {
    console.log(document.cookie)
    this.getList()
  },
  methods: {
    getList() {
      this.$axios.shoplist(this.pagenum).then((res) => {
        console.log(res)
        if (res.data.status == 0) {
          this.tableData = res.data.data.list
        }
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
.el-table {
  padding: 20px;
}
</style>
