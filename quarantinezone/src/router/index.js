import { createRouter, createWebHistory } from 'vue-router'
import i18n from '../i18n'
import HomeView from '../views/HomeView.vue'
import { SUPPORTED_LOCALES } from '../constants/locales.js'

// 支持的语言列表（英文是默认，不需要前缀）
const supportedLocales = SUPPORTED_LOCALES

// 生成路由路径（英文无前缀，其他语言有前缀）
const createRoutePath = (path, locale = 'en') => {
  if (locale === 'en') {
    return path
  }
  return `/${locale}${path}`
}

// 基础路由配置
const baseRoutes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/guides',
    name: 'guides',
    component: () => import('../views/GuidesView.vue')
  },
  {
    path: '/guides/:id',
    name: 'guide-detail',
    component: () => import('../views/GuideDetailView.vue')
    // 详情页的 TDK 从数据中的 seo 字段读取，不在路由中设置
  },
  {
    path: '/wiki',
    name: 'wiki',
    component: () => import('../views/WikiView.vue')
  },
  {
    path: '/wiki/symptoms',
    name: 'symptoms',
    component: () => import('../views/SymptomsView.vue')
  },
  {
    path: '/zombie-games',
    name: 'games',
    component: () => import('../views/GamesView.vue')
  },
  {
    path: '/zombie-games/:id',
    name: 'game-detail',
    component: () => import('../views/GameDetailView.vue')
    // 详情页的 TDK 从数据中的 seo 字段读取，不在路由中设置
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/NewsView.vue')
  },
  {
    path: '/news/:id',
    name: 'news-detail',
    component: () => import('../views/NewsDetailView.vue')
    // 详情页的 TDK 从数据中的 seo 字段读取，不在路由中设置
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: () => import('../views/PrivacyPolicyView.vue')
  },
  {
    path: '/terms-of-service',
    name: 'terms-of-service',
    component: () => import('../views/TermsOfServiceView.vue')
  },
  {
    path: '/copyright',
    name: 'copyright',
    component: () => import('../views/CopyrightView.vue')
  },
  {
    path: '/about-us',
    name: 'about-us',
    component: () => import('../views/AboutUsView.vue')
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    component: () => import('../views/ContactUsView.vue')
  }
]

// 生成所有语言的路由
const routes = []
baseRoutes.forEach(route => {
  // 英文路由（无前缀）
  routes.push({
    ...route,
    path: route.path,
    meta: {
      ...route.meta,
      locale: 'en'
    }
  })
  
  // 其他语言路由（有前缀）
  supportedLocales.filter(locale => locale !== 'en').forEach(locale => {
    // 为每个语言创建独立的路由，使用唯一的名称
    const localizedRoute = {
      ...route,
      path: createRoutePath(route.path, locale),
      name: route.name ? `${route.name}-${locale}` : undefined,
      meta: {
        ...route.meta,
        locale: locale
      }
    }
    routes.push(localizedRoute)
  })
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

// 路由守卫：从 URL 中提取语言并设置 i18n
router.beforeEach((to, from, next) => {
  // 从路径中提取语言
  const pathSegments = to.path.split('/').filter(Boolean)
  const firstSegment = pathSegments[0]
  
  let locale = 'en' // 默认英文
  
  // 检查第一个路径段是否是支持的语言
  if (supportedLocales.includes(firstSegment)) {
    locale = firstSegment
  }
  
  // 强制设置 i18n 语言（确保在组件加载前设置）
  // 无论当前语言是什么，都强制设置为从 URL 中提取的语言
  i18n.global.locale.value = locale
  
  next()
})

export default router
