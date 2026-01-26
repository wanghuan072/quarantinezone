<template>
  <div class="wiki-view">
    <!-- Page Header -->
    <section class="wiki-header">
      <div class="container">
        <div class="header-content">
          <h1 class="page-title">{{ t('wikiPage.header.title') }}</h1>
          <p class="page-subtitle">
            {{ t('wikiPage.header.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="wiki-content">
      <div class="container">
        <div class="content-layout">
          <!-- Sidebar Table of Contents -->
          <aside class="wiki-sidebar">
            <div class="toc-section">
              <div class="toc-header">
                <h2 class="toc-title">{{ t('wikiPage.toc.title') }}</h2>
                <div class="section-divider"></div>
              </div>
              <nav class="toc-nav">
                <ul class="toc-list">
                  <li>
                    <a @click.prevent="scrollToSection('tools')" class="toc-link">{{ t('wikiPage.toc.tools') }}</a>
                    <ul class="toc-sublist">
                      <li><a @click.prevent="scrollToSection('tool-thermopulsometer')" class="toc-sublink">{{ t('wikiPage.toc.toolThermopulsometer') }}</a></li>
                      <li><a @click.prevent="scrollToSection('tool-reflex-hammer')" class="toc-sublink">{{ t('wikiPage.toc.toolReflexHammer') }}</a></li>
                      <li><a @click.prevent="scrollToSection('tool-scanner')" class="toc-sublink">{{ t('wikiPage.toc.toolScanner') }}</a></li>
                      <li><a @click.prevent="scrollToSection('tool-stethoscope')" class="toc-sublink">{{ t('wikiPage.toc.toolStethoscope') }}</a></li>
                      <li><a @click.prevent="scrollToSection('tool-syringe')" class="toc-sublink">{{ t('wikiPage.toc.toolSyringe') }}</a></li>
                      <li><a @click.prevent="scrollToSection('tool-gun')" class="toc-sublink">{{ t('wikiPage.toc.toolGun') }}</a></li>
                      <li><a @click.prevent="scrollToSection('tool-xray')" class="toc-sublink">{{ t('wikiPage.toc.toolXray') }}</a></li>
                      <li><a @click.prevent="scrollToSection('tool-matioscope')" class="toc-sublink">{{ t('wikiPage.toc.toolMatioscope') }}</a></li>
                    </ul>
                  </li>
                  <li><a @click.prevent="scrollToSection('resources')" class="toc-link">{{ t('wikiPage.toc.resources') }}</a></li>
                  <li><a @click.prevent="scrollToSection('decisions')" class="toc-link">{{ t('wikiPage.toc.decisions') }}</a></li>
                  <li><a @click.prevent="scrollToSection('upgrades')" class="toc-link">{{ t('wikiPage.toc.upgrades') }}</a></li>
                  <li><a @click.prevent="scrollToSection('personnel')" class="toc-link">{{ t('wikiPage.toc.personnel') }}</a></li>
                  <li><a @click.prevent="scrollToSection('events')" class="toc-link">{{ t('wikiPage.toc.events') }}</a></li>
                  <li><a @click.prevent="scrollToSection('zombie-farming')" class="toc-link">{{ t('wikiPage.toc.zombieFarming') }}</a></li>
                  <li><a @click.prevent="scrollToSection('strategies')" class="toc-link">{{ t('wikiPage.toc.strategies') }}</a></li>
                  <li><a @click.prevent="scrollToSection('more-wiki')" class="toc-link">{{ t('wikiPage.toc.moreWiki') }}</a></li>
                </ul>
              </nav>
            </div>
          </aside>

          <!-- Main Content -->
          <main class="wiki-main">
            <!-- Tools Guide -->
            <section id="tools" class="wiki-section" ref="toolsRef">
              <div class="section-header">
                <h2 class="section-title">{{ t('wikiPage.sections.tools.title') }}</h2>
                <div class="section-divider"></div>
              </div>
              <div class="section-content">
                <p class="lead-text">
                  {{ t('wikiPage.sections.tools.lead') }} <a href="/guides" class="inline-link">{{ t('wikiPage.sections.tools.link1') }}</a>{{ t('wikiPage.sections.tools.lead2') }} <a href="/guides/quarantine-zone-the-last-check-rookie-survival-manual" class="inline-link">{{ t('wikiPage.sections.tools.link2') }}</a>{{ t('wikiPage.sections.tools.lead3') }}
                </p>

                <img src="/images/wiki/wiki-01.webp" alt="A gatekeeper inspecting a survivor in a Quarantine zone, with a focus on visual observation and tool usage." class="wiki-image">

                <div class="tools-table-wrapper">
                  <table class="tools-table">
                    <thead>
                      <tr>
                        <th class="col-image">{{ t('wikiPage.sections.tools.table.image') }}</th>
                        <th class="col-item">{{ t('wikiPage.sections.tools.table.item') }}</th>
                        <th class="col-day">{{ t('wikiPage.sections.tools.table.day') }}</th>
                        <th class="col-description">{{ t('wikiPage.sections.tools.table.description') }}</th>
                        <th class="col-function">{{ t('wikiPage.sections.tools.table.function') }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr id="tool-thermopulsometer">
                        <td class="col-image">
                          <img src="/images/wiki/wiki-img-04.webp" :alt="t('wikiPage.sections.tools.tools.thermopulsometer.name')" class="tool-table-image" />
                        </td>
                        <td class="col-item"><strong>{{ t('wikiPage.sections.tools.tools.thermopulsometer.name') }}</strong></td>
                        <td class="col-day">{{ t('wikiPage.sections.tools.tools.thermopulsometer.day') }}</td>
                        <td class="col-description">{{ t('wikiPage.sections.tools.tools.thermopulsometer.description') }}</td>
                        <td class="col-function">{{ t('wikiPage.sections.tools.tools.thermopulsometer.function') }}</td>
                      </tr>
                      <tr id="tool-reflex-hammer">
                        <td class="col-image">
                          <img src="/images/wiki/wiki-img-01.webp" :alt="t('wikiPage.sections.tools.tools.reflexHammer.name')" class="tool-table-image" />
                        </td>
                        <td class="col-item"><strong>{{ t('wikiPage.sections.tools.tools.reflexHammer.name') }}</strong></td>
                        <td class="col-day">{{ t('wikiPage.sections.tools.tools.reflexHammer.day') }}</td>
                        <td class="col-description">{{ t('wikiPage.sections.tools.tools.reflexHammer.description') }}</td>
                        <td class="col-function">{{ t('wikiPage.sections.tools.tools.reflexHammer.function') }}</td>
                      </tr>
                      <tr id="tool-scanner">
                        <td class="col-image">
                          <img src="/images/wiki/wiki-img-06.webp" :alt="t('wikiPage.sections.tools.tools.scanner.name')" class="tool-table-image" />
                        </td>
                        <td class="col-item"><strong>{{ t('wikiPage.sections.tools.tools.scanner.name') }}</strong></td>
                        <td class="col-day">{{ t('wikiPage.sections.tools.tools.scanner.day') }}</td>
                        <td class="col-description">{{ t('wikiPage.sections.tools.tools.scanner.description') }}</td>
                        <td class="col-function">{{ t('wikiPage.sections.tools.tools.scanner.function') }}</td>
                      </tr>
                      <tr id="tool-stethoscope">
                        <td class="col-image">
                          <img src="/images/wiki/wiki-img-05.webp" :alt="t('wikiPage.sections.tools.tools.stethoscope.name')" class="tool-table-image" />
                        </td>
                        <td class="col-item"><strong>{{ t('wikiPage.sections.tools.tools.stethoscope.name') }}</strong></td>
                        <td class="col-day">{{ t('wikiPage.sections.tools.tools.stethoscope.day') }}</td>
                        <td class="col-description">{{ t('wikiPage.sections.tools.tools.stethoscope.description') }}</td>
                        <td class="col-function">{{ t('wikiPage.sections.tools.tools.stethoscope.function') }}</td>
                      </tr>
                      <tr id="tool-syringe">
                        <td class="col-image">
                          <img src="/images/wiki/wiki-img-02.webp" :alt="t('wikiPage.sections.tools.tools.syringe.name')" class="tool-table-image" />
                        </td>
                        <td class="col-item"><strong>{{ t('wikiPage.sections.tools.tools.syringe.name') }}</strong></td>
                        <td class="col-day">{{ t('wikiPage.sections.tools.tools.syringe.day') }}</td>
                        <td class="col-description">{{ t('wikiPage.sections.tools.tools.syringe.description') }}</td>
                        <td class="col-function">{{ t('wikiPage.sections.tools.tools.syringe.function') }}</td>
                      </tr>
                      <tr id="tool-gun">
                        <td class="col-image">
                          <img src="/images/wiki/wiki-img-01.webp" :alt="t('wikiPage.sections.tools.tools.gun.name')" class="tool-table-image" />
                        </td>
                        <td class="col-item"><strong>{{ t('wikiPage.sections.tools.tools.gun.name') }}</strong></td>
                        <td class="col-day">{{ t('wikiPage.sections.tools.tools.gun.day') }}</td>
                        <td class="col-description">{{ t('wikiPage.sections.tools.tools.gun.description') }}</td>
                        <td class="col-function">{{ t('wikiPage.sections.tools.tools.gun.function') }}</td>
                      </tr>
                      <tr id="tool-xray">
                        <td class="col-image">
                          <img src="/images/wiki/wiki-img-07.webp" :alt="t('wikiPage.sections.tools.tools.xray.name')" class="tool-table-image" />
                        </td>
                        <td class="col-item"><strong>{{ t('wikiPage.sections.tools.tools.xray.name') }}</strong></td>
                        <td class="col-day">{{ t('wikiPage.sections.tools.tools.xray.day') }}</td>
                        <td class="col-description">{{ t('wikiPage.sections.tools.tools.xray.description') }}</td>
                        <td class="col-function">{{ t('wikiPage.sections.tools.tools.xray.function') }}</td>
                      </tr>
                      <tr id="tool-matioscope">
                        <td class="col-image">
                          <img src="/images/wiki/wiki-img-03.webp" :alt="t('wikiPage.sections.tools.tools.matioscope.name')" class="tool-table-image" />
                        </td>
                        <td class="col-item"><strong>{{ t('wikiPage.sections.tools.tools.matioscope.name') }}</strong></td>
                        <td class="col-day">{{ t('wikiPage.sections.tools.tools.matioscope.day') }}</td>
                        <td class="col-description">{{ t('wikiPage.sections.tools.tools.matioscope.description') }}</td>
                        <td class="col-function">{{ t('wikiPage.sections.tools.tools.matioscope.function') }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!-- Laboratory Inspection System -->
                <div class="info-box" style="margin-top: 32px;">
                  <h3 class="subsection-title">{{ t('wikiPage.sections.tools.laboratory.title') }}</h3>
                  <p><strong>{{ t('wikiPage.sections.tools.laboratory.newFeature') }}</strong> {{ t('wikiPage.sections.tools.laboratory.intro') }}</p>
                  <ul>
                    <li><strong>{{ t('wikiPage.sections.tools.laboratory.deepAnalysis') }}</strong> {{ t('wikiPage.sections.tools.laboratory.deepAnalysisText') }}</li>
                    <li><strong>{{ t('wikiPage.sections.tools.laboratory.advancedDetection') }}</strong> {{ t('wikiPage.sections.tools.laboratory.advancedDetectionText') }}</li>
                    <li><strong>{{ t('wikiPage.sections.tools.laboratory.researchBenefits') }}</strong> {{ t('wikiPage.sections.tools.laboratory.researchBenefitsText') }}</li>
                    <li><strong>{{ t('wikiPage.sections.tools.laboratory.resourceManagement') }}</strong> {{ t('wikiPage.sections.tools.laboratory.resourceManagementText') }}</li>
                  </ul>
                  <p><strong>{{ t('wikiPage.sections.tools.laboratory.strategy') }}</strong> {{ t('wikiPage.sections.tools.laboratory.strategyText') }}</p>
                </div>
              </div>
            </section>

            <!-- Resource Management -->
            <section id="resources" class="wiki-section" ref="resourcesRef">
              <div class="section-header">
                <h2 class="section-title">{{ t('wikiPage.sections.resources.title') }}</h2>
                <div class="section-divider"></div>
              </div>
              <div class="section-content">
                <p class="lead-text">
                  {{ t('wikiPage.sections.resources.lead') }} <a href="/guides" class="inline-link">{{ t('wikiPage.sections.resources.link1') }}</a>{{ t('wikiPage.sections.resources.lead2') }} <a href="/guides/quarantine-zone-the-last-check-combat-base-defense-guide" class="inline-link">{{ t('wikiPage.sections.resources.link2') }}</a>{{ t('wikiPage.sections.resources.lead3') }}
                </p>

                <div class="info-box" style="margin-bottom: 24px;">
                  <h3 class="subsection-title">{{ t('wikiPage.sections.resources.birdsEyeView.title') }}</h3>
                  <p><strong>{{ t('wikiPage.sections.resources.birdsEyeView.enhancedManagement') }}</strong> {{ t('wikiPage.sections.resources.birdsEyeView.intro') }}</p>
                  <ul>
                    <li><strong>{{ t('wikiPage.sections.resources.birdsEyeView.unifiedControl') }}</strong> {{ t('wikiPage.sections.resources.birdsEyeView.unifiedControlText') }}</li>
                    <li><strong>{{ t('wikiPage.sections.resources.birdsEyeView.visualClarity') }}</strong> {{ t('wikiPage.sections.resources.birdsEyeView.visualClarityText') }}</li>
                    <li><strong>{{ t('wikiPage.sections.resources.birdsEyeView.streamlinedOperations') }}</strong> {{ t('wikiPage.sections.resources.birdsEyeView.streamlinedOperationsText') }}</li>
                    <li><strong>{{ t('wikiPage.sections.resources.birdsEyeView.strategicPlanning') }}</strong> {{ t('wikiPage.sections.resources.birdsEyeView.strategicPlanningText') }}</li>
                  </ul>
                  <p><strong>{{ t('wikiPage.sections.resources.birdsEyeView.tip') }}</strong> {{ t('wikiPage.sections.resources.birdsEyeView.tipText') }}</p>
                </div>

                <img src="/images/wiki/wiki-02.webp" alt="A gatekeeper inspecting a survivor in a Quarantine zone, with a focus on visual observation and tool usage." class="wiki-image">

                <div class="resource-cards">
                  <div class="resource-card">
                    <h3 class="resource-title">{{ t('wikiPage.sections.resources.food.title') }}</h3>
                    <div class="resource-details">
                      <p><strong>{{ t('wikiPage.sections.resources.food.dailyConsumption') }}</strong> {{ t('wikiPage.sections.resources.food.dailyConsumptionValue') }}</p>
                      <p><strong>{{ t('wikiPage.sections.resources.food.storageCapacity') }}</strong> {{ t('wikiPage.sections.resources.food.storageCapacityValue') }}</p>
                      <p><strong>{{ t('wikiPage.sections.resources.food.sources') }}</strong> {{ t('wikiPage.sections.resources.food.sourcesValue') }}</p>
                      <p><strong>{{ t('wikiPage.sections.resources.food.managementTips') }}</strong></p>
                      <ul>
                        <li>{{ t('wikiPage.sections.resources.food.monitorConsumption') }}</li>
                        <li>{{ t('wikiPage.sections.resources.food.stockpile') }}</li>
                        <li>{{ t('wikiPage.sections.resources.food.ration') }}</li>
                        <li>{{ t('wikiPage.sections.resources.food.upgradeStorage') }}</li>
                      </ul>
                    </div>
                  </div>

                  <div class="resource-card">
                    <h3 class="resource-title">{{ t('wikiPage.sections.resources.medical.title') }}</h3>
                    <div class="resource-details">
                      <p><strong>{{ t('wikiPage.sections.resources.medical.dailyConsumption') }}</strong> {{ t('wikiPage.sections.resources.medical.dailyConsumptionValue') }}</p>
                      <p><strong>{{ t('wikiPage.sections.resources.medical.criticalThreshold') }}</strong> {{ t('wikiPage.sections.resources.medical.criticalThresholdValue') }}</p>
                      <p><strong>{{ t('wikiPage.sections.resources.medical.sources') }}</strong> {{ t('wikiPage.sections.resources.medical.sourcesValue') }}</p>
                      <p><strong>{{ t('wikiPage.sections.resources.medical.managementTips') }}</strong></p>
                      <ul>
                        <li>{{ t('wikiPage.sections.resources.medical.prioritizeTreatment') }}</li>
                        <li>{{ t('wikiPage.sections.resources.medical.maintainReserves') }}</li>
                        <li>{{ t('wikiPage.sections.resources.medical.researchUpgrades') }}</li>
                        <li>{{ t('wikiPage.sections.resources.medical.tradeExcess') }}</li>
                      </ul>
                    </div>
                  </div>

                  <div class="resource-card">
                    <h3 class="resource-title">{{ t('wikiPage.sections.resources.power.title') }}</h3>
                    <div class="resource-details">
                      <p><strong>{{ t('wikiPage.sections.resources.power.dailyConsumption') }}</strong> {{ t('wikiPage.sections.resources.power.dailyConsumptionValue') }}</p>
                      <p><strong>{{ t('wikiPage.sections.resources.power.generation') }}</strong> {{ t('wikiPage.sections.resources.power.generationValue') }}</p>
                      <p><strong>{{ t('wikiPage.sections.resources.power.criticalSystems') }}</strong> {{ t('wikiPage.sections.resources.power.criticalSystemsValue') }}</p>
                      <p><strong>{{ t('wikiPage.sections.resources.power.managementTips') }}</strong></p>
                      <ul>
                        <li>{{ t('wikiPage.sections.resources.power.upgradeGenerators') }}</li>
                        <li>{{ t('wikiPage.sections.resources.power.implementPowerSaving') }}</li>
                        <li>{{ t('wikiPage.sections.resources.power.backupGenerators') }}</li>
                        <li>{{ t('wikiPage.sections.resources.power.monitorFuel') }}</li>
                      </ul>
                    </div>
                  </div>

                  <div class="resource-card">
                    <h3 class="resource-title">{{ t('wikiPage.sections.resources.security.title') }}</h3>
                    <div class="resource-details">
                      <p><strong>{{ t('wikiPage.sections.resources.security.unitTypes') }}</strong> {{ t('wikiPage.sections.resources.security.unitTypesValue') }}</p>
                      <p><strong>{{ t('wikiPage.sections.resources.security.assignment') }}</strong> {{ t('wikiPage.sections.resources.security.assignmentValue') }}</p>
                      <p><strong>{{ t('wikiPage.sections.resources.security.fatigueSystem') }}</strong> {{ t('wikiPage.sections.resources.security.fatigueSystemValue') }}</p>
                      <p><strong>{{ t('wikiPage.sections.resources.security.managementTips') }}</strong></p>
                      <ul>
                        <li>{{ t('wikiPage.sections.resources.security.rotateStaff') }}</li>
                        <li>{{ t('wikiPage.sections.resources.security.trainStaff') }}</li>
                        <li>{{ t('wikiPage.sections.resources.security.maintainStaffing') }}</li>
                        <li>{{ t('wikiPage.sections.resources.security.handleSickStaff') }}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Decision Making -->
            <section id="decisions" class="wiki-section" ref="decisionsRef">
              <div class="section-header">
                <h2 class="section-title">{{ t('wikiPage.sections.decisions.title') }}</h2>
                <div class="section-divider"></div>
              </div>
              <div class="section-content">
                <p class="lead-text">
                  {{ t('wikiPage.sections.decisions.lead') }} <a href="/" class="inline-link">{{ t('wikiPage.sections.decisions.link1') }}</a>{{ t('wikiPage.sections.decisions.lead2') }}
                </p>

                <div class="decision-guide">
                  <h3 class="subsection-title">{{ t('wikiPage.sections.decisions.framework.title') }}</h3>
                  <div class="decision-steps">
                    <div class="decision-step">
                      <span class="step-number">{{ t('wikiPage.sections.decisions.framework.step1.number') }}</span>
                      <div class="step-content">
                        <h4>{{ t('wikiPage.sections.decisions.framework.step1.title') }}</h4>
                        <p>{{ t('wikiPage.sections.decisions.framework.step1.text') }}</p>
                      </div>
                    </div>
                    <div class="decision-step">
                      <span class="step-number">{{ t('wikiPage.sections.decisions.framework.step2.number') }}</span>
                      <div class="step-content">
                        <h4>{{ t('wikiPage.sections.decisions.framework.step2.title') }}</h4>
                        <p>{{ t('wikiPage.sections.decisions.framework.step2.text') }}</p>
                      </div>
                    </div>
                    <div class="decision-step">
                      <span class="step-number">{{ t('wikiPage.sections.decisions.framework.step3.number') }}</span>
                      <div class="step-content">
                        <h4>{{ t('wikiPage.sections.decisions.framework.step3.title') }}</h4>
                        <p>{{ t('wikiPage.sections.decisions.framework.step3.text') }}</p>
                      </div>
                    </div>
                    <div class="decision-step">
                      <span class="step-number">{{ t('wikiPage.sections.decisions.framework.step4.number') }}</span>
                      <div class="step-content">
                        <h4>{{ t('wikiPage.sections.decisions.framework.step4.title') }}</h4>
                        <p>{{ t('wikiPage.sections.decisions.framework.step4.text') }}</p>
                      </div>
                    </div>
                    <div class="decision-step">
                      <span class="step-number">{{ t('wikiPage.sections.decisions.framework.step5.number') }}</span>
                      <div class="step-content">
                        <h4>{{ t('wikiPage.sections.decisions.framework.step5.title') }}</h4>
                        <p>{{ t('wikiPage.sections.decisions.framework.step5.text') }}</p>
                      </div>
                    </div>
                  </div>

                  <h3 class="subsection-title">{{ t('wikiPage.sections.decisions.scenarios.title') }}</h3>
                  <div class="scenario-cards">
                    <div class="scenario-card">
                      <h4>{{ t('wikiPage.sections.decisions.scenarios.conflicting.title') }}</h4>
                      <p><strong>{{ t('wikiPage.sections.decisions.scenarios.conflicting.situation') }}</strong> {{ t('wikiPage.sections.decisions.scenarios.conflicting.situationText') }}</p>
                      <p><strong>{{ t('wikiPage.sections.decisions.scenarios.conflicting.recommendation') }}</strong> {{ t('wikiPage.sections.decisions.scenarios.conflicting.recommendationText') }}</p>
                    </div>
                    <div class="scenario-card">
                      <h4>{{ t('wikiPage.sections.decisions.scenarios.family.title') }}</h4>
                      <p><strong>{{ t('wikiPage.sections.decisions.scenarios.family.situation') }}</strong> {{ t('wikiPage.sections.decisions.scenarios.family.situationText') }}</p>
                      <p><strong>{{ t('wikiPage.sections.decisions.scenarios.family.recommendation') }}</strong> {{ t('wikiPage.sections.decisions.scenarios.family.recommendationText') }}</p>
                    </div>
                    <div class="scenario-card">
                      <h4>{{ t('wikiPage.sections.decisions.scenarios.highValue.title') }}</h4>
                      <p><strong>{{ t('wikiPage.sections.decisions.scenarios.highValue.situation') }}</strong> {{ t('wikiPage.sections.decisions.scenarios.highValue.situationText') }}</p>
                      <p><strong>{{ t('wikiPage.sections.decisions.scenarios.highValue.recommendation') }}</strong> {{ t('wikiPage.sections.decisions.scenarios.highValue.recommendationText') }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Upgrade System -->
            <section id="upgrades" class="wiki-section" ref="upgradesRef">
              <div class="section-header">
                <h2 class="section-title">{{ t('wikiPage.sections.upgrades.title') }}</h2>
                <div class="section-divider"></div>
              </div>
              <div class="section-content">
                <p class="lead-text">
                  {{ t('wikiPage.sections.upgrades.lead') }} <a href="/guides" class="inline-link">{{ t('wikiPage.sections.upgrades.link1') }}</a>{{ t('wikiPage.sections.upgrades.lead2') }} <a href="/guides/quarantine-zone-the-last-check-rookie-survival-manual" class="inline-link">{{ t('wikiPage.sections.upgrades.link2') }}</a>{{ t('wikiPage.sections.upgrades.lead3') }}
                </p>

                <img src="/images/wiki/wiki-03.webp" alt="A gatekeeper inspecting a survivor in a Quarantine zone, with a focus on visual observation and tool usage." class="wiki-image">

                <div class="upgrade-categories">
                  <div class="upgrade-category">
                    <h3 class="category-title">{{ t('wikiPage.sections.upgrades.inspection.title') }}</h3>
                    <div class="upgrade-list">
                      <div class="upgrade-item">
                        <h4>{{ t('wikiPage.sections.upgrades.inspection.scanner.title') }}</h4>
                        <p><strong>{{ t('wikiPage.sections.upgrades.inspection.scanner.cost') }}</strong> {{ t('wikiPage.sections.upgrades.inspection.scanner.costValue') }}</p>
                        <p><strong>{{ t('wikiPage.sections.upgrades.inspection.scanner.effect') }}</strong> {{ t('wikiPage.sections.upgrades.inspection.scanner.effectValue') }}</p>
                        <p><strong>{{ t('wikiPage.sections.upgrades.inspection.scanner.priority') }}</strong> {{ t('wikiPage.sections.upgrades.inspection.scanner.priorityText') }}</p>
                      </div>
                      <div class="upgrade-item">
                        <h4>{{ t('wikiPage.sections.upgrades.inspection.document.title') }}</h4>
                        <p><strong>{{ t('wikiPage.sections.upgrades.inspection.document.cost') }}</strong> {{ t('wikiPage.sections.upgrades.inspection.document.costValue') }}</p>
                        <p><strong>{{ t('wikiPage.sections.upgrades.inspection.document.effect') }}</strong> {{ t('wikiPage.sections.upgrades.inspection.document.effectValue') }}</p>
                        <p><strong>{{ t('wikiPage.sections.upgrades.inspection.document.priority') }}</strong> {{ t('wikiPage.sections.upgrades.inspection.document.priorityText') }}</p>
                      </div>
                      <div class="upgrade-item">
                        <h4>{{ t('wikiPage.sections.upgrades.inspection.uv.title') }}</h4>
                        <p><strong>{{ t('wikiPage.sections.upgrades.inspection.uv.cost') }}</strong> {{ t('wikiPage.sections.upgrades.inspection.uv.costValue') }}</p>
                        <p><strong>{{ t('wikiPage.sections.upgrades.inspection.uv.effect') }}</strong> {{ t('wikiPage.sections.upgrades.inspection.uv.effectValue') }}</p>
                        <p><strong>{{ t('wikiPage.sections.upgrades.inspection.uv.priority') }}</strong> {{ t('wikiPage.sections.upgrades.inspection.uv.priorityText') }}</p>
                      </div>
                    </div>
                  </div>

                  <div class="upgrade-category">
                    <h3 class="category-title">{{ t('wikiPage.sections.upgrades.infrastructure.title') }}</h3>
                    <div class="upgrade-list">
                      <div class="upgrade-item">
                        <h4>{{ t('wikiPage.sections.upgrades.infrastructure.quarantine.title') }}</h4>
                        <p><strong>{{ t('wikiPage.sections.upgrades.infrastructure.quarantine.cost') }}</strong> {{ t('wikiPage.sections.upgrades.infrastructure.quarantine.costValue') }}</p>
                        <p><strong>{{ t('wikiPage.sections.upgrades.infrastructure.quarantine.effect') }}</strong> {{ t('wikiPage.sections.upgrades.infrastructure.quarantine.effectValue') }}</p>
                        <p><strong>{{ t('wikiPage.sections.upgrades.infrastructure.quarantine.priority') }}</strong> {{ t('wikiPage.sections.upgrades.infrastructure.quarantine.priorityText') }}</p>
                      </div>
                      <div class="upgrade-item">
                        <h4>{{ t('wikiPage.sections.upgrades.infrastructure.generator.title') }}</h4>
                        <p><strong>{{ t('wikiPage.sections.upgrades.infrastructure.generator.cost') }}</strong> {{ t('wikiPage.sections.upgrades.infrastructure.generator.costValue') }}</p>
                        <p><strong>{{ t('wikiPage.sections.upgrades.infrastructure.generator.effect') }}</strong> {{ t('wikiPage.sections.upgrades.infrastructure.generator.effectValue') }}</p>
                        <p><strong>{{ t('wikiPage.sections.upgrades.infrastructure.generator.priority') }}</strong> {{ t('wikiPage.sections.upgrades.infrastructure.generator.priorityText') }}</p>
                      </div>
                      <div class="upgrade-item">
                        <h4>{{ t('wikiPage.sections.upgrades.infrastructure.walls.title') }}</h4>
                        <p><strong>{{ t('wikiPage.sections.upgrades.infrastructure.walls.cost') }}</strong> {{ t('wikiPage.sections.upgrades.infrastructure.walls.costValue') }}</p>
                        <p><strong>{{ t('wikiPage.sections.upgrades.infrastructure.walls.effect') }}</strong> {{ t('wikiPage.sections.upgrades.infrastructure.walls.effectValue') }}</p>
                        <p><strong>{{ t('wikiPage.sections.upgrades.infrastructure.walls.priority') }}</strong> {{ t('wikiPage.sections.upgrades.infrastructure.walls.priorityText') }}</p>
                      </div>
                    </div>
                  </div>

                  <div class="upgrade-category">
                    <h3 class="category-title">{{ t('wikiPage.sections.upgrades.resource.title') }}</h3>
                    <div class="upgrade-list">
                      <div class="upgrade-item">
                        <h4>{{ t('wikiPage.sections.upgrades.resource.medical.title') }}</h4>
                        <p><strong>{{ t('wikiPage.sections.upgrades.resource.medical.cost') }}</strong> {{ t('wikiPage.sections.upgrades.resource.medical.costValue') }}</p>
                        <p><strong>{{ t('wikiPage.sections.upgrades.resource.medical.effect') }}</strong> {{ t('wikiPage.sections.upgrades.resource.medical.effectValue') }}</p>
                        <p><strong>{{ t('wikiPage.sections.upgrades.resource.medical.priority') }}</strong> {{ t('wikiPage.sections.upgrades.resource.medical.priorityText') }}</p>
                      </div>
                      <div class="upgrade-item">
                        <h4>{{ t('wikiPage.sections.upgrades.resource.food.title') }}</h4>
                        <p><strong>{{ t('wikiPage.sections.upgrades.resource.food.cost') }}</strong> {{ t('wikiPage.sections.upgrades.resource.food.costValue') }}</p>
                        <p><strong>{{ t('wikiPage.sections.upgrades.resource.food.effect') }}</strong> {{ t('wikiPage.sections.upgrades.resource.food.effectValue') }}</p>
                        <p><strong>{{ t('wikiPage.sections.upgrades.resource.food.priority') }}</strong> {{ t('wikiPage.sections.upgrades.resource.food.priorityText') }}</p>
                      </div>
                      <div class="upgrade-item">
                        <h4>{{ t('wikiPage.sections.upgrades.resource.recycling.title') }}</h4>
                        <p><strong>{{ t('wikiPage.sections.upgrades.resource.recycling.cost') }}</strong> {{ t('wikiPage.sections.upgrades.resource.recycling.costValue') }}</p>
                        <p><strong>{{ t('wikiPage.sections.upgrades.resource.recycling.effect') }}</strong> {{ t('wikiPage.sections.upgrades.resource.recycling.effectValue') }}</p>
                        <p><strong>{{ t('wikiPage.sections.upgrades.resource.recycling.priority') }}</strong> {{ t('wikiPage.sections.upgrades.resource.recycling.priorityText') }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Personnel Management -->
            <section id="personnel" class="wiki-section" ref="personnelRef">
              <div class="section-header">
                <h2 class="section-title">{{ t('wikiPage.sections.personnel.title') }}</h2>
                <div class="section-divider"></div>
              </div>
              <div class="section-content">
                <p class="lead-text">
                  {{ t('wikiPage.sections.personnel.lead') }}
                </p>

                <div class="personnel-guide">
                  <h3 class="subsection-title">{{ t('wikiPage.sections.personnel.roles.title') }}</h3>
                  <div class="role-cards">
                    <div class="role-card">
                      <h4>{{ t('wikiPage.sections.personnel.roles.inspection.title') }}</h4>
                      <p><strong>{{ t('wikiPage.sections.personnel.roles.inspection.primaryDuty') }}</strong> {{ t('wikiPage.sections.personnel.roles.inspection.primaryDutyText') }}</p>
                      <p><strong>{{ t('wikiPage.sections.personnel.roles.inspection.skills') }}</strong> {{ t('wikiPage.sections.personnel.roles.inspection.skillsText') }}</p>
                      <p><strong>{{ t('wikiPage.sections.personnel.roles.inspection.fatigueRate') }}</strong> {{ t('wikiPage.sections.personnel.roles.inspection.fatigueRateText') }}</p>
                      <p><strong>{{ t('wikiPage.sections.personnel.roles.inspection.optimalRatio') }}</strong> {{ t('wikiPage.sections.personnel.roles.inspection.optimalRatioText') }}</p>
                    </div>
                    <div class="role-card">
                      <h4>{{ t('wikiPage.sections.personnel.roles.medical.title') }}</h4>
                      <p><strong>{{ t('wikiPage.sections.personnel.roles.medical.primaryDuty') }}</strong> {{ t('wikiPage.sections.personnel.roles.medical.primaryDutyText') }}</p>
                      <p><strong>{{ t('wikiPage.sections.personnel.roles.medical.skills') }}</strong> {{ t('wikiPage.sections.personnel.roles.medical.skillsText') }}</p>
                      <p><strong>{{ t('wikiPage.sections.personnel.roles.medical.fatigueRate') }}</strong> {{ t('wikiPage.sections.personnel.roles.medical.fatigueRateText') }}</p>
                      <p><strong>{{ t('wikiPage.sections.personnel.roles.medical.optimalRatio') }}</strong> {{ t('wikiPage.sections.personnel.roles.medical.optimalRatioText') }}</p>
                    </div>
                    <div class="role-card">
                      <h4>{{ t('wikiPage.sections.personnel.roles.security.title') }}</h4>
                      <p><strong>{{ t('wikiPage.sections.personnel.roles.security.primaryDuty') }}</strong> {{ t('wikiPage.sections.personnel.roles.security.primaryDutyText') }}</p>
                      <p><strong>{{ t('wikiPage.sections.personnel.roles.security.skills') }}</strong> {{ t('wikiPage.sections.personnel.roles.security.skillsText') }}</p>
                      <p><strong>{{ t('wikiPage.sections.personnel.roles.security.fatigueRate') }}</strong> {{ t('wikiPage.sections.personnel.roles.security.fatigueRateText') }}</p>
                      <p><strong>{{ t('wikiPage.sections.personnel.roles.security.optimalRatio') }}</strong> {{ t('wikiPage.sections.personnel.roles.security.optimalRatioText') }}</p>
                    </div>
                    <div class="role-card">
                      <h4>{{ t('wikiPage.sections.personnel.roles.technician.title') }}</h4>
                      <p><strong>{{ t('wikiPage.sections.personnel.roles.technician.primaryDuty') }}</strong> {{ t('wikiPage.sections.personnel.roles.technician.primaryDutyText') }}</p>
                      <p><strong>{{ t('wikiPage.sections.personnel.roles.technician.skills') }}</strong> {{ t('wikiPage.sections.personnel.roles.technician.skillsText') }}</p>
                      <p><strong>{{ t('wikiPage.sections.personnel.roles.technician.fatigueRate') }}</strong> {{ t('wikiPage.sections.personnel.roles.technician.fatigueRateText') }}</p>
                      <p><strong>{{ t('wikiPage.sections.personnel.roles.technician.optimalRatio') }}</strong> {{ t('wikiPage.sections.personnel.roles.technician.optimalRatioText') }}</p>
                    </div>
                  </div>

                  <h3 class="subsection-title">{{ t('wikiPage.sections.personnel.morale.title') }}</h3>
                  <div class="morale-tips">
                    <div class="tip-item">
                      <strong>{{ t('wikiPage.sections.personnel.morale.breaks') }}</strong> {{ t('wikiPage.sections.personnel.morale.breaksText') }}
                    </div>
                    <div class="tip-item">
                      <strong>{{ t('wikiPage.sections.personnel.morale.fairTreatment') }}</strong> {{ t('wikiPage.sections.personnel.morale.fairTreatmentText') }}
                    </div>
                    <div class="tip-item">
                      <strong>{{ t('wikiPage.sections.personnel.morale.communication') }}</strong> {{ t('wikiPage.sections.personnel.morale.communicationText') }}
                    </div>
                    <div class="tip-item">
                      <strong>{{ t('wikiPage.sections.personnel.morale.recognition') }}</strong> {{ t('wikiPage.sections.personnel.morale.recognitionText') }}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Event Handling -->
            <section id="events" class="wiki-section" ref="eventsRef">
              <div class="section-header">
                <h2 class="section-title">{{ t('wikiPage.sections.events.title') }}</h2>
                <div class="section-divider"></div>
              </div>
              <div class="section-content">
                <p class="lead-text">
                  {{ t('wikiPage.sections.events.lead') }} <a href="/news" class="inline-link">{{ t('wikiPage.sections.events.link1') }}</a>{{ t('wikiPage.sections.events.lead2') }}
                </p>

                <div class="event-types">
                  <div class="event-type">
                    <h3 class="event-title">{{ t('wikiPage.sections.events.powerOutage.title') }}</h3>
                    <div class="event-details">
                      <p><strong>{{ t('wikiPage.sections.events.powerOutage.warningSigns') }}</strong> {{ t('wikiPage.sections.events.powerOutage.warningSignsText') }}</p>
                      <p><strong>{{ t('wikiPage.sections.events.powerOutage.immediateActions') }}</strong></p>
                      <ul>
                        <li>{{ t('wikiPage.sections.events.powerOutage.action1') }}</li>
                        <li>{{ t('wikiPage.sections.events.powerOutage.action2') }}</li>
                        <li>{{ t('wikiPage.sections.events.powerOutage.action3') }}</li>
                        <li>{{ t('wikiPage.sections.events.powerOutage.action4') }}</li>
                      </ul>
                      <p><strong>{{ t('wikiPage.sections.events.powerOutage.prevention') }}</strong> {{ t('wikiPage.sections.events.powerOutage.preventionText') }}</p>
                    </div>
                  </div>

                  <div class="event-type">
                    <h3 class="event-title">{{ t('wikiPage.sections.events.outbreak.title') }}</h3>
                    <div class="event-details">
                      <p><strong>{{ t('wikiPage.sections.events.outbreak.warningSigns') }}</strong> {{ t('wikiPage.sections.events.outbreak.warningSignsText') }}</p>
                      <p><strong>{{ t('wikiPage.sections.events.outbreak.immediateActions') }}</strong></p>
                      <ul>
                        <li>{{ t('wikiPage.sections.events.outbreak.action1') }}</li>
                        <li>{{ t('wikiPage.sections.events.outbreak.action2') }}</li>
                        <li>{{ t('wikiPage.sections.events.outbreak.action3') }}</li>
                        <li>{{ t('wikiPage.sections.events.outbreak.action4') }}</li>
                      </ul>
                      <p><strong>{{ t('wikiPage.sections.events.outbreak.prevention') }}</strong> {{ t('wikiPage.sections.events.outbreak.preventionText') }}</p>
                    </div>
                  </div>

                  <div class="event-type">
                    <h3 class="event-title">{{ t('wikiPage.sections.events.securityBreach.title') }}</h3>
                    <div class="event-details">
                      <p><strong>{{ t('wikiPage.sections.events.securityBreach.warningSigns') }}</strong> {{ t('wikiPage.sections.events.securityBreach.warningSignsText') }}</p>
                      <p><strong>{{ t('wikiPage.sections.events.securityBreach.immediateActions') }}</strong></p>
                      <ul>
                        <li>{{ t('wikiPage.sections.events.securityBreach.action1') }}</li>
                        <li>{{ t('wikiPage.sections.events.securityBreach.action2') }}</li>
                        <li>{{ t('wikiPage.sections.events.securityBreach.action3') }}</li>
                        <li>{{ t('wikiPage.sections.events.securityBreach.action4') }}</li>
                      </ul>
                      <p><strong>{{ t('wikiPage.sections.events.securityBreach.prevention') }}</strong> {{ t('wikiPage.sections.events.securityBreach.preventionText') }}</p>
                    </div>
                  </div>

                  <div class="event-type">
                    <h3 class="event-title">{{ t('wikiPage.sections.events.roofInfiltration.title') }}</h3>
                    <div class="event-details">
                      <p><strong>{{ t('wikiPage.sections.events.roofInfiltration.newThreat') }}</strong> {{ t('wikiPage.sections.events.roofInfiltration.intro') }}</p>
                      <p><strong>{{ t('wikiPage.sections.events.roofInfiltration.warningSigns') }}</strong> {{ t('wikiPage.sections.events.roofInfiltration.warningSignsText') }}</p>
                      <p><strong>{{ t('wikiPage.sections.events.roofInfiltration.immediateActions') }}</strong></p>
                      <ul>
                        <li>{{ t('wikiPage.sections.events.roofInfiltration.action1') }}</li>
                        <li>{{ t('wikiPage.sections.events.roofInfiltration.action2') }}</li>
                        <li>{{ t('wikiPage.sections.events.roofInfiltration.action3') }}</li>
                        <li>{{ t('wikiPage.sections.events.roofInfiltration.action4') }}</li>
                      </ul>
                      <p><strong>{{ t('wikiPage.sections.events.roofInfiltration.prevention') }}</strong> {{ t('wikiPage.sections.events.roofInfiltration.preventionText') }}</p>
                      <p><strong>{{ t('wikiPage.sections.events.roofInfiltration.strategy') }}</strong> {{ t('wikiPage.sections.events.roofInfiltration.strategyText') }}</p>
                    </div>
                  </div>

                  <div class="event-type">
                    <h3 class="event-title">{{ t('wikiPage.sections.events.resourceShortage.title') }}</h3>
                    <div class="event-details">
                      <p><strong>{{ t('wikiPage.sections.events.resourceShortage.warningSigns') }}</strong> {{ t('wikiPage.sections.events.resourceShortage.warningSignsText') }}</p>
                      <p><strong>{{ t('wikiPage.sections.events.resourceShortage.immediateActions') }}</strong></p>
                      <ul>
                        <li>{{ t('wikiPage.sections.events.resourceShortage.action1') }}</li>
                        <li>{{ t('wikiPage.sections.events.resourceShortage.action2') }}</li>
                        <li>{{ t('wikiPage.sections.events.resourceShortage.action3') }}</li>
                        <li>{{ t('wikiPage.sections.events.resourceShortage.action4') }}</li>
                      </ul>
                      <p><strong>{{ t('wikiPage.sections.events.resourceShortage.prevention') }}</strong> {{ t('wikiPage.sections.events.resourceShortage.preventionText') }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Zombie Containment & Farming -->
            <section id="zombie-farming" class="wiki-section" ref="zombieFarmingRef">
              <div class="section-header">
                <h2 class="section-title">{{ t('wikiPage.sections.zombieFarming.title') }}</h2>
                <div class="section-divider"></div>
              </div>
              <div class="section-content">
                <p class="lead-text">
                  <strong>{{ t('wikiPage.sections.zombieFarming.lead') }}</strong> {{ t('wikiPage.sections.zombieFarming.leadText') }}
                </p>

                <div class="info-box" style="margin-top: 24px;">
                  <h3 class="subsection-title">{{ t('wikiPage.sections.zombieFarming.mechanics.title') }}</h3>
                  <p><strong>{{ t('wikiPage.sections.zombieFarming.mechanics.overview') }}</strong> {{ t('wikiPage.sections.zombieFarming.mechanics.overviewText') }}</p>
                  
                  <div class="resource-cards" style="margin-top: 20px;">
                    <div class="resource-card">
                      <h3 class="resource-title">{{ t('wikiPage.sections.zombieFarming.mechanics.containment.title') }}</h3>
                      <div class="resource-details">
                        <p><strong>{{ t('wikiPage.sections.zombieFarming.mechanics.containment.step1') }}</strong> {{ t('wikiPage.sections.zombieFarming.mechanics.containment.step1Text') }}</p>
                        <p><strong>{{ t('wikiPage.sections.zombieFarming.mechanics.containment.step2') }}</strong> {{ t('wikiPage.sections.zombieFarming.mechanics.containment.step2Text') }}</p>
                        <p><strong>{{ t('wikiPage.sections.zombieFarming.mechanics.containment.step3') }}</strong> {{ t('wikiPage.sections.zombieFarming.mechanics.containment.step3Text') }}</p>
                        <p><strong>{{ t('wikiPage.sections.zombieFarming.mechanics.containment.step4') }}</strong> {{ t('wikiPage.sections.zombieFarming.mechanics.containment.step4Text') }}</p>
                      </div>
                    </div>

                    <div class="resource-card">
                      <h3 class="resource-title">{{ t('wikiPage.sections.zombieFarming.mechanics.economic.title') }}</h3>
                      <div class="resource-details">
                        <p><strong>{{ t('wikiPage.sections.zombieFarming.mechanics.economic.contracts') }}</strong> {{ t('wikiPage.sections.zombieFarming.mechanics.economic.contractsText') }}</p>
                        <p><strong>{{ t('wikiPage.sections.zombieFarming.mechanics.economic.income') }}</strong> {{ t('wikiPage.sections.zombieFarming.mechanics.economic.incomeText') }}</p>
                        <p><strong>{{ t('wikiPage.sections.zombieFarming.mechanics.economic.data') }}</strong> {{ t('wikiPage.sections.zombieFarming.mechanics.economic.dataText') }}</p>
                        <p><strong>{{ t('wikiPage.sections.zombieFarming.mechanics.economic.riskReward') }}</strong> {{ t('wikiPage.sections.zombieFarming.mechanics.economic.riskRewardText') }}</p>
                      </div>
                    </div>
                  </div>

                  <h3 class="subsection-title" style="margin-top: 32px;">{{ t('wikiPage.sections.zombieFarming.considerations.title') }}</h3>
                  <ul style="margin-top: 16px;">
                    <li><strong>{{ t('wikiPage.sections.zombieFarming.considerations.safety') }}</strong> {{ t('wikiPage.sections.zombieFarming.considerations.safetyText') }}</li>
                    <li><strong>{{ t('wikiPage.sections.zombieFarming.considerations.resourceManagement') }}</strong> {{ t('wikiPage.sections.zombieFarming.considerations.resourceManagementText') }}</li>
                    <li><strong>{{ t('wikiPage.sections.zombieFarming.considerations.moralChoices') }}</strong> {{ t('wikiPage.sections.zombieFarming.considerations.moralChoicesText') }}</li>
                    <li><strong>{{ t('wikiPage.sections.zombieFarming.considerations.upgradePriority') }}</strong> {{ t('wikiPage.sections.zombieFarming.considerations.upgradePriorityText') }}</li>
                    <li><strong>{{ t('wikiPage.sections.zombieFarming.considerations.emergencyProtocols') }}</strong> {{ t('wikiPage.sections.zombieFarming.considerations.emergencyProtocolsText') }}</li>
                  </ul>

                  <div class="scenario-cards" style="margin-top: 24px;">
                    <div class="scenario-card">
                      <h4>{{ t('wikiPage.sections.zombieFarming.scenarios.breach.title') }}</h4>
                      <p><strong>{{ t('wikiPage.sections.zombieFarming.scenarios.breach.situation') }}</strong> {{ t('wikiPage.sections.zombieFarming.scenarios.breach.situationText') }}</p>
                      <p><strong>{{ t('wikiPage.sections.zombieFarming.scenarios.breach.recommendation') }}</strong> {{ t('wikiPage.sections.zombieFarming.scenarios.breach.recommendationText') }}</p>
                    </div>
                    <div class="scenario-card">
                      <h4>{{ t('wikiPage.sections.zombieFarming.scenarios.shortage.title') }}</h4>
                      <p><strong>{{ t('wikiPage.sections.zombieFarming.scenarios.shortage.situation') }}</strong> {{ t('wikiPage.sections.zombieFarming.scenarios.shortage.situationText') }}</p>
                      <p><strong>{{ t('wikiPage.sections.zombieFarming.scenarios.shortage.recommendation') }}</strong> {{ t('wikiPage.sections.zombieFarming.scenarios.shortage.recommendationText') }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Strategies -->
            <section id="strategies" class="wiki-section" ref="strategiesRef">
              <div class="section-header">
                <h2 class="section-title">{{ t('wikiPage.sections.strategies.title') }}</h2>
                <div class="section-divider"></div>
              </div>
              <div class="section-content">
                <p class="lead-text">
                  {{ t('wikiPage.sections.strategies.lead') }} <a href="/guides" class="inline-link">{{ t('wikiPage.sections.strategies.link1') }}</a>{{ t('wikiPage.sections.strategies.lead2') }}
                </p>

                <div class="strategy-sections">
                  <div class="strategy-section">
                    <h3 class="strategy-title">{{ t('wikiPage.sections.strategies.earlyGame.title') }}</h3>
                    <div class="strategy-content">
                      <p><strong>{{ t('wikiPage.sections.strategies.earlyGame.focusAreas') }}</strong></p>
                      <ul>
                        <li>{{ t('wikiPage.sections.strategies.earlyGame.focus1') }}</li>
                        <li>{{ t('wikiPage.sections.strategies.earlyGame.focus2') }}</li>
                        <li>{{ t('wikiPage.sections.strategies.earlyGame.focus3') }}</li>
                        <li>{{ t('wikiPage.sections.strategies.earlyGame.focus4') }}</li>
                      </ul>
                      <p><strong>{{ t('wikiPage.sections.strategies.earlyGame.priorityUpgrades') }}</strong> {{ t('wikiPage.sections.strategies.earlyGame.priorityUpgradesText') }}</p>
                      <p><strong>{{ t('wikiPage.sections.strategies.earlyGame.commonMistakes') }}</strong> {{ t('wikiPage.sections.strategies.earlyGame.commonMistakesText') }}</p>
                    </div>
                  </div>

                  <div class="strategy-section">
                    <h3 class="strategy-title">{{ t('wikiPage.sections.strategies.midGame.title') }}</h3>
                    <div class="strategy-content">
                      <p><strong>{{ t('wikiPage.sections.strategies.midGame.focusAreas') }}</strong></p>
                      <ul>
                        <li>{{ t('wikiPage.sections.strategies.midGame.focus1') }}</li>
                        <li>{{ t('wikiPage.sections.strategies.midGame.focus2') }}</li>
                        <li>{{ t('wikiPage.sections.strategies.midGame.focus3') }}</li>
                        <li>{{ t('wikiPage.sections.strategies.midGame.focus4') }}</li>
                      </ul>
                      <p><strong>{{ t('wikiPage.sections.strategies.midGame.priorityUpgrades') }}</strong> {{ t('wikiPage.sections.strategies.midGame.priorityUpgradesText') }}</p>
                      <p><strong>{{ t('wikiPage.sections.strategies.midGame.commonMistakes') }}</strong> {{ t('wikiPage.sections.strategies.midGame.commonMistakesText') }}</p>
                    </div>
                  </div>

                  <div class="strategy-section">
                    <h3 class="strategy-title">{{ t('wikiPage.sections.strategies.lateGame.title') }}</h3>
                    <div class="strategy-content">
                      <p><strong>{{ t('wikiPage.sections.strategies.lateGame.focusAreas') }}</strong></p>
                      <ul>
                        <li>{{ t('wikiPage.sections.strategies.lateGame.focus1') }}</li>
                        <li>{{ t('wikiPage.sections.strategies.lateGame.focus2') }}</li>
                        <li>{{ t('wikiPage.sections.strategies.lateGame.focus3') }}</li>
                        <li>{{ t('wikiPage.sections.strategies.lateGame.focus4') }}</li>
                      </ul>
                      <p><strong>{{ t('wikiPage.sections.strategies.lateGame.priorityUpgrades') }}</strong> {{ t('wikiPage.sections.strategies.lateGame.priorityUpgradesText') }}</p>
                      <p><strong>{{ t('wikiPage.sections.strategies.lateGame.commonMistakes') }}</strong> {{ t('wikiPage.sections.strategies.lateGame.commonMistakesText') }}</p>
                    </div>
                  </div>

                  <div class="strategy-section">
                    <h3 class="strategy-title">{{ t('wikiPage.sections.strategies.proTips.title') }}</h3>
                    <div class="strategy-content">
                      <ul class="pro-tips-list">
                        <li><strong>{{ t('wikiPage.sections.strategies.proTips.alwaysVerify') }}</strong> {{ t('wikiPage.sections.strategies.proTips.alwaysVerifyText') }}</li>
                        <li><strong>{{ t('wikiPage.sections.strategies.proTips.documentEverything') }}</strong> {{ t('wikiPage.sections.strategies.proTips.documentEverythingText') }}</li>
                        <li><strong>{{ t('wikiPage.sections.strategies.proTips.planForFailure') }}</strong> {{ t('wikiPage.sections.strategies.proTips.planForFailureText') }}</li>
                        <li><strong>{{ t('wikiPage.sections.strategies.proTips.trustButVerify') }}</strong> {{ t('wikiPage.sections.strategies.proTips.trustButVerifyText') }}</li>
                        <li><strong>{{ t('wikiPage.sections.strategies.proTips.learnFromMistakes') }}</strong> {{ t('wikiPage.sections.strategies.proTips.learnFromMistakesText') }}</li>
                        <li><strong>{{ t('wikiPage.sections.strategies.proTips.resourceEfficiency') }}</strong> {{ t('wikiPage.sections.strategies.proTips.resourceEfficiencyText') }}</li>
                        <li><strong>{{ t('wikiPage.sections.strategies.proTips.staffWelfare') }}</strong> {{ t('wikiPage.sections.strategies.proTips.staffWelfareText') }}</li>
                        <li><strong>{{ t('wikiPage.sections.strategies.proTips.longTermThinking') }}</strong> {{ t('wikiPage.sections.strategies.proTips.longTermThinkingText') }}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- More Wiki Content -->
            <section id="more-wiki" class="wiki-section more-wiki-section" ref="moreWikiRef">
              <div class="section-header">
                <h2 class="section-title">{{ t('wikiPage.sections.moreWiki.title') }}</h2>
                <div class="section-divider"></div>
              </div>
              <div class="section-content">
                <div class="more-wiki-list">
                  <div class="more-wiki-item">
                    <a href="/wiki/symptoms" class="more-wiki-link">
                      <h3 class="more-wiki-title">{{ t('wikiPage.sections.moreWiki.symptoms.title') }}</h3>
                      <p class="more-wiki-description">{{ t('wikiPage.sections.moreWiki.symptoms.description') }}</p>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const toolsRef = ref(null)
const resourcesRef = ref(null)
const decisionsRef = ref(null)
const upgradesRef = ref(null)
const personnelRef = ref(null)
const eventsRef = ref(null)
const zombieFarmingRef = ref(null)
const strategiesRef = ref(null)

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const headerOffset = 100 // 考虑header的高度
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}
</script>

<style scoped>
.wiki-view {
  min-height: 100vh;
  position: relative;
}

/* Header */
.wiki-header {
  padding: 40px 0;
  position: relative;
  z-index: 1;
}

.wiki-header::before {
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
  font-size: clamp(28px, 5vw, 42px);
  font-weight: 800;
  color: var(--text);
  margin-bottom: 20px;
  text-shadow: 
    0 0 15px var(--accent),
    0 0 30px var(--neon-glow),
    0 0 45px rgba(57, 255, 20, 0.5);
}

.page-subtitle {
  font-size: 14px;
  color: var(--text-muted);
  margin: 0;
  line-height: 1.2;
}

/* Content Layout */
.wiki-content {
  padding: 0 0 40px;
  position: relative;
  z-index: 1;
}

.wiki-content::before {
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

.wiki-content img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.content-layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 30px;
  position: relative;
  z-index: 1;
  align-items: start;
}

/* Sidebar */
.wiki-sidebar {
  position: sticky;
  top: 20px;
  height: fit-content;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
  align-self: start;
  will-change: transform;
  z-index: 10;
}

.wiki-sidebar::-webkit-scrollbar {
  width: 6px;
}

.wiki-sidebar::-webkit-scrollbar-track {
  background: rgba(10, 15, 20, 0.5);
  border-radius: 3px;
}

.wiki-sidebar::-webkit-scrollbar-thumb {
  background: rgba(57, 255, 20, 0.3);
  border-radius: 3px;
}

.wiki-sidebar::-webkit-scrollbar-thumb:hover {
  background: rgba(57, 255, 20, 0.5);
}

/* Main Content */
.wiki-main {
  background: rgba(20, 30, 40, 0.7);
  border: 1px solid var(--accent);
  border-radius: 16px;
  padding: 20px;
  backdrop-filter: blur(10px);
}

.wiki-section {
  margin-bottom: 40px;
  scroll-margin-top: 100px;
}

.wiki-section:last-child {
  margin-bottom: 0;
}

.section-header {
  margin-bottom: 20px;
}

.section-title {
  font-size: clamp(28px, 4vw, 42px);
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 15px;
  text-shadow: 0 0 10px rgba(57, 255, 20, 0.6);
}

.section-divider {
  height: 3px;
  background: linear-gradient(90deg, var(--accent), var(--accent-blue));
  border-radius: 2px;
  width: 80px;
}

.section-content {
  color: var(--text-muted);
  line-height: 1.8;
}

.lead-text {
  font-size: 14px;
  color: var(--text);
  margin-bottom: 15px;
  font-weight: 500;
  line-height: 1.5;
}

.section-content p {
  margin-bottom: 12px;
  font-size: 14px;
}

.section-content p:last-child {
  margin-bottom: 0;
}

/* Info Box */
.info-box {
  background: rgba(10, 15, 20, 0.5);
  border: 1px solid rgba(57, 255, 20, 0.2);
  border-radius: 12px;
  padding: 24px;
  margin: 24px 0;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.info-label {
  font-size: 0.85rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.info-value {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text);
}

/* Mechanic Cards */
.mechanic-cards {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;
}

.mechanic-card {
  background: rgba(10, 15, 20, 0.5);
  border: 1px solid rgba(57, 255, 20, 0.2);
  border-radius: 12px;
  padding: 24px;
  transition: all 0.3s ease;
}

.mechanic-card:hover {
  border-color: var(--accent);
  box-shadow: 0 0 20px rgba(57, 255, 20, 0.3);
  transform: translateY(-2px);
}

.mechanic-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(57, 255, 20, 0.2);
}

.mechanic-icon {
  font-size: 2rem;
  filter: drop-shadow(0 0 10px var(--accent));
}

.mechanic-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent);
  margin: 0;
  text-shadow: 0 0 8px rgba(57, 255, 20, 0.6);
}

.mechanic-body p {
  margin-bottom: 12px;
}

.mechanic-body p:last-child {
  margin-bottom: 0;
}

/* Feature List */
.subsection-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--text);
  margin: 20px 0 15px 0;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0 0 32px 0;
}

.feature-list li {
  padding: 12px 0;
  padding-left: 24px;
  position: relative;
  color: var(--text-muted);
}

.feature-list li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-weight: 700;
}

.feature-list li strong {
  color: var(--text);
}

/* Tools Grid */
.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
  margin: 24px 0;
}

.tool-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 20px;
  background: rgba(10, 15, 20, 0.5);
  border: 1px solid rgba(57, 255, 20, 0.2);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.tool-item:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
  box-shadow: 0 0 15px rgba(57, 255, 20, 0.3);
}

.tool-icon {
  font-size: 2rem;
}

.tool-name {
  font-size: 0.9rem;
  color: var(--text);
  text-align: center;
  font-weight: 500;
}

.note-text {
  font-style: italic;
  color: var(--text-muted);
  margin-top: 16px;
}

/* Requirements Grid */
.requirements-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 24px;
}

