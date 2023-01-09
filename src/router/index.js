import Vue from 'vue'
import VueRouter from 'vue-router'
import pathArr from '@/router/pathArr.js'
import { getToken } from '@/utils/auth.js'

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
      {
        path: 'type/:categoryId',
        component: () => import('@/views/Study/ArticleList.vue'),
        props: true
      }
    ]
  },
  {
    path: '/article',
    component: () => import('@/views/Study/Article.vue'),
    children: [
      {
        path: ':id',
        component: () => import('@/views/Study/ArticleDetails.vue'),
        props: true
      }
    ],
    props: true
  },
  { path: '/write', component: () => import('@/views/Write/Write.vue') },
  { path: '/star', component: () => import('@/views/Star/Star.vue') },
  { path: '/about', component: () => import('@/views/About/About.vue') }
]

const router = new VueRouter({
  routes
})

router.beforeEach(function (to, from, next) {
  // 让页面回到顶部
  // chrome
  document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  // safari
  window.pageYOffset = 0

  // 找不到就会返回-1，找到了就不返回-1
  if (pathArr.indexOf(to.path) != -1) {
    const token = getToken()
    if (token) {
      next()
    } else {
      next('/home')
    }
  } else {
    next()
  }
})

export default router
