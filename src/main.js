import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 导入axios
import axios from './http/request'
Vue.prototype.$axios = axios
//导入element-ui
import './Element_ui/elememt'
import 'element-ui/lib/theme-chalk/index.css';
new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app')