.requirement-card {
  background: rgba(10, 15, 20, 0.5);
  border: 1px solid rgba(57, 255, 20, 0.2);
  border-radius: 12px;
  overflow: hidden;
}

.requirement-header {
  padding: 20px;
  border-bottom: 1px solid rgba(57, 255, 20, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.requirement-header h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text);
  margin: 0;
}

.requirement-badge {
  padding: 6px 12px;
  background: rgba(57, 255, 20, 0.15);
  border: 1px solid var(--accent);
  border-radius: 4px;
  font-size: 0.75rem;
  color: var(--accent);
  font-weight: 700;
  text-transform: uppercase;
}

.requirement-badge.recommended {
  background: rgba(0, 168, 255, 0.15);
  border-color: var(--accent-blue);
  color: var(--accent-blue);
}

.requirement-body {
  padding: 20px;
}

.requirement-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid rgba(57, 255, 20, 0.1);
}

.requirement-item:last-child {
  border-bottom: none;
}

.req-label {
  font-size: 0.9rem;
  color: var(--text-muted);
}

.req-value {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text);
  text-align: right;
}

/* Detail Cards */
.detail-cards {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;
}

.detail-card {
  background: rgba(10, 15, 20, 0.5);
  border: 1px solid rgba(57, 255, 20, 0.2);
  border-radius: 12px;
  padding: 24px;
}

