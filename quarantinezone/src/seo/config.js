// SEO配置文件
export const seoConfig = {
  // 域名配置
  domain: 'quarantinezonegames.com',
  fullDomain: 'https://quarantinezonegames.com',
  protocol: 'https://',

  // 社交媒体配置
  social: {
    twitter: '@quarantinezonegames',
    facebook: 'quarantinezonegames',
    instagram: 'quarantinezonegames',
    discord: 'quarantinezonegames'
  },

  // 默认SEO设置
  defaults: {
    title: 'Quarantine Zone: The Last Check - Official Guide Site',
    description: 'Comprehensive Quarantine Zone: The Last Check resources including guides, wiki, games, news, and strategies to help you command the checkpoint and survive the outbreak.',
    keywords: 'Quarantine Zone, The Last Check, zombie survival, checkpoint game, guides, wiki, games, news, strategies, Brigada Games, Devolver Digital, survival simulation, checkpoint management',
    author: 'Quarantine Zone Community',
    image: 'https://quarantinezonegames.com/images/logo.webp',
    type: 'website'
  },

  // 页面优先级设置
  priorities: {
    home: 1.0,
    guides: 0.9,
    guideDetail: 0.8,
    wiki: 0.8,
    wikiDetail: 0.7,
    games: 0.9,
    gameDetail: 0.8,
    news: 0.9,
    newsDetail: 0.8
  },

  // 更新频率设置
  changefreq: {
    home: 'weekly',
    guides: 'weekly',
    guideDetail: 'monthly',
    wiki: 'weekly',
    wikiDetail: 'monthly',
    games: 'weekly',
    gameDetail: 'monthly',
    news: 'daily',
    newsDetail: 'weekly'
  }
}


