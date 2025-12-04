<template>
  <div class="news-view">
    <!-- News Header -->
    <section class="page-header">
      <div class="container">
        <div class="page-header-content">
          <h1 class="page-title">News</h1>
          <p class="page-subtitle">
            Latest news and updates about Quarantine Zone: The Last Check
          </p>
        </div>
      </div>
    </section>

    <!-- News List Section -->
    <section class="news-content">
      <div class="container">
        <!-- Loading State -->
        <div v-if="loading" class="loading-state">
          <p>Loading news...</p>
        </div>
        
        <!-- Error State -->
        <div v-if="error" class="error-state">
          <p>Error loading news: {{ error }}</p>
        </div>
        
        <!-- All News -->
        <div class="category-section" v-if="!loading && !error">
          <h2 class="section-title">All News</h2>
          <div class="news-list">
            <div 
              v-for="newsItem in allNews" 
              :key="newsItem.id" 
              class="news-card"
              @click="goToNews(newsItem.addressBar)"
            >
              <div class="news-image-container" v-if="newsItem.imageUrl">
                <img 
                  :src="newsItem.imageUrl" 
                  :alt="newsItem.imageAlt || newsItem.title" 
                  class="news-image"
                  loading="lazy"
                />
              </div>
              <div class="news-card-content">
                <h3 class="news-title">{{ newsItem.title }}</h3>
                <p class="news-description">{{ newsItem.description }}</p>
                <div class="news-tags" v-if="newsItem.tags && newsItem.tags.length > 0">
                  <span v-for="tag in newsItem.tags" :key="tag" class="tag">{{ tag }}</span>
                </div>
                <div class="news-footer">
                  <span class="update-date">{{ formatDate(newsItem.publishDate) }}</span>
                  <span class="view-link">Read More →</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useNewsData } from '../composables/useNewsData'

const router = useRouter()
const { news, loading, error, loadData } = useNewsData()

// 初始化加载数据
onMounted(() => {
  loadData()
})

// 所有新闻
const allNews = computed(() => {
  return news.value || []
})

const goToNews = (addressBar) => {
  if (!addressBar) return
  const path = addressBar.startsWith('/') ? addressBar : `/${addressBar}`
  router.push(`/news${path}`)
}

const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  })
}
</script>

<style scoped>
.news-view {
  min-height: 100vh;
  position: relative;
}

.page-header {
  padding: 80px 0 40px;
  position: relative;
  z-index: 1;
}

.page-header::before {
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

.page-header-content {
  text-align: center;
  position: relative;
  z-index: 1;
}

.page-title {
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 800;
  color: var(--text);
  margin: 0 0 16px 0;
  text-shadow: 
    0 0 15px var(--accent),
    0 0 30px var(--neon-glow),
    0 0 45px rgba(57, 255, 20, 0.5);
}

.page-subtitle {
  font-size: 1.15rem;
  color: var(--text-muted);
  margin: 0;
}

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

.category-section {
  margin-bottom: 40px;
  position: relative;
  z-index: 1;
}

.category-section:last-child {
  margin-bottom: 0;
}

.section-title {
  font-size: clamp(28px, 4vw, 36px);
  font-weight: 700;
  color: var(--accent);
  margin: 0 0 30px 0;
  text-align: left;
  text-shadow: 0 0 10px rgba(57, 255, 20, 0.6);
}

.news-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.news-card {
  background: rgba(20, 30, 40, 0.7);
  border-radius: 16px;
  border: 1px solid rgba(57, 255, 20, 0.2);
  padding: 0;
  transition: all 0.3s ease;
  cursor: pointer;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: row;
  align-items: stretch;
}

.news-image-container {
  width: 380px;
  min-width: 300px;
  overflow: hidden;
  font-size: 0;
  background-color: rgba(10, 15, 20, 0.8);
  position: relative;
  flex-shrink: 0;
}

.news-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.news-card:hover .news-image {
  transform: scale(1.05);
}

.news-card-content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.news-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.news-card:hover {
  transform: translateY(-4px);
  border-color: rgba(57, 255, 20, 0.4);
  box-shadow: 0 15px 35px rgba(57, 255, 20, 0.2);
}

.news-card:hover::before {
  opacity: 1;
}

.news-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 12px;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.news-description {
  color: var(--text-muted);
  line-height: 1.5;
  margin-bottom: 16px;
  font-size: 0.95rem;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.news-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}

.tag {
  background: rgba(57, 255, 20, 0.1);
  border: 1px solid rgba(57, 255, 20, 0.3);
  color: var(--accent);
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.75rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.news-card:hover .tag {
  border-color: rgba(57, 255, 20, 0.6);
  background: rgba(57, 255, 20, 0.15);
}

.news-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  border-top: 1px solid rgba(57, 255, 20, 0.1);
  margin-top: auto;
}

.update-date {
  color: var(--text-muted);
  font-size: 0.85rem;
}

.view-link {
  color: var(--accent);
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.news-card:hover .view-link {
  color: var(--text);
  text-shadow: 0 0 8px rgba(57, 255, 20, 0.6);
}

.loading-state,
.error-state {
  text-align: center;
  padding: 60px 20px;
  color: var(--text-muted);
}

/* Responsive Design - 1024px */
@media (max-width: 1024px) {
  .news-image-container {
    width: 250px;
    min-width: 250px;
  }

  .news-card-content {
    padding: 20px;
  }
}

/* Responsive Design - 768px */
@media (max-width: 768px) {
  .news-content {
    padding: 0 0 40px;
  }

  .section-title {
    font-size: 20px;
    margin-bottom: 20px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .news-card {
    flex-direction: column;
  }

  .news-image-container {
    width: 100%;
    min-width: 100%;
    aspect-ratio: 16/9;
  }

  .news-card-content {
    padding: 20px;
  }

  .news-title {
    font-size: 1.1rem;
  }

  .news-description {
    font-size: 0.9rem;
    margin-bottom: 12px;
  }

  .tag {
    font-size: 0.7rem;
    padding: 3px 10px;
  }

  .update-date {
    font-size: 0.8rem;
  }

  .view-link {
    font-size: 0.8rem;
  }

  .news-footer {
    padding-top: 12px;
  }

  .loading-state,
  .error-state {
    padding: 40px 20px;
    font-size: 0.9rem;
  }
}
</style>

