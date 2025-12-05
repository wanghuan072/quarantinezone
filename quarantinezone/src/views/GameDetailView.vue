<template>
  <div class="game-detail-page">
    <!-- Game Not Found -->
    <div v-if="!game && !loading" class="game-not-found">
      <div class="container">
        <h1>Game Not Found</h1>
        <p>The game you're looking for doesn't exist or has been removed.</p>
        <router-link to="/zombie-games" class="btn btn-primary">Back to Games</router-link>
      </div>
    </div>

    <!-- Game Detail Page -->
    <div class="game-detail" v-if="game">
      <div class="container">
        <div class="game-wrapper">
          <!-- Left Side -->
          <div class="game-left" :class="{ 'web-fullscreen': webFullscreen }">
            <!-- Game Player Box with Control Bar -->
            <div class="player-wrapper">
              <div class="player-box">
                <!-- Before Loading -->
                <div v-if="!gameLoaded" class="player-preview">
                  <div class="game-icon-frame">
                    <img :src="game.imageUrl" :alt="game.imageAlt" />
                  </div>
                  <button class="play-btn" @click="loadGame">PLAY</button>
                </div>

                <!-- After Loading -->
                <iframe
                  v-else
                  id="game-iframe"
                  :src="game.iframeUrl"
                  width="100%"
                  height="100%"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>

              <!-- Game Control Bar -->
              <div class="game-control-bar">
                <h1 class="control-title">{{ game.title }}</h1>
                <div class="control-buttons">
                  <button class="control-btn" @click="toggleWebFullscreen" title="Web Fullscreen">
                    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="200" height="200">
                      <path d="M547.4 197.4v46l200.3 0.1L546.1 444l32.4 32.6 201.9-200.7v200.9h46V197.5zM471.4 584.4l-32.6-32.6L243.6 747V547.9h-46v278.7h279v-46H275z" fill="#ffffff"></path>
                    </svg>
                  </button>
                  <button class="control-btn" @click="toggleFullscreen" title="Fullscreen">
                    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="200" height="200">
                      <path d="M95.500388 368.593511c0 11.905658-9.637914 21.543572-21.543573 21.543572-11.877311 0-21.515225-9.637914-21.515225-21.543572V188.704684c0-37.502824 15.307275-71.575684 39.997343-96.265751s58.762928-39.997342 96.265751-39.997343h179.888827c11.905658 0 21.543572 9.637914 21.543572 21.515225 0 11.905658-9.637914 21.543572-21.543572 21.543573H188.704684c-25.625512 0-48.926586 10.488318-65.821282 27.383014s-27.383014 40.19577-27.383014 65.821282v179.888827z m559.906101-273.093123c-11.877311 0-21.515225-9.637914-21.515226-21.543573 0-11.877311 9.637914-21.515225 21.515226-21.515225h179.917174c37.502824 0 71.547337 15.307275 96.237404 39.997343s40.025689 58.762928 40.02569 96.265751v179.888827c0 11.905658-9.637914 21.543572-21.543572 21.543572-11.877311 0-21.515225-9.637914-21.515226-21.543572V188.704684c0-25.625512-10.488318-48.926586-27.411361-65.821282-16.894696-16.894696-40.19577-27.383014-65.792935-27.383014h-179.917174z m273.12147 559.906101c0-11.877311 9.637914-21.515225 21.515226-21.515226 11.905658 0 21.543572 9.637914 21.543572 21.515226v179.917174c0 37.474477-15.335622 71.547337-40.02569 96.237404s-58.734581 39.997342-96.237404 39.997343h-179.917174c-11.877311 0-21.515225-9.637914-21.515226-21.515225s9.637914-21.543572 21.515226-21.543573h179.917174c25.597165 0 48.898239-10.488318 65.792935-27.383014 16.923043-16.894696 27.411361-40.19577 27.411361-65.792935v-179.917174z m-559.934448 273.093123c11.905658 0 21.543572 9.666261 21.543572 21.543573s-9.637914 21.515225-21.543572 21.515225H188.704684c-37.502824 0-71.575684-15.307275-96.265751-39.997343s-39.997342-58.762928-39.997343-96.237404v-179.917174c0-11.877311 9.637914-21.515225 21.515225-21.515226 11.905658 0 21.543572 9.637914 21.543573 21.515226v179.917174c0 25.597165 10.488318 48.898239 27.383014 65.792935s40.19577 27.383014 65.821282 27.383014h179.888827z" fill="#ffffff"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <!-- Game Details HTML -->
            <div class="detail-article" v-html="game.detailsHtml"></div>
          </div>

          <!-- Right Side -->
          <div class="game-right" :class="{ 'hidden': webFullscreen }">
            <!-- Game Info -->
            <div class="game-info">
              <h1 class="game-title">{{ game.title }}</h1>
              <span class="game-date">{{ formatDate(game.publishDate) }}</span>
              <p class="game-desc">{{ game.description }}</p>
            </div>

            <!-- Comments -->
            <div class="comments">
              <h3 class="comments-heading">All Reviews</h3>
              <div class="comment-list" v-if="game.comments && game.comments.length">
                <div v-for="comment in game.comments" :key="comment.id" class="comment">
                  <div class="comment-avatar">{{ comment.author.charAt(0).toUpperCase() }}</div>
                  <div class="comment-body">
                    <div class="comment-top">
                      <span class="comment-author">{{ comment.author }}</span>
                      <span class="comment-stars">{{ '★'.repeat(comment.rating || 5) }}{{ comment.rating < 5 ? '☆'.repeat(5 - comment.rating) : '' }}</span>
                    </div>
                    <div class="comment-date">{{ comment.date }}</div>
                    <div class="comment-text">{{ comment.text }}</div>
                  </div>
                </div>
              </div>
              <div class="no-comments" v-else>
                <p>No comments yet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { useGameData } from '../composables/useGameData'
