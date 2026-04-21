import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import i18n from '../i18n'
import { seoConfig } from './config.js'

// 生成本地化路径的辅助函数（用于 SEO）
function createLocalizedPath(path, locale = 'en') {
  if (locale === 'en') {
    return path
  }
  return `/${locale}${path}`
}

// 提取基础路径（去除语言前缀）
function extractBasePath(path) {
  for (const loc of seoConfig.supportedLocales) {
    if (loc === 'en') continue
    const prefix = `/${loc}`
    if (path === prefix) return '/'
    if (path.startsWith(`${prefix}/`)) {
      return path.slice(prefix.length) || '/'
    }
  }
  return path
}

// SEO composable
export function useSEO() {
  const route = useRoute()

  // 当前页面的SEO数据
  const currentSEO = ref({})

  // 获取当前页面路径
  const currentPath = computed(() => {
    return route.path
  })

  // 获取Canonical URL
  const canonicalUrl = computed(() => {
    return `${seoConfig.fullDomain}${currentPath.value}`
  })

  // 设置页面SEO数据
  const setSEO = (seoData) => {
    currentSEO.value = {
      ...seoConfig.defaults,
      ...seoData
    }
    updateMetaTags()
  }

  // 更新HTML meta标签
  const updateMetaTags = () => {
    if (typeof document === 'undefined') return

    const seo = currentSEO.value

    // 更新title
    document.title = seo.title || seoConfig.defaults.title

    // 更新或创建meta标签
    updateMetaTag('description', seo.description)
    updateMetaTag('keywords', seo.keywords)
    updateMetaTag('author', seo.author)

    // Open Graph标签
    updateMetaTag('og:title', seo.title, 'property')
    updateMetaTag('og:description', seo.description, 'property')
    updateMetaTag('og:image', seo.image, 'property')
    updateMetaTag('og:url', canonicalUrl.value, 'property')
    updateMetaTag('og:type', seo.type, 'property')
    updateMetaTag('og:site_name', 'Quarantine Zone Community', 'property')

    // Twitter Card标签
    updateMetaTag('twitter:card', 'summary_large_image', 'name')
    updateMetaTag('twitter:title', seo.title, 'name')
    updateMetaTag('twitter:description', seo.description, 'name')
    updateMetaTag('twitter:image', seo.image, 'name')
    updateMetaTag('twitter:site', seoConfig.social.twitter, 'name')

    // Canonical URL
    updateCanonicalLink()
    
    // 添加 hreflang 标签
    updateHreflangLinks()
  }

  // 更新单个meta标签
  const updateMetaTag = (name, content, attribute = 'name') => {
    if (!content) return

    // 查找现有标签
    let tag = document.querySelector(`meta[${attribute}="${name}"]`)
    
    if (tag) {
      // 如果标签存在，直接更新content
      tag.setAttribute('content', content)
    } else {
      // 如果标签不存在，创建新标签
      tag = document.createElement('meta')
      tag.setAttribute(attribute, name)
      tag.setAttribute('content', content)
      document.head.appendChild(tag)
    }
  }

  // 更新Canonical链接
  const updateCanonicalLink = () => {
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalUrl.value)
  }

  // 更新 hreflang 链接
  const updateHreflangLinks = () => {
    // 移除现有的 hreflang 链接
    const existingHreflangs = document.querySelectorAll('link[rel="alternate"][hreflang]')
    existingHreflangs.forEach(link => link.remove())

    const basePath = extractBasePath(currentPath.value)
    
    // 为所有支持的语言添加 hreflang 链接
    seoConfig.supportedLocales.forEach(locale => {
      const localizedPath = createLocalizedPath(basePath, locale)
      const hreflangUrl = `${seoConfig.fullDomain}${localizedPath}`
      
      const link = document.createElement('link')
      link.setAttribute('rel', 'alternate')
      link.setAttribute('hreflang', seoConfig.locales[locale].hreflang)
      link.setAttribute('href', hreflangUrl)
      document.head.appendChild(link)
    })
    
    // 添加 x-default（指向英文版本）
    const defaultPath = createLocalizedPath(basePath, 'en')
    const defaultUrl = `${seoConfig.fullDomain}${defaultPath}`
    
    const defaultLink = document.createElement('link')
    defaultLink.setAttribute('rel', 'alternate')
    defaultLink.setAttribute('hreflang', 'x-default')
    defaultLink.setAttribute('href', defaultUrl)
    document.head.appendChild(defaultLink)
  }

  // 生成结构化数据
  const generateStructuredData = (pageType = 'WebPage') => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': pageType,
      name: currentSEO.value.title,
      description: currentSEO.value.description,
      url: canonicalUrl.value,
      publisher: {
        '@type': 'Organization',
        name: 'Quarantine Zone Community',
        url: seoConfig.fullDomain,
        logo: {
          '@type': 'ImageObject',
          url: `${seoConfig.fullDomain}/images/logo.webp`
        },
        sameAs: [
          `https://twitter.com/${seoConfig.social.twitter.replace('@', '')}`,
          `https://facebook.com/${seoConfig.social.facebook}`,
          `https://instagram.com/${seoConfig.social.instagram}`,
          `https://discord.gg/${seoConfig.social.discord}`
        ]
      }
    }

    // 根据页面类型添加特定数据
    if (pageType === 'VideoGame') {
      baseData.genre = 'Survival Simulation'
      baseData.gamePlatform = ['PC']
      baseData.operatingSystem = ['Windows']
      baseData.applicationCategory = 'Game'
      baseData.developer = {
        '@type': 'Organization',
        name: 'Brigada Games'
      }
      baseData.publisher = {
        ...baseData.publisher,
        name: 'Devolver Digital'
      }
    }

    if (pageType === 'Article') {
      baseData.author = {
        '@type': 'Organization',
        name: 'Quarantine Zone Community'
      }
      baseData.datePublished = new Date().toISOString()
      baseData.dateModified = new Date().toISOString()
    }

    return baseData
  }

  // 添加结构化数据到页面
  const addStructuredData = (data) => {
    if (typeof document === 'undefined') return

    // 只移除动态添加的结构化数据（不包含 data-seo-default 属性的），保留 index.html 中的默认值
    const dynamicScripts = document.querySelectorAll('script[type="application/ld+json"]:not([data-seo-default])')
    dynamicScripts.forEach(script => script.remove())

    // 添加新的结构化数据（标记为动态添加）
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-seo-dynamic', 'true')
    script.textContent = JSON.stringify(data)
    document.head.appendChild(script)
  }

  return {
    currentSEO,
    currentPath,
    canonicalUrl,
    setSEO,
    updateMetaTags,
    generateStructuredData,
    addStructuredData
  }
}

