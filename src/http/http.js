import axios from 'axios'

const Server = axios.create({
	baseURL:"/api",
	// withCredentials: true,
	timeout: 5000,
})

//请求拦截器
Server.interceptors.request.use((config) => {
  // console.log(document.cookie)
	return config
})

//响应拦截器
Server.interceptors.response.use((response) => {
	return response
})
export default Server
