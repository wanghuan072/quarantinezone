<template>
  <div class="legal-view">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <div class="header-content">
          <h1 class="page-title">Contact Us</h1>
          <p class="page-subtitle">Get in touch with us</p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="legal-content">
      <div class="container">
        <div class="content-wrapper">
          <div class="legal-text">
            <p>
              We'd love to hear from you! Whether you have questions, suggestions, feedback, or just want to say hello, please don't hesitate to reach out to us.
            </p>

            <h2>Email</h2>
            <p>
              For general inquiries, feedback, or questions, please contact us at:
            </p>
            <p style="font-size: 1.1rem; color: var(--accent);">
              <strong>wyong@quarantinezonegames.com</strong>
            </p>

            <h2>Response Time</h2>
            <p>
              We strive to respond to all inquiries within 48 hours. Please note that during peak times, response times may be slightly longer.
            </p>

            <h2>What to Include</h2>
            <p>
              When contacting us, please include:
            </p>
            <ul>
              <li>Your name or username</li>
              <li>A clear subject line</li>
              <li>A detailed description of your inquiry or feedback</li>
              <li>Any relevant information that might help us assist you</li>
            </ul>

            <h2>Feedback and Suggestions</h2>
            <p>
              We welcome your feedback and suggestions! Your input helps us improve our website and content. If you have ideas for new guides, features, or improvements, we'd love to hear them.
            </p>

            <h2>Reporting Issues</h2>
            <p>
              If you encounter any technical issues or errors on our website, please let us know. Include details about the problem, your browser and device information, and any error messages you may have seen.
            </p>

            <h2>Content Corrections</h2>
            <p>
              If you notice any inaccuracies in our content, please contact us with the correct information. We appreciate your help in keeping our content accurate and up-to-date.
            </p>

            <h2>Partnership Inquiries</h2>
            <p>
              For partnership or collaboration inquiries, please contact us at wyong@quarantinezonegames.com with details about your proposal.
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
    title: 'Contact Us | Quarantine Zone Guide',
    description: 'Contact Quarantine Zone Guide. Get in touch with us for questions, feedback, or inquiries.',
    keywords: 'contact us, get in touch, feedback, inquiries, Quarantine Zone Guide'
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

