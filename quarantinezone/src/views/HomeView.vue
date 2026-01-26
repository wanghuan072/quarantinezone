<template>
  <div class="home-view">
    <main>
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-background-pattern"></div>
        <div class="container">
          <div class="hero-layout">
            <div class="hero-main">
              <div class="hero-badge">{{ t('homePage.hero.badge') }}</div>
              <h1 class="hero-title">{{ t('homePage.hero.title') }}</h1>
              <p class="hero-description">
                {{ t('homePage.hero.description') }}
              </p>
              <div class="hero-cta">
                <a href="/wiki" class="btn-primary">
                  {{ t('homePage.hero.btn1') }}
                </a>
                <a href="/guides" class="btn-secondary">{{ t('homePage.hero.btn2') }}</a>
              </div>
              <div class="hero-info">
                <div class="info-item">
                  <span class="info-label">{{ t('homePage.hero.info.developer') }}</span>
                  <span class="info-value">{{ t('homePage.hero.info.developerValue') }}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">{{ t('homePage.hero.info.publisher') }}</span>
                  <span class="info-value">{{ t('homePage.hero.info.publisherValue') }}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">{{ t('homePage.hero.info.platform') }}</span>
                  <span class="info-value">{{ t('homePage.hero.info.platformValue') }}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">{{ t('homePage.hero.info.release') }}</span>
                  <span class="info-value">{{ t('homePage.hero.info.releaseValue') }}</span>
                </div>
              </div>
              <div class="hero-stats">
                <div class="stat-card">
                  <span class="stat-value">{{ t('homePage.hero.stats.stat1Value') }}</span>
                  <span class="stat-label">{{ t('homePage.hero.stats.stat1Label') }}</span>
                </div>
                <div class="stat-card">
                  <span class="stat-value">{{ t('homePage.hero.stats.stat2Value') }}</span>
                  <span class="stat-label">{{ t('homePage.hero.stats.stat2Label') }}</span>
                </div>
              </div>
            </div>
            <div class="hero-video">
              <div class="video-player">
                <div class="video-thumbnail" v-if="!isVideoPlaying">
                  <div class="video-mask">
                    <span>{{ t('homePage.hero.video.title') }}</span>
                  </div>
                  <div class="play-button" @click="playVideo">▶</div>
                </div>
                <div class="video-iframe" v-else>
                  <iframe
                    src="https://www.youtube.com/embed/GxFOBOqkO3w"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    class="video-frame"
                  ></iframe>
                  <button class="close-video" @click="closeVideo">×</button>
                </div>
              </div>
              <div class="video-description">
                <h2><a href="/guides/Quarantine-Zone-The-Last-Check-Ask-Your-Mom-Guide">{{ t('homePage.hero.video.guideLink') }}</a></h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- What is Section -->
      <section class="about-section">
        <div class="container">
          <div class="section-intro">
            <span class="section-tag">{{ t('homePage.about.tag') }}</span>
            <h2 class="section-heading">{{ t('homePage.about.title') }}</h2>
            <p class="section-lead">
              {{ t('homePage.about.lead') }}
            </p>
          </div>

          <div class="content-blocks">
            <div class="content-block block-large">
              <div class="block-header">
                <span class="block-number">{{ t('homePage.about.block1.num') }}</span>
                <h3>{{ t('homePage.about.block1.title') }}</h3>
              </div>
              <div class="block-body">
                <p>
                  {{ t('homePage.about.block1.p1') }}
                </p>
                <p>
                  {{ t('homePage.about.block1.p2') }} <a href="/wiki" class="inline-link">{{ t('homePage.about.block1.link1') }}</a> {{ t('homePage.about.block1.p3') }}
                </p>
              </div>
            </div>

            <div class="content-block">
              <div class="block-header">
                <span class="block-number">{{ t('homePage.about.block2.num') }}</span>
                <h3>{{ t('homePage.about.block2.title') }}</h3>
              </div>
              <div class="block-body">
                <p>
                  {{ t('homePage.about.block2.p1') }} <a href="/guides" class="inline-link">{{ t('homePage.about.block2.link1') }}</a> {{ t('homePage.about.block2.p2') }}
                </p>
                <p>
                  {{ t('homePage.about.block2.p3') }}
                </p>
              </div>
            </div>

            <div class="content-block block-features">
              <div class="block-header">
                <span class="block-number">{{ t('homePage.about.block3.num') }}</span>
                <h3>{{ t('homePage.about.block3.title') }}</h3>
              </div>
              <div class="block-body">
                <div class="feature-grid">
                  <div class="feature-item">
                    <div class="feature-icon">{{ t('homePage.about.block3.f1.icon') }}</div>
                    <div class="feature-text">
                      <strong>{{ t('homePage.about.block3.f1.title') }}</strong>
                      <span>{{ t('homePage.about.block3.f1.desc') }}</span>
                    </div>
                  </div>
                  <div class="feature-item">
                    <div class="feature-icon">{{ t('homePage.about.block3.f2.icon') }}</div>
                    <div class="feature-text">
                      <strong>{{ t('homePage.about.block3.f2.title') }}</strong>
                      <span>{{ t('homePage.about.block3.f2.desc') }}</span>
                    </div>
                  </div>
                  <div class="feature-item">
                    <div class="feature-icon">{{ t('homePage.about.block3.f3.icon') }}</div>
                    <div class="feature-text">
                      <strong>{{ t('homePage.about.block3.f3.title') }}</strong>
                      <span>{{ t('homePage.about.block3.f3.desc') }}</span>
                    </div>
                  </div>
                  <div class="feature-item">
                    <div class="feature-icon">{{ t('homePage.about.block3.f4.icon') }}</div>
                    <div class="feature-text">
                      <strong>{{ t('homePage.about.block3.f4.title') }}</strong>
                      <span>{{ t('homePage.about.block3.f4.desc') }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Gameplay Mechanics Section -->
      <section class="mechanics-section">
        <div class="container">
          <div class="section-intro">
            <span class="section-tag">{{ t('homePage.mechanics.tag') }}</span>
            <h2 class="section-heading">{{ t('homePage.mechanics.title') }}</h2>
            <p class="section-lead">
              {{ t('homePage.mechanics.lead') }}
            </p>
          </div>

          <div class="mechanics-grid">
            <div class="mechanic-card">
              <div class="mechanic-icon">{{ t('homePage.mechanics.m1.icon') }}</div>
              <h3>{{ t('homePage.mechanics.m1.title') }}</h3>
              <p>
                {{ t('homePage.mechanics.m1.p') }} <a href="/wiki" class="inline-link">{{ t('homePage.mechanics.m1.link1') }}</a> {{ t('homePage.mechanics.m1.p2') }}
              </p>
              <ul class="mechanic-list">
                <li>{{ t('homePage.mechanics.m1.list1') }}</li>
                <li>{{ t('homePage.mechanics.m1.list2') }}</li>
                <li>{{ t('homePage.mechanics.m1.list3') }}</li>
                <li>{{ t('homePage.mechanics.m1.list4') }}</li>
              </ul>
              <div class="mechanic-tools">
                <span class="tool-tag">{{ t('homePage.mechanics.m1.tags.t1') }}</span>
                <span class="tool-tag">{{ t('homePage.mechanics.m1.tags.t2') }}</span>
                <span class="tool-tag">{{ t('homePage.mechanics.m1.tags.t3') }}</span>
                <span class="tool-tag">{{ t('homePage.mechanics.m1.tags.t4') }}</span>
              </div>
            </div>

            <div class="mechanic-card">
              <div class="mechanic-icon">{{ t('homePage.mechanics.m2.icon') }}</div>
              <h3>{{ t('homePage.mechanics.m2.title') }}</h3>
              <p>
                {{ t('homePage.mechanics.m2.p') }}
              </p>
              <ul class="mechanic-list">
                <li>{{ t('homePage.mechanics.m2.list1') }}</li>
                <li>{{ t('homePage.mechanics.m2.list2') }}</li>
                <li>{{ t('homePage.mechanics.m2.list3') }}</li>
                <li>{{ t('homePage.mechanics.m2.list4') }}</li>
              </ul>
              <div class="mechanic-tools">
                <span class="tool-tag">{{ t('homePage.mechanics.m2.tags.t1') }}</span>
                <span class="tool-tag">{{ t('homePage.mechanics.m2.tags.t2') }}</span>
                <span class="tool-tag">{{ t('homePage.mechanics.m2.tags.t3') }}</span>
                <span class="tool-tag">{{ t('homePage.mechanics.m2.tags.t4') }}</span>
              </div>
            </div>

            <div class="mechanic-card">
              <div class="mechanic-icon">{{ t('homePage.mechanics.m3.icon') }}</div>
              <h3>{{ t('homePage.mechanics.m3.title') }}</h3>
              <p>
                {{ t('homePage.mechanics.m3.p') }}
              </p>
              <ul class="mechanic-list">
                <li>{{ t('homePage.mechanics.m3.list1') }}</li>
                <li>{{ t('homePage.mechanics.m3.list2') }}</li>
                <li>{{ t('homePage.mechanics.m3.list3') }}</li>
                <li>{{ t('homePage.mechanics.m3.list4') }}</li>
              </ul>
              <div class="mechanic-tools">
                <span class="tool-tag">{{ t('homePage.mechanics.m3.tags.t1') }}</span>
                <span class="tool-tag">{{ t('homePage.mechanics.m3.tags.t2') }}</span>
                <span class="tool-tag">{{ t('homePage.mechanics.m3.tags.t3') }}</span>
                <span class="tool-tag">{{ t('homePage.mechanics.m3.tags.t4') }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- System Requirements Section -->
      <section class="requirements-section">
        <div class="container">
          <div class="section-intro">
            <span class="section-tag">{{ t('homePage.requirements.tag') }}</span>
            <h2 class="section-heading">{{ t('homePage.requirements.title') }}</h2>
            <p class="section-lead">
              {{ t('homePage.requirements.lead') }}
            </p>
          </div>

          <div class="requirements-grid">
            <div class="requirement-card">
              <div class="requirement-header">
                <h3>{{ t('homePage.requirements.min.title') }}</h3>
                <span class="requirement-badge">{{ t('homePage.requirements.min.badge') }}</span>
              </div>
              <div class="requirement-body">
                <div class="requirement-item">
                  <span class="req-label">{{ t('homePage.requirements.min.os') }}</span>
                  <span class="req-value">{{ t('homePage.requirements.min.osValue') }}</span>
                </div>
                <div class="requirement-item">
                  <span class="req-label">{{ t('homePage.requirements.min.processor') }}</span>
                  <span class="req-value">{{ t('homePage.requirements.min.processorValue') }}</span>
                </div>
                <div class="requirement-item">
                  <span class="req-label">{{ t('homePage.requirements.min.memory') }}</span>
                  <span class="req-value">{{ t('homePage.requirements.min.memoryValue') }}</span>
                </div>
                <div class="requirement-item">
                  <span class="req-label">{{ t('homePage.requirements.min.graphics') }}</span>
                  <span class="req-value">{{ t('homePage.requirements.min.graphicsValue') }}</span>
                </div>
                <div class="requirement-item">
                  <span class="req-label">{{ t('homePage.requirements.min.directx') }}</span>
                  <span class="req-value">{{ t('homePage.requirements.min.directxValue') }}</span>
                </div>
                <div class="requirement-item">
                  <span class="req-label">{{ t('homePage.requirements.min.architecture') }}</span>
                  <span class="req-value">{{ t('homePage.requirements.min.architectureValue') }}</span>
                </div>
              </div>
            </div>

            <div class="requirement-card requirement-recommended">
              <div class="requirement-header">
                <h3>{{ t('homePage.requirements.rec.title') }}</h3>
                <span class="requirement-badge recommended">{{ t('homePage.requirements.rec.badge') }}</span>
              </div>
              <div class="requirement-body">
                <div class="requirement-item">
                  <span class="req-label">{{ t('homePage.requirements.rec.os') }}</span>
                  <span class="req-value">{{ t('homePage.requirements.rec.osValue') }}</span>
                </div>
                <div class="requirement-item">
                  <span class="req-label">{{ t('homePage.requirements.rec.processor') }}</span>
                  <span class="req-value">{{ t('homePage.requirements.rec.processorValue') }}</span>
                </div>
                <div class="requirement-item">
                  <span class="req-label">{{ t('homePage.requirements.rec.memory') }}</span>
                  <span class="req-value">{{ t('homePage.requirements.rec.memoryValue') }}</span>
                </div>
                <div class="requirement-item">
                  <span class="req-label">{{ t('homePage.requirements.rec.graphics') }}</span>
                  <span class="req-value">{{ t('homePage.requirements.rec.graphicsValue') }}</span>
                </div>
                <div class="requirement-item">
                  <span class="req-label">{{ t('homePage.requirements.rec.directx') }}</span>
                  <span class="req-value">{{ t('homePage.requirements.rec.directxValue') }}</span>
                </div>
                <div class="requirement-item">
                  <span class="req-label">{{ t('homePage.requirements.rec.architecture') }}</span>
                  <span class="req-value">{{ t('homePage.requirements.rec.architectureValue') }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="requirements-note">
            <p>
              <strong>{{ t('homePage.requirements.note.platform') }}</strong> {{ t('homePage.requirements.note.platformValue') }}
            </p>
            <p>
              <strong>{{ t('homePage.requirements.note.release') }}</strong> {{ t('homePage.requirements.note.releaseValue') }}
            </p>
          </div>
        </div>
      </section>

      <!-- Player Reviews Section -->
      <section class="reviews-section">
        <div class="container">
          <div class="section-intro">
            <span class="section-tag">{{ t('homePage.reviews.tag') }}</span>
            <h2 class="section-heading">{{ t('homePage.reviews.title') }}</h2>
            <p class="section-lead">{{ t('homePage.reviews.lead') }} <a href="/news" class="inline-link">{{ t('homePage.reviews.link1') }}</a>.</p>
          </div>
          <div class="reviews-container">
            <article class="review-card">
              <div class="reviewer">
                <span class="avatar">S</span>
                <div>
                  <h4>{{ t('homePage.reviews.r1.name') }}</h4>
                  <p>{{ t('homePage.reviews.r1.rating') }}</p>
                </div>
              </div>
              <p>
                "{{ t('homePage.reviews.r1.text') }}"
              </p>
            </article>
            <article class="review-card">
              <div class="reviewer">
                <span class="avatar">C</span>
                <div>
                  <span>{{ t('homePage.reviews.r2.name') }}</span>
                  <p>{{ t('homePage.reviews.r2.rating') }}</p>
                </div>
              </div>
              <p>
                "{{ t('homePage.reviews.r2.text') }}"
              </p>
            </article>
            <article class="review-card">
              <div class="reviewer">
                <span class="avatar">Z</span>
                <div>
                  <span>{{ t('homePage.reviews.r3.name') }}</span>
                  <p>{{ t('homePage.reviews.r3.rating') }}</p>
                </div>
              </div>
              <p>
                "{{ t('homePage.reviews.r3.text') }}"
              </p>
            </article>
            <article class="review-card">
              <div class="reviewer">
                <span class="avatar">M</span>
                <div>
                  <span>{{ t('homePage.reviews.r4.name') }}</span>
                  <p>{{ t('homePage.reviews.r4.rating') }}</p>
                </div>
              </div>
              <p>
                "{{ t('homePage.reviews.r4.text') }}"
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- Game Screenshots Section -->
      <section class="screenshots-section">
        <div class="container">
          <div class="section-intro">
            <span class="section-tag">{{ t('homePage.screenshots.tag') }}</span>
            <h2 class="section-heading">{{ t('homePage.screenshots.title') }}</h2>
          </div>
          <div class="screenshots-grid">
            <div class="screenshot-item">
              <div class="screenshot-wrapper">
                <img 
                  src="/images/gallery-01.webp" 
                  alt="Quarantine Zone checkpoint inspection scene" 
                  class="screenshot-image"
                  loading="lazy"
                />
              </div>
            </div>
            <div class="screenshot-item">
              <div class="screenshot-wrapper">
                <img 
                  src="/images/gallery-02.webp" 
                  alt="Base management interface in Quarantine Zone" 
                  class="screenshot-image"
                  loading="lazy"
                />
              </div>
            </div>
            <div class="screenshot-item">
              <div class="screenshot-wrapper">
                <img 
                  src="/images/gallery-03.webp" 
                  alt="Night defense scene with turrets and infected" 
                  class="screenshot-image"
                  loading="lazy"
                />
              </div>
            </div>
            <div class="screenshot-item">
              <div class="screenshot-wrapper">
                <img 
                  src="/images/gallery-04.webp" 
                  alt="Decision-making dialogue in Quarantine Zone" 
                  class="screenshot-image"
                  loading="lazy"
                />
              </div>
            </div>
            <div class="screenshot-item">
              <div class="screenshot-wrapper">
                <img 
                  src="/images/gallery-05.webp" 
                  alt="Resource management screen showing supplies" 
                  class="screenshot-image"
                  loading="lazy"
                />
              </div>
            </div>
            <div class="screenshot-item">
              <div class="screenshot-wrapper">
                <img 
                  src="/images/gallery-06.webp" 
                  alt="Quarantine zone facility overview" 
                  class="screenshot-image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="faq-section">
        <div class="container">
          <div class="section-intro">
            <span class="section-tag">{{ t('homePage.faq.tag') }}</span>
            <h2 class="section-heading">{{ t('homePage.faq.title') }}</h2>
          </div>
          <div class="faq-container">
            <article class="faq-item">
              <h3>{{ t('homePage.faq.q1.q') }}</h3>
              <p>
                {{ t('homePage.faq.q1.a') }}
              </p>
            </article>
            <article class="faq-item">
              <h3>{{ t('homePage.faq.q2.q') }}</h3>
              <p>
                {{ t('homePage.faq.q2.a') }}
              </p>
            </article>
            <article class="faq-item">
              <h3>{{ t('homePage.faq.q3.q') }}</h3>
              <p>
                {{ t('homePage.faq.q3.a1') }} <a href="/guides" class="inline-link">{{ t('homePage.faq.q3.link1') }}</a> {{ t('homePage.faq.q3.a2') }} <a href="/guides/quarantine-zone-the-last-check-rookie-survival-manual" class="inline-link">{{ t('homePage.faq.q3.link2') }}</a> {{ t('homePage.faq.q3.a3') }}
              </p>
            </article>
            <article class="faq-item">
              <h3>{{ t('homePage.faq.q4.q') }}</h3>
              <p>
                {{ t('homePage.faq.q4.a') }}
              </p>
            </article>
            <article class="faq-item">
              <h3>{{ t('homePage.faq.q5.q') }}</h3>
              <p>
                {{ t('homePage.faq.q5.a1') }} <a href="/guides/campaign-guide-special-events-moral-choices" class="inline-link">{{ t('homePage.faq.q5.link1') }}</a> {{ t('homePage.faq.q5.a2') }}
              </p>
            </article>
            <article class="faq-item">
              <h3>{{ t('homePage.faq.q6.q') }}</h3>
              <p>
                {{ t('homePage.faq.q6.a1') }} <a href="/guides" class="inline-link">{{ t('homePage.faq.q6.link1') }}</a> {{ t('homePage.faq.q6.a2') }} <a href="/guides/quarantine-zone-the-last-check-combat-base-defense-guide" class="inline-link">{{ t('homePage.faq.q6.link2') }}</a> {{ t('homePage.faq.q6.a3') }}
              </p>
            </article>
            <article class="faq-item">
              <h3>{{ t('homePage.faq.q7.q') }}</h3>
              <p>
                {{ t('homePage.faq.q7.a') }}
              </p>
            </article>
            <article class="faq-item">
              <h3>{{ t('homePage.faq.q8.q') }}</h3>
              <p>
                {{ t('homePage.faq.q8.a') }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- Steam CTA Section -->
      <section class="steam-cta-section">
        <div class="container">
          <div class="steam-cta-content">
            <div class="steam-cta-text">
              <h2 class="steam-cta-title">{{ t('homePage.steam.title') }}</h2>
              <p class="steam-cta-description">
                {{ t('homePage.steam.description') }}
              </p>
            </div>
            <div class="steam-cta-button">
              <a href="https://store.steampowered.com/app/" class="btn-primary btn-steam" target="_blank" rel="noreferrer nofollow" >
                {{ t('homePage.steam.btn') }}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const isVideoPlaying = ref(false)

const playVideo = () => {
  isVideoPlaying.value = true
}

const closeVideo = () => {
  isVideoPlaying.value = false
}
</script>

<style scoped>
section {
  padding: 40px 0;
  position: relative;
  z-index: 1;
}

/* 统一的section蒙版背景 */
section::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, var(--grid-color) 1px, transparent 1px),
    linear-gradient(180deg, var(--grid-color) 1px, transparent 1px),
    linear-gradient(180deg, rgba(10, 15, 20, 0.75), rgba(20, 30, 40, 0.7));
  background-size:
    50px 50px,
    50px 50px,
    auto;
  z-index: 0;
  pointer-events: none;
}

/* Hero Section - 紧凑布局 */
.hero {
  padding: 40px 0;
  min-height: auto;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero-background-pattern {
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at 20% 30%, rgba(0, 168, 255, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(57, 255, 20, 0.1) 0%, transparent 50%);
  z-index: 1;
  pointer-events: none;
}

.hero-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  position: relative;
  z-index: 2;
}

.hero-main {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.hero-badge {
  display: inline-block;
  padding: 6px 16px;
  background: rgba(57, 255, 20, 0.15);
  border-left: 3px solid var(--accent);
  color: var(--accent);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  width: fit-content;
  box-shadow: 0 0 15px rgba(57, 255, 20, 0.3);
}

.hero-title {
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 900;
  line-height: 1.2;
  color: var(--text);
  text-transform: uppercase;
  letter-spacing: -0.5px;
  text-shadow: 
    0 0 20px var(--accent),
    0 0 40px var(--neon-glow),
    0 0 60px rgba(57, 255, 20, 0.6),
    3px 3px 0 var(--dark-green);
  margin: 0;
  animation: titleGlow 3s ease-in-out infinite;
}

@keyframes titleGlow {
  0%, 100% {
    text-shadow: 
      0 0 20px var(--accent),
      0 0 40px var(--neon-glow),
      0 0 60px rgba(57, 255, 20, 0.6),
      4px 4px 0 var(--dark-green);
  }
  50% {
    text-shadow: 
      0 0 30px var(--accent),
      0 0 60px var(--neon-glow),
      0 0 80px rgba(57, 255, 20, 0.8),
      4px 4px 0 var(--dark-green);
  }
}

.hero-description {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-muted);
  margin: 0;
}

.hero-cta {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 5px;
}

.btn-primary,
.btn-secondary {
  padding: 12px 28px;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  display: inline-block;
}

.btn-primary {
  background: linear-gradient(135deg, var(--accent), var(--accent-soft));
  color: #000;
  box-shadow: 0 4px 20px rgba(57, 255, 20, 0.5);
  font-weight: 700;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 30px rgba(57, 255, 20, 0.7);
}

.btn-secondary {
  background: transparent;
  border: 2px solid var(--accent);
  color: var(--text);
}

.btn-secondary:hover {
  background: rgba(57, 255, 20, 0.1);
  transform: translateY(-2px);
  box-shadow: 0 0 15px rgba(57, 255, 20, 0.4);
}

.hero-info {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  margin-top: 10px;
}

.hero-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 10px;
}

.stat-card {
  background: rgba(20, 30, 40, 0.8);
  border: 1px solid rgba(57, 255, 20, 0.25);
  border-radius: 10px;
  padding: 12px 16px;
  min-width: 220px;
  box-shadow: 0 0 20px rgba(57, 255, 20, 0.2);
}

.stat-value {
  display: block;
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--accent);
  text-shadow: 0 0 12px rgba(57, 255, 20, 0.6);
}

