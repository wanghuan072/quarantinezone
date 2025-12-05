<template>
  <div class="legal-view">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <div class="header-content">
          <h1 class="page-title">Copyright</h1>
          <p class="page-subtitle">Last updated: December 5, 2025</p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="legal-content">
      <div class="container">
        <div class="content-wrapper">
          <div class="legal-text">
            <p>
              © 2025 Quarantine Zone Guide. All rights reserved.
            </p>

            <h2>Copyright Notice</h2>
            <p>
              All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Quarantine Zone Guide and is protected by international copyright laws.
            </p>

            <h2>Fair Use</h2>
            <p>
              This website is an independent fan site created for informational and educational purposes only. We use content related to "Quarantine Zone: The Last Check" under the principles of fair use for commentary, criticism, and educational purposes.
            </p>

            <h2>Trademark Notice</h2>
            <p>
              "Quarantine Zone: The Last Check" and all related trademarks, service marks, and trade names are the property of their respective owners. This website is not affiliated with, endorsed by, or sponsored by the game developers or publishers.
            </p>
            <p>
              All trademarks and copyrights belong to their respective owners. We do not claim ownership of any game-related intellectual property.
            </p>

            <h2>Content Usage</h2>
            <p>
              You may not reproduce, distribute, modify, or create derivative works from any content on this website without our express written permission. This includes but is not limited to copying text, images, or other materials for commercial purposes.
            </p>

            <h2>User-Generated Content</h2>
            <p>
              If you submit content to our website, you retain ownership of that content but grant us a license to use, modify, and display it on our website. You represent that you have the right to grant such a license.
            </p>

            <h2>DMCA Policy</h2>
            <p>
              If you believe that any content on our website infringes your copyright, please contact us at wyong@quarantinezonegames.com with the following information:
            </p>
            <ul>
              <li>A description of the copyrighted work you claim has been infringed</li>
              <li>The location of the allegedly infringing material on our website</li>
              <li>Your contact information</li>
              <li>A statement that you have a good faith belief that the use is not authorized</li>
              <li>A statement that the information in your notice is accurate</li>
            </ul>

            <h2>Contact Information</h2>
            <p>
              For copyright-related inquiries, please contact us at wyong@quarantinezonegames.com.
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
    title: 'Copyright | Quarantine Zone Guide',
    description: 'Copyright information for Quarantine Zone Guide. Learn about our copyright policies and intellectual property rights.',
    keywords: 'copyright, intellectual property, DMCA, fair use, Quarantine Zone Guide'
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

