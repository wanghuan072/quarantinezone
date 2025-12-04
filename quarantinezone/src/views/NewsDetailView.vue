<template>
  <div class="news-detail-view">
    <!-- News Detail Header -->
    <section class="news-detail-header" v-if="newsItem">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/news" class="breadcrumb-link">
            <svg class="breadcrumb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9,22 9,12 15,12 15,22" />
            </svg>
            News
          </router-link>
          <svg class="breadcrumb-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9,18 15,12 9,6" />
          </svg>
          <span class="breadcrumb-current">{{ newsItem.title }}</span>
        </div>

        <div class="news-detail-content">
          <div class="news-detail-text">
            <h1 class="news-title">{{ newsItem.title }}</h1>

            <div class="news-detail-meta">
              <div class="meta-item">
                <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12,6 12,12 16,14" />
                </svg>
                <span class="meta-text">{{ formatDate(newsItem.publishDate) }}</span>
              </div>
            </div>

            <div class="news-tags" v-if="newsItem.tags && newsItem.tags.length > 0">
              <span v-for="tag in newsItem.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- News Content -->
    <section class="news-content" v-if="newsItem">
      <div class="container">
        <div class="content-layout">
          <!-- Left Content -->
          <div class="left-content">
            <div class="detail-article" ref="contentRef" v-html="newsItem.detailsHtml"></div>
          </div>

          <!-- Right Sidebar -->
          <div class="right-sidebar">
            <div class="news-info-box">
              <div class="info-box-header">
                <h3 class="info-box-title">{{ newsItem?.title }}</h3>
              </div>
              <!-- News Meta Info -->
              <div class="news-meta">
                <div class="meta-item">
                  <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12,6 12,12 16,14" />
                  </svg>
                  <span class="meta-text">{{ formatDate(newsItem?.publishDate) }}</span>
                </div>
              </div>

              <!-- News Tags -->
              <div class="news-tags" v-if="newsItem?.tags && newsItem.tags.length > 0">
                <span v-for="tag in newsItem.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
            </div>

            <!-- News navigation -->
            <div class="news-navigation" v-if="previousNews || nextNews">
              <h4 class="nav-title">Navigation</h4>
              <div class="nav-grid">
                <router-link
                  v-if="previousNews"
                  :to="`/news/${previousNews.addressBar}`"
                  class="nav-card nav-card-prev"
                >
                  <div class="nav-card-direction">Previous</div>
                  <div class="nav-card-title">{{ previousNews.title }}</div>
                  <div class="nav-card-meta">
                    <span>{{ formatDate(previousNews.publishDate) }}</span>
                  </div>
                </router-link>
                <router-link
                  v-if="nextNews"
                  :to="`/news/${nextNews.addressBar}`"
                  class="nav-card nav-card-next"
                >
                  <div class="nav-card-direction">Next</div>
                  <div class="nav-card-title">{{ nextNews.title }}</div>
                  <div class="nav-card-meta">
                    <span>{{ formatDate(nextNews.publishDate) }}</span>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Not Found -->
    <section class="news-content" v-else>
      <div class="container">
        <div class="not-found">
          <h2>News Not Found</h2>
          <p>The news you're looking for doesn't exist.</p>
          <router-link to="/news" class="btn-secondary">Back to News</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { useNewsData } from '../composables/useNewsData'
import { useSEO } from '../seo/composables.js'
import { seoConfig } from '../seo/config.js'

const route = useRoute()
const { news, loadData, findNewsByAddressBar } = useNewsData()
const { setSEO } = useSEO()
const newsItem = ref(null)
const contentRef = ref(null)

// 初始化加载数据并查找 news
const initNews = async () => {
  await nextTick()
  await loadData()
  const id = route.params.id
  newsItem.value = findNewsByAddressBar(id)
  
  // 设置 SEO
  if (newsItem.value && newsItem.value.seo) {
    setSEO({
      title: newsItem.value.seo.title || newsItem.value.title,
      description: newsItem.value.seo.description || newsItem.value.description,
      keywords: newsItem.value.seo.keywords || seoConfig.defaults.keywords,
      image: newsItem.value.imageUrl || seoConfig.defaults.image,
      type: 'article'
    })
  }
}