.stat-label {
  display: block;
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-top: 4px;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.info-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.info-value {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text);
  text-shadow: 0 0 10px rgba(57, 255, 20, 0.6);
}

/* Video Section */
.hero-video {
  position: relative;
  width: 100%;
}

.hero-video .video-player {
  background: rgba(20, 30, 40, 0.9);
  border: 2px solid var(--accent);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 
    0 0 30px rgba(57, 255, 20, 0.4),
    inset 0 0 30px rgba(57, 255, 20, 0.05);
}

.video-thumbnail {
  aspect-ratio: 16 / 9;
  position: relative;
  background: url('/images/video-bg.webp') no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.video-thumbnail::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(10, 15, 20, 0.6), rgba(20, 30, 40, 0.75));
  z-index: 1;
  pointer-events: none;
}

.video-mask {
  position: relative;
  z-index: 2;
  border: 1px solid rgba(57, 255, 20, 0.3);
  padding: 20px 30px;
  text-align: center;
  letter-spacing: 0.2em;
  color: rgba(232, 244, 248, 0.8);
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  backdrop-filter: blur(2px);
}

.play-button {
  position: absolute;
  z-index: 3;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: rgba(57, 255, 20, 0.9);
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 20px rgba(57, 255, 20, 0.6);
  border: 2px solid var(--accent);
}

