import { ref } from 'vue'

/**
 * News 数据 composable
 */
export function useNewsData() {
  const newsData = ref([])
  const loading = ref(false)
  const error = ref(null)

  const loadData = async () => {
    loading.value = true
    error.value = null
    try {
      const module = await import('../data/news/news.js')
      const news = module.news || module.default || []
      newsData.value = Array.isArray(news) ? news : []
    } catch (err) {
      error.value = err.message || 'Failed to load news data'
      newsData.value = []
    } finally {
      loading.value = false
    }
  }

  /**
   * 仅加载首页需要的新闻数据（isHome: true）
   */
  const loadHomeNewsOnly = async () => {
    loading.value = true
    error.value = null
    try {
      const module = await import('../data/news/news.js')
      const news = module.news || module.default || []
      const allData = Array.isArray(news) ? news : []
      newsData.value = allData.filter(newsItem => newsItem.isHome === true)
    } catch (err) {
      error.value = err.message || 'Failed to load home news'
      newsData.value = []
    } finally {
      loading.value = false
    }
  }

  const findNewsByAddressBar = (addressBar) => {
    // 移除前导斜杠进行匹配，因为数据中的 addressBar 不带斜杠
    const cleanAddressBar = addressBar.startsWith('/') ? addressBar.slice(1) : addressBar
    return newsData.value.find(n => n.addressBar === cleanAddressBar) || null
  }

  const findNewsById = (id) => {
    return newsData.value.find(n => n.id === id) || null
  }

  return {
    news: newsData,
    loading,
    error,
    loadData,
    loadHomeNewsOnly,
    findNewsByAddressBar,
    findNewsById
  }
}



