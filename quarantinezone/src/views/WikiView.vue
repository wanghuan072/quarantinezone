<template>
  <div class="wiki-view">
    <!-- Page Header -->
    <section class="wiki-header">
      <div class="container">
        <div class="header-content">
          <h1 class="page-title">Quarantine Zone: The Last Check Wiki</h1>
          <p class="page-subtitle">
            Comprehensive database covering all tools, resources, upgrades, personnel roles, events, and strategies in Quarantine Zone: The Last Check. Find detailed information about inspection tools, resource management, decision-making scenarios, and survival mechanics.
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
                <h2 class="toc-title">Table of Contents</h2>
                <div class="section-divider"></div>
              </div>
              <nav class="toc-nav">
                <ul class="toc-list">
                  <li>
                    <a @click.prevent="scrollToSection('tools')" class="toc-link">Inspection Tools Guide</a>
                    <ul class="toc-sublist">
                      <li><a @click.prevent="scrollToSection('tool-reflex-hammer')" class="toc-sublink">Reflex Hammer</a></li>
                      <li><a @click.prevent="scrollToSection('tool-flashlight')" class="toc-sublink">Flashlight</a></li>
                      <li><a @click.prevent="scrollToSection('tool-document-scanner')" class="toc-sublink">Documents / ID</a></li>
                      <li><a @click.prevent="scrollToSection('tool-thermometer')" class="toc-sublink">Temperature & Pulse Monitor</a></li>
                      <li><a @click.prevent="scrollToSection('tool-stethoscope')" class="toc-sublink">Stethoscope</a></li>
                      <li><a @click.prevent="scrollToSection('tool-uv-scanner')" class="toc-sublink">UV Light Scanner</a></li>
                      <li><a @click.prevent="scrollToSection('tool-body-scanner')" class="toc-sublink">Body Scanner</a></li>
                      <li><a @click.prevent="scrollToSection('tool-blood-test')" class="toc-sublink">Blood Test Kit</a></li>
                      <li><a @click.prevent="scrollToSection('tool-weapon')" class="toc-sublink">Pistol / Weapon</a></li>
                    </ul>
                  </li>
                  <li><a @click.prevent="scrollToSection('resources')" class="toc-link">Resource Management System</a></li>
                  <li><a @click.prevent="scrollToSection('decisions')" class="toc-link">Decision-Making Strategies</a></li>
                  <li><a @click.prevent="scrollToSection('upgrades')" class="toc-link">Base Upgrade System</a></li>
                  <li><a @click.prevent="scrollToSection('personnel')" class="toc-link">Personnel Management</a></li>
                  <li><a @click.prevent="scrollToSection('events')" class="toc-link">Event & Crisis Management</a></li>
                  <li><a @click.prevent="scrollToSection('zombie-farming')" class="toc-link">Zombie Containment & Farming</a></li>
                  <li><a @click.prevent="scrollToSection('strategies')" class="toc-link">Advanced Strategies</a></li>
                </ul>
              </nav>
            </div>
          </aside>

          <!-- Main Content -->
          <main class="wiki-main">
            <!-- Tools Guide -->
            <section id="tools" class="wiki-section" ref="toolsRef">
              <div class="section-header">
                <h2 class="section-title">Inspection Tools Guide</h2>
                <div class="section-divider"></div>
              </div>
              <div class="section-content">
                <p class="lead-text">
                  Master the use of inspection tools to accurately identify infected individuals and make informed decisions. Each tool provides different information, and combining them is key to success. For detailed walkthroughs on using these tools effectively, check out our comprehensive <router-link to="/guides" class="inline-link">inspection guides</router-link>, especially our <router-link to="/guides/quarantine-zone-the-last-check-rookie-survival-manual" class="inline-link">Rookie Survival Manual</router-link> for beginners.
                </p>

                <img src="/images/wiki/wiki-01.webp" alt="A gatekeeper inspecting a survivor in a Quarantine zone, with a focus on visual observation and tool usage." class="wiki-image">

                <div class="tool-guide-cards">
                  <div id="tool-reflex-hammer" class="tool-guide-card">
                    <div class="tool-guide-content">
                      <div class="tool-guide-text">
                        <div class="tool-guide-header">
                          <span class="tool-guide-icon">🔨</span>
                          <h3 class="tool-guide-title">Reflex Hammer</h3>
                        </div>
                        <div class="tool-guide-body">
                          <p><strong>Function:</strong> Used to tap joints or limbs to test neurological reflexes.</p>
                          <p><strong>Detection Targets:</strong></p>
                          <ul>
                            <li>Infected individuals typically show <strong>hyperreflexia</strong> (exaggerated reflexes)</li>
                            <li>Watch for <strong>cross-reference</strong> reactions (tapping the left side causes movement on the right side)</li>
                            <li>These abnormal reflexes indicate that the virus has affected the nervous system</li>
                          </ul>
                          <p><strong>Tip:</strong> Cross-reference reactions are a clear sign of neurological damage from infection. This is a reliable indicator of advanced infection.</p>
                        </div>
                      </div>
                      <div class="tool-guide-image">
                        <img src="/images/wiki/wiki-img-01.webp" alt="Reflex Hammer tool in use" class="tool-image" />
                      </div>
                    </div>
                  </div>

                  <div id="tool-flashlight" class="tool-guide-card">
                    <div class="tool-guide-content">
                      <div class="tool-guide-text">
                        <div class="tool-guide-header">
                          <span class="tool-guide-icon">🔦</span>
                          <h3 class="tool-guide-title">Flashlight</h3>
                        </div>
                        <div class="tool-guide-body">
                          <p><strong>Function:</strong> Used to illuminate the survivor's face and body to observe visible symptoms that can be detected with the naked eye.</p>
                          <p><strong>Detection Targets:</strong></p>
                          <ul>
                            <li><strong>Eye Color:</strong> Red eyes, yellow eyes, conjunctivitis</li>
                            <li><strong>Skin Color:</strong> Pale complexion, darkened skin, discoloration</li>
                            <li><strong>Visible Wounds or Rashes:</strong> Obvious injuries, skin lesions, or abnormal markings</li>
                          </ul>
                          <p><strong>Tip:</strong> This is your first line of visual inspection. Always start with the flashlight to identify obvious symptoms before using more advanced tools.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="tool-document-scanner" class="tool-guide-card">
                    <div class="tool-guide-content">
                      <div class="tool-guide-text">
                        <div class="tool-guide-header">
                          <span class="tool-guide-icon">📄</span>
                          <h3 class="tool-guide-title">Documents / ID</h3>
                        </div>
                        <div class="tool-guide-body">
                          <p><strong>Function:</strong> Critical for verifying the survivor's identity information.</p>
                          <p><strong>Detection Targets:</strong></p>
                          <ul>
                            <li>Check if the photo matches the actual person</li>
                            <li>Verify if the ID photo is authentic</li>
                            <li>Compare current appearance with ID photo - infected individuals may show significant facial changes that don't match their ID photo</li>
                          </ul>
                          <p><strong>Tip:</strong> Facial changes due to infection can be a major red flag. Always compare the person's current appearance with their ID photo carefully.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="tool-thermometer" class="tool-guide-card">
                    <div class="tool-guide-content">
                      <div class="tool-guide-text">
                        <div class="tool-guide-header">
                          <span class="tool-guide-icon">🌡️</span>
                          <h3 class="tool-guide-title">Thermopulsometer</h3>
                        </div>
                        <div class="tool-guide-body">
                          <p><strong>Function:</strong> Measures the survivor's body temperature and heart rate/pulse.</p>
                          <p><strong>Detection Targets:</strong></p>
                          <ul>
                            <li><strong>Temperature:</strong> Above 38°C is suspicious, above 41°C usually confirms infection</li>
                            <li><strong>Pulse:</strong> Abnormally high pulse rate (such as >120 BPM or even >180 BPM) indicates active virus infection</li>
                          </ul>
                          <p><strong>Tip:</strong> Combine temperature and pulse readings for more accurate diagnosis. High temperature with elevated pulse is a strong indicator of infection.</p>
                        </div>
                      </div>
                      <div class="tool-guide-image">
                        <img src="/images/wiki/wiki-img-04.webp" alt="Temperature & Pulse Monitor tool in use" class="tool-image" />
                      </div>
                    </div>
                  </div>

                  <div id="tool-stethoscope" class="tool-guide-card">
                    <div class="tool-guide-content">
                      <div class="tool-guide-text">
                        <div class="tool-guide-header">
                          <span class="tool-guide-icon">🩺</span>
                          <h3 class="tool-guide-title">Stethoscope</h3>
                        </div>
                        <div class="tool-guide-body">
                          <p><strong>Function:</strong> Used to listen to lung and heart sounds.</p>
                          <p><strong>Detection Targets:</strong></p>
                          <ul>
                            <li>Check for breathing difficulties</li>
                            <li>Listen for lung abnormalities (such as "viral breathing sounds" - wet rales)</li>
                            <li>Detect irregular heart rhythms (arrhythmia)</li>
                          </ul>
                          <p><strong>Tip:</strong> Abnormal lung sounds, especially wet rales, are strong indicators of respiratory infection. Combine with temperature readings for confirmation.</p>
                        </div>
                      </div>
                      <div class="tool-guide-image">
                        <img src="/images/wiki/wiki-img-05.webp" alt="Stethoscope tool in use" class="tool-image" />
                      </div>
                    </div>
                  </div>

                  <div id="tool-uv-scanner" class="tool-guide-card">
                    <div class="tool-guide-content">
                      <div class="tool-guide-text">
                        <div class="tool-guide-header">
                          <span class="tool-guide-icon">💡</span>
                          <h3 class="tool-guide-title">SCANNER</h3>
                        </div>
                        <div class="tool-guide-body">
                          <p><strong>Function:</strong> Uses ultraviolet/bio-light to scan the body. This is one of the most important tools available.</p>
                          <p><strong>Detection Targets:</strong></p>
                          <ul>
                            <li>Reveals scratches or bite marks invisible to the naked eye</li>
                            <li>Shows subcutaneous blood vessel fluorescence (double-layer effect indicating virus flowing in blood vessels)</li>
                            <li>Detects wounds hidden by clothing</li>
                          </ul>
                          <p><strong>Tip:</strong> The UV scanner is essential for detecting hidden infection signs. Always use it to check for invisible bite marks or wounds that clothing might conceal.</p>
                        </div>
                      </div>
                      <div class="tool-guide-image">
                        <img src="/images/wiki/wiki-img-06.webp" alt="UV Light Scanner tool in use" class="tool-image" />
                      </div>
                    </div>
                  </div>

                  <div id="tool-body-scanner" class="tool-guide-card">
                    <div class="tool-guide-content">
                      <div class="tool-guide-text">
                        <div class="tool-guide-header">
                          <span class="tool-guide-icon">📡</span>
                          <h3 class="tool-guide-title">Body Scanner</h3>
                        </div>
                        <div class="tool-guide-body">
                          <p><strong>Function:</strong> Provides X-ray/transparent inspection of the body.</p>
                          <p><strong>Detection Targets:</strong></p>
                          <ul>
                            <li>Check for foreign objects inside the body (such as contraband, bombs)</li>
                            <li>Detect if internal organs have mutated or become enlarged</li>
                            <li>Identify structural abnormalities that indicate infection</li>
                          </ul>
                          <p><strong>Tip:</strong> Essential for security checks and detecting internal organ changes. Use when you suspect hidden contraband or need to verify internal health status.</p>
                        </div>
                      </div>
                      <div class="tool-guide-image">
                        <img src="/images/wiki/wiki-img-07.webp" alt="Body Scanner tool in use" class="tool-image" />
                      </div>
                    </div>
                  </div>

                  <div id="tool-blood-test" class="tool-guide-card">
                    <div class="tool-guide-content">
                      <div class="tool-guide-text">
                        <div class="tool-guide-header">
                          <span class="tool-guide-icon">💉</span>
                          <h3 class="tool-guide-title">Blood Test Kit / Syringe Scanner</h3>
                        </div>
                        <div class="tool-guide-body">
                          <p><strong>Function:</strong> Draws blood samples for laboratory testing.</p>
                          <p><strong>Detection Targets:</strong></p>
                          <ul>
                            <li>Provides <strong>100% accuracy</strong> for final confirmation</li>
                            <li>Definitive test for infection status</li>
                          </ul>
                          <p><strong>Important Notes:</strong></p>
                          <ul>
                            <li>Usually a <strong>consumable item</strong> - limited quantity and expensive</li>
                            <li>Recommended to use only when other tools show ambiguous results (e.g., normal heart rate but suspicious appearance)</li>
                            <li>Use as a <strong>last resort</strong> due to limited supply and high cost</li>
                          </ul>
                          <p><strong>Tip:</strong> Save blood test kits for critical cases where other tools cannot provide a clear answer. Don't waste them on obvious cases.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="tool-weapon" class="tool-guide-card">
                    <div class="tool-guide-content">
                      <div class="tool-guide-text">
                        <div class="tool-guide-header">
                          <span class="tool-guide-icon">🔫</span>
                          <h3 class="tool-guide-title">Pistol / Weapon</h3>
                        </div>
                        <div class="tool-guide-body">
                          <p><strong>Function:</strong> Emergency/execution tool. While not a detection tool, this is the only "handling" tool when detecting red-level threats (mutated/extremely dangerous) or when facing forced checkpoint breaches.</p>
                          <p><strong>Usage:</strong></p>
                          <ul>
                            <li>Use when an infected individual is confirmed and poses immediate danger</li>
                            <li>Deploy when survivors attempt to force their way through the checkpoint</li>
                            <li>Last resort for maintaining checkpoint security</li>
                          </ul>
                          <p><strong>Warning:</strong> This is a lethal tool. Use only when absolutely necessary to protect the checkpoint and other survivors. Every use has consequences.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Laboratory Inspection System -->
                <div class="info-box" style="margin-top: 32px;">
                  <h3 class="subsection-title">Laboratory Inspection System</h3>
                  <p><strong>New Feature:</strong> The full release introduces a comprehensive laboratory system within your base that allows for in-depth analysis of survivors with unclear symptoms.</p>
                  <ul>
                    <li><strong>Deep Analysis:</strong> Send individuals with unknown or conflicting symptoms to the laboratory for comprehensive testing</li>
                    <li><strong>Advanced Detection:</strong> Laboratory equipment can detect new virus strains and mutations that standard tools might miss</li>
                    <li><strong>Research Benefits:</strong> Laboratory findings contribute to your understanding of the virus and may unlock new detection methods</li>
                    <li><strong>Resource Management:</strong> Laboratory operations consume medical supplies but provide valuable intelligence for future inspections</li>
                  </ul>
                  <p><strong>Strategy:</strong> Use the laboratory for high-priority cases where standard inspection tools show conflicting results. The time investment is worth it for potentially saving lives and preventing outbreaks.</p>
                </div>
              </div>
            </section>

            <!-- Resource Management -->
            <section id="resources" class="wiki-section" ref="resourcesRef">
              <div class="section-header">
                <h2 class="section-title">Resource Management System</h2>
                <div class="section-divider"></div>
              </div>
              <div class="section-content">
                <p class="lead-text">
                  Effective resource management is crucial for maintaining your checkpoint. Learn how to balance consumption, production, and allocation to keep your base operational. Our detailed <router-link to="/guides" class="inline-link">resource management guides</router-link> provide step-by-step strategies for optimizing your operations. For combat-focused resource management, see our <router-link to="/guides/quarantine-zone-the-last-check-combat-base-defense-guide" class="inline-link">Combat & Base Defense Guide</router-link>.
                </p>

                <div class="info-box" style="margin-bottom: 24px;">
                  <h3 class="subsection-title">New: Bird's Eye View Interface</h3>
                  <p><strong>Enhanced Management:</strong> The full release introduces a revolutionary bird's eye view interface that provides a comprehensive overview of your entire base.</p>
                  <ul>
                    <li><strong>Unified Control:</strong> Manage all resources, facilities, and personnel from a single overhead perspective</li>
                    <li><strong>Visual Clarity:</strong> See resource distribution, facility status, and personnel assignments at a glance</li>
                    <li><strong>Streamlined Operations:</strong> Simplified workflow reduces time spent navigating between different management screens</li>
                    <li><strong>Strategic Planning:</strong> The overview helps identify bottlenecks and optimize resource allocation more effectively</li>
                  </ul>
                  <p><strong>Tip:</strong> Use the bird's eye view to quickly assess your base's overall status before making critical decisions. It's especially useful during emergencies when time is limited.</p>
                </div>

                <img src="/images/wiki/wiki-02.webp" alt="A gatekeeper inspecting a survivor in a Quarantine zone, with a focus on visual observation and tool usage." class="wiki-image">

                <div class="resource-cards">
                  <div class="resource-card">
                    <h3 class="resource-title">Food Supplies</h3>
                    <div class="resource-details">
                      <p><strong>Daily Consumption:</strong> ~50 units per 100 survivors</p>
                      <p><strong>Storage Capacity:</strong> Varies by facility level (Base: 500 units)</p>
                      <p><strong>Sources:</strong> Supply drops, trade, scavenging missions</p>
                      <p><strong>Management Tips:</strong></p>
                      <ul>
                        <li>Monitor consumption rates daily</li>
                        <li>Stockpile during safe periods</li>
                        <li>Ration during shortages (reduces morale)</li>
                        <li>Upgrade storage facilities to prevent spoilage</li>
                      </ul>
                    </div>
                  </div>

                  <div class="resource-card">
                    <h3 class="resource-title">Medical Supplies</h3>
                    <div class="resource-details">
                      <p><strong>Daily Consumption:</strong> ~20 units per 100 survivors</p>
                      <p><strong>Critical Threshold:</strong> Below 30 units triggers emergency protocols</p>
                      <p><strong>Sources:</strong> Medical stations, research labs, emergency supplies</p>
                      <p><strong>Management Tips:</strong></p>
                      <ul>
                        <li>Prioritize treatment of infected individuals</li>
                        <li>Maintain reserves for emergencies</li>
                        <li>Research medical upgrades to reduce consumption</li>
                        <li>Trade excess supplies for other resources</li>
                      </ul>
                    </div>
                  </div>

                  <div class="resource-card">
                    <h3 class="resource-title">Power/Energy</h3>
                    <div class="resource-details">
                      <p><strong>Daily Consumption:</strong> ~100 units (base operations)</p>
                      <p><strong>Generation:</strong> Generator output varies by upgrade level</p>
                      <p><strong>Critical Systems:</strong> Lights, scanners, security systems, medical equipment</p>
                      <p><strong>Management Tips:</strong></p>
                      <ul>
                        <li>Upgrade generators for increased output</li>
                        <li>Implement power-saving measures during shortages</li>
                        <li>Backup generators prevent total blackouts</li>
                        <li>Monitor fuel reserves for generators</li>
                      </ul>
                    </div>
                  </div>

                  <div class="resource-card">
                    <h3 class="resource-title">Security Forces</h3>
                    <div class="resource-details">
                      <p><strong>Unit Types:</strong> Guards, medical staff, technicians, administrators</p>
                      <p><strong>Assignment:</strong> Assign to inspection, security, medical, or maintenance</p>
                      <p><strong>Fatigue System:</strong> Overworked staff become less efficient</p>
                      <p><strong>Management Tips:</strong></p>
                      <ul>
                        <li>Rotate staff to prevent burnout</li>
                        <li>Train staff to improve efficiency</li>
                        <li>Maintain adequate staffing levels</li>
                        <li>Handle sick staff immediately to prevent spread</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Decision Making -->
            <section id="decisions" class="wiki-section" ref="decisionsRef">
              <div class="section-header">
                <h2 class="section-title">Decision-Making Strategies</h2>
                <div class="section-divider"></div>
              </div>
              <div class="section-content">
                <p class="lead-text">
                  Every decision has consequences. Learn how to evaluate situations, weigh risks, and make informed choices that balance safety, resources, and morality. Understanding the game's core mechanics is essential - visit our <router-link to="/" class="inline-link">homepage</router-link> to learn more about the decision-making systems in Quarantine Zone: The Last Check.
                </p>

                <div class="decision-guide">
                  <h3 class="subsection-title">Decision Framework</h3>
                  <div class="decision-steps">
                    <div class="decision-step">
                      <span class="step-number">1</span>
                      <div class="step-content">
                        <h4>Gather Information</h4>
                        <p>Use all available tools to collect data. Check documents, run scans, observe behavior, and review interview transcripts. More information leads to better decisions.</p>
                      </div>
                    </div>
                    <div class="decision-step">
                      <span class="step-number">2</span>
                      <div class="step-content">
                        <h4>Identify Red Flags</h4>
                        <p>Look for inconsistencies in stories, suspicious symptoms, forged documents, or unusual behavior patterns. Multiple red flags increase risk.</p>
                      </div>
                    </div>
                    <div class="decision-step">
                      <span class="step-number">3</span>
                      <div class="step-content">
                        <h4>Assess Risk Level</h4>
                        <p>Evaluate the potential consequences. High-risk individuals require quarantine. Low-risk can proceed. Uncertain cases need additional screening.</p>
                      </div>
                    </div>
                    <div class="decision-step">
                      <span class="step-number">4</span>
                      <div class="step-content">
                        <h4>Consider Resources</h4>
                        <p>Every decision consumes resources. Quarantine uses beds and medical supplies. Rejection may reduce morale. Balance immediate needs with long-term sustainability.</p>
                      </div>
                    </div>
                    <div class="decision-step">
                      <span class="step-number">5</span>
                      <div class="step-content">
                        <h4>Make the Call</h4>
                        <p>Sometimes you must decide with incomplete information. Trust your tools, but also trust your instincts. Document your reasoning for future reference.</p>
                      </div>
                    </div>
                  </div>

                  <h3 class="subsection-title">Common Decision Scenarios</h3>
                  <div class="scenario-cards">
                    <div class="scenario-card">
                      <h4>Scenario: Conflicting Test Results</h4>
                      <p><strong>Situation:</strong> Thermometer shows normal, but UV scanner reveals suspicious marks.</p>
                      <p><strong>Recommendation:</strong> Request additional screening with virus detector. If unavailable, err on the side of caution and quarantine for observation.</p>
                    </div>
                    <div class="scenario-card">
                      <h4>Scenario: Desperate Family</h4>
                      <p><strong>Situation:</strong> Family with sick child, but one member shows symptoms.</p>
                      <p><strong>Recommendation:</strong> Separate the symptomatic individual. Allow healthy family members through if resources permit. Consider humanitarian exceptions carefully.</p>
                    </div>
                    <div class="scenario-card">
                      <h4>Scenario: High-Value Individual</h4>
                      <p><strong>Situation:</strong> Doctor or engineer with valuable skills, but questionable documents.</p>
                      <p><strong>Recommendation:</strong> Extended screening may be worth the risk. Their skills could benefit the base, but verify identity thoroughly.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Upgrade System -->
            <section id="upgrades" class="wiki-section" ref="upgradesRef">
              <div class="section-header">
                <h2 class="section-title">Base Upgrade System</h2>
                <div class="section-divider"></div>
              </div>
              <div class="section-content">
                <p class="lead-text">
                  Strategic upgrades can significantly improve your checkpoint's efficiency and survival chances. Plan your upgrade path carefully based on your playstyle and current challenges. Our <router-link to="/guides" class="inline-link">upgrade strategy guides</router-link> help you prioritize investments and maximize your base's potential. Learn about base management in our <router-link to="/guides/quarantine-zone-the-last-check-rookie-survival-manual" class="inline-link">Rookie Survival Manual</router-link>.
                </p>

                <img src="/images/wiki/wiki-03.webp" alt="A gatekeeper inspecting a survivor in a Quarantine zone, with a focus on visual observation and tool usage." class="wiki-image">

                <div class="upgrade-categories">
                  <div class="upgrade-category">
                    <h3 class="category-title">Inspection Upgrades</h3>
                    <div class="upgrade-list">
                      <div class="upgrade-item">
                        <h4>Advanced Scanner System</h4>
                        <p><strong>Cost:</strong> 500 resources, 3 days</p>
                        <p><strong>Effect:</strong> +25% accuracy, faster processing time</p>
                        <p><strong>Priority:</strong> High - Improves decision-making accuracy</p>
                      </div>
                      <div class="upgrade-item">
                        <h4>Automated Document Verification</h4>
                        <p><strong>Cost:</strong> 300 resources, 2 days</p>
                        <p><strong>Effect:</strong> Instant document checks, reduces false positives</p>
                        <p><strong>Priority:</strong> Medium - Saves time but requires maintenance</p>
                      </div>
                      <div class="upgrade-item">
                        <h4>Enhanced UV Lighting</h4>
                        <p><strong>Cost:</strong> 200 resources, 1 day</p>
                        <p><strong>Effect:</strong> Better visibility, detects hidden symptoms</p>
                        <p><strong>Priority:</strong> Medium - Useful for thorough inspections</p>
                      </div>
                    </div>
                  </div>

                  <div class="upgrade-category">
                    <h3 class="category-title">Infrastructure Upgrades</h3>
                    <div class="upgrade-list">
                      <div class="upgrade-item">
                        <h4>Expanded Quarantine Facility</h4>
                        <p><strong>Cost:</strong> 800 resources, 5 days</p>
                        <p><strong>Effect:</strong> +50% quarantine capacity, better isolation</p>
                        <p><strong>Priority:</strong> High - Essential for managing outbreaks</p>
                      </div>
                      <div class="upgrade-item">
                        <h4>Backup Power Generator</h4>
                        <p><strong>Cost:</strong> 600 resources, 4 days</p>
                        <p><strong>Effect:</strong> Prevents blackouts, maintains critical systems</p>
                        <p><strong>Priority:</strong> High - Prevents catastrophic failures</p>
                      </div>
                      <div class="upgrade-item">
                        <h4>Reinforced Perimeter Walls</h4>
                        <p><strong>Cost:</strong> 1000 resources, 7 days</p>
                        <p><strong>Effect:</strong> +50% defense, prevents breaches</p>
                        <p><strong>Priority:</strong> Medium - Important for security</p>
                      </div>
                    </div>
                  </div>

                  <div class="upgrade-category">
                    <h3 class="category-title">Resource Upgrades</h3>
                    <div class="upgrade-list">
                      <div class="upgrade-item">
                        <h4>Advanced Medical Station</h4>
                        <p><strong>Cost:</strong> 700 resources, 4 days</p>
                        <p><strong>Effect:</strong> -30% medical supply consumption, faster treatment</p>
                        <p><strong>Priority:</strong> High - Reduces resource drain</p>
                      </div>
                      <div class="upgrade-item">
                        <h4>Food Storage Expansion</h4>
                        <p><strong>Cost:</strong> 400 resources, 3 days</p>
                        <p><strong>Effect:</strong> +100% storage, reduces spoilage</p>
                        <p><strong>Priority:</strong> Medium - Allows stockpiling</p>
                      </div>
                      <div class="upgrade-item">
                        <h4>Resource Recycling System</h4>
                        <p><strong>Cost:</strong> 500 resources, 3 days</p>
                        <p><strong>Effect:</strong> +10% resource recovery from operations</p>
                        <p><strong>Priority:</strong> Low - Long-term benefit</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Personnel Management -->
            <section id="personnel" class="wiki-section" ref="personnelRef">
              <div class="section-header">
                <h2 class="section-title">Personnel Management</h2>
                <div class="section-divider"></div>
              </div>
              <div class="section-content">
                <p class="lead-text">
                  Your staff are your most valuable resource. Learn how to assign roles, manage fatigue, handle conflicts, and maintain morale to keep operations running smoothly.
                </p>

                <div class="personnel-guide">
                  <h3 class="subsection-title">Staff Roles & Assignments</h3>
                  <div class="role-cards">
                    <div class="role-card">
                      <h4>Inspection Officers</h4>
                      <p><strong>Primary Duty:</strong> Screen incoming individuals</p>
                      <p><strong>Skills:</strong> Tool operation, document verification, behavioral analysis</p>
                      <p><strong>Fatigue Rate:</strong> High - mentally demanding work</p>
                      <p><strong>Optimal Ratio:</strong> 1 officer per 20 daily arrivals</p>
                    </div>
                    <div class="role-card">
                      <h4>Medical Staff</h4>
                      <p><strong>Primary Duty:</strong> Treat patients, monitor quarantined individuals</p>
                      <p><strong>Skills:</strong> Medical knowledge, infection control, emergency response</p>
                      <p><strong>Fatigue Rate:</strong> Very High - physically and emotionally draining</p>
                      <p><strong>Optimal Ratio:</strong> 1 staff per 10 patients</p>
                    </div>
                    <div class="role-card">
                      <h4>Security Guards</h4>
                      <p><strong>Primary Duty:</strong> Maintain order, respond to threats, patrol perimeter</p>
                      <p><strong>Skills:</strong> Combat training, crowd control, threat assessment</p>
                      <p><strong>Fatigue Rate:</strong> Medium - physically demanding</p>
                      <p><strong>Optimal Ratio:</strong> 1 guard per 50 residents</p>
                    </div>
                    <div class="role-card">
                      <h4>Technicians</h4>
                      <p><strong>Primary Duty:</strong> Maintain equipment, repair systems, manage power</p>
                      <p><strong>Skills:</strong> Technical knowledge, problem-solving, equipment operation</p>
                      <p><strong>Fatigue Rate:</strong> Low - steady work pace</p>
                      <p><strong>Optimal Ratio:</strong> 1 technician per 100 residents</p>
                    </div>
                  </div>

                  <h3 class="subsection-title">Morale Management</h3>
                  <div class="morale-tips">
                    <div class="tip-item">
                      <strong>Regular Breaks:</strong> Ensure staff get adequate rest. Overworked staff make more mistakes and have lower morale.
                    </div>
                    <div class="tip-item">
                      <strong>Fair Treatment:</strong> Treat all staff equally. Favoritism or unfair decisions reduce trust and morale.
                    </div>
                    <div class="tip-item">
                      <strong>Clear Communication:</strong> Explain decisions when possible. Staff who understand the reasoning are more supportive.
                    </div>
                    <div class="tip-item">
                      <strong>Recognition:</strong> Acknowledge good work. Positive reinforcement improves performance and morale.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Event Handling -->
            <section id="events" class="wiki-section" ref="eventsRef">
              <div class="section-header">
                <h2 class="section-title">Event & Crisis Management</h2>
                <div class="section-divider"></div>
              </div>
              <div class="section-content">
                <p class="lead-text">
                  Unexpected events will test your checkpoint. Learn how to respond to emergencies, manage crises, and minimize damage when things go wrong. Stay updated with the latest <router-link to="/news" class="inline-link">game news and updates</router-link> to learn about new events and how the community handles them.
                </p>

                <div class="event-types">
                  <div class="event-type">
                    <h3 class="event-title">Power Outage</h3>
                    <div class="event-details">
                      <p><strong>Warning Signs:</strong> Generator maintenance overdue, fuel running low, unusual power consumption</p>
                      <p><strong>Immediate Actions:</strong></p>
                      <ul>
                        <li>Activate backup generator if available</li>
                        <li>Prioritize critical systems (medical, security)</li>
                        <li>Reduce non-essential power consumption</li>
                        <li>Dispatch technicians to repair primary generator</li>
                      </ul>
                      <p><strong>Prevention:</strong> Regular maintenance, fuel monitoring, backup systems</p>
                    </div>
                  </div>

                  <div class="event-type">
                    <h3 class="event-title">Outbreak in Quarantine</h3>
                    <div class="event-details">
                      <p><strong>Warning Signs:</strong> Multiple positive tests, rapid symptom progression, staff reports</p>
                      <p><strong>Immediate Actions:</strong></p>
                      <ul>
                        <li>Isolate affected area immediately</li>
                        <li>Evacuate non-infected individuals</li>
                        <li>Deploy medical staff with protective equipment</li>
                        <li>Review recent admissions for potential source</li>
                      </ul>
                      <p><strong>Prevention:</strong> Thorough screening, proper quarantine protocols, regular health checks</p>
                    </div>
                  </div>

                  <div class="event-type">
                    <h3 class="event-title">Security Breach</h3>
                    <div class="event-details">
                      <p><strong>Warning Signs:</strong> Perimeter alarms, suspicious activity, attempted break-ins</p>
                      <p><strong>Immediate Actions:</strong></p>
                      <ul>
                        <li>Deploy security forces to breach location</li>
                        <li>Activate drone surveillance if available</li>
                        <li>Secure critical areas (medical, command center)</li>
                        <li>Assess threat level and respond accordingly</li>
                      </ul>
                      <p><strong>Prevention:</strong> Strong perimeter defenses, regular patrols, surveillance systems</p>
                    </div>
                  </div>

                  <div class="event-type">
                    <h3 class="event-title">Roof Infiltration (New Threat)</h3>
                    <div class="event-details">
                      <p><strong>New Defense Challenge:</strong> The full release introduces a new threat where zombies can drop from rooftops, requiring constant vigilance.</p>
                      <p><strong>Warning Signs:</strong> Sounds from above, shadows moving on roofs, structural damage to upper levels</p>
                      <p><strong>Immediate Actions:</strong></p>
                      <ul>
                        <li>Always keep your weapon ready - zombies can drop at any moment</li>
                        <li>Scan rooftops regularly during inspections</li>
                        <li>Position security forces to cover overhead angles</li>
                        <li>Upgrade roof defenses and install overhead protection</li>
                      </ul>
                      <p><strong>Prevention:</strong> Install roof-mounted turrets, reinforce upper structures, maintain constant awareness of vertical threats</p>
                      <p><strong>Strategy:</strong> This new mechanic adds vertical dimension to defense. Never focus solely on ground-level threats - always watch the skies.</p>
                    </div>
                  </div>

                  <div class="event-type">
                    <h3 class="event-title">Resource Shortage</h3>
                    <div class="event-details">
                      <p><strong>Warning Signs:</strong> Low stock levels, increased consumption, supply delays</p>
                      <p><strong>Immediate Actions:</strong></p>
                      <ul>
                        <li>Implement rationing protocols</li>
                        <li>Prioritize essential resources (medical, food)</li>
                        <li>Request emergency supplies if possible</li>
                        <li>Reduce non-essential operations</li>
                      </ul>
                      <p><strong>Prevention:</strong> Stockpiling, resource monitoring, diversified supply sources</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Zombie Containment & Farming -->
            <section id="zombie-farming" class="wiki-section" ref="zombieFarmingRef">
              <div class="section-header">
                <h2 class="section-title">Zombie Containment & Farming System</h2>
                <div class="section-divider"></div>
              </div>
              <div class="section-content">
                <p class="lead-text">
                  <strong>New Feature:</strong> The full release introduces a controversial but profitable zombie containment system. Learn how to safely contain and maintain zombies for government research contracts.
                </p>

                <div class="info-box" style="margin-top: 24px;">
                  <h3 class="subsection-title">Zombie Containment Mechanics</h3>
                  <p><strong>Overview:</strong> This new system allows you to capture and contain zombies in specialized cages, feeding them with corpses to keep them alive for research purposes.</p>
                  
                  <div class="resource-cards" style="margin-top: 20px;">
                    <div class="resource-card">
                      <h3 class="resource-title">Containment Process</h3>
                      <div class="resource-details">
                        <p><strong>Step 1 - Capture:</strong> Successfully contain infected individuals before they fully transform, or capture zombies during defense events</p>
                        <p><strong>Step 2 - Containment:</strong> Transfer to specialized containment cages designed to hold zombies safely</p>
                        <p><strong>Step 3 - Maintenance:</strong> Feed contained zombies with corpses to keep them alive and stable</p>
                        <p><strong>Step 4 - Research:</strong> Government researchers study the contained zombies, providing you with payment</p>
                      </div>
                    </div>

                    <div class="resource-card">
                      <h3 class="resource-title">Economic Benefits</h3>
                      <div class="resource-details">
                        <p><strong>Government Contracts:</strong> Receive regular payments from government research programs</p>
                        <p><strong>Resource Income:</strong> Provides a steady source of income to fund base operations</p>
                        <p><strong>Research Data:</strong> Contained zombies may provide valuable information about virus mutations</p>
                        <p><strong>Risk vs Reward:</strong> Balance the moral implications with the economic benefits</p>
                      </div>
                    </div>
                  </div>

                  <h3 class="subsection-title" style="margin-top: 32px;">Strategic Considerations</h3>
                  <ul style="margin-top: 16px;">
                    <li><strong>Safety First:</strong> Containment cages must be properly maintained. A breach could be catastrophic</li>
                    <li><strong>Resource Management:</strong> Feeding zombies requires corpses, which must be obtained from liquidations or defense events</li>
                    <li><strong>Moral Choices:</strong> This system presents ethical dilemmas - decide if the economic benefits justify the practice</li>
                    <li><strong>Upgrade Priority:</strong> Invest in containment facility upgrades to increase capacity and safety</li>
                    <li><strong>Emergency Protocols:</strong> Have a plan for containment breaches - they can spread infection rapidly</li>
                  </ul>

                  <div class="scenario-cards" style="margin-top: 24px;">
                    <div class="scenario-card">
                      <h4>Scenario: Containment Breach</h4>
                      <p><strong>Situation:</strong> A containment cage fails, releasing zombies into your base.</p>
                      <p><strong>Recommendation:</strong> Immediately activate emergency protocols, deploy security forces, and isolate the breach area. Containment facilities should be located away from critical infrastructure.</p>
                    </div>
                    <div class="scenario-card">
                      <h4>Scenario: Corpse Shortage</h4>
                      <p><strong>Situation:</strong> You have contained zombies but no corpses to feed them.</p>
                      <p><strong>Recommendation:</strong> Plan ahead - maintain a supply of corpses from liquidations. Consider the economic viability before expanding containment capacity.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Strategies -->
            <section id="strategies" class="wiki-section" ref="strategiesRef">
              <div class="section-header">
                <h2 class="section-title">Advanced Strategies</h2>
                <div class="section-divider"></div>
              </div>
              <div class="section-content">
                <p class="lead-text">
                  Master advanced strategies to optimize your checkpoint operations, maximize efficiency, and achieve better outcomes. Combine these strategies with our comprehensive <router-link to="/guides" class="inline-link">survival guides</router-link> for the best results.
                </p>

                <div class="strategy-sections">
                  <div class="strategy-section">
                    <h3 class="strategy-title">Early Game Strategy</h3>
                    <div class="strategy-content">
                      <p><strong>Focus Areas:</strong></p>
                      <ul>
                        <li>Establish basic inspection protocols</li>
                        <li>Build essential infrastructure (quarantine, medical)</li>
                        <li>Stockpile critical resources</li>
                        <li>Train initial staff on procedures</li>
                      </ul>
                      <p><strong>Priority Upgrades:</strong> Basic scanner system, quarantine facility, backup power</p>
                      <p><strong>Common Mistakes:</strong> Being too lenient or too strict, ignoring resource management, neglecting staff morale</p>
                    </div>
                  </div>

                  <div class="strategy-section">
                    <h3 class="strategy-title">Mid Game Strategy</h3>
                    <div class="strategy-content">
                      <p><strong>Focus Areas:</strong></p>
                      <ul>
                        <li>Optimize inspection efficiency</li>
                        <li>Expand capacity for larger populations</li>
                        <li>Diversify resource sources</li>
                        <li>Develop specialized staff roles</li>
                      </ul>
                      <p><strong>Priority Upgrades:</strong> Advanced scanners, expanded facilities, resource systems</p>
                      <p><strong>Common Mistakes:</strong> Overextending resources, ignoring warning signs, poor crisis preparation</p>
                    </div>
                  </div>

                  <div class="strategy-section">
                    <h3 class="strategy-title">Late Game Strategy</h3>
                    <div class="strategy-content">
                      <p><strong>Focus Areas:</strong></p>
                      <ul>
                        <li>Maximize efficiency and automation</li>
                        <li>Prepare for major events and crises</li>
                        <li>Optimize resource allocation</li>
                        <li>Balance multiple competing priorities</li>
                      </ul>
                      <p><strong>Priority Upgrades:</strong> Automation systems, advanced defenses, research facilities</p>
                      <p><strong>Common Mistakes:</strong> Complacency, ignoring long-term consequences, poor crisis response</p>
                    </div>
                  </div>

                  <div class="strategy-section">
                    <h3 class="strategy-title">Pro Tips</h3>
                    <div class="strategy-content">
                      <ul class="pro-tips-list">
                        <li><strong>Always verify:</strong> Never rely on a single tool. Cross-reference multiple sources of information.</li>
                        <li><strong>Document everything:</strong> Keep notes on suspicious patterns. They may help identify future threats.</li>
                        <li><strong>Plan for failure:</strong> Have backup plans for critical systems. Redundancy saves lives.</li>
                        <li><strong>Trust but verify:</strong> Be compassionate but cautious. Balance humanity with security.</li>
                        <li><strong>Learn from mistakes:</strong> Every failure is a learning opportunity. Adapt your strategies.</li>
                        <li><strong>Resource efficiency:</strong> Every resource spent is one less for emergencies. Spend wisely.</li>
                        <li><strong>Staff welfare:</strong> Happy, rested staff perform better. Don't overwork them.</li>
                        <li><strong>Long-term thinking:</strong> Short-term gains may lead to long-term problems. Think ahead.</li>
                      </ul>
                    </div>
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
  top: 80px;
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
  margin: 8px 0 0 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.toc-sublist li {
  margin: 0;
}

