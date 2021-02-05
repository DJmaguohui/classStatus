<template>
  <div class="box">
    <!-- 头部面包屑 -->
    <div class="tit">
      <h1>{{$store.state.routeName}}</h1>
      <el-button type="primary" icon="el-icon-plus">添加品类</el-button>
    </div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="id" label="ID" >
      </el-table-column>
      <el-table-column prop="name" label="名称">
      </el-table-column>
      <el-table-column label="操作">
        <template>
           <el-link type="primary">修改名称</el-link>
           <el-link type="primary">查看子类</el-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData:[]
    }
  },
  mounted() {
    this.$axios. get_category().then(res=>{
     console.log(res)
     this.tableData=res.data.data
    })
  },
  methods: {
    
  },
}
</script>

<style lang="scss" scoped>
.el-link{
  margin-left: 10px;
}
</style>