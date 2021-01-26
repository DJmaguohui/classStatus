import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import createPersistedState from 'vuex-persistedstate'
export default new Vuex.Store({
	state: {
		username: '',
	},
	mutations: {
		getUsername(state, obj) {
			state.username = obj
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