.play-button:hover {
  transform: scale(1.1);
  box-shadow: 0 0 30px rgba(57, 255, 20, 0.8);
  background: rgba(57, 255, 20, 1);
}

.video-iframe {
  position: relative;
  aspect-ratio: 16 / 9;
}

.video-frame {
  width: 100%;
  height: 100%;
  border: none;
}

.close-video {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: rgba(0, 0, 0, 0.7);
  color: var(--text);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;
  border: 1px solid rgba(57, 255, 20, 0.3);
}

.close-video:hover {
  background: rgba(57, 255, 20, 0.2);
  color: var(--accent);
  box-shadow: 0 0 15px rgba(57, 255, 20, 0.5);
}

.video-description {
  margin-top: 20px;
}

.video-description h2 a {
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--text);
  margin-bottom: 20px;
  text-shadow: 
    0 0 15px var(--accent),
    0 0 30px var(--neon-glow),
    0 0 45px rgba(57, 255, 20, 0.5);
  line-height: 1.5;
  text-decoration: none;
}

.video-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  padding: 10px 20px;
  border: 2px solid var(--accent);
  border-radius: 4px;
  transition: all 0.3s ease;
  background: rgba(57, 255, 20, 0.1);
}

.video-link:hover {
  background: rgba(57, 255, 20, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 0 20px rgba(57, 255, 20, 0.4);
  text-shadow: 0 0 8px rgba(57, 255, 20, 0.6);
}

@media (max-width: 968px) {
  .hero-layout {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .hero-video {
    order: -1;
  }
  
  .hero-info {
    justify-content: center;
  }
}

.section-intro {
  text-align: center;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 1;
}

.section-tag {
  display: inline-block;
  padding: 5px 10px;
  background: rgba(57, 255, 20, 0.15);
  border-left: 3px solid var(--accent);
  color: var(--accent);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 10px;
  box-shadow: 0 0 15px rgba(57, 255, 20, 0.3);
}

.section-heading {
  font-size: clamp(28px, 5vw, 42px);
  font-weight: 800;
  color: var(--text);
  margin-bottom: 20px;
  text-shadow: 
    0 0 15px var(--accent),
    0 0 30px var(--neon-glow),
    0 0 45px rgba(57, 255, 20, 0.5);
  line-height: 1.2;
}

.section-lead {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.2;
}

.content-blocks {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 30px;
  position: relative;
  z-index: 1;
}

.content-block {
  background: rgba(20, 30, 40, 0.7);
  border: 1px solid var(--accent);
  border-radius: 16px;
  padding: 20px;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  box-shadow: 0 0 20px rgba(57, 255, 20, 0.2);
}

.content-block:hover {
  transform: translateY(-8px);
  box-shadow: 0 0 40px rgba(57, 255, 20, 0.4);
  border-color: var(--accent-soft);
}

.content-block::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--accent), var(--accent-blue));
}

