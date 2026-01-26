import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

/**
 * Game 数据 composable
 */
export function useGameData() {
  const { locale } = useI18n()
  const gamesData = ref([])
  const loading = ref(false)
  const error = ref(null)

  const loadData = async (lang = null) => {
    loading.value = true
    error.value = null
    try {
      const currentLang = lang || locale.value || 'en'
      const module = await import(`../data/game/${currentLang}.js`).catch(() =>
        import('../data/game/en.js')
      )
      const games = module.games || module.default || []
      gamesData.value = Array.isArray(games) ? games : []
    } catch (err) {
      error.value = err.message || 'Failed to load game data'
      gamesData.value = []
    } finally {
      loading.value = false
    }
  }

  /**
   * 仅加载首页需要的游戏数据（isHome: true）
   */
  const loadHomeGamesOnly = async (lang = null) => {
    loading.value = true
    error.value = null
    try {
      const currentLang = lang || locale.value || 'en'
      const module = await import(`../data/game/${currentLang}.js`).catch(() =>
        import('../data/game/en.js')
      )
      const games = module.games || module.default || []
      const allData = Array.isArray(games) ? games : []
      gamesData.value = allData.filter(game => game.isHome === true)
    } catch (err) {
      error.value = err.message || 'Failed to load home games'
      gamesData.value = []
    } finally {
      loading.value = false
    }
  }

  const findGameByAddressBar = (addressBar) => {
    // 移除前导斜杠进行匹配，因为数据中的 addressBar 不带斜杠
    const cleanAddressBar = addressBar.startsWith('/') ? addressBar.slice(1) : addressBar
    return gamesData.value.find(g => g.addressBar === cleanAddressBar) || null
  }

  const findGameById = (id) => {
    return gamesData.value.find(g => g.id === id) || null
  }

  return {
    games: gamesData,
    loading,
    error,
    loadData,
    loadHomeGamesOnly: loadHomeGamesOnly,
    findGameByAddressBar,
    findGameById
  }
}

