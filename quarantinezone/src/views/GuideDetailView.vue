<template>
  <div class="guide-detail-view">
    <!-- Guide Detail Header -->
    <section class="guide-detail-header" v-if="guide">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/guides" class="breadcrumb-link">
            <svg class="breadcrumb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9,22 9,12 15,12 15,22" />
            </svg>
            Guides
          </router-link>
          <svg class="breadcrumb-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9,18 15,12 9,6" />
          </svg>
          <span class="breadcrumb-current">{{ guide.title }}</span>
        </div>

        <div class="guide-detail-content">
          <div class="guide-detail-text">
            <h1 class="guide-title">{{ guide.title }}</h1>

            <div class="guide-detail-meta">
              <div class="meta-item">
                <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12,6 12,12 16,14" />
                </svg>
                <span class="meta-text">{{ formatDate(guide.publishDate) }}</span>
              </div>
            </div>

            <div class="guide-tags" v-if="guide.tags && guide.tags.length > 0">
              <span v-for="tag in guide.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Guide Content -->
    <section class="guide-content" v-if="guide">
      <div class="container">
        <div class="content-layout">
          <!-- Left Content -->
          <div class="left-content">
            <div class="detail-article" ref="contentRef" v-html="guide.detailsHtml"></div>
          </div>

          <!-- Right Sidebar -->
          <div class="right-sidebar">
            <div class="guide-info-box">
              <div class="info-box-header">
                <h3 class="info-box-title">{{ guide?.title }}</h3>
              </div>
              <!-- Guide Meta Info -->
              <div class="guide-meta">
                <div class="meta-item">
                  <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12,6 12,12 16,14" />
                  </svg>
                  <span class="meta-text">{{ formatDate(guide?.publishDate) }}</span>
                </div>
              </div>

              <!-- Guide Tags -->
              <div class="guide-tags" v-if="guide?.tags && guide.tags.length > 0">
                <span v-for="tag in guide.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
            </div>

            <!-- Guide navigation -->
            <div class="guide-navigation" v-if="previousGuide || nextGuide">
              <h4 class="nav-title">Navigation</h4>
              <div class="nav-grid">
                <router-link
                  v-if="previousGuide"
                  :to="`/guides${previousGuide.addressBar}`"
                  class="nav-card nav-card-prev"
                >
                  <div class="nav-card-direction">Previous</div>
                  <div class="nav-card-title">{{ previousGuide.title }}</div>
                  <div class="nav-card-meta">
                    <span>{{ formatDate(previousGuide.publishDate) }}</span>
                  </div>
                </router-link>
                <router-link
                  v-if="nextGuide"
                  :to="`/guides${nextGuide.addressBar}`"
                  class="nav-card nav-card-next"
                >
                  <div class="nav-card-direction">Next</div>
                  <div class="nav-card-title">{{ nextGuide.title }}</div>
                  <div class="nav-card-meta">
                    <span>{{ formatDate(nextGuide.publishDate) }}</span>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Not Found -->
    <section class="guide-content" v-else>
      <div class="container">
        <div class="not-found">
          <h2>Guide Not Found</h2>
          <p>The guide you're looking for doesn't exist.</p>
          <router-link to="/guides" class="btn-secondary">Back to Guides</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { useGuideData } from '../composables/useGuideData'
import { useSEO } from '../seo/composables.js'
import { seoConfig } from '../seo/config.js'

const route = useRoute()
const { guides, loadData, findGuideByAddressBar } = useGuideData()
const { setSEO } = useSEO()
const guide = ref(null)
const contentRef = ref(null)

// 初始化加载数据并查找 guide
const initGuide = async () => {
  await nextTick()
  await loadData()
  const guideId = route.params.id
  guide.value = findGuideByAddressBar(`/${guideId}`)
  
  // 设置 SEO
  if (guide.value && guide.value.seo) {
    setSEO({
      title: guide.value.seo.title || guide.value.title,
      description: guide.value.seo.description || guide.value.description,
      keywords: guide.value.seo.keywords || seoConfig.defaults.keywords,
      image: guide.value.imageUrl || seoConfig.defaults.image,
      type: 'article'
    })
  }
}

onMounted(async () => {
  await initGuide()
})

// 监听路由参数变化，更新当前 guide
watch(() => route.params.id, async () => {
  await nextTick()
  await loadData()
  const guideId = route.params.id
  guide.value = findGuideByAddressBar(`/${guideId}`)
  
  // 更新 SEO
  if (guide.value && guide.value.seo) {
    setSEO({
      title: guide.value.seo.title || guide.value.title,
      description: guide.value.seo.description || guide.value.description,
      keywords: guide.value.seo.keywords || seoConfig.defaults.keywords,
      image: guide.value.imageUrl || seoConfig.defaults.image,
      type: 'article'
    })
  }
})

const currentGuideIndex = computed(() => {
  if (!guide.value) return -1
  return guides.value.findIndex(g => g.id === guide.value.id)
})

const previousGuide = computed(() => {
  if (currentGuideIndex.value <= 0) return null
  return guides.value[currentGuideIndex.value - 1] || null
})

const nextGuide = computed(() => {
  if (currentGuideIndex.value === -1) return null
  return guides.value[currentGuideIndex.value + 1] || null
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
.guide-detail-view {
  min-height: 100vh;
  position: relative;
}

/* Guide Detail Header */
.guide-detail-header {
  padding: 80px 0 40px;
  position: relative;
  z-index: 1;
}

.guide-detail-header::before {
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

/* Guide Title (H1) */
.guide-title {
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

.guide-detail-text {
  max-width: 800px;
  position: relative;
  z-index: 1;
}

.guide-detail-meta {
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

.guide-tags {
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

/* Guide Content */
.guide-content {
  padding: 0 0 80px;
  position: relative;
  z-index: 1;
}

.guide-content::before {
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

.guide-info-box {
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

.guide-meta {
  padding: 16px;
  border-bottom: 1px solid rgba(57, 255, 20, 0.2);
}

.guide-info-box .guide-tags {
  padding: 16px;
}

/* Navigation */
.guide-navigation {
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
  .guide-detail-header {
    padding: 60px 0 30px;
  }

  .guide-title {
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

  .guide-info-box {
    max-width: 500px;
    margin: 0 auto;
  }

  .left-content {
    padding: 30px;
  }
}

/* Responsive Design - 768px */
@media (max-width: 768px) {
  .guide-detail-header {
    padding: 60px 0 30px;
  }

  .guide-title {
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

  .guide-info-box {
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