.block-large {
  grid-column: span 8;
}

.content-block:not(.block-large):not(.block-features) {
  grid-column: span 4;
}

.block-features {
  grid-column: span 12;
  margin-top: 20px;
}

.block-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  padding-bottom: 18px;
  border-bottom: 1px solid rgba(57, 255, 20, 0.2);
}

.block-number {
  font-size: 48px;
  font-weight: 900;
  color: rgba(57, 255, 20, 0.2);
  line-height: 1;
  font-family: 'Arial Black', sans-serif;
}

.content-block h3 {
  font-size: 24px;
  font-weight: 700;
  color: var(--accent);
  margin: 0;
  text-shadow: 0 0 10px rgba(255, 26, 26, 0.5);
}

.block-body {
  color: var(--text-muted);
  line-height: 1.8;
}

.block-body p {
  margin: 0 0 16px 0;
}

.block-body p:last-child {
  margin-bottom: 0;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px;
  background: rgba(10, 15, 20, 0.5);
  border: 1px solid rgba(57, 255, 20, 0.2);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.feature-item:hover {
  border-color: var(--accent);
  background: rgba(20, 30, 40, 0.6);
  transform: translateX(8px);
  box-shadow: 0 0 20px rgba(57, 255, 20, 0.3);
}

.feature-icon {
  font-size: 32px;
  line-height: 1;
  filter: drop-shadow(0 0 10px var(--accent));
  flex-shrink: 0;
}

.feature-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.feature-text strong {
  color: var(--accent);
  font-size: 1rem;
  display: block;
  margin-bottom: 4px;
}

.feature-text span {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.5;
}

.mechanics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
  position: relative;
  z-index: 1;
}

