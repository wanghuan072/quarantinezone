<template>
  <div class="home-view">
    <main>
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-background-pattern"></div>
        <div class="container">
          <div class="hero-layout">
            <div class="hero-main">
              <div class="hero-badge">QUARANTINE ZONE: THE LAST CHECK</div>
              <h1 class="hero-title">QUARANTINE ZONE THE LAST CHECK</h1>
              <p class="hero-description">
                Screen survivors, manage scarce resources, and hold back the undead. Every choice matters and one mistake could unleash the plague beyond your walls.
              </p>
              <div class="hero-cta">
                <router-link to="/wiki" class="btn-primary">
                  View Wiki
                </router-link>
                <a href="/guides" class="btn-secondary">View Guides</a>
              </div>
              <div class="hero-info">
                <div class="info-item">
                  <span class="info-label">Developer</span>
                  <span class="info-value">Brigada Games</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Publisher</span>
                  <span class="info-value">Devolver Digital</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Platform</span>
                  <span class="info-value">Steam (PC)</span>
                </div>
              </div>
            </div>
            <div class="hero-video">
              <div class="video-player">
                <div class="video-thumbnail" v-if="!isVideoPlaying">
                  <div class="video-mask">
                    <span>QUARANTINE ZONE: THE LAST CHECK</span>
                  </div>
                  <div class="play-button" @click="playVideo">▶</div>
                </div>
                <div class="video-iframe" v-else>
                  <iframe
                    src="https://www.youtube.com/embed/qjLDbxB-Xt4"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    class="video-frame"
                  ></iframe>
                  <button class="close-video" @click="closeVideo">×</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- What is Section -->
      <section class="about-section">
        <div class="container">
          <div class="section-intro">
            <span class="section-tag">About the Game</span>
            <h2 class="section-heading">What is Quarantine Zone: The Last Check?</h2>
            <p class="section-lead">
              A deep and atmospheric simulation game where you command a critical checkpoint during a zombie outbreak.
            </p>
          </div>

          <div class="content-blocks">
            <div class="content-block block-large">
              <div class="block-header">
                <span class="block-number">01</span>
                <h3>Your Role as the Officer</h3>
              </div>
              <div class="block-body">
                <p>
                  At the heart of Quarantine Zone: The Last Check lies your responsibility to decide who gets in and who doesn't. Each day, new individuals appear—some desperate, some suspicious, and some possibly infected.
                </p>
                <p>
                  You are given tools like thermometers, infection detectors, and UV lights to inspect their health. However, not all symptoms are visible, and not every lie is easy to catch. You will have to make judgment calls without full information, knowing that a single wrong decision could allow an outbreak inside the zone. Learn more about these <router-link to="/wiki" class="inline-link">inspection tools</router-link> and how to use them effectively.
                </p>
              </div>
            </div>

            <div class="content-block">
              <div class="block-header">
                <span class="block-number">02</span>
                <h3>Manage the Base</h3>
              </div>
              <div class="block-body">
                <p>
                  Beyond the inspection booth, you are also in charge of maintaining and upgrading the facilities. You'll need to manage food, medical supplies, security forces, and energy. Check out our <router-link to="/guides" class="inline-link">survival guides</router-link> for tips on efficient resource management.
                </p>
                <p>
                  Events like power failures, food shortages, and external attacks will test your ability to keep the base operational.
                </p>
              </div>
            </div>

            <div class="content-block block-features">
              <div class="block-header">
                <span class="block-number">03</span>
                <h3>Core Features</h3>
              </div>
              <div class="block-body">
                <div class="feature-grid">
                  <div class="feature-item">
                    <div class="feature-icon">🔍</div>
                    <div class="feature-text">
                      <strong>Inspection Mechanics</strong>
                      <span>Screen individuals with advanced tools</span>
                    </div>
                  </div>
                  <div class="feature-item">
                    <div class="feature-icon">💬</div>
                    <div class="feature-text">
                      <strong>Dialogue Choices</strong>
                      <span>Make critical decisions under pressure</span>
                    </div>
                  </div>
                  <div class="feature-item">
                    <div class="feature-icon">⚡</div>
                    <div class="feature-text">
                      <strong>Dynamic Events</strong>
                      <span>Respond to emergencies and crises</span>
                    </div>
                  </div>
                  <div class="feature-item">
                    <div class="feature-icon">🏗️</div>
                    <div class="feature-text">
                      <strong>Base Upgrades</strong>
                      <span>Build and improve your facilities</span>
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
            <span class="section-tag">Gameplay</span>
            <h2 class="section-heading">Core Gameplay Mechanics</h2>
            <p class="section-lead">
              Master the three pillars of survival: inspection, resource management, and moral decision-making.
            </p>
          </div>

          <div class="mechanics-grid">
            <div class="mechanic-card">
              <div class="mechanic-icon">🔍</div>
              <h3>SEE IT? SORT IT</h3>
              <p>
                Use high-tech tools to uncover signs of infection among terrified survivors. Identify contraband, forbidden items, and even rare collectables as you work to keep your checkpoint secure. Explore our comprehensive <router-link to="/wiki" class="inline-link">tools guide</router-link> to master every inspection instrument.
              </p>
              <ul class="mechanic-list">
                <li>Send suspicious cases to quarantine for observation</li>
                <li>Route individuals to the lab for additional screening</li>
                <li>Save healthy survivors by sending them to the living block</li>
                <li>Deal with infected individuals decisively</li>
              </ul>
              <div class="mechanic-tools">
                <span class="tool-tag">Thermometers</span>
                <span class="tool-tag">Infection Detectors</span>
                <span class="tool-tag">UV Lights</span>
                <span class="tool-tag">Interview Transcripts</span>
              </div>
            </div>

            <div class="mechanic-card">
              <div class="mechanic-icon">⚡</div>
              <h3>COMMAND THE CATASTROPHE</h3>
              <p>
                As the survivor population swells, you'll be relied upon to provide essentials such as power, food, and medicine. When alarms are raised, pilot armed drones to ensure the infected don't breach the compound.
              </p>
              <ul class="mechanic-list">
                <li>Manage power, food, and medical supplies</li>
                <li>Pilot armed drones during emergencies</li>
                <li>Reinforce defenses and upgrade facilities</li>
                <li>Unlock resources, tools, and weapon upgrades</li>
              </ul>
              <div class="mechanic-tools">
                <span class="tool-tag">Resource Management</span>
                <span class="tool-tag">Drone Control</span>
                <span class="tool-tag">Base Expansion</span>
                <span class="tool-tag">Security Forces</span>
              </div>
            </div>

            <div class="mechanic-card">
              <div class="mechanic-icon">🧬</div>
              <h3>LEARN. ADAPT. SURVIVE.</h3>
              <p>
                When a quarantined survivor becomes an undead predator, all is not lost! Keep newly turned zombies confined to harvest and prepare samples in return for new tools, staff XP, and long-term upgrades.
              </p>
              <ul class="mechanic-list">
                <li>Harvest samples from confined zombies</li>
                <li>Analyze individuals with unknown symptoms</li>
                <li>Face fatal testing decisions</li>
                <li>Choose between preserving life or pursuing knowledge</li>
              </ul>
              <div class="mechanic-tools">
                <span class="tool-tag">Sample Harvesting</span>
                <span class="tool-tag">Staff XP</span>
                <span class="tool-tag">Moral Choices</span>
                <span class="tool-tag">Long-term Upgrades</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- System Requirements Section -->
      <section class="requirements-section">
        <div class="container">
          <div class="section-intro">
            <span class="section-tag">System</span>
            <h2 class="section-heading">System Requirements</h2>
            <p class="section-lead">
              Ensure your system meets the requirements to experience Quarantine Zone: The Last Check at its best.
            </p>
          </div>

          <div class="requirements-grid">
            <div class="requirement-card">
              <div class="requirement-header">
                <h3>Minimum Requirements</h3>
                <span class="requirement-badge">Basic</span>
              </div>
              <div class="requirement-body">
                <div class="requirement-item">
                  <span class="req-label">OS</span>
                  <span class="req-value">Windows 10 (64-bit)</span>
                </div>
                <div class="requirement-item">
                  <span class="req-label">Processor</span>
                  <span class="req-value">Intel i5 10400F</span>
                </div>
                <div class="requirement-item">
                  <span class="req-label">Memory</span>
                  <span class="req-value">16 GB RAM</span>
                </div>
                <div class="requirement-item">
                  <span class="req-label">Graphics</span>
                  <span class="req-value">NVIDIA GeForce GTX 1050 Ti</span>
                </div>
                <div class="requirement-item">
                  <span class="req-label">DirectX</span>
                  <span class="req-value">Version 12</span>
                </div>
                <div class="requirement-item">
                  <span class="req-label">Architecture</span>
                  <span class="req-value">64-bit processor required</span>
                </div>
              </div>
            </div>

            <div class="requirement-card requirement-recommended">
              <div class="requirement-header">
                <h3>Recommended Requirements</h3>
                <span class="requirement-badge recommended">Optimal</span>
              </div>
              <div class="requirement-body">
                <div class="requirement-item">
                  <span class="req-label">OS</span>
                  <span class="req-value">Windows 11 (64-bit)</span>
                </div>
                <div class="requirement-item">
                  <span class="req-label">Processor</span>
                  <span class="req-value">Intel i7 10700F</span>
                </div>
                <div class="requirement-item">
                  <span class="req-label">Memory</span>
                  <span class="req-value">16 GB RAM</span>
                </div>
                <div class="requirement-item">
                  <span class="req-label">Graphics</span>
                  <span class="req-value">NVIDIA GeForce RTX 3060</span>
                </div>
                <div class="requirement-item">
                  <span class="req-label">DirectX</span>
                  <span class="req-value">Version 12</span>
                </div>
                <div class="requirement-item">
                  <span class="req-label">Architecture</span>
                  <span class="req-value">64-bit processor required</span>
                </div>
              </div>
            </div>
          </div>

          <div class="requirements-note">
            <p>
              <strong>Platform:</strong> Windows PC (Steam) · Single-player · Partial controller support
            </p>
            <p>
              <strong>Release:</strong> Coming soon in 2025
            </p>
          </div>
        </div>
      </section>

      <!-- Player Reviews Section -->
      <section class="reviews-section">
        <div class="container">
          <div class="section-intro">
            <span class="section-tag">Community</span>
            <h2 class="section-heading">Player Reviews</h2>
            <p class="section-lead">See what players are saying about Quarantine Zone: The Last Check. Stay updated with the latest <router-link to="/news" class="inline-link">game news and developer updates</router-link>.</p>
          </div>
          <div class="reviews-container">
            <article class="review-card">
              <div class="reviewer">
                <span class="avatar">S</span>
                <div>
                  <h4>Survivor_42</h4>
                  <p>★★★★★</p>
                </div>
              </div>
              <p>
                "This game perfectly captures the tension of making life-or-death decisions. The inspection mechanics are incredibly detailed, and every choice feels meaningful. Highly recommended for fans of Papers, Please and survival games."
              </p>
            </article>
            <article class="review-card">
              <div class="reviewer">
                <span class="avatar">C</span>
                <div>
                  <span>Checkpoint_Commander</span>
                  <p>★★★★★</p>
                </div>
              </div>
              <p>
                "The resource management aspect adds so much depth. You're not just checking people—you're running an entire facility. The moral dilemmas are intense, and the multiple endings keep me coming back."
              </p>
            </article>
            <article class="review-card">
              <div class="reviewer">
                <span class="avatar">Z</span>
                <div>
                  <span>Zone_Guard</span>
                  <p>★★★★☆</p>
                </div>
              </div>
              <p>
                "Great atmosphere and storytelling. The game makes you feel the weight of every decision. Some UI elements could be improved, but overall it's a solid experience."
              </p>
            </article>
            <article class="review-card">
              <div class="reviewer">
                <span class="avatar">M</span>
                <div>
                  <span>Moral_Choice</span>
                  <p>★★★★★</p>
                </div>
              </div>
              <p>
                "A game of responsibility, not action. It challenges you to slow down, observe, and decide with care. The branching narrative based on your choices is excellent."
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- Game Screenshots Section -->
      <section class="screenshots-section">
        <div class="container">
          <div class="section-intro">
            <span class="section-tag">Gallery</span>
            <h2 class="section-heading">Game Screenshots</h2>
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
            <span class="section-tag">FAQ</span>
            <h2 class="section-heading">Frequently Asked Questions</h2>
          </div>
          <div class="faq-container">
            <article class="faq-item">
              <h3>What is Quarantine Zone: The Last Check?</h3>
              <p>
                It's a survival simulation game where you run a checkpoint in a post-outbreak world. You inspect civilians and manage a base under constant pressure.
              </p>
            </article>
            <article class="faq-item">
              <h3>What is the player's role in the game?</h3>
              <p>
                You act as a military officer responsible for screening refugees and maintaining the quarantine zone. Every day you decide who to let in, who to isolate, and how to use limited resources.
              </p>
            </article>
            <article class="faq-item">
              <h3>How does the inspection system work?</h3>
              <p>
                You use tools like scanners, UV lights, and thermometers to evaluate each person. You must also observe behavior and question their story to catch inconsistencies. Our detailed <router-link to="/guides" class="inline-link">inspection guides</router-link> cover everything from visual observation to advanced interrogation techniques. Start with our <router-link to="/guides/quarantine-zone-the-last-check-rookie-survival-manual" class="inline-link">Rookie Survival Manual</router-link> for beginners.
              </p>
            </article>
            <article class="faq-item">
              <h3>Are there consequences for wrong decisions?</h3>
              <p>
                Yes, mistakes can cause outbreaks, riots, or damage morale. Consequences build over time and change the direction of the game.
              </p>
            </article>
            <article class="faq-item">
              <h3>Is there a storyline or campaign mode?</h3>
              <p>
                Yes, the game has a branching narrative with multiple possible outcomes. Your choices shape the events and relationships within the quarantine. Navigate moral dilemmas and special events with our <router-link to="/guides/campaign-guide-special-events-moral-choices" class="inline-link">Campaign Guide</router-link>.
              </p>
            </article>
            <article class="faq-item">
              <h3>Can you upgrade your base?</h3>
              <p>
                Yes, you can invest in medical stations, better scanners, defenses, and quarantine cells. Each upgrade affects how efficiently your base runs. Discover the best upgrade strategies in our <router-link to="/guides" class="inline-link">base management guides</router-link>. Learn combat and defense strategies in our <router-link to="/guides/quarantine-zone-the-last-check-combat-base-defense-guide" class="inline-link">Combat & Base Defense Guide</router-link>.
              </p>
            </article>
            <article class="faq-item">
              <h3>Is combat part of the gameplay?</h3>
              <p>
                No direct combat, but you will manage armed units and make security decisions. The focus is on strategy and command, not action.
              </p>
            </article>
            <article class="faq-item">
              <h3>How long is a typical game session?</h3>
              <p>
                Sessions vary, but a full run through the campaign may take 6–12 hours. Replayability is high due to different choices and outcomes.
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
              <h2 class="steam-cta-title">Ready to Command the Checkpoint?</h2>
              <p class="steam-cta-description">
                Experience the intense decision-making and resource management of Quarantine Zone: The Last Check on Steam.
              </p>
            </div>
            <div class="steam-cta-button">
              <a href="https://store.steampowered.com/app/" class="btn-primary btn-steam" target="_blank" rel="noreferrer nofollow" >
                Get on Steam
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
 