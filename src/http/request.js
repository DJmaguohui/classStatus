//导入接口
import Api from './api'
//导入axios请求
import $axios from './http'
import qs from 'qs'
function Login(data) {
	return $axios({
    url:Api.login,
    method:"post",
    data:qs.stringify(data)
  })
}

//导出函数封装请求
export default {
	Login,
}