.mechanic-card {
  background: rgba(20, 30, 40, 0.7);
  border: 1px solid var(--accent);
  border-radius: 16px;
  padding: 20px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 0 20px rgba(57, 255, 20, 0.2);
}

.mechanic-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 0 35px rgba(57, 255, 20, 0.4);
  border-color: var(--accent-soft);
}

.mechanic-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--accent), var(--accent-blue));
}

.mechanic-icon {
  font-size: 48px;
  line-height: 1;
  margin-bottom: 20px;
  filter: drop-shadow(0 0 15px var(--accent));
  display: block;
}

.mechanic-card h3 {
  font-size: 20px;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 15px;
  text-shadow: 0 0 10px rgba(57, 255, 20, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.mechanic-card > p {
  color: var(--text-muted);
  line-height: 1.5;
  margin-bottom: 20px;
  font-size: 14px;
}

.mechanic-list {
  list-style: none;
  padding: 0;
  margin-bottom: 10px;
}

.mechanic-list li {
  color: var(--text);
  padding: 5px 0;
  padding-left: 24px;
  position: relative;
  font-size: 14px;
  line-height: 1.6;
}

.mechanic-list li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-weight: 700;
}

.mechanic-tools {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tool-tag {
  padding: 5px 10px;
  background: rgba(57, 255, 20, 0.15);
  border: 1px solid rgba(57, 255, 20, 0.3);
  border-radius: 4px;
  font-size: 12px;
  color: var(--accent);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}


.requirements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  position: relative;
  z-index: 1;
}

.requirement-card {
  background: rgba(20, 30, 40, 0.7);
  border: 1px solid var(--accent);
  border-radius: 16px;
  padding: 0;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 0 20px rgba(57, 255, 20, 0.2);
}

.requirement-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 0 35px rgba(57, 255, 20, 0.4);
  border-color: var(--accent-soft);
}

