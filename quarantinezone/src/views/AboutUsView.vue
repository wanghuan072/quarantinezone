<template>
  <div class="legal-view">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <div class="header-content">
          <h1 class="page-title">About Us</h1>
          <p class="page-subtitle">Learn more about Quarantine Zone Guide</p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="legal-content">
      <div class="container">
        <div class="content-wrapper">
          <div class="legal-text">
            <p>
              Welcome to Quarantine Zone Guide, your comprehensive resource for everything related to Quarantine Zone: The Last Check.
            </p>

            <h2>Our Mission</h2>
            <p>
              Our mission is to provide players with the most complete and up-to-date information about Quarantine Zone: The Last Check. We strive to create a community hub where players can find guides, strategies, news, and resources to enhance their gaming experience.
            </p>

            <h2>What We Offer</h2>
            <p>
              Quarantine Zone Guide offers a wide range of content including detailed game guides, comprehensive wiki information, latest news and updates, and recommendations for similar games. Our content is regularly updated to ensure accuracy and relevance.
            </p>

            <h2>Our Team</h2>
            <p>
              We are a team of passionate gamers and content creators dedicated to providing high-quality resources for the Quarantine Zone: The Last Check community. Our team works tirelessly to gather, verify, and present information in an accessible and useful format.
            </p>

            <h2>Independence</h2>
            <p>
              This is an independent fan site created for informational purposes only. We are not affiliated with, endorsed by, or sponsored by the developers or publishers of Quarantine Zone: The Last Check. All trademarks and copyrights belong to their respective owners.
            </p>

            <h2>Community</h2>
            <p>
              We value our community and are committed to providing a helpful and informative resource for all players. Your feedback and suggestions help us improve our content and services.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions, suggestions, or feedback, please feel free to contact us at wyong@quarantinezonegames.com. We'd love to hear from you!
            </p>

            <p style="margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(57, 255, 20, 0.2);">
              <strong>Last updated: December 5, 2025</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useSEO } from '../seo/composables.js'

const { setSEO } = useSEO()

onMounted(() => {
  setSEO({
    title: 'About Us | Quarantine Zone Guide',
    description: 'Learn more about Quarantine Zone Guide, your comprehensive resource for Quarantine Zone: The Last Check.',
    keywords: 'about us, Quarantine Zone Guide, game community, fan site'
  })
})
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

