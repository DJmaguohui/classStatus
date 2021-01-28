import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Login',
    component: () => import('../views/Login.vue'),
    // beforeEnter: (to, from, next) => {
    //   if (document.cookie) {
    //     next()
    //   } else {
    //    next('/about')
    //   }
    // }
	},
	{
		path: '/home',
		name: 'Home',
    component: () => import('../views/Home.vue'),
    redirect: '/about',
		children: [
      //首页
			{
				path: '/about',
				name: 'About',
				component: () => import('../views/About.vue'),
			},
      //商品管理
			{
				path: '/shop',
				name: 'Shop',
				component: () => import('../components/ShoopList.vue'),
			},
		],
	},
]

const router = new VueRouter({
	routes,
})

export default router