.requirement-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--accent), var(--accent-blue));
}

.requirement-card.requirement-recommended {
  border-color: var(--accent-blue);
}

.requirement-card.requirement-recommended::before {
  background: linear-gradient(90deg, var(--accent-blue), var(--accent));
}

.requirement-header {
  padding: 20px;
  border-bottom: 1px solid rgba(57, 255, 20, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.requirement-header h3 {
  font-size: 20px;
  font-weight: 700;
  color: var(--text);
  text-shadow: 0 0 10px rgba(57, 255, 20, 0.6);
}

.requirement-badge {
  padding: 6px 14px;
  background: rgba(57, 255, 20, 0.15);
  border: 1px solid var(--accent);
  border-radius: 4px;
  font-size: 0.75rem;
  color: var(--accent);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.requirement-badge.recommended {
  background: rgba(0, 168, 255, 0.15);
  border-color: var(--accent-blue);
  color: var(--accent-blue);
}

.requirement-body {
  padding: 5px 20px;
}

.requirement-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid rgba(57, 255, 20, 0.1);
}

.requirement-item:last-child {
  border-bottom: none;
}

.req-label {
  font-size: 14px;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
}

.req-value {
  font-size: 14px;
  color: var(--text);
  font-weight: 600;
  text-align: right;
  text-shadow: 0 0 8px rgba(57, 255, 20, 0.4);
}

.requirements-note {
  margin-top: 20px;
  padding: 20px;
  background: rgba(20, 30, 40, 0.5);
  border: 1px solid rgba(57, 255, 20, 0.2);
  border-radius: 12px;
  text-align: center;
  position: relative;
  z-index: 1;
}

.requirements-note p {
  margin: 5px 0;
  color: var(--text-muted);
  font-size: 0.95rem;
}

.requirements-note strong {
  color: var(--accent);
  font-weight: 700;
}

/* Reviews Section */
.reviews-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  position: relative;
  z-index: 1;
}

.review-card {
  background: rgba(20, 30, 40, 0.7);
  border: 1px solid var(--accent);
  border-radius: 16px;
  padding: 20px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 0 20px rgba(57, 255, 20, 0.2);
}

.review-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 0 35px rgba(57, 255, 20, 0.4);
  border-color: var(--accent-soft);
}