import { useSEO } from '../seo/composables.js'
import { seoConfig } from '../seo/config.js'

const route = useRoute()
const { games, loadData, findGameByAddressBar } = useGameData()
const { setSEO } = useSEO()
const game = ref(null)
const gameLoaded = ref(false)
const loading = ref(true)
const webFullscreen = ref(false)

const gameId = computed(() => route.params.id)

const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const loadGame = () => {
  gameLoaded.value = true
}

const toggleWebFullscreen = () => {
  webFullscreen.value = !webFullscreen.value
  if (webFullscreen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const toggleFullscreen = () => {
  const iframe = document.getElementById('game-iframe')
  if (!iframe) return

  if (!document.fullscreenElement) {
    iframe.requestFullscreen().catch(err => {
      console.error(`Error attempting to enable fullscreen: ${err.message}`)
    })
  } else {
    document.exitFullscreen()
  }
}

// 初始化加载数据并查找 game
const initGame = async () => {
  await nextTick()
  await loadData()
  const id = gameId.value
  game.value = findGameByAddressBar(id)
  
  // 设置 SEO
  if (game.value && game.value.seo) {
    setSEO({
      title: game.value.seo.title || game.value.title,
      description: game.value.seo.description || game.value.description,
      keywords: game.value.seo.keywords || seoConfig.defaults.keywords,
      image: game.value.imageUrl || seoConfig.defaults.image,
      type: 'website'
    })
  }
  
  loading.value = false
}

onMounted(async () => {
  await initGame()
})

// 监听路由参数变化，更新当前 game
watch(() => route.params.id, async () => {
  await nextTick()
  await loadData()
  const id = gameId.value
  game.value = findGameByAddressBar(id)
  
  // 更新 SEO
  if (game.value && game.value.seo) {
    setSEO({
      title: game.value.seo.title || game.value.title,
      description: game.value.seo.description || game.value.description,
      keywords: game.value.seo.keywords || seoConfig.defaults.keywords,
      image: game.value.imageUrl || seoConfig.defaults.image,
      type: 'website'
    })
  }
  
  // 重置游戏加载状态
  gameLoaded.value = false
})
</script>

<style scoped>
.game-detail-page {
  min-height: 100vh;
  position: relative;
}

.game-detail-page::before {
  content: '';
  position: fixed;
  inset: 0;
  background: 
    radial-gradient(circle at 20% 30%, rgba(0, 168, 255, 0.08) 0%, transparent 40%),
    radial-gradient(circle at 80% 70%, rgba(57, 255, 20, 0.05) 0%, transparent 40%),
    linear-gradient(180deg, rgba(10, 15, 20, 0.8), rgba(20, 30, 40, 0.75));
  z-index: 0;
  pointer-events: none;
}

.game-not-found {
  padding: 120px 0;
  text-align: center;
  color: var(--text-muted);
  position: relative;
  z-index: 1;
}

.game-not-found h1 {
  font-size: 2.5rem;
  color: var(--text);
  margin-bottom: 16px;
}

.game-not-found p {
  margin-bottom: 24px;
}

.btn {
  display: inline-block;
  padding: 12px 24px;
  background: var(--accent);
  color: #000;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn:hover {
  background: var(--accent-soft);
  transform: translateY(-2px);
  box-shadow: 0 0 15px rgba(57, 255, 20, 0.4);
}

.game-detail {
  padding: 80px 0 60px;
  position: relative;
  z-index: 1;
}

.game-wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
}

/* Left Side */
.game-left {
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
  transition: all 0.3s ease;
}

.game-left.web-fullscreen {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  background: #000 !important;
  z-index: 9999 !important;
  gap: 0;
  padding: 20px;
  margin: 0 !important;
}

.game-left.web-fullscreen .player-wrapper {
  height: 100vh;
}

.game-left.web-fullscreen .player-box {
  height: calc(100vh - 60px);
  border-radius: 0;
  border-left: none;
  border-right: none;
  border-top: none;
}

.game-left.web-fullscreen .game-control-bar {
  border-radius: 0;
  border-left: none;
  border-right: none;
  border-bottom: none;
  border-top: 2px solid rgba(57, 255, 20, 0.3);
}

.game-left.web-fullscreen .detail-article {
  display: none;
}

.hidden {
  display: none !important;
}

.player-wrapper {
  display: flex;
  flex-direction: column;
}

.player-box {
  background: rgba(20, 30, 40, 0.9);
  border: 2px solid rgba(57, 255, 20, 0.3);
  border-radius: 8px 8px 0 0;
  height: 600px;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.player-preview {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  gap: 20px;
}

.game-icon-frame {
  width: 150px;
  height: 150px;
  border: 3px solid var(--accent);
  border-radius: 8px;
  overflow: hidden;
  background: rgba(20, 30, 40, 0.8);
  box-shadow: 0 0 20px rgba(57, 255, 20, 0.3);
}

.game-icon-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.play-btn {
  background: var(--accent);
  color: #000;
  border: none;
  border-radius: 6px;
  padding: 12px 50px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px rgba(57, 255, 20, 0.4);
}

.play-btn:hover {
  background: var(--accent-soft);
  transform: translateY(-2px);
  box-shadow: 0 0 25px rgba(57, 255, 20, 0.6);
}

.player-box iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}

.game-control-bar {
  background: rgba(20, 30, 40, 0.9);
  border: 2px solid rgba(57, 255, 20, 0.3);
  border-top: none;
  border-radius: 0 0 8px 8px;
  padding: 12px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(10px);
}

.control-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text);
  margin: 0;
}

