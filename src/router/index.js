import Vue from 'vue'
import VueRouter from 'vue-router'
import pathArr from '@/router/pathArr.js'
import { getToken } from '@/utils/auth.js'
import { Message } from 'element-ui'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/views/Home/Home.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/test',
    component: () => import('@/views/Test/Test.vue'),
    meta: {
      title: '测试'
    }
  },
  {
    path: '/user',
    component: () => import('@/views/User/User.vue'),
    children: [
      {
        path: 'userInfo',
        component: () => import('@/views/User/UserInfo.vue')
      },
      {
        path: 'myWorks',
        component: () => import('@/views/User/MyWorks.vue')
      }
    ]
  },
  {
    path: '/study',
    component: () => import('@/views/Study/Study.vue'),
    meta: {
      title: '文章分类'
    },
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
  { path: '/write/:id', component: () => import('@/views/Write/Write.vue'), props: true },
  { path: '/star', component: () => import('@/views/Star/Star.vue') },
  {
    path: '/about',
    component: () => import('@/views/About/About.vue'),
    children: [
      {
        path: 'personalInfo',
        component: () => import('@/views/About/PersonalInfo.vue')
      },
      {
        path: 'skills',
        component: () => import('@/views/About/Skills.vue')
      },
      {
        path: 'education',
        component: () => import('@/views/About/Education.vue')
      }
    ]
  }
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

  if (to.meta.title) {
    document.title = to.meta.title
  }

  // 找不到就会返回-1，找到了就不返回-1
  if (pathArr.indexOf(to.path) != -1) {
    const token = getToken()
    if (token) {
      next()
    } else {
      Message({
        showClose: true,
        message: '请先登录',
        type: 'error'
      })
      document.title = '首页'
      next('/home')
    }
  } else {
    next()
  }
})

export default router
