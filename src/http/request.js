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
		url: Api.shopList + qs.stringify(data),
		method: 'get',
	})
}
//查询switch
function Switch(data) {
	return $axios({
		url: Api.switch + qs.stringify(data),
		method: 'get',
	})
}
//上下架
function By(data) {
	return $axios({
		url: Api.by + qs.stringify(data),
		method: 'get',
	})
}
//查看
function Details(data){
	return $axios({
		url: Api.details + qs.stringify(data),
		method: 'get',
	})
}
//上传图片
function upload(data){
  return $axios({
		url: Api.upload ,
    method: 'post',
    data:data
	})
}

//修改完成
function UpData(data){
return $axios({
  url:Api.Updata+qs.stringify(data),
  method:"get",
})
}

//获取品类数据
function get_category(){
return $axios({
  url:Api.category,
  method:"get",
})
}
//导出函数封装请求
export default {
	Login,
	LoginOut,
	shoplist,
  Switch,
  By,
  Details,
  upload,
  UpData,
  get_category
}
