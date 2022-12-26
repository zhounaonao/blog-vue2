import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: () => import('@/views/Home/Home.vue') },
  { path: '/test', component: () => import('@/views/Test/Test.vue') },
  { path: '/user', component: () => import('@/views/User/User.vue') },
  {
    path: '/study',
    component: () => import('@/views/Study/Study.vue'),
    children: [
      { path: 'type/:categoryId', component: () => import('@/views/Study/ArticleList.vue'), props: true },
      { path: 'article/:id', component: () => import('@/views/Study/ArticleInfo.vue'), props: true },
    ]
  },

  { path: '/star', component: () => import('@/views/Star/Star.vue') },
  { path: '/about', component: () => import('@/views/Star/Star.vue') }
]

const router = new VueRouter({
  routes
})

export default router
