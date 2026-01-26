<template>
  <header class="site-header">
    <div class="container">
      <div class="header-content">
        <a :href="getLocalizedPath('/')" class="logo" @click="closeMenu">
          <span class="logo-text">QUARANTINE ZONE</span>
        </a>
        <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
          <span class="hamburger-line" :class="{ active: isMenuOpen }"></span>
          <span class="hamburger-line" :class="{ active: isMenuOpen }"></span>
          <span class="hamburger-line" :class="{ active: isMenuOpen }"></span>
        </button>
        <div class="menu-overlay" :class="{ open: isMenuOpen }" @click="closeMenu"></div>
        <nav class="nav-links" :class="{ open: isMenuOpen }">
          <a :href="getLocalizedPath('/')" :class="{ active: isActiveRoute('/') }" @click="closeMenu">{{ t('common.nav.home') }}</a>
          <a :href="getLocalizedPath('/guides')" :class="{ active: isActiveRoute('/guides') }" @click="closeMenu">{{ t('common.nav.guides') }}</a>
          <a :href="getLocalizedPath('/wiki')" :class="{ active: isActiveRoute('/wiki') }" @click="closeMenu">{{ t('common.nav.wiki') }}</a>
          <a :href="getLocalizedPath('/zombie-games')" :class="{ active: isActiveRoute('/zombie-games') }" @click="closeMenu">{{ t('common.nav.zombieGames') }}</a>
          <a :href="getLocalizedPath('/news')" :class="{ active: isActiveRoute('/news') }" @click="closeMenu">{{ t('common.nav.news') }}</a>
        </nav>
        <div class="language-switcher" ref="langSwitcherRef">
          <button 
            class="lang-button" 
            @click="toggleLangDropdown"
            :aria-label="t('common.languageSwitcher.label')"
            :aria-expanded="isLangDropdownOpen"
          >
            <span class="lang-current">{{ currentLocale.toUpperCase() }}</span>
            <svg 
              class="lang-arrow" 
              :class="{ open: isLangDropdownOpen }"
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              stroke-width="2"
            >
              <polyline points="6,9 12,15 18,9" />
            </svg>
          </button>
          <div 
            v-if="isLangDropdownOpen" 
            class="lang-dropdown"
          >
            <button
              class="lang-option"
              :class="{ active: currentLocale === 'en' }"
              @click="selectLanguage('en')"
            >
              <span class="lang-code">EN</span>
            </button>
            <button
              class="lang-option"
              :class="{ active: currentLocale === 'de' }"
              @click="selectLanguage('de')"
            >
              <span class="lang-code">DE</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useLocalizedPath } from '../composables/useLocalizedPath'

const router = useRouter()
const route = useRoute()
const { locale, t } = useI18n()
const { getLocalizedPath } = useLocalizedPath()
const isMenuOpen = ref(false)
const isLangDropdownOpen = ref(false)
const langSwitcherRef = ref(null)

const currentPath = computed(() => route.path)
const currentLocale = computed(() => locale.value || 'en')

// 判断路由是否激活
const isActiveRoute = (path) => {
  const normalizedPath = path === '/' ? '/' : path
  const pathWithoutLocale = currentPath.value.replace(/^\/[a-z]{2}(\/|$)/, '/')
  
  if (normalizedPath === '/') {
    return pathWithoutLocale === '/' || pathWithoutLocale === ''
  }
  
  return pathWithoutLocale.startsWith(normalizedPath)
}

// 切换语言下拉菜单
const toggleLangDropdown = () => {
  isLangDropdownOpen.value = !isLangDropdownOpen.value
}

// 选择语言
const selectLanguage = (newLocale) => {
  if (newLocale === currentLocale.value) {
    isLangDropdownOpen.value = false
    return
  }
  
  // 获取当前路径（去除语言前缀）
  let currentPath = route.path
  const pathSegments = currentPath.split('/').filter(Boolean)
  
  // 如果当前路径有语言前缀，移除它
  if (pathSegments.length > 0 && ['en', 'de'].includes(pathSegments[0])) {
    pathSegments.shift()
    currentPath = '/' + pathSegments.join('/')
  }
  
  // 如果新语言是英文，直接跳转（无前缀）
  if (newLocale === 'en') {
    router.push(currentPath || '/')
  } else {
    // 其他语言添加前缀
    router.push(`/${newLocale}${currentPath || '/'}`)
  }
  
  isLangDropdownOpen.value = false
  closeMenu()
}

// 点击外部关闭语言下拉
const handleClickOutside = (event) => {
  if (!event.target.closest('.language-switcher')) {
    isLangDropdownOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    isLangDropdownOpen.value = false
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  isLangDropdownOpen.value = false
}
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: linear-gradient(90deg, rgba(10, 15, 20, 0.98), rgba(20, 30, 40, 0.95));
  border-bottom: 2px solid var(--accent);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8), 0 0 30px var(--neon-glow);
  backdrop-filter: blur(10px);
  position: relative;
}

.site-header::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
  opacity: 0.6;
  animation: neonFlow 3s ease-in-out infinite;
}

@keyframes neonFlow {
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.9;
  }
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 18px 0;
  position: relative;
}

.logo {
  display: flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;
}

