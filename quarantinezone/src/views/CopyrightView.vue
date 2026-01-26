<template>
  <div class="legal-view">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <div class="header-content">
          <h1 class="page-title">{{ t('copyrightPage.header.title') }}</h1>
          <p class="page-subtitle">{{ t('copyrightPage.header.lastUpdated') }}</p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="legal-content">
      <div class="container">
        <div class="content-wrapper">
          <div class="legal-text">
            <p>
              {{ t('copyrightPage.content.intro') }}
            </p>

            <h2>{{ t('copyrightPage.content.section1.title') }}</h2>
            <p>
              {{ t('copyrightPage.content.section1.text') }}
            </p>

            <h2>{{ t('copyrightPage.content.section2.title') }}</h2>
            <p>
              {{ t('copyrightPage.content.section2.text') }}
            </p>

            <h2>{{ t('copyrightPage.content.section3.title') }}</h2>
            <p>
              {{ t('copyrightPage.content.section3.p1') }}
            </p>
            <p>
              {{ t('copyrightPage.content.section3.p2') }}
            </p>

            <h2>{{ t('copyrightPage.content.section4.title') }}</h2>
            <p>
              {{ t('copyrightPage.content.section4.text') }}
            </p>

            <h2>{{ t('copyrightPage.content.section5.title') }}</h2>
            <p>
              {{ t('copyrightPage.content.section5.text') }}
            </p>

            <h2>{{ t('copyrightPage.content.section6.title') }}</h2>
            <p>
              {{ t('copyrightPage.content.section6.text') }}
            </p>
            <ul>
              <li>{{ t('copyrightPage.content.section6.list1') }}</li>
              <li>{{ t('copyrightPage.content.section6.list2') }}</li>
              <li>{{ t('copyrightPage.content.section6.list3') }}</li>
              <li>{{ t('copyrightPage.content.section6.list4') }}</li>
              <li>{{ t('copyrightPage.content.section6.list5') }}</li>
            </ul>

            <h2>{{ t('copyrightPage.content.section7.title') }}</h2>
            <p>
              {{ t('copyrightPage.content.section7.text') }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
// SEO is handled automatically by useAutoSEO from i18n tdk configuration
</script>

<style scoped>
.legal-view {
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

.legal-content {
  padding: 40px 0 80px;
  position: relative;
  z-index: 1;
}

.legal-content::before {
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

.content-wrapper {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.legal-text {
  background: rgba(20, 30, 40, 0.7);
  border: 1px solid var(--accent);
  border-radius: 16px;
  padding: 40px;
  backdrop-filter: blur(10px);
  line-height: 1.8;
}

.legal-text h2 {
  font-size: clamp(24px, 3vw, 32px);
  font-weight: 700;
  color: var(--accent);
  margin: 40px 0 20px 0;
  text-shadow: 0 0 10px rgba(57, 255, 20, 0.6);
}

.legal-text h2:first-of-type {
  margin-top: 0;
}

.legal-text p {
  color: var(--text);
  margin-bottom: 20px;
  font-size: 1rem;
}

.legal-text p:last-child {
  margin-bottom: 0;
}

.legal-text ul {
  color: var(--text);
  margin: 20px 0;
  padding-left: 24px;
}

.legal-text li {
  margin-bottom: 12px;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .legal-text {
    padding: 24px;
  }

  .page-header {
    padding: 60px 0 30px;
  }

  .legal-content {
    padding: 30px 0 60px;
  }
}
</style>