.review-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--accent), var(--accent-blue));
}

.reviewer {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(57, 255, 20, 0.2);
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(57, 255, 20, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: var(--accent);
  border: 2px solid var(--accent);
  box-shadow: 0 0 15px rgba(57, 255, 20, 0.4);
  font-size: 20px;
}

.reviewer h4 {
  font-size: 18px;
  color: var(--text);
  margin-bottom: 4px;
  font-weight: 700;
}

.reviewer p {
  color: #ffd700;
  font-size: 14px;
  margin: 0;
  text-shadow: 0 0 8px rgba(255, 215, 0, 0.5);
}

.review-card > p {
  color: var(--text-muted);
  line-height: 1.7;
  margin: 0;
  font-size: 0.95rem;
}

/* FAQ Section */
.faq-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  position: relative;
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
}

.faq-item {
  background: rgba(20, 30, 40, 0.7);
  border: 1px solid var(--accent);
  border-radius: 12px;
  padding: 28px;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px rgba(57, 255, 20, 0.15);
}

.faq-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 0 30px rgba(57, 255, 20, 0.3);
  border-color: var(--accent-soft);
}

.faq-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, var(--accent), var(--accent-blue));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.faq-item:hover::before {
  opacity: 1;
}

.faq-item h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--accent);
  margin: 0 0 12px 0;
  padding-left: 16px;
  position: relative;
  text-shadow: 0 0 8px rgba(57, 255, 20, 0.6);
}

.faq-item h3::before {
  content: 'Q:';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-size: 0.9rem;
  text-shadow: 0 0 10px var(--accent);
}

.faq-item p {
  color: var(--text-muted);
  line-height: 1.7;
  margin: 0;
  padding-left: 16px;
  font-size: 0.95rem;
}

/* Screenshots Section */
.screenshots-section {
  position: relative;
  z-index: 1;
}

