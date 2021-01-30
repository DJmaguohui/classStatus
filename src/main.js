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

//全局路由守卫
router.beforeEach((to,from,next)=>{console.log()
//  console.log(to)
 store.commit('getrouteName',to.name)
 next()
})
new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app')