onMounted(async () => {
  await initNews()
})

// 监听路由参数变化，更新当前 news
watch(() => route.params.id, async () => {
  await nextTick()
  await loadData()
  const id = route.params.id
  newsItem.value = findNewsByAddressBar(id)
  
  // 更新 SEO
  if (newsItem.value && newsItem.value.seo) {
    setSEO({
      title: newsItem.value.seo.title || newsItem.value.title,
      description: newsItem.value.seo.description || newsItem.value.description,
      keywords: newsItem.value.seo.keywords || seoConfig.defaults.keywords,
      image: newsItem.value.imageUrl || seoConfig.defaults.image,
      type: 'article'
    })
  }
})

const currentNewsIndex = computed(() => {
  if (!newsItem.value) return -1
  return news.value.findIndex(n => n.id === newsItem.value.id)
})

const previousNews = computed(() => {
  if (currentNewsIndex.value <= 0) return null
  return news.value[currentNewsIndex.value - 1] || null
})

const nextNews = computed(() => {
  if (currentNewsIndex.value === -1) return null
  return news.value[currentNewsIndex.value + 1] || null
})

const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
.news-detail-view {
  min-height: 100vh;
  position: relative;
}

/* News Detail Header */
.news-detail-header {
  padding: 80px 0 40px;
  position: relative;
  z-index: 1;
}

.news-detail-header::before {
  content: '';
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at 20% 30%, rgba(0, 168, 255, 0.08) 0%, transparent 40%),
    radial-gradient(circle at 80% 70%, rgba(57, 255, 20, 0.05) 0%, transparent 40%),
    linear-gradient(180deg, rgba(10, 15, 20, 0.8), rgba(20, 30, 40, 0.75));
  z-index: 0;
  pointer-events: none;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
  font-size: 0.875rem;
  color: var(--text-muted);
  position: relative;
  z-index: 1;
}

.breadcrumb-link {
  color: var(--text-muted);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: color 0.2s ease;
}

.breadcrumb-link:hover {
  color: var(--accent);
}

.breadcrumb-icon {
  width: 16px;
  height: 16px;
}

.breadcrumb-arrow {
  width: 16px;
  height: 16px;
  opacity: 0.6;
}

.breadcrumb-current {
  color: var(--text);
  font-weight: 500;
}

/* News Title (H1) */
.news-title {
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 700;
  color: var(--text);
  margin: 0 0 24px 0;
  line-height: 1.2;
  text-shadow: 
    0 0 15px var(--accent),
    0 0 30px var(--neon-glow),
    0 0 45px rgba(57, 255, 20, 0.5);
}

.news-detail-text {
  max-width: 800px;
  position: relative;
  z-index: 1;
}

.news-detail-meta {
  margin-bottom: 16px;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-muted);
  font-size: 0.9rem;
}

.meta-icon {
  width: 16px;
  height: 16px;
  color: var(--accent);
}

.meta-text {
  font-weight: 500;
}

.news-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  background: rgba(57, 255, 20, 0.1);
  color: var(--accent);
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(57, 255, 20, 0.2);
  transition: all 0.3s ease;
}

.tag:hover {
  background: rgba(57, 255, 20, 0.2);
  transform: translateY(-1px);
}

/* News Content */
.news-content {
  padding: 0 0 80px;
  position: relative;
  z-index: 1;
}

.news-content::before {
  content: '';
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at 20% 30%, rgba(0, 168, 255, 0.08) 0%, transparent 40%),
    radial-gradient(circle at 80% 70%, rgba(57, 255, 20, 0.05) 0%, transparent 40%),
    linear-gradient(180deg, rgba(10, 15, 20, 0.8), rgba(20, 30, 40, 0.75));
  z-index: 0;
  pointer-events: none;
}

