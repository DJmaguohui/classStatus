<template>
  <div class="login">
    <div class="box">
      <h3>欢迎登录 - MMALL管理系统</h3>
      <el-form :model="numberValidateForm" ref="numberValidateForm" class="demo-ruleForm">
        <el-form-item prop="username" :rules="[
      { required: true, message: '用户名不能为空',trigger:'blur'}
    ]">
          <el-input suffix-icon="el-icon-user-solid
" v-model="numberValidateForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password" :rules="[
      { required: true, message: '密码不能为空',trigger:'blur'}
    ]">
          <el-input type="password" suffix-icon="el-icon-lock" v-model="numberValidateForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
          <el-button @click="resetForm('numberValidateForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numberValidateForm: {
        username: 'admin',
        password: 'admin',
      },
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let obj = {
            username: this.numberValidateForm.username,
            password: this.numberValidateForm.password,
          }
          this.$axios.Login(obj).then((res) => {
            console.log(res)
            if (res.data.status == 0) {
              this.$message.success(res.data.msg)
              this.$store.commit('getUsername',res.data.data.username)
              this.$router.push('/home')
            } else {
              this.$message.error(res.data.msg)
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  },
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background-color: rgb(11, 25, 155);
  display: flex;
  justify-content: center;
  align-items: center;
  .box {
    width: 400px;
    height: 200px;
    background-color: #fff;
    padding: 20px;
    h3 {
      font-weight: normal;
      margin-bottom: 15px;
    }
    .el-form-item {
      text-align: right;
    }
  }
}
</style>