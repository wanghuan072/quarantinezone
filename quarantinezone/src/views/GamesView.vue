<template>
  <div class="games-view">
    <!-- Header Section -->
    <section class="games-header">
      <div class="container">
        <div class="header-content">
          <h1 class="page-title">{{ t('gamesPage.header.title') }}</h1>
          <p class="page-subtitle">
            {{ t('gamesPage.header.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Games List Section -->
    <section class="games-content">
      <div class="container">
        <!-- Loading State -->
        <div v-if="loading" class="loading-state">
          <p>{{ t('gamesPage.loading') }}</p>
        </div>
        
        <!-- Error State -->
        <div v-if="error" class="error-state">
          <p>{{ t('gamesPage.error') }} {{ error }}</p>
        </div>

        <!-- Section Title -->
        <h2 class="section-title" v-if="!loading && !error">{{ t('gamesPage.sectionTitle') }}</h2>

        <!-- Games Grid -->
        <div class="games-grid" v-if="!loading && !error">
          <a
            v-for="game in allGames"
            :key="game.id"
            :href="getLocalizedPath(`/zombie-games/${game.addressBar}`)"
            class="game-card"
          >
            <div class="game-image-wrapper">
              <img :src="game.imageUrl" :alt="game.imageAlt" class="game-image" />
              <div class="game-overlay">
                <span class="play-button">{{ t('gamesPage.gameCard.viewDetails') }}</span>
              </div>
            </div>
            <div class="game-info">
              <h2 class="game-title">{{ game.title }}</h2>
              <p class="game-description">{{ game.description }}</p>
              <div class="game-meta">
                <span class="game-date">{{ formatDate(game.publishDate) }}</span>
                <span class="game-link">{{ t('gamesPage.gameCard.playNow') }}</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Why Play Section -->
    <section class="why-play-section">
      <div class="container">
        <div class="section-intro">
          <span class="section-tag">{{ t('gamesPage.whyPlay.tag') }}</span>
          <h2 class="section-heading">{{ t('gamesPage.whyPlay.title') }}</h2>
          <p class="section-lead">
            {{ t('gamesPage.whyPlay.lead') }}
          </p>
        </div>
        <div class="why-play-grid">
          <div class="why-play-card">
            <div class="why-play-icon">{{ t('gamesPage.whyPlay.card1.icon') }}</div>
            <h3>{{ t('gamesPage.whyPlay.card1.title') }}</h3>
            <p>
              {{ t('gamesPage.whyPlay.card1.text') }} <a :href="getLocalizedPath('/')" class="inline-link">{{ t('gamesPage.whyPlay.card1.link1') }}</a>{{ t('gamesPage.whyPlay.card1.text2') }}
            </p>
          </div>
          <div class="why-play-card">
            <div class="why-play-icon">{{ t('gamesPage.whyPlay.card2.icon') }}</div>
            <h3>{{ t('gamesPage.whyPlay.card2.title') }}</h3>
            <p>
              {{ t('gamesPage.whyPlay.card2.text') }}
            </p>
          </div>
          <div class="why-play-card">
            <div class="why-play-icon">{{ t('gamesPage.whyPlay.card3.icon') }}</div>
            <h3>{{ t('gamesPage.whyPlay.card3.title') }}</h3>
            <p>
              {{ t('gamesPage.whyPlay.card3.text') }} <a :href="getLocalizedPath('/guides')" class="inline-link">{{ t('gamesPage.whyPlay.card3.link1') }}</a>{{ t('gamesPage.whyPlay.card3.text2') }} <a :href="getLocalizedPath('/guides/quarantine-zone-the-last-check-rookie-survival-manual')" class="inline-link">{{ t('gamesPage.whyPlay.card3.link2') }}</a>{{ t('gamesPage.whyPlay.card3.text3') }}
            </p>
          </div>
          <div class="why-play-card">
            <div class="why-play-icon">{{ t('gamesPage.whyPlay.card4.icon') }}</div>
            <h3>{{ t('gamesPage.whyPlay.card4.title') }}</h3>
            <p>
              {{ t('gamesPage.whyPlay.card4.text') }} <a :href="getLocalizedPath('/news')" class="inline-link">{{ t('gamesPage.whyPlay.card4.link1') }}</a>{{ t('gamesPage.whyPlay.card4.text2') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="container">
        <div class="section-intro">
          <span class="section-tag">{{ t('gamesPage.faq.tag') }}</span>
          <h2 class="section-heading">{{ t('gamesPage.faq.title') }}</h2>
        </div>
        <div class="faq-container">
          <article class="faq-item">
            <h3>{{ t('gamesPage.faq.q1.question') }}</h3>
            <p>
              {{ t('gamesPage.faq.q1.answer') }}
            </p>
          </article>
          <article class="faq-item">
            <h3>{{ t('gamesPage.faq.q2.question') }}</h3>
            <p>
              {{ t('gamesPage.faq.q2.answer') }}
            </p>
          </article>
          <article class="faq-item">
            <h3>{{ t('gamesPage.faq.q3.question') }}</h3>
            <p>
              {{ t('gamesPage.faq.q3.answer') }} <a href="/wiki" class="inline-link">{{ t('gamesPage.faq.q3.link1') }}</a>{{ t('gamesPage.faq.q3.text2') }}
            </p>
          </article>
          <article class="faq-item">
            <h3>{{ t('gamesPage.faq.q4.question') }}</h3>
            <p>
              {{ t('gamesPage.faq.q4.answer') }} <a href="/guides" class="inline-link">{{ t('gamesPage.faq.q4.link1') }}</a>{{ t('gamesPage.faq.q4.text2') }}
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
import { useGameData } from '../composables/useGameData'
import { useLocalizedPath } from '../composables/useLocalizedPath'

const { t, locale } = useI18n()
const { getLocalizedPath } = useLocalizedPath()
const { games, loading, error, loadData } = useGameData()

// 初始化加载数据
onMounted(() => {
  loadData()
})

// 监听语言变化，重新加载数据
watch(locale, () => {
  loadData()
})

// 所有游戏
const allGames = computed(() => {
  return games.value || []
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
.games-view {
  min-height: 100vh;
  position: relative;
}

.games-header {
  padding: 80px 0 40px;
  position: relative;
  z-index: 1;
}

.games-header::before {
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

.header-content {
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

.games-content {
  padding: 0 0 80px;
  position: relative;
  z-index: 1;
}

.games-content::before {
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

.section-title {
  font-size: clamp(28px, 4vw, 36px);
  font-weight: 700;
  color: var(--accent);
  margin: 0 0 30px 0;
  text-align: left;
  text-shadow: 0 0 10px rgba(57, 255, 20, 0.6);
  position: relative;
  z-index: 1;
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  position: relative;
  z-index: 1;
}

.game-card {
  background: rgba(20, 30, 40, 0.7);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(57, 255, 20, 0.2);
  display: block;
  text-decoration: none;
  color: inherit;
  backdrop-filter: blur(10px);
}

.game-card:hover {
  transform: translateY(-8px);
  background: rgba(20, 30, 40, 0.9);
  box-shadow: 0 15px 35px rgba(57, 255, 20, 0.2);
  border-color: rgba(57, 255, 20, 0.4);
}

.game-image-wrapper {
  position: relative;
  aspect-ratio: 1/1;
  overflow: hidden;
}

.game-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.game-card:hover .game-image {
  transform: scale(1.1);
}

.game-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.game-card:hover .game-overlay {
  opacity: 1;
}

.play-button {
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-soft) 100%);
  color: #000;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px rgba(57, 255, 20, 0.4);
}

.play-button:hover {
  transform: scale(1.05);
  box-shadow: 0 0 25px rgba(57, 255, 20, 0.6);
}

.game-info {
  padding: 20px;
}

.game-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 12px;
  line-height: 1.3;
}

.game-description {
  color: var(--text-muted);
  margin-bottom: 16px;
  font-size: 0.9rem;
  line-height: 1.5;
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.game-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid rgba(57, 255, 20, 0.1);
}

.game-date {
  color: var(--text-muted);
  font-size: 0.85rem;
}

.game-link {
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.85rem;
  transition: all 0.3s ease;
}

.game-card:hover .game-link {
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
  .games-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

/* Responsive Design - 768px */
@media (max-width: 768px) {
  .games-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .page-title {
    font-size: clamp(28px, 5vw, 40px);
  }

  .page-subtitle {
    font-size: 1rem;
  }

  .game-title {
    font-size: 1.1rem;
  }

  .game-description {
    font-size: 0.85rem;
  }

  .loading-state,
  .error-state {
    padding: 40px 20px;
    font-size: 0.9rem;
  }
}

/* Why Play Section */
.why-play-section {
  padding: 80px 0;
  position: relative;
  z-index: 1;
}

.why-play-section::before {
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

.why-play-section .section-intro {
  text-align: center;
  margin-bottom: 60px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 1;
}

.why-play-section .section-tag {
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

.why-play-section .section-heading {
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

.why-play-section .section-lead {
  font-size: 1.1rem;
  color: var(--text-muted);
  line-height: 1.7;
  margin: 0;
}

.why-play-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  position: relative;
  z-index: 1;
}

.why-play-card {
  background: rgba(20, 30, 40, 0.7);
  border: 1px solid rgba(57, 255, 20, 0.2);
  border-radius: 16px;
  padding: 30px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.why-play-card::before {
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

.why-play-card:hover {
  transform: translateY(-4px);
  border-color: rgba(57, 255, 20, 0.4);
  box-shadow: 0 15px 35px rgba(57, 255, 20, 0.2);
}

.why-play-card:hover::before {
  opacity: 1;
}

.why-play-icon {
  font-size: 2.5rem;
  margin-bottom: 16px;
  display: block;
}

.why-play-card h3 {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--accent);
  margin: 0 0 12px 0;
  text-shadow: 0 0 10px rgba(57, 255, 20, 0.6);
}

.why-play-card p {
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
  .why-play-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .faq-container {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .why-play-section,
  .faq-section {
    padding: 60px 0;
  }

  .why-play-section .section-intro,
  .faq-section .section-intro {
    margin-bottom: 40px;
  }

  .why-play-card {
    padding: 24px;
  }

  .why-play-card h3 {
    font-size: 1.1rem;
  }

  .why-play-card p {
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

