<template>
  <div class="home">
    <el-container>
      <el-header>
        <h3>MMALL ADMIN</h3>
        <div>
          <span>欢迎，{{$store.state.username}}</span>
          <a href="#" @click="loginOut">退出</a>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#999" text-color="#000099" active-text-color="#00b2b2" router :collapse-transition="false" :unique-opened="true">
             <el-menu-item index="/about">
               <i class="el-icon-s-home"></i>
                <span>Home</span>
              </el-menu-item>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-s-data"></i>
                <span>商品</span>
              </template>
              <el-menu-item index="/shop">
                <span>商品管理</span>
              </el-menu-item>
              <el-menu-item index="/category">
                <span>品类管理</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-edit"></i>
                <span>订单</span>
              </template>
              <el-menu-item index="/order">
                <span>订单管理</span>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  methods: {
    loginOut() {
      this.$axios.LoginOut().then((res) => {
        console.log(res)
        if (res.data.status == 0) {
          this.$message.success('退出成功')
          this.$router.push('/')
        } else {
          this.$message.error('退出失败')
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  & > .el-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    & > .el-header {
      width: 100%;
      background-color: #999;
      display: flex;
      align-items: center;
      justify-content: space-between;
      & > h3 {
        color: #fff;
      }
    }
    & > .el-container {
      width: 100%;
      flex: 1;
      & > .el-aside {
        height: 100%;
        display: flex;
        flex-direction: column;
        background: #999;
        & > .el-menu > span {
          display: block;
          width: 100%;
          height: 20px;
          background-color: #999;
          text-align: center;
        }
        i {
          font-size: 18px;
          margin-right: 10px;
        }

        & > .el-menu {
          height: 100%;
        }
        .el-menu-vertical-demo {
          border: none;
        }
      }
      & > .el-main {
        width: 100%;
        padding: 0;
        box-sizing: border-box;
      }
    }
  }
}
</style>
