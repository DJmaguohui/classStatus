import axios from 'axios'

const Server = axios.create({
	baseURL: 'http://admintest.happymmall.com/manage',
	timeout: 5000,
})

//请求拦截器
Server.interceptors.request.use((config) => {
	return config
})

//响应拦截器
Server.interceptors.response.use((response) => {
	return response
})
export default Server