.detail-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent);
  margin: 0 0 16px 0;
  text-shadow: 0 0 8px rgba(57, 255, 20, 0.6);
}

.detail-card p {
  margin-bottom: 12px;
}

.detail-card p:last-child {
  margin-bottom: 0;
}

/* Table of Contents */
.toc-section {
  background: rgba(20, 30, 40, 0.7);
  border: 1px solid rgba(57, 255, 20, 0.2);
  border-radius: 12px;
  padding: 20px;
  backdrop-filter: blur(10px);
}

.toc-header {
  margin-bottom: 20px;
}

.toc-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 12px;
  text-shadow: 0 0 10px rgba(57, 255, 20, 0.6);
}

.toc-nav {
  margin-top: 16px;
}

.toc-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.toc-list li {
  margin: 0;
}

.toc-link {
  display: block;
  padding: 10px 14px;
  color: var(--text-muted);
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.3s ease;
  font-size: 13px;
  border-left: 3px solid transparent;
  position: relative;
}

.toc-link:hover {
  color: var(--accent);
  background: rgba(57, 255, 20, 0.1);
  border-left-color: var(--accent);
  transform: translateX(4px);
}

.toc-link:active {
  color: var(--accent);
  background: rgba(57, 255, 20, 0.15);
  border-left-color: var(--accent);
}

