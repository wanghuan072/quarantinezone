<template>
  <div class="guides-view">
    <!-- Guide Header -->
    <section class="page-header">
      <div class="container">
        <div class="page-header-content">
          <h1 class="page-title">{{ t('guidesPage.header.title') }}</h1>
          <p class="page-subtitle">
            {{ t('guidesPage.header.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Guide Categories -->
    <section class="guide-categories">
      <div class="container">
        <!-- Loading State -->
        <div v-if="loading" class="loading-state">
          <p>{{ t('guidesPage.loading') }}</p>
        </div>
        
        <!-- Error State -->
        <div v-if="error" class="error-state">
          <p>{{ t('guidesPage.error') }} {{ error }}</p>
        </div>
        
        <!-- All Guides -->
        <div class="category-section" v-if="!loading && !error">
          <h2 class="section-title">{{ t('guidesPage.allGuides') }}</h2>
          <div class="guides-grid">
            <a 
              v-for="guide in allGuides" 
              :key="guide.id" 
              :href="getLocalizedPath(`/guides${guide.addressBar.startsWith('/') ? guide.addressBar : '/' + guide.addressBar}`)"
              class="guide-card"
            >
              <div class="guide-image-container" v-if="guide.imageUrl">
                <img 
                  :src="guide.imageUrl" 
                  :alt="guide.imageAlt || guide.title" 
                  class="guide-image"
                  loading="lazy"
                />
              </div>
              <div class="guide-card-content">
                <h3 class="guide-title">{{ guide.title }}</h3>
                <p class="guide-description">{{ guide.description }}</p>
                <div class="guide-tags" v-if="guide.tags && guide.tags.length > 0">
                  <span v-for="tag in guide.tags" :key="tag" class="tag">{{ tag }}</span>
                </div>
                <div class="guide-footer">
                  <span class="update-date">{{ formatDate(guide.publishDate) }}</span>
                  <span class="view-link">{{ t('guidesPage.viewLink') }}</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Our Guide Section -->
    <section class="why-choose-section">
      <div class="container">
        <div class="section-intro">
          <span class="section-tag">{{ t('guidesPage.whyChoose.tag') }}</span>
          <h2 class="section-heading">{{ t('guidesPage.whyChoose.title') }}</h2>
          <p class="section-lead">
            {{ t('guidesPage.whyChoose.subtitle') }}
          </p>
        </div>
        <div class="why-choose-grid">
          <div class="why-choose-card">
            <div class="why-choose-icon">{{ t('guidesPage.whyChoose.f1.icon') }}</div>
            <h3>{{ t('guidesPage.whyChoose.f1.title') }}</h3>
            <p>
              {{ t('guidesPage.whyChoose.f1.content') }} <a :href="getLocalizedPath('/wiki')" class="inline-link">{{ t('guidesPage.whyChoose.f1.link1') }}</a> {{ t('guidesPage.whyChoose.f1.content2') }}
            </p>
          </div>
          <div class="why-choose-card">
            <div class="why-choose-icon">{{ t('guidesPage.whyChoose.f2.icon') }}</div>
            <h3>{{ t('guidesPage.whyChoose.f2.title') }}</h3>
            <p>
              {{ t('guidesPage.whyChoose.f2.content') }}
            </p>
          </div>
          <div class="why-choose-card">
            <div class="why-choose-icon">{{ t('guidesPage.whyChoose.f3.icon') }}</div>
            <h3>{{ t('guidesPage.whyChoose.f3.title') }}</h3>
            <p>
              {{ t('guidesPage.whyChoose.f3.content') }} <a :href="getLocalizedPath('/news')" class="inline-link">{{ t('guidesPage.whyChoose.f3.link1') }}</a> {{ t('guidesPage.whyChoose.f3.content2') }}
            </p>
          </div>
          <div class="why-choose-card">
            <div class="why-choose-icon">{{ t('guidesPage.whyChoose.f4.icon') }}</div>
            <h3>{{ t('guidesPage.whyChoose.f4.title') }}</h3>
            <p>
              {{ t('guidesPage.whyChoose.f4.content') }} <a :href="getLocalizedPath('/')" class="inline-link">{{ t('guidesPage.whyChoose.f4.link1') }}</a> {{ t('guidesPage.whyChoose.f4.content2') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="container">
        <div class="section-intro">
          <span class="section-tag">{{ t('guidesPage.faq.tag') }}</span>
          <h2 class="section-heading">{{ t('guidesPage.faq.title') }}</h2>
        </div>
        <div class="faq-container">
          <article class="faq-item">
            <h3>{{ t('guidesPage.faq.q1.q') }}</h3>
            <p>
              {{ t('guidesPage.faq.q1.a') }} <a href="/news" class="inline-link">{{ t('guidesPage.faq.q1.link1') }}</a> {{ t('guidesPage.faq.q1.a2') }}
            </p>
          </article>
          <article class="faq-item">
            <h3>{{ t('guidesPage.faq.q2.q') }}</h3>
            <p>
              {{ t('guidesPage.faq.q2.a1') }} <a href="/guides/quarantine-zone-the-last-check-rookie-survival-manual" class="inline-link">{{ t('guidesPage.faq.q2.link1') }}</a> {{ t('guidesPage.faq.q2.a2') }}
            </p>
          </article>
          <article class="faq-item">
            <h3>{{ t('guidesPage.faq.q3.q') }}</h3>
            <p>
              {{ t('guidesPage.faq.q3.a1') }} <a href="/wiki" class="inline-link">{{ t('guidesPage.faq.q3.link1') }}</a> {{ t('guidesPage.faq.q3.a2') }}
            </p>
          </article>
          <article class="faq-item">
            <h3>{{ t('guidesPage.faq.q4.q') }}</h3>
            <p>
              {{ t('guidesPage.faq.q4.a1') }} <a href="/" class="inline-link">{{ t('guidesPage.faq.q4.link1') }}</a> {{ t('guidesPage.faq.q4.a2') }}
            </p>
          </article>
          <article class="faq-item">
            <h3>{{ t('guidesPage.faq.q5.q') }}</h3>
            <p>
              {{ t('guidesPage.faq.q5.a1') }} <a href="/guides/quarantine-zone-the-last-check-rookie-survival-manual" class="inline-link">{{ t('guidesPage.faq.q5.link1') }}</a> {{ t('guidesPage.faq.q5.a2') }} <a href="/guides/campaign-guide-special-events-moral-choices" class="inline-link">{{ t('guidesPage.faq.q5.link2') }}</a> {{ t('guidesPage.faq.q5.a3') }} <a href="/guides/quarantine-zone-the-last-check-combat-base-defense-guide" class="inline-link">{{ t('guidesPage.faq.q5.link3') }}</a> {{ t('guidesPage.faq.q5.a4') }}
            </p>
          </article>
          <article class="faq-item">
            <h3>{{ t('guidesPage.faq.q6.q') }}</h3>
            <p>
              {{ t('guidesPage.faq.q6.a') }}
            </p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useGuideData } from '../composables/useGuideData'
import { useLocalizedPath } from '../composables/useLocalizedPath'

const { t, locale } = useI18n()
const { getLocalizedPath } = useLocalizedPath()
const { guides, loading, error, loadData } = useGuideData()

// 初始化加载数据
onMounted(() => {
  loadData()
})

// 监听语言变化，重新加载数据
watch(locale, () => {
  loadData()
})

// 所有指南
const allGuides = computed(() => {
  return guides.value || []
})

const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return `Updated ${date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  })}`
}
</script>

<style scoped>
.guides-view {
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

.guide-categories {
  padding: 0 0 40px;
  position: relative;
  z-index: 1;
}

.guide-categories::before {
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

.guides-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.guide-card {
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
  flex-direction: column;
  text-decoration: none;
  color: inherit;
}

.guide-image-container {
  width: 100%;
  overflow: hidden;
  font-size: 0;
  background-color: rgba(10, 15, 20, 0.8);
  position: relative;
}

.guide-image {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.guide-card:hover .guide-image {
  transform: scale(1.05);
}

.guide-card-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.guide-card::before {
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

.guide-card:hover {
  transform: translateY(-4px);
  border-color: rgba(57, 255, 20, 0.4);
  box-shadow: 0 15px 35px rgba(57, 255, 20, 0.2);
}

.guide-card:hover::before {
  opacity: 1;
}

.guide-title {
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

.guide-description {
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

.guide-tags {
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

.guide-card:hover .tag {
  border-color: rgba(57, 255, 20, 0.6);
  background: rgba(57, 255, 20, 0.15);
}

.guide-footer {
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

.guide-card:hover .view-link {
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
  .guides-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

/* Responsive Design - 768px */
@media (max-width: 768px) {
  .guide-categories {
    padding: 0 0 40px;
  }

  .section-title {
    font-size: 20px;
    margin-bottom: 20px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .guides-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .guide-card {
    padding: 0;
  }

  .guide-title {
    font-size: 1.1rem;
  }

  .guide-description {
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

  .guide-footer {
    padding-top: 12px;
  }

  .loading-state,
  .error-state {
    padding: 40px 20px;
    font-size: 0.9rem;
  }
}

/* Why Choose Section */
.why-choose-section {
  padding: 40px 0;
  position: relative;
  z-index: 1;
}

.why-choose-section::before {
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

.why-choose-section .section-intro {
  text-align: center;
  margin-bottom: 40px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 1;
}

.why-choose-section .section-tag {
  display: inline-block;
  padding: 6px 16px;
  background: rgba(57, 255, 20, 0.15);
  border-left: 3px solid var(--accent);
  color: var(--accent);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 20px;
  box-shadow: 0 0 15px rgba(57, 255, 20, 0.3);
}

.why-choose-section .section-heading {
  font-size: clamp(28px, 4vw, 42px);
  font-weight: 800;
  color: var(--text);
  margin: 0 0 20px 0;
  text-shadow: 
    0 0 15px var(--accent),
    0 0 30px var(--neon-glow),
    0 0 45px rgba(57, 255, 20, 0.5);
  line-height: 1.2;
}

.why-choose-section .section-lead {
  font-size: 1.1rem;
  color: var(--text-muted);
  line-height: 1.7;
  margin: 0;
}

.why-choose-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  position: relative;
  z-index: 1;
}

.why-choose-card {
  background: rgba(20, 30, 40, 0.7);
  border: 1px solid rgba(57, 255, 20, 0.2);
  border-radius: 16px;
  padding: 30px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.why-choose-card::before {
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

.why-choose-card:hover {
  transform: translateY(-4px);
  border-color: rgba(57, 255, 20, 0.4);
  box-shadow: 0 15px 35px rgba(57, 255, 20, 0.2);
}

.why-choose-card:hover::before {
  opacity: 1;
}

.why-choose-icon {
  font-size: 2.5rem;
  margin-bottom: 16px;
  display: block;
}

.why-choose-card h3 {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--accent);
  margin: 0 0 12px 0;
  text-shadow: 0 0 10px rgba(57, 255, 20, 0.6);
}

.why-choose-card p {
  color: var(--text);
  line-height: 1.7;
  margin: 0;
  font-size: 0.95rem;
}

/* FAQ Section */
.faq-section {
  padding: 80px 0;
  position: relative;
  z-index: 1;
}

.faq-section::before {
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

.faq-section .section-intro {
  text-align: center;
  margin-bottom: 60px;
  position: relative;
  z-index: 1;
}

.faq-section .section-tag {
  display: inline-block;
  padding: 6px 16px;
  background: rgba(57, 255, 20, 0.15);
  border-left: 3px solid var(--accent);
  color: var(--accent);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 20px;
  box-shadow: 0 0 15px rgba(57, 255, 20, 0.3);
}

.faq-section .section-heading {
  font-size: clamp(28px, 4vw, 42px);
  font-weight: 800;
  color: var(--text);
  margin: 0;
  text-shadow: 
    0 0 15px var(--accent),
    0 0 30px var(--neon-glow),
    0 0 45px rgba(57, 255, 20, 0.5);
  line-height: 1.2;
}

.faq-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  position: relative;
  z-index: 1;
}

.faq-item {
  background: rgba(20, 30, 40, 0.7);
  border: 1px solid rgba(57, 255, 20, 0.2);
  border-radius: 16px;
  padding: 24px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.faq-item:hover {
  border-color: rgba(57, 255, 20, 0.4);
  box-shadow: 0 10px 25px rgba(57, 255, 20, 0.15);
}

.faq-item h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--accent);
  margin: 0 0 12px 0;
  text-shadow: 0 0 10px rgba(57, 255, 20, 0.6);
}

.faq-item p {
  color: var(--text);
  line-height: 1.7;
  margin: 0;
  font-size: 0.95rem;
}

/* Inline Links */
.inline-link {
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
  border-bottom: 1px solid rgba(57, 255, 20, 0.3);
  transition: all 0.3s ease;
}

.inline-link:hover {
  color: var(--accent-soft);
  border-bottom-color: var(--accent);
  text-shadow: 0 0 8px rgba(57, 255, 20, 0.5);
}

/* Responsive Design for new sections */
@media (max-width: 1024px) {
  .why-choose-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .faq-container {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .why-choose-section,
  .faq-section {
    padding: 60px 0;
  }

  .why-choose-section .section-intro,
  .faq-section .section-intro {
    margin-bottom: 40px;
  }

  .why-choose-card {
    padding: 24px;
  }

  .why-choose-card h3 {
    font-size: 1.1rem;
  }

  .why-choose-card p {
    font-size: 0.9rem;
  }

  .faq-item {
    padding: 20px;
  }

  .faq-item h3 {
    font-size: 1rem;
  }

  .faq-item p {
    font-size: 0.9rem;
  }
}
</style>
