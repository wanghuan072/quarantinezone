<template>
  <div class="legal-view">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <div class="header-content">
          <h1 class="page-title">Terms of Service</h1>
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
              Welcome to Quarantine Zone Guide. By accessing and using this website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website.
            </p>

            <h2>Use of Website</h2>
            <p>
              You may use our website for personal, non-commercial purposes. You agree not to use the website in any way that violates any applicable laws or regulations, or that could damage, disable, or impair the website.
            </p>

            <h2>Content and Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and images, is the property of Quarantine Zone Guide or its content suppliers and is protected by copyright and other intellectual property laws.
            </p>
            <p>
              This is an independent fan site created for informational purposes only. All trademarks and copyrights related to "Quarantine Zone: The Last Check" belong to their respective owners.
            </p>

            <h2>User Conduct</h2>
            <p>
              You agree not to engage in any activity that interferes with or disrupts the website or servers and networks connected to the website. You also agree not to attempt to gain unauthorized access to any portion of the website.
            </p>

            <h2>Disclaimer of Warranties</h2>
            <p>
              The information on this website is provided on an "as is" basis. We make no warranties, expressed or implied, regarding the accuracy, completeness, or reliability of the information provided.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              Quarantine Zone Guide shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of this website.
            </p>

            <h2>Links to Third-Party Websites</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of these third-party sites.
            </p>

            <h2>Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Your continued use of the website after any changes constitutes your acceptance of the new terms.
            </p>

            <h2>Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at wyong@quarantinezonegames.com.
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
    title: 'Terms of Service | Quarantine Zone Guide',
    description: 'Terms of Service for Quarantine Zone Guide. Read our terms and conditions for using our website.',
    keywords: 'terms of service, terms and conditions, user agreement, Quarantine Zone Guide'
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