.toc-sublist {
  list-style: none;
  padding: 0;
  margin: 12px 0 8px 24px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  border-left: 2px solid rgba(57, 255, 20, 0.15);
  padding-left: 12px;
}

.toc-sublist li {
  margin: 0;
}

.toc-sublink {
  display: block;
  padding: 6px 10px;
  color: var(--text-muted);
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  font-size: 11px;
  border-left: 2px solid transparent;
  position: relative;
  opacity: 0.7;
  font-weight: 400;
}

.toc-sublink::before {
  content: '▸';
  position: absolute;
  left: -8px;
  color: rgba(57, 255, 20, 0.4);
  font-size: 10px;
  transition: all 0.3s ease;
}

.toc-sublink:hover {
  color: var(--accent);
  background: rgba(57, 255, 20, 0.08);
  border-left-color: rgba(57, 255, 20, 0.4);
  transform: translateX(2px);
  opacity: 1;
  font-weight: 500;
}

.toc-sublink:hover::before {
  color: rgba(57, 255, 20, 0.6);
  transform: translateX(2px);
}

.toc-sublink:active {
  color: var(--accent);
  background: rgba(57, 255, 20, 0.12);
  border-left-color: var(--accent);
  opacity: 1;
  font-weight: 500;
}

/* Tools Table */
.tools-table-wrapper {
  margin-top: 24px;
  overflow-x: auto;
}