.toc-sublink {
  display: block;
  padding: 8px 12px;
  color: var(--text-muted);
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  font-size: 12px;
  border-left: 2px solid transparent;
  position: relative;
  opacity: 0.8;
}

.toc-sublink:hover {
  color: var(--accent);
  background: rgba(57, 255, 20, 0.08);
  border-left-color: rgba(57, 255, 20, 0.5);
  transform: translateX(3px);
  opacity: 1;
}

.toc-sublink:active {
  color: var(--accent);
  background: rgba(57, 255, 20, 0.12);
  border-left-color: var(--accent);
  opacity: 1;
}

/* Tool Guide Cards */
.tool-guide-cards {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 24px;
}

.tool-guide-card {
  background: rgba(10, 15, 20, 0.5);
  border: 1px solid rgba(57, 255, 20, 0.2);
  border-radius: 12px;
  padding: 20px;
  transition: all 0.3s ease;
  scroll-margin-top: 100px;
}

.tool-guide-card:hover {
  border-color: var(--accent);
  box-shadow: 0 0 20px rgba(57, 255, 20, 0.3);
  transform: translateY(-2px);
}

.tool-guide-content {
  display: flex;
  gap: 24px;
  align-items: flex-start;
}

.tool-guide-text {
  flex: 1;
}

.tool-guide-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(57, 255, 20, 0.2);
}

.tool-guide-icon {
  font-size: 2rem;
  filter: drop-shadow(0 0 10px var(--accent));
}

.tool-guide-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--accent);
  margin: 0;
  text-shadow: 0 0 8px rgba(57, 255, 20, 0.6);
}

.tool-guide-body p {
  margin-bottom: 10px;
  font-size: 14px;
}

.tool-guide-body p:last-child {
  margin-bottom: 0;
}

.tool-guide-body strong {
  color: var(--text);
}

.tool-guide-image {
  flex-shrink: 0;
  width: 200px;
  height: 150px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(57, 255, 20, 0.2);
}

.tool-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.tool-guide-card:hover .tool-image {
  transform: scale(1.05);
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

  .tool-guide-content {
    flex-direction: column;
  }

  .tool-guide-image {
    width: 100%;
    height: 200px;
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
