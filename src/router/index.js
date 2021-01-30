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
				name: 'Home',
				component: () => import('../views/About.vue'),
			},
      //商品管理
			{
				path: '/shop',
				name: '商品管理',
				component: () => import('../components/ShoopList.vue'),
			},
      //品类管理
			{
				path: '/category',
				name: '品类管理',
				component: () => import('../components/Category.vue'),
			},
      //订单
			{
				path: '/order',
				name: "订单管理",
				component: () => import('../components/Order.vue'),
			},
		],
	},
]

const router = new VueRouter({
	routes,
})

export default router