.tools-table {
  width: 100%;
  border-collapse: collapse;
  background: rgba(10, 15, 20, 0.5);
  border: 1px solid rgba(57, 255, 20, 0.2);
  border-radius: 12px;
  overflow: hidden;
}

.tools-table thead {
  background: rgba(57, 255, 20, 0.1);
}

.tools-table th {
  padding: 16px;
  text-align: left;
  font-weight: 700;
  color: var(--accent);
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 2px solid rgba(57, 255, 20, 0.3);
}

.tools-table td {
  padding: 16px;
  border-bottom: 1px solid rgba(57, 255, 20, 0.1);
  color: var(--text-muted);
  font-size: 14px;
  vertical-align: top;
}

.tools-table tbody tr {
  transition: all 0.3s ease;
  scroll-margin-top: 100px;
}

.tools-table tbody tr:hover {
  background: rgba(57, 255, 20, 0.05);
}

.tools-table tbody tr:last-child td {
  border-bottom: none;
}

.tools-table .col-image {
  width: 120px;
  padding: 12px;
}

.tools-table .col-item {
  width: 150px;
  font-weight: 600;
  color: var(--text);
}

.tools-table .col-day {
  width: 100px;
  color: var(--accent);
  font-weight: 600;
}

.tools-table .col-description {
  min-width: 300px;
  line-height: 1.6;
}