// 路由名称到SEO key的映射（对应 i18n tdk 中的 key）
const routeToSeoKey = {
  'home': 'homePage',
  'guides': 'guidesPage',
  'guide-detail': 'guideDetailPage',
  'wiki': 'wikiPage',
  'wiki-detail': 'wikiDetailPage',
  'symptoms': 'symptomsPage',
  'games': 'gamesPage',
  'game-detail': 'gameDetailPage',
  'news': 'newsPage',
  'news-detail': 'newsDetailPage',
  'privacy-policy': 'privacyPolicyPage',
  'terms-of-service': 'termsOfServicePage',
  'copyright': 'copyrightPage',
  'about-us': 'aboutUsPage',
  'contact-us': 'contactUsPage'
}

// 自动SEO composable - 监听路由变化自动设置SEO
export function useAutoSEO() {
  const { setSEO, generateStructuredData, addStructuredData } = useSEO()
  const route = useRoute()
  const { locale } = useI18n()
  
     // 处理SEO的函数
     const handleSEO = async () => {
       const routeName = route.name
       
       // 提取基础路由名称（去除语言后缀，如 'home-de' -> 'home'）
       let baseRouteName = routeName
       if (routeName && typeof routeName === 'string') {
         const parts = routeName.split('-')
         const lastPart = parts[parts.length - 1]
         // 如果最后一部分是语言代码，则移除它
        if (seoConfig.supportedLocales.includes(lastPart)) {
          baseRouteName = parts.slice(0, -1).join('-')
        }
       }

       // 详情页的 SEO 由页面组件自己从数据中设置，跳过自动 SEO
       if (baseRouteName === 'guide-detail' || baseRouteName === 'game-detail' || baseRouteName === 'news-detail') {
         return
       }

       const seoKey = routeToSeoKey[baseRouteName]

    let finalSEOData = {
      ...seoConfig.defaults
    }

    // 从 i18n 获取静态页面的 TDK
    if (seoKey) {
      try {
        // 直接访问 i18n 的 messages，避免警告
        const messages = i18n.global.messages.value || i18n.global.messages
        const currentLocale = locale.value || 'en'
        const localeMessages = messages[currentLocale]
        
        if (localeMessages && localeMessages.tdk && localeMessages.tdk[seoKey]) {
          const tdk = localeMessages.tdk[seoKey]
          if (tdk && typeof tdk === 'object' && tdk.title) {
            finalSEOData = {
              ...finalSEOData,
              title: tdk.title,
              description: tdk.description || finalSEOData.description,
              keywords: tdk.keywords || finalSEOData.keywords
            }
          }
        } else {
          if (import.meta.env.DEV) {
            console.warn(`TDK not found for route: ${routeName} (seoKey: ${seoKey}) in locale: ${currentLocale}`)
          }
        }
      } catch (error) {
        // 如果 i18n 中没有对应的 TDK，输出警告
        if (import.meta.env.DEV) {
          console.warn(`Failed to get TDK for route: ${routeName}:`, error)
        }
      }
    }

    // 设置 SEO
    setSEO(finalSEOData)
    
    // 添加结构化数据
    const structuredData = generateStructuredData(finalSEOData.type === 'article' ? 'Article' : 'WebPage')
    addStructuredData(structuredData)
  }
  
  // 监听路由变化
  watch(
    [() => route.fullPath, () => route.name],
    async () => {
      await handleSEO()
    },
    { immediate: true }
  )
}