.control-buttons {
  display: flex;
  gap: 8px;
}

.control-btn {
  width: 32px;
  height: 32px;
  background: rgba(57, 255, 20, 0.1);
  border: 1px solid rgba(57, 255, 20, 0.3);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  color: var(--text);
}

.control-btn:hover {
  background: rgba(57, 255, 20, 0.2);
  border-color: var(--accent);
}

.control-btn svg {
  width: 16px;
  height: 16px;
}

/* 使用全局的 .detail-article 样式 */
/* 为游戏详情页的 detail-article 添加容器样式 */
.game-left .detail-article {
  background: rgba(20, 30, 40, 0.7);
  border: 1px solid rgba(57, 255, 20, 0.2);
  border-radius: 16px;
  padding: 30px;
  backdrop-filter: blur(10px);
}

/* Right Side */
.game-right {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.game-info {
  background: rgba(20, 30, 40, 0.7);
  border: 1px solid rgba(57, 255, 20, 0.2);
  border-radius: 16px;
  padding: 24px;
  backdrop-filter: blur(10px);
}

.game-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 12px;
  text-shadow: 0 0 10px rgba(57, 255, 20, 0.4);
}

.game-date {
  display: block;
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: 16px;
}

.game-desc {
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0;
}

.comments {
  background: rgba(20, 30, 40, 0.7);
  border: 1px solid rgba(57, 255, 20, 0.2);
  border-radius: 16px;
  padding: 24px;
  backdrop-filter: blur(10px);
}

.comments-heading {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 20px;
}

.comment-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.comment {
  display: flex;
  gap: 12px;
}

.comment-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--accent);
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  flex-shrink: 0;
}

.comment-body {
  flex: 1;
}

.comment-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
}

.comment-author {
  font-weight: 600;
  color: var(--text);
}

.comment-stars {
  color: var(--accent-warning);
  font-size: 0.9rem;
}

.comment-date {
  color: var(--text-muted);
  font-size: 0.85rem;
  margin-bottom: 8px;
}

.comment-text {
  color: var(--text-muted);
  line-height: 1.5;
}

.no-comments {
  text-align: center;
  color: var(--text-muted);
  padding: 20px 0;
}

/* Responsive Design - 1024px */
@media (max-width: 1024px) {
  .game-wrapper {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .game-right {
    order: -1;
  }
}

/* Responsive Design - 768px */
@media (max-width: 768px) {
  .game-detail {
    padding: 60px 0 40px;
  }

  .player-box {
    height: 400px;
  }

  .game-html {
    padding: 20px;
  }

  .game-info,
  .comments {
    padding: 20px;
  }
}
</style>

