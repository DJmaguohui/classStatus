//导入接口
import Api from './api'
//导入axios请求
import $axios from './http'
import qs from 'qs'
//登录
function Login(data) {
	return $axios({
		url: Api.login,
		method: 'post',
		data: qs.stringify(data),
	})
}
//退出登录
function LoginOut() {
	return $axios({
		url: Api.loginOut,
		method: 'post',
	})
}
//获取商品列表
function shoplist(data) {
	return $axios({
		url: Api.shopList + data,
		method: 'get',
	})
}

//导出函数封装请求
export default {
	Login,
	LoginOut,
	shoplist,
}