.tools-table .col-function {
  min-width: 300px;
  line-height: 1.6;
}

.tool-table-image {
  width: 100px;
  height: 80px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid rgba(57, 255, 20, 0.2);
}

/* Resource Cards */
.resource-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 24px;
}

.resource-card {
  background: rgba(10, 15, 20, 0.5);
  border: 1px solid rgba(57, 255, 20, 0.2);
  border-radius: 12px;
  padding: 20px;
}

.resource-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--accent);
  margin: 0 0 15px 0;
  text-shadow: 0 0 8px rgba(57, 255, 20, 0.6);
}

.resource-details p {
  margin-bottom: 10px;
  font-size: 14px;
}

.resource-details ul {
  margin: 12px 0;
  padding-left: 24px;
}

.resource-details li {
  margin-bottom: 8px;
  color: var(--text-muted);
}

.resource-details strong {
  color: var(--text);
}

/* Decision Guide */
.decision-guide {
  margin-top: 24px;
}

.decision-steps {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 24px 0;
}

.decision-step {
  display: flex;
  gap: 20px;
  background: rgba(10, 15, 20, 0.5);
  border: 1px solid rgba(57, 255, 20, 0.2);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 15px;
}

.step-number {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(57, 255, 20, 0.15);
  border: 2px solid var(--accent);
  border-radius: 50%;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--accent);
  text-shadow: 0 0 8px rgba(57, 255, 20, 0.6);
}

