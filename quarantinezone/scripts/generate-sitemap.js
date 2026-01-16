import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// SEO配置
const seoConfig = {
  fullDomain: 'https://quarantinezonegames.com'
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

// 动态加载数据
async function loadData() {
  const data = {
    guides: [],
    games: [],
    news: []
  }

  // 加载 guides 数据
  try {
    const guideModule = await import('../src/data/guide/guide.js')
    data.guides = guideModule.guides || guideModule.default || []
  } catch (error) {
    console.warn('Failed to load guides:', error.message)
    data.guides = []
  }

  // 加载 games 数据
  try {
    const gameModule = await import('../src/data/game/game.js')
    data.games = gameModule.games || gameModule.default || []
  } catch (error) {
    console.warn('Failed to load games:', error.message)
    data.games = []
  }

  // 加载 news 数据
  try {
    const newsModule = await import('../src/data/news/news.js')
    data.news = newsModule.news || newsModule.default || []
  } catch (error) {
    console.warn('Failed to load news:', error.message)
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

// 生成站点地图
async function generateSitemap() {
  const lastmod = new Date().toISOString().split('T')[0]

  // 加载数据
  const data = await loadData()

  let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

  // 生成基础路由
  baseRoutes.forEach(route => {
    sitemapXml += `\n${generateUrlXml(route.path, lastmod, route.priority, route.changefreq)}`
  })

  // 为 guides 生成URL
  const guides = data.guides || []
  guides.forEach(guide => {
    if (!guide || !guide.addressBar) return
    const guidePath = `/guides${guide.addressBar.startsWith('/') ? guide.addressBar : `/${guide.addressBar}`}`
    sitemapXml += `\n${generateUrlXml(guidePath, guide.publishDate || lastmod, 0.8, 'monthly')}`
  })

  // 为 games 生成URL
  const games = data.games || []
  games.forEach(game => {
    if (!game || !game.addressBar) return
    const gamePath = `/zombie-games/${game.addressBar}`
    sitemapXml += `\n${generateUrlXml(gamePath, game.publishDate || lastmod, 0.8, 'monthly')}`
  })

  // 为 news 生成URL
  const news = data.news || []
  news.forEach(newsItem => {
    if (!newsItem || !newsItem.addressBar) return
    const newsPath = `/news/${newsItem.addressBar}`
    sitemapXml += `\n${generateUrlXml(newsPath, newsItem.publishDate || lastmod, 0.8, 'weekly')}`
  })

  sitemapXml += `\n</urlset>`
  return sitemapXml
}

// 生成并保存站点地图
async function main() {
  try {
    console.log('📦 Loading data...')
    
    console.log('🗺️  Generating sitemap...')
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
    
    // 统计各类URL数量
    const guidesCount = (sitemapContent.match(/\/guides\//g) || []).length
    const gamesCount = (sitemapContent.match(/\/zombie-games\//g) || []).length
    const newsCount = (sitemapContent.match(/\/news\//g) || []).length
    
    console.log('\n📊 URLs by category:')
    console.log(`   Base routes: ${baseRoutes.length}`)
    console.log(`   Guides: ${guidesCount}`)
    console.log(`   Games: ${gamesCount}`)
    console.log(`   News: ${newsCount}`)
    console.log(`   Total: ${urlCount}`)
    
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



