// vue.config.js
module.exports = {
	lintOnSave: false,
	publicPath: './',
	devServer: {
		port: 8080,
		proxy: {
			'/api': {
				//请求源地址
				target: 'http://admintest.happymmall.com',
				// target: 'http://books.zealon.cn/api',
				//是否跨域
				changeOrigin: true,
				ws: true,
				pathRewrite: {
					'^/api': '',
				},
			},
		},
	},
}
