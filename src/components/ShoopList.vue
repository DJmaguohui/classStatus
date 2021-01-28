<template>
  <div class="shop">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="ID">
      </el-table-column>
      <el-table-column prop="name" label="信息">
      </el-table-column>
      <el-table-column prop="address" label="价格">
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
      })
    },
  },
}
</script>

<style scoped lang="scss">
</style>
