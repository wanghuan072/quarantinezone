<template>
  <div class="symptoms-view">
    <!-- Page Header -->
    <section class="symptoms-header">
      <div class="container">
        <div class="header-content">
          <h1 class="page-title">{{ t('symptomsPage.header.title') }}</h1>
          <p class="page-subtitle">
            {{ t('symptomsPage.header.subtitle1') }}
          </p>
          <p class="page-subtitle">
            {{ t('symptomsPage.header.subtitle2') }} <a href="/guides/Quarantine-Zone-The-Last-Check-All-Symptoms-Guide" style="color: #39ff14; text-decoration: none; border-bottom: 1px solid rgba(57, 255, 20, 0.3);">{{ t('symptomsPage.header.guideLink') }}</a>{{ t('symptomsPage.header.subtitle2End') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="symptoms-content">
      <div class="container">
        <div class="content-wrapper">
          <!-- Introduction -->
          <div class="intro-section">
            <div class="info-box">
              <p class="info-text">
                <strong>{{ t('symptomsPage.intro.tip') }}</strong> {{ t('symptomsPage.intro.tipText') }}
              </p>
            </div>
            <p class="lead-text">
              {{ t('symptomsPage.intro.lead') }} <a href="/guides/quarantine-zone-the-last-check-rookie-survival-manual" style="color: #39ff14; text-decoration: none; border-bottom: 1px solid rgba(57, 255, 20, 0.3);">{{ t('symptomsPage.intro.rookieLink') }}</a>{{ t('symptomsPage.intro.leadEnd') }}
            </p>
          </div>

          <!-- Safe Symptoms -->
          <section class="symptom-category">
            <div class="category-header">
              <h2 class="category-title">{{ t('symptomsPage.safeSymptoms.title') }}</h2>
              <div class="section-divider"></div>
            </div>
            <img src="/images/wiki/list/wiki-01-01.webp" :alt="t('symptomsPage.safeSymptoms.title')" class="symptom-image" />
            <p class="category-description">
              {{ t('symptomsPage.safeSymptoms.description1') }} <a href="/guides/Quarantine-Zone-The-Last-Check-All-Symptoms-Guide" style="color: #39ff14; text-decoration: none; border-bottom: 1px solid rgba(57, 255, 20, 0.3);">{{ t('symptomsPage.safeSymptoms.guideLink') }}</a>{{ t('symptomsPage.safeSymptoms.description1End') }}
            </p>
            <div class="symptoms-table-container">
              <table class="symptoms-table">
                <thead>
                  <tr>
                    <th>{{ t('symptomsPage.safeSymptoms.table.header.symptom') }}</th>
                    <th>{{ t('symptomsPage.safeSymptoms.table.header.typeTool') }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(row, index) in tm('symptomsPage.safeSymptoms.table.rows')" :key="index">
                    <td>{{ row.symptom }}</td>
                    <td>{{ row.typeTool }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <!-- Quarantine Symptoms -->
          <section class="symptom-category">
            <div class="category-header">
              <h2 class="category-title">{{ t('symptomsPage.quarantineSymptoms.title') }}</h2>
              <div class="section-divider"></div>
            </div>
            <img src="/images/wiki/list/wiki-01-02.webp" :alt="t('symptomsPage.quarantineSymptoms.title')" class="symptom-image" />
            <p class="category-description">
              {{ t('symptomsPage.quarantineSymptoms.description1') }}
            </p>
            <p class="category-description">
              {{ t('symptomsPage.quarantineSymptoms.description2') }} <a href="/guides/Quarantine-Zone-The-Last-Check-All-Symptoms-Guide" style="color: #39ff14; text-decoration: none; border-bottom: 1px solid rgba(57, 255, 20, 0.3);">{{ t('symptomsPage.quarantineSymptoms.guideLink') }}</a>{{ t('symptomsPage.quarantineSymptoms.description2End') }}
            </p>
            <div class="symptoms-table-container">
              <table class="symptoms-table">
                <thead>
                  <tr>
                    <th>{{ t('symptomsPage.quarantineSymptoms.table.header.symptom') }}</th>
                    <th>{{ t('symptomsPage.quarantineSymptoms.table.header.typeTool') }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(row, index) in tm('symptomsPage.quarantineSymptoms.table.rows')" :key="index">
                    <td>{{ row.symptom }}</td>
                    <td>{{ row.typeTool }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <!-- Infection Symptoms -->
          <section class="symptom-category">
            <div class="category-header">
              <h2 class="category-title">{{ t('symptomsPage.infectionSymptoms.title') }}</h2>
              <div class="section-divider"></div>
            </div>
            <img src="/images/wiki/list/wiki-01-03.webp" :alt="t('symptomsPage.infectionSymptoms.title')" class="symptom-image" />
            <p class="category-description">
              {{ t('symptomsPage.infectionSymptoms.description1') }} <a href="/guides/Quarantine-Zone-The-Last-Check-All-Symptoms-Guide" style="color: #39ff14; text-decoration: none; border-bottom: 1px solid rgba(57, 255, 20, 0.3);">{{ t('symptomsPage.infectionSymptoms.guideLink') }}</a>{{ t('symptomsPage.infectionSymptoms.description1End') }}
            </p>
            <div class="symptoms-table-container">
              <table class="symptoms-table">
                <thead>
                  <tr>
                    <th>{{ t('symptomsPage.infectionSymptoms.table.header.symptom') }}</th>
                    <th>{{ t('symptomsPage.infectionSymptoms.table.header.typeTool') }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(row, index) in tm('symptomsPage.infectionSymptoms.table.rows')" :key="index">
                    <td>{{ row.symptom }}</td>
                    <td>{{ row.typeTool }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<style scoped>
.symptoms-view {
  min-height: 100vh;
  background: var(--bg-primary);
  color: var(--text);
}

/* Header */
.symptoms-header {
  background: linear-gradient(135deg, rgba(10, 15, 20, 0.95) 0%, rgba(5, 10, 15, 0.98) 100%);
  border-bottom: 2px solid rgba(57, 255, 20, 0.3);
  padding: 80px 0 60px;
  position: relative;
  overflow: hidden;
}

.symptoms-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/images/bg.webp') center/cover;
  opacity: 0.1;
  z-index: 0;
}

.symptoms-header .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
}

.header-content {
  text-align: center;
}

.page-title {
  font-size: 42px;
  font-weight: 800;
  color: var(--accent);
  margin: 0 0 24px 0;
  text-shadow: 0 0 20px rgba(57, 255, 20, 0.6);
  line-height: 1.2;
}

.page-subtitle {
  font-size: 16px;
  color: var(--text-muted);
  line-height: 1.8;
  max-width: 900px;
  margin: 0 auto 20px;
}

.page-subtitle:last-child {
  margin-bottom: 0;
}

/* Content */
.symptoms-content {
  padding: 60px 0;
}

.symptoms-content .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

/* Intro Section */
.intro-section {
  margin-bottom: 24px;
}

.info-box {
  background: rgba(57, 255, 20, 0.1);
  border: 1px solid rgba(57, 255, 20, 0.3);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
}

.info-text {
  margin: 0;
  color: var(--text);
  font-size: 14px;
  line-height: 1.6;
}

.info-text strong {
  color: var(--accent);
  font-weight: 700;
}

.lead-text {
  font-size: 16px;
  color: var(--text-muted);
  line-height: 1.8;
  margin: 0;
}

/* Symptom Category */
.symptom-category {
  background: rgba(10, 15, 20, 0.5);
  border: 1px solid rgba(57, 255, 20, 0.2);
  border-radius: 12px;
  padding: 32px;
}

.symptom-category img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 20px;
}

.category-header {
  margin-bottom: 20px;
}

.category-title {
  font-size: 28px;
  font-weight: 700;
  color: var(--accent);
  margin: 0 0 16px 0;
  text-shadow: 0 0 10px rgba(57, 255, 20, 0.6);
}

.section-divider {
  height: 2px;
  background: linear-gradient(90deg, var(--accent) 0%, transparent 100%);
  margin: 0;
}

.category-description {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.8;
  margin: 0 0 24px 0;
}

.category-description:last-of-type {
  margin-bottom: 24px;
}

/* Symptoms Table */
.symptoms-table-container {
  overflow-x: auto;
  margin-top: 24px;
  border: 1px solid rgba(57, 255, 20, 0.2);
  border-radius: 12px;
  background: rgba(5, 10, 15, 0.5);
}

.symptoms-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 500px;
}

.symptoms-table thead {
  background: rgba(57, 255, 20, 0.1);
}

.symptoms-table th {
  padding: 16px 20px;
  text-align: left;
  color: var(--accent);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 13px;
  border-bottom: 2px solid rgba(57, 255, 20, 0.3);
  position: sticky;
  top: 0;
  z-index: 2;
}

.symptoms-table td {
  padding: 14px 20px;
  color: var(--text-muted);
  font-size: 14px;
  border-bottom: 1px solid rgba(57, 255, 20, 0.1);
  line-height: 1.6;
}

.symptoms-table tbody tr:hover {
  background: rgba(57, 255, 20, 0.05);
  color: var(--text);
}

.symptoms-table tbody tr:last-child td {
  border-bottom: none;
}

.symptoms-table td:first-child {
  font-weight: 500;
  color: var(--text);
}

.symptoms-table td:last-child {
  color: var(--accent);
  font-weight: 500;
}

/* Responsive Design */
@media (max-width: 768px) {
  .page-title {
    font-size: 32px;
  }

  .page-subtitle {
    font-size: 14px;
  }

  .symptom-category {
    padding: 24px 16px;
  }

  .category-title {
    font-size: 24px;
  }

  .symptoms-table {
    min-width: 400px;
  }

  .symptoms-table th,
  .symptoms-table td {
    padding: 12px 16px;
    font-size: 13px;
  }
}
</style>