.screenshots-section::before {
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

.screenshots-section .section-tag {
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

.screenshots-section .section-heading {
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

.screenshots-section .section-lead {
  font-size: 1.1rem;
  color: var(--text-muted);
  line-height: 1.7;
  margin: 0;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.screenshots-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  position: relative;
  z-index: 1;
}

.screenshot-item {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  aspect-ratio: 16 / 9;
  background: rgba(20, 30, 40, 0.7);
  border: 1px solid rgba(57, 255, 20, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;
}

.screenshot-item:hover {
  transform: translateY(-8px);
  border-color: rgba(57, 255, 20, 0.4);
  box-shadow: 0 15px 35px rgba(57, 255, 20, 0.2);
}

.screenshot-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.screenshot-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.screenshot-item:hover .screenshot-image {
  transform: scale(1.1);
}

/* 响应式设计 - 1024px */
@media (max-width: 1024px) {
  .hero-layout {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .content-blocks {
    grid-template-columns: 1fr;
  }

  .block-large,
  .content-block:not(.block-large):not(.block-features),
  .block-features {
    grid-column: span 1;
  }

  .mechanics-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  .requirements-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .reviews-container {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .screenshots-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

/* 响应式设计 - 768px */
@media (max-width: 768px) {
  section {
    padding: 40px 0;
  }

  .hero {
    min-height: auto;
    padding: 40px 0;
  }

  .hero-layout {
    gap: 32px;
  }

  .hero-badge {
    font-size: 0.65rem;
    padding: 5px 14px;
  }

  .hero-title {
    font-size: clamp(28px, 6vw, 42px);
    margin-bottom: 16px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .hero-description {
    font-size: 0.95rem;
    margin-bottom: 20px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .hero-cta {
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }

  .hero-info {
    gap: 16px;
    justify-content: center;
  }

  .hero-stats {
    gap: 12px;
    justify-content: center;
  }

  .stat-card {
    min-width: 180px;
    padding: 12px 14px;
    text-align: center;
  }

  .stat-value {
    font-size: 1.2rem;
  }

  .stat-label {
    font-size: 0.85rem;
  }

  .info-label {
    font-size: 0.7rem;
  }

  .info-value {
    font-size: 0.85rem;
  }

  .section-intro {
    margin-bottom: 40px;
  }

  .section-tag {
    font-size: 0.7rem;
    padding: 5px 14px;
  }

  .section-heading {
    font-size: clamp(24px, 5vw, 32px);
    margin-bottom: 16px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .section-lead {
    font-size: 1rem;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .content-block {
    padding: 24px;
  }

  .block-header {
    margin-bottom: 16px;
  }

  .block-number {
    font-size: 32px;
  }

  .content-block h3 {
    font-size: 18px;
    margin-bottom: 12px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .content-block p {
    font-size: 0.9rem;
    margin-bottom: 12px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .feature-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .feature-item {
    padding: 16px;
  }

  .feature-icon {
    font-size: 28px;
  }

  .feature-text strong {
    font-size: 0.95rem;
  }

  .feature-text span {
    font-size: 0.85rem;
  }

  .mechanics-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .mechanic-card {
    padding: 24px;
  }

  .mechanic-icon {
    font-size: 40px;
    margin-bottom: 16px;
  }

  .mechanic-card h3 {
    font-size: 1.25rem;
    margin-bottom: 12px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .mechanic-card > p {
    font-size: 0.9rem;
    margin-bottom: 20px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .mechanic-list li {
    font-size: 0.85rem;
    padding: 8px 0;
    padding-left: 20px;
  }

  .tool-tag {
    font-size: 0.75rem;
    padding: 5px 12px;
  }

  .requirements-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .requirement-card {
    padding: 0;
  }

  .requirement-header {
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .requirement-header h3 {
    font-size: 1.25rem;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .requirement-badge {
    font-size: 0.7rem;
    padding: 5px 12px;
  }

  .requirement-body {
    padding: 24px;
  }

  .requirement-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    padding: 12px 0;
  }

  .req-label {
    font-size: 0.85rem;
  }

  .req-value {
    font-size: 0.9rem;
    text-align: left;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .requirements-note {
    padding: 20px;
    margin-top: 30px;
  }

  .requirements-note p {
    font-size: 0.85rem;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .reviews-container {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 40px;
  }

  .review-card {
    padding: 20px;
  }

  .reviewer {
    gap: 12px;
    margin-bottom: 16px;
    padding-bottom: 12px;
  }

  .avatar {
    width: 40px;
    height: 40px;
    font-size: 18px;
  }

  .reviewer h4 {
    font-size: 1rem;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .reviewer p {
    font-size: 0.85rem;
  }

  .review-card > p {
    font-size: 0.9rem;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .faq-container {
    grid-template-columns: 1fr;
    gap: 16px;
    margin-top: 40px;
  }

  .faq-item {
    padding: 20px;
  }

  .faq-item h3 {
    font-size: 1rem;
    margin-bottom: 12px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .faq-item p {
    font-size: 0.9rem;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .btn-primary,
  .btn-secondary {
    padding: 10px 20px;
    font-size: 0.85rem;
  }

  .video-player {
    border-radius: 8px;
  }

  .video-thumbnail {
    min-height: 200px;
  }

  .video-mask {
    padding: 16px 20px;
    font-size: 0.75rem;
  }

  .play-button {
    width: 60px;
    height: 60px;
    font-size: 1.2rem;
  }

  .close-video {
    width: 32px;
    height: 32px;
    font-size: 1rem;
  }

  .screenshots-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .steam-cta-content {
    flex-direction: column;
    text-align: center;
    gap: 30px;
  }

  .steam-cta-title {
    font-size: clamp(24px, 5vw, 32px);
  }

  .steam-cta-description {
    font-size: 1rem;
  }

  .btn-steam {
    width: 100%;
    padding: 14px 32px;
  }
}

/* Steam CTA Section */
.steam-cta-section {
  padding: 60px 0;
  background: 
    radial-gradient(circle at 50% 50%, rgba(0, 168, 255, 0.1) 0%, transparent 70%),
    linear-gradient(180deg, rgba(10, 15, 20, 0.9), rgba(20, 30, 40, 0.85));
  border-top: 2px solid var(--accent);
  border-bottom: 2px solid var(--accent);
  position: relative;
  z-index: 1;
}

.steam-cta-section::before {
  background: none;
}

.steam-cta-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.steam-cta-text {
  flex: 1;
}

.steam-cta-title {
  font-size: clamp(28px, 4vw, 42px);
  font-weight: 800;
  color: var(--text);
  margin: 0 0 16px 0;
  text-shadow: 
    0 0 15px var(--accent),
    0 0 30px var(--neon-glow),
    0 0 45px rgba(57, 255, 20, 0.5);
  line-height: 1.3;
}

.steam-cta-description {
  font-size: 1.1rem;
  color: var(--text-muted);
  line-height: 1.7;
  margin: 0;
}

.steam-cta-button {
  flex-shrink: 0;
}

  .btn-steam {
    padding: 16px 40px;
    font-size: 1.1rem;
    white-space: nowrap;
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
</style>
 