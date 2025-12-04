import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      seo: {
        title: 'Quarantine Zone: The Last Check | Wiki, Guides & News',
        description: 'The ultimate hub for Quarantine Zone: The Last Check. Explore our complete Wiki, survival guides, latest news, and top recommendations for similar games.',
        keywords: 'Quarantine Zone The Last Check, Quarantine Zone Wiki, Quarantine Zone guides, survival strategy, crafting recipes, games like Quarantine Zone'
      }
    }
  },
  {
    path: '/guides',
    name: 'guides',
    component: () => import('../views/GuidesView.vue'),
    meta: {
      seo: {
        title: 'Quarantine Zone: The Last Check Guides, Tips & Strategy',
        description: 'Master Quarantine Zone: The Last Check with our expert guides. Includes beginner survival tips, crafting recipes, combat strategies, and full walkthroughs.',
        keywords: 'Quarantine Zone The Last Check guides, survival tips, beginner guide, walkthrough, combat strategy, crafting guide, how to survive, gameplay tips'
      }
    }
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
    component: () => import('../views/WikiView.vue'),
    meta: {
      seo: {
        title: 'Quarantine Zone: The Last Check Wiki | Tools & Resources',
        description: 'Explore the complete Quarantine Zone: The Last Check Wiki. Detailed database for survival tools, crafting resources, and essential gameplay strategies.',
        keywords: 'Quarantine Zone The Last Check wiki, survival tools, crafting resources, game tools, resource locations, material list, gameplay strategy, QZ database'
      }
    }
  },
  {
    path: '/games',
    name: 'games',
    component: () => import('../views/GamesView.vue'),
    meta: {
      seo: {
        title: 'Quarantine Zone: The Last Check | Free H5 Games',
        description: 'Play free H5 games inspired by Quarantine Zone: The Last Check. No download required. Enjoy the best zombie survival and strategy browser games online.',
        keywords: 'Quarantine Zone The Last Check games, free H5 games, games like Quarantine Zone, zombie browser games, survival games no download, play free games'
      }
    }
  },
  {
    path: '/games/:id',
    name: 'game-detail',
    component: () => import('../views/GameDetailView.vue')
    // 详情页的 TDK 从数据中的 seo 字段读取，不在路由中设置
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/NewsView.vue'),
    meta: {
      seo: {
        title: 'Quarantine Zone: The Last Check | News & Patch Notes',
        description: 'Stay updated with the latest Quarantine Zone: The Last Check news. Read full patch notes, developer announcements, and upcoming feature previews here.',
        keywords: 'Quarantine Zone The Last Check news, patch notes, game updates, devlog, version history, changelog, release date, upcoming features'
      }
    }
  },
  {
    path: '/news/:id',
    name: 'news-detail',
    component: () => import('../views/NewsDetailView.vue')
    // 详情页的 TDK 从数据中的 seo 字段读取，不在路由中设置
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