.step-content h4 {
  font-size: 18px;
  font-weight: 700;
  color: var(--text);
  margin: 0 0 8px 0;
}

.step-content p {
  color: var(--text-muted);
  margin: 0;
  font-size: 14px;
}

.scenario-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 24px;
}

.scenario-card {
  background: rgba(10, 15, 20, 0.5);
  border: 1px solid rgba(57, 255, 20, 0.2);
  border-radius: 12px;
  padding: 20px;
}

.scenario-card h4 {
  font-size: 18px;
  font-weight: 700;
  color: var(--accent);
  margin: 0 0 12px 0;
}

.scenario-card p {
  margin-bottom: 8px;
  color: var(--text-muted);
  font-size: 14px;
}

.scenario-card strong {
  color: var(--text);
}

/* Upgrade Categories */
.upgrade-categories {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 24px;
}

.upgrade-category {
  background: rgba(10, 15, 20, 0.5);
  border: 1px solid rgba(57, 255, 20, 0.2);
  border-radius: 12px;
  padding: 20px;
}

.category-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--accent);
  margin: 0 0 15px 0;
  text-shadow: 0 0 8px rgba(57, 255, 20, 0.6);
}

.upgrade-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.upgrade-item {
  padding: 15px;
  background: rgba(20, 30, 40, 0.5);
  border-left: 3px solid var(--accent);
  border-radius: 8px;
  margin-bottom: 10px;
}