.logo-text {
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: var(--accent);
  text-transform: uppercase;
  text-shadow: 
    0 0 10px var(--accent),
    0 0 20px var(--neon-glow),
    0 0 30px rgba(57, 255, 20, 0.5),
    2px 2px 0 var(--dark-green);
  position: relative;
  animation: textGlow 2s ease-in-out infinite alternate;
}

@keyframes textGlow {
  0% {
    text-shadow: 
      0 0 10px var(--accent),
      0 0 20px var(--neon-glow),
      0 0 30px rgba(57, 255, 20, 0.5),
      2px 2px 0 var(--dark-green);
  }
  100% {
    text-shadow: 
      0 0 20px var(--accent),
      0 0 40px var(--neon-glow),
      0 0 60px rgba(57, 255, 20, 0.8),
      2px 2px 0 var(--dark-green);
  }
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 21;
}

.hamburger-line {
  width: 24px;
  height: 2px;
  background: var(--text);
  transition: all 0.3s ease;
  border-radius: 2px;
  transform-origin: center;
}

.hamburger-line.active:nth-child(1) {
  transform: rotate(45deg) translateY(7px);
}

.hamburger-line.active:nth-child(2) {
  opacity: 0;
  transform: scale(0);
}

.hamburger-line.active:nth-child(3) {
  transform: rotate(-45deg) translateY(-7px);
}

.nav-links {
  display: flex;
  gap: 14px;
  font-size: 0.95rem;
}

.nav-links a {
  color: var(--text-muted);
  text-decoration: none;
  padding: 8px 14px;
  border-radius: 6px;
  border: 1px solid transparent;
  letter-spacing: 0.05em;
  transition: all 0.2s ease;
  font-weight: 500;
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--text);
  border-color: var(--accent);
  background: rgba(57, 255, 20, 0.15);
  box-shadow: 
    0 0 12px rgba(57, 255, 20, 0.5),
    inset 0 0 10px rgba(57, 255, 20, 0.1);
  text-shadow: 0 0 8px var(--accent);
}

.menu-overlay {
  display: none;
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .menu-overlay {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    z-index: 19;
  }

  .menu-overlay.open {
    opacity: 1;
    visibility: visible;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 280px;
    height: 100vh;
    background: linear-gradient(180deg, rgba(10, 15, 20, 0.98), rgba(20, 30, 40, 0.95));
    flex-direction: column;
    align-items: flex-start;
    padding: 80px 24px 24px;
    gap: 0;
    transition: right 0.3s ease;
    box-shadow: -4px 0 20px rgba(0, 0, 0, 0.8), -4px 0 40px var(--neon-glow);
    z-index: 20;
    overflow-y: auto;
    backdrop-filter: blur(10px);
    border-left: 2px solid var(--accent);
  }

  .nav-links.open {
    right: 0;
  }

  .nav-links a {
    width: 100%;
    padding: 14px 16px;
    border-radius: 8px;
    margin-bottom: 8px;
    border: 1px solid var(--border-color);
  }

  .nav-links a:hover,
  .nav-links a.active {
    background: rgba(57, 255, 20, 0.2);
    border-color: var(--accent);
    box-shadow: 0 0 15px rgba(57, 255, 20, 0.6);
  }
}

/* Language Switcher */
.language-switcher {
  position: relative;
  margin-left: 16px;
}

.lang-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  background: rgba(10, 15, 20, 0.6);
  border: 1px solid rgba(57, 255, 20, 0.3);
  border-radius: 8px;
  color: var(--text);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 70px;
}

.lang-button:hover {
  background: rgba(10, 15, 20, 0.8);
  border-color: var(--accent);
  color: var(--text);
  box-shadow: 0 0 12px rgba(57, 255, 20, 0.3);
}

.lang-current {
  font-weight: 600;
}

.lang-arrow {
  width: 14px;
  height: 14px;
  color: var(--text-muted);
  transition: transform 0.3s ease;
}

.lang-arrow.open {
  transform: rotate(180deg);
}

.lang-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 160px;
  background: linear-gradient(180deg, rgba(10, 15, 20, 0.98), rgba(20, 30, 40, 0.95));
  border: 1px solid rgba(57, 255, 20, 0.3);
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8), 0 0 30px var(--neon-glow);
  overflow: hidden;
  z-index: 100;
  backdrop-filter: blur(10px);
}

.lang-option {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px 16px;
  background: transparent;
  border: none;
  color: var(--text-muted);
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
  border-bottom: 1px solid rgba(57, 255, 20, 0.1);
}

.lang-option:last-child {
  border-bottom: none;
}

.lang-option:hover {
  background: rgba(57, 255, 20, 0.15);
  color: var(--text);
}

.lang-option.active {
  background: rgba(57, 255, 20, 0.2);
  color: var(--accent);
}

.lang-option.active .lang-code {
  font-weight: 700;
}

.lang-code {
  font-weight: 600;
  color: var(--accent);
}

@media (max-width: 768px) {
  .language-switcher {
    order: 3;
    width: 100%;
    margin: 16px 0 0 0;
  }
  
  .lang-button {
    width: 100%;
    justify-content: center;
  }
  
  .lang-dropdown {
    right: auto;
    left: 0;
    width: 100%;
  }
}
</style>

