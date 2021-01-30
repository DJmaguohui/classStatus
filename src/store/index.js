import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import createPersistedState from 'vuex-persistedstate'
export default new Vuex.Store({
	state: {
    //用户名
    username: '',
    //存储路由
    routeName:""
	},
	mutations: {
		getUsername(state, obj) {
			state.username = obj
		},
		getrouteName(state, obj) {
			state.routeName = obj
		},
	},
	actions: {},
	modules: {},
	plugins: [
		createPersistedState({
			storage: window.sessionStorage,
		}),
	],
})
