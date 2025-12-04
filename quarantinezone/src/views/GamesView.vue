<template>
  <div class="games-view">
    <!-- Header Section -->
    <section class="games-header">
      <div class="container">
        <div class="header-content">
          <h1 class="page-title">Games</h1>
          <p class="page-subtitle">
            Play Quarantine Zone: The Last Check and other related games
          </p>
        </div>
      </div>
    </section>

    <!-- Games List Section -->
    <section class="games-content">
      <div class="container">
        <!-- Loading State -->
        <div v-if="loading" class="loading-state">
          <p>Loading games...</p>
        </div>
        
        <!-- Error State -->
        <div v-if="error" class="error-state">
          <p>Error loading games: {{ error }}</p>
        </div>

        <!-- Section Title -->
        <h2 class="section-title" v-if="!loading && !error">Available Games</h2>

        <!-- Games Grid -->
        <div class="games-grid" v-if="!loading && !error">
          <router-link
            v-for="game in allGames"
            :key="game.id"
            :to="`/games/${game.addressBar}`"
            class="game-card"
          >
            <div class="game-image-wrapper">
              <img :src="game.imageUrl" :alt="game.imageAlt" class="game-image" />
              <div class="game-overlay">
                <span class="play-button">View Details</span>
              </div>
            </div>
            <div class="game-info">
              <h2 class="game-title">{{ game.title }}</h2>
              <p class="game-description">{{ game.description }}</p>
              <div class="game-meta">
                <span class="game-date">{{ formatDate(game.publishDate) }}</span>
                <span class="game-link">Play Now →</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useGameData } from '../composables/useGameData'

const { games, loading, error, loadData } = useGameData()

// 初始化加载数据
onMounted(() => {
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
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
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
</style>

