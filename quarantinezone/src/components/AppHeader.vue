<template>
  <header class="site-header">
    <div class="container">
      <div class="header-content">
        <router-link to="/" class="logo" @click="closeMenu">
          <span class="logo-text">QUARANTINE ZONE</span>
        </router-link>
        <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
          <span class="hamburger-line" :class="{ active: isMenuOpen }"></span>
          <span class="hamburger-line" :class="{ active: isMenuOpen }"></span>
          <span class="hamburger-line" :class="{ active: isMenuOpen }"></span>
        </button>
        <div class="menu-overlay" :class="{ open: isMenuOpen }" @click="closeMenu"></div>
        <nav class="nav-links" :class="{ open: isMenuOpen }">
          <router-link to="/" @click="closeMenu">Home</router-link>
          <router-link to="/guides" @click="closeMenu">Guides</router-link>
          <router-link to="/wiki" @click="closeMenu">Wiki</router-link>
          <router-link to="/zombie-games" @click="closeMenu">Zombie Games</router-link>
          <router-link to="/news" @click="closeMenu">News</router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
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
.nav-links a.router-link-active {
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
  .nav-links a.router-link-active {
    background: rgba(57, 255, 20, 0.2);
    border-color: var(--accent);
    box-shadow: 0 0 15px rgba(57, 255, 20, 0.6);
  }
}
</style>