.content-layout {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 40px;
  position: relative;
  z-index: 1;
}

/* Left Content */
.left-content {
  background-color: rgba(20, 30, 40, 0.7);
  border-radius: 16px;
  padding: 40px;
  border: 1px solid rgba(57, 255, 20, 0.2);
  backdrop-filter: blur(10px);
}

/* Right Sidebar */
.right-sidebar {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.news-info-box {
  background-color: rgba(20, 30, 40, 0.7);
  border: 2px solid var(--accent);
  border-radius: 16px;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.info-box-header {
  background-color: var(--accent);
  padding: 16px;
}

.info-box-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #000;
  margin: 0;
  text-align: center;
}

.news-meta {
  padding: 16px;
  border-bottom: 1px solid rgba(57, 255, 20, 0.2);
}

.news-info-box .news-tags {
  padding: 16px;
}

/* Navigation */
.news-navigation {
  background-color: rgba(20, 30, 40, 0.7);
  border: 1px solid rgba(57, 255, 20, 0.2);
  border-radius: 16px;
  padding: 20px;
  backdrop-filter: blur(10px);
}

.nav-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text);
  margin: 0 0 16px 0;
}

.nav-grid {
  display: grid;
  gap: 12px;
}

.nav-card {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 16px;
  border-radius: 10px;
  text-decoration: none;
  color: var(--text);
  background: linear-gradient(135deg, rgba(57, 255, 20, 0.08), rgba(57, 255, 20, 0.02));
  border: 1px solid rgba(57, 255, 20, 0.15);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, background 0.2s ease;
}

.nav-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 24px rgba(57, 255, 20, 0.18);
  border-color: rgba(57, 255, 20, 0.35);
  background: linear-gradient(135deg, rgba(57, 255, 20, 0.12), rgba(57, 255, 20, 0.04));
}

.nav-card-prev {
  align-items: flex-start;
}

.nav-card-next {
  align-items: flex-end;
  text-align: right;
}

.nav-card-direction {
  font-size: 0.75rem;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 600;
}

.nav-card-title {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.4;
}

.nav-card-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: var(--text-muted);
}

.nav-card-next .nav-card-meta {
  flex-direction: row-reverse;
  text-align: right;
}

/* Not Found */
.not-found {
  text-align: center;
  padding: 80px 20px;
  color: var(--text-muted);
}

.not-found h2 {
  font-size: 2rem;
  color: var(--text);
  margin-bottom: 16px;
}

.not-found p {
  margin-bottom: 24px;
}

.btn-secondary {
  display: inline-block;
  padding: 12px 24px;
  background: transparent;
  border: 2px solid var(--accent);
  color: var(--text);
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: rgba(57, 255, 20, 0.1);
  transform: translateY(-2px);
  box-shadow: 0 0 15px rgba(57, 255, 20, 0.4);
}

/* Responsive Design - 1024px */
@media (max-width: 1024px) {
  .news-detail-header {
    padding: 60px 0 30px;
  }

  .news-title {
    font-size: 36px;
    margin-bottom: 20px;
  }

  .content-layout {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .right-sidebar {
    order: -1;
  }

  .news-info-box {
    max-width: 500px;
    margin: 0 auto;
  }

  .left-content {
    padding: 30px;
  }
}

/* Responsive Design - 768px */
@media (max-width: 768px) {
  .news-detail-header {
    padding: 60px 0 30px;
  }

  .news-title {
    font-size: 28px;
    margin-bottom: 16px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .content-layout {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .left-content {
    padding: 24px;
  }

  .right-sidebar {
    order: -1;
  }

  .news-info-box {
    max-width: 100%;
  }

  .info-box-title {
    font-size: 1.1rem;
  }

  .nav-title {
    font-size: 1rem;
  }

  .nav-card {
    padding: 12px;
  }

  .nav-card-title {
    font-size: 0.9rem;
  }

  .not-found {
    padding: 60px 20px;
  }

  .not-found h2 {
    font-size: 1.5rem;
  }
}
</style>

