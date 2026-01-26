import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// SEO配置
const seoConfig = {
  fullDomain: 'https://quarantinezonegames.com'
}

// 支持的语言列表
const supportedLocales = ['en', 'de']

// 生成本地化路径
function createLocalizedPath(path, locale = 'en') {
  if (locale === 'en') {
    return path
  }
  return `/${locale}${path}`
}

// 基础路由配置
const baseRoutes = [
  { path: '/', name: 'home', priority: 1.0, changefreq: 'weekly' },
  { path: '/guides', name: 'guides', priority: 0.9, changefreq: 'weekly' },
  { path: '/wiki', name: 'wiki', priority: 0.8, changefreq: 'weekly' },
  { path: '/wiki/symptoms', name: 'symptoms', priority: 0.8, changefreq: 'monthly' },
  { path: '/zombie-games', name: 'games', priority: 0.9, changefreq: 'weekly' },
  { path: '/news', name: 'news', priority: 0.9, changefreq: 'daily' },
  { path: '/privacy-policy', name: 'privacy-policy', priority: 0.5, changefreq: 'monthly' },
  { path: '/terms-of-service', name: 'terms-of-service', priority: 0.5, changefreq: 'monthly' },
  { path: '/copyright', name: 'copyright', priority: 0.5, changefreq: 'monthly' },
  { path: '/about-us', name: 'about-us', priority: 0.6, changefreq: 'monthly' },
  { path: '/contact-us', name: 'contact-us', priority: 0.6, changefreq: 'monthly' }
]

// 动态加载数据（支持多语言）
async function loadData(locale = 'en') {
  const data = {
    guides: [],
    games: [],
    news: []
  }

  // 加载 guides 数据
  try {
    const guideModule = await import(`../src/data/guide/${locale}.js`)
    data.guides = guideModule.guides || guideModule.default || []
  } catch (error) {
    console.warn(`Failed to load guides for ${locale}:`, error.message)
    data.guides = []
  }

  // 加载 games 数据
  try {
    const gameModule = await import(`../src/data/game/${locale}.js`)
    data.games = gameModule.games || gameModule.default || []
  } catch (error) {
    console.warn(`Failed to load games for ${locale}:`, error.message)
    data.games = []
  }

  // 加载 news 数据
  try {
    const newsModule = await import(`../src/data/news/${locale}.js`)
    data.news = newsModule.news || newsModule.default || []
  } catch (error) {
    console.warn(`Failed to load news for ${locale}:`, error.message)
    data.news = []
  }

  return data
}

// 生成URL XML
function generateUrlXml(path, lastmod, priority, changefreq) {
  const roundedPriority = priority.toFixed(1)
  return `  <url>
    <loc>${seoConfig.fullDomain}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${roundedPriority}</priority>
  </url>`
}

// 生成站点地图（支持多语言）
async function generateSitemap() {
  const lastmod = new Date().toISOString().split('T')[0]

  // 加载所有语言的数据
  const allData = {}
  for (const locale of supportedLocales) {
    allData[locale] = await loadData(locale)
  }

  let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

  // 生成基础路由（为每种语言生成）
  baseRoutes.forEach(route => {
    supportedLocales.forEach(locale => {
      const localizedPath = createLocalizedPath(route.path, locale)
      sitemapXml += `\n${generateUrlXml(localizedPath, lastmod, route.priority, route.changefreq)}`
    })
  })

  // 为 guides 生成URL（为每种语言生成）
  supportedLocales.forEach(locale => {
    const guides = allData[locale].guides || []
    guides.forEach(guide => {
      if (!guide || !guide.addressBar) return
      const guidePath = createLocalizedPath(`/guides${guide.addressBar.startsWith('/') ? guide.addressBar : `/${guide.addressBar}`}`, locale)
      sitemapXml += `\n${generateUrlXml(guidePath, guide.publishDate || lastmod, 0.8, 'monthly')}`
    })
  })

  // 为 games 生成URL（为每种语言生成）
  supportedLocales.forEach(locale => {
    const games = allData[locale].games || []
    games.forEach(game => {
      if (!game || !game.addressBar) return
      const gamePath = createLocalizedPath(`/zombie-games/${game.addressBar}`, locale)
      sitemapXml += `\n${generateUrlXml(gamePath, game.publishDate || lastmod, 0.8, 'monthly')}`
    })
  })

  // 为 news 生成URL（为每种语言生成）
  supportedLocales.forEach(locale => {
    const news = allData[locale].news || []
    news.forEach(newsItem => {
      if (!newsItem || !newsItem.addressBar) return
      const newsPath = createLocalizedPath(`/news/${newsItem.addressBar}`, locale)
      sitemapXml += `\n${generateUrlXml(newsPath, newsItem.publishDate || lastmod, 0.8, 'weekly')}`
    })
  })

  sitemapXml += `\n</urlset>`
  return sitemapXml
}

// 生成并保存站点地图
async function main() {
  try {
    console.log('📦 Loading data for all locales...')
    
    console.log('🗺️  Generating multilingual sitemap...')
    const sitemapContent = await generateSitemap()
    
    const publicPath = path.join(__dirname, '../public/sitemap.xml')
    const distPath = path.join(__dirname, '../dist/sitemap.xml')

    // 确保public目录存在
    const publicDir = path.dirname(publicPath)
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true })
    }

    fs.writeFileSync(publicPath, sitemapContent, 'utf8')
    console.log('✅ Generated sitemap.xml in public folder')

    // 如果dist目录存在，也复制一份
    if (fs.existsSync(path.join(__dirname, '../dist'))) {
      fs.writeFileSync(distPath, sitemapContent, 'utf8')
      console.log('✅ Generated sitemap.xml in dist folder')
    }

    const urlCount = (sitemapContent.match(/<url>/g) || []).length
    console.log(`✅ Total URLs in sitemap: ${urlCount}`)
    
    // 统计各语言的URL数量
    const enUrls = (sitemapContent.match(/<loc>https:\/\/quarantinezonegames\.com\/[^<]*<\/loc>/g) || [])
      .filter(url => !url.includes('/de/'))
    const deUrls = (sitemapContent.match(/<loc>https:\/\/quarantinezonegames\.com\/[^<]*<\/loc>/g) || [])
      .filter(url => url.includes('/de/'))
    
    // 统计各类URL数量
    const guidesCount = (sitemapContent.match(/\/guides\//g) || []).length
    const gamesCount = (sitemapContent.match(/\/zombie-games\//g) || []).length
    const newsCount = (sitemapContent.match(/\/news\//g) || []).length
    
    console.log('\n📊 URLs by language:')
    console.log(`   English (en): ${enUrls.length}`)
    console.log(`   German (de): ${deUrls.length}`)
    console.log(`   Total: ${urlCount}`)
    
    console.log('\n📊 URLs by category:')
    console.log(`   Base routes: ${baseRoutes.length * supportedLocales.length}`)
    console.log(`   Guides: ${guidesCount}`)
    console.log(`   Games: ${gamesCount}`)
    console.log(`   News: ${newsCount}`)
    
    // 验证生成的站点地图
    const validation = sitemapContent.includes('<?xml') && 
                      sitemapContent.includes('<urlset') && 
                      sitemapContent.includes('</urlset>')
    
    if (validation) {
      console.log('\n✅ Sitemap validation passed')
    } else {
      console.warn('\n⚠️  Sitemap validation failed')
    }
  } catch (error) {
    console.error('❌ Error generating sitemap:', error)
    process.exit(1)
  }
}

main()