.upgrade-item h4 {
  font-size: 18px;
  font-weight: 700;
  color: var(--text);
  margin: 0 0 8px 0;
}

.upgrade-item p {
  margin-bottom: 4px;
  color: var(--text-muted);
  font-size: 14px;
}

.upgrade-item strong {
  color: var(--text);
}

/* Personnel Guide */
.personnel-guide {
  margin-top: 24px;
}

.role-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 24px 0;
}

.role-card {
  background: rgba(10, 15, 20, 0.5);
  border: 1px solid rgba(57, 255, 20, 0.2);
  border-radius: 12px;
  padding: 20px;
}

.role-card h4 {
  font-size: 18px;
  font-weight: 700;
  color: var(--accent);
  margin: 0 0 12px 0;
  text-shadow: 0 0 8px rgba(57, 255, 20, 0.6);
}

.role-card p {
  margin-bottom: 8px;
  color: var(--text-muted);
  font-size: 14px;
}

.role-card strong {
  color: var(--text);
}

.morale-tips {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 24px;
}

.tip-item {
  background: rgba(10, 15, 20, 0.5);
  border: 1px solid rgba(57, 255, 20, 0.2);
  border-radius: 8px;
  padding: 16px;
  color: var(--text-muted);
}

.tip-item strong {
  color: var(--accent);
}

/* Event Types */
.event-types {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;
}

.event-type {
  background: rgba(10, 15, 20, 0.5);
  border: 1px solid rgba(57, 255, 20, 0.2);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
}

.event-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--accent);
  margin: 0 0 15px 0;
  text-shadow: 0 0 8px rgba(57, 255, 20, 0.6);
}

.event-details p {
  margin-bottom: 10px;
  color: var(--text-muted);
  font-size: 14px;
}

.event-details strong {
  color: var(--text);
}

.event-details ul {
  margin: 12px 0;
  padding-left: 24px;
}

.event-details li {
  margin-bottom: 8px;
  color: var(--text-muted);
}

/* Strategy Sections */
.strategy-sections {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;
}

.strategy-section {
  background: rgba(10, 15, 20, 0.5);
  border: 1px solid rgba(57, 255, 20, 0.2);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
}

.strategy-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--accent);
  margin: 0 0 15px 0;
  text-shadow: 0 0 8px rgba(57, 255, 20, 0.6);
}

.strategy-content p {
  margin-bottom: 10px;
  color: var(--text-muted);
  font-size: 14px;
}

.strategy-content strong {
  color: var(--text);
}

.strategy-content ul {
  margin: 12px 0;
  padding-left: 24px;
}

.strategy-content li {
  margin-bottom: 8px;
  color: var(--text-muted);
}

.pro-tips-list {
  list-style: none;
  padding: 0;
}

.pro-tips-list li {
  padding: 10px 0;
  padding-left: 24px;
  position: relative;
  color: var(--text-muted);
  border-bottom: 1px solid rgba(57, 255, 20, 0.1);
  font-size: 14px;
}

.pro-tips-list li:last-child {
  border-bottom: none;
}

.pro-tips-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-weight: 700;
  font-size: 1.1rem;
}

.pro-tips-list li strong {
  color: var(--text);
}

/* More Wiki Content */
.more-wiki-section {
  margin-top: 48px;
}

.more-wiki-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 24px;
}

.more-wiki-item {
  background: rgba(10, 15, 20, 0.5);
  border: 1px solid rgba(57, 255, 20, 0.2);
  border-radius: 12px;
  transition: all 0.3s ease;
  overflow: hidden;
}

.more-wiki-item:hover {
  border-color: var(--accent);
  background: rgba(10, 15, 20, 0.7);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(57, 255, 20, 0.2);
}

.more-wiki-link {
  display: block;
  padding: 24px;
  text-decoration: none;
  color: inherit;
}

.more-wiki-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--accent);
  margin: 0 0 12px 0;
  text-shadow: 0 0 8px rgba(57, 255, 20, 0.6);
  transition: color 0.3s ease;
}

.more-wiki-item:hover .more-wiki-title {
  color: var(--accent);
  text-shadow: 0 0 12px rgba(57, 255, 20, 0.8);
}

.more-wiki-description {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0;
}

.more-wiki-item:hover .more-wiki-description {
  color: var(--text);
}

/* Responsive Design - 1024px */
@media (max-width: 1024px) {
  .content-layout {
    grid-template-columns: 240px 1fr;
    gap: 20px;
  }

  .wiki-sidebar {
    top: 70px;
    max-height: calc(100vh - 90px);
  }

  .wiki-main {
    padding: 20px;
  }

  .tools-table-wrapper {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .tools-table {
    min-width: 800px;
    font-size: 12px;
  }

  .tools-table th,
  .tools-table td {
    padding: 12px 8px;
    font-size: 12px;
  }

  .tools-table .col-image {
    width: 80px;
  }

  .tools-table .col-item {
    width: 120px;
  }

  .tools-table .col-day {
    width: 80px;
  }

  .tools-table .col-description,
  .tools-table .col-function {
    min-width: 200px;
  }

  .tool-table-image {
    width: 70px;
    height: 60px;
  }

  .resource-cards {
    grid-template-columns: 1fr;
  }

  .scenario-cards {
    grid-template-columns: 1fr;
  }

  .role-cards {
    grid-template-columns: 1fr;
  }

  .morale-tips {
    grid-template-columns: 1fr;
  }
}

/* Responsive Design - 768px */
@media (max-width: 768px) {
  .content-layout {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .wiki-sidebar {
    position: relative;
    top: 0;
    max-height: none;
    margin-bottom: 20px;
    order: -1;
  }

  .toc-section {
    border-radius: 12px;
  }

  .wiki-header {
    padding: 40px 0;
  }

  .page-title {
    font-size: clamp(24px, 5vw, 32px);
  }

  .page-subtitle {
    font-size: 12px;
  }

  .wiki-content {
    padding: 0 0 40px;
  }

  .wiki-main {
    padding: 20px;
  }

  .wiki-section {
    margin-bottom: 30px;
  }

  .section-header {
    margin-bottom: 15px;
  }

  .section-title {
    font-size: clamp(24px, 5vw, 32px);
    margin-bottom: 12px;
  }

  .subsection-title {
    font-size: 18px;
    margin: 15px 0 12px 0;
  }

  .lead-text {
    font-size: 13px;
    margin-bottom: 12px;
  }

  .section-content p {
    font-size: 13px;
    margin-bottom: 10px;
  }

  .tools-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .tool-item {
    padding: 15px;
  }

  .tool-icon {
    font-size: 1.5rem;
  }

  .tool-name {
    font-size: 12px;
  }

  .toc-list {
    grid-template-columns: 1fr;
  }

  .tool-guide-content {
    flex-direction: column;
  }

  .tool-guide-image {
    width: 100%;
    height: 180px;
  }

  .tool-guide-card,
  .resource-card,
  .scenario-card,
  .upgrade-category,
  .role-card,
  .event-type,
  .strategy-section {
    padding: 18px;
  }

  .tool-guide-title,
  .resource-title,
  .category-title,
  .event-title,
  .strategy-title {
    font-size: 18px;
  }

  .tool-guide-body p,
  .resource-details p,
  .scenario-card p,
  .upgrade-item p,
  .role-card p,
  .event-details p,
  .strategy-content p {
    font-size: 13px;
  }

  .resource-cards {
    grid-template-columns: 1fr;
  }

  .decision-step {
    flex-direction: column;
    gap: 12px;
    padding: 18px;
  }

  .step-number {
    width: 32px;
    height: 32px;
    font-size: 1rem;
  }

  .step-content h4 {
    font-size: 16px;
  }

  .step-content p {
    font-size: 13px;
  }

  .scenario-cards {
    grid-template-columns: 1fr;
  }

  .role-cards {
    grid-template-columns: 1fr;
  }

  .morale-tips {
    grid-template-columns: 1fr;
  }

  .pro-tips-list li {
    font-size: 13px;
    padding: 8px 0;
  }
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
