<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">
            <span class="logo-text">QUARANTINE ZONE</span>
          </div>
          <p class="footer-text">
            Comprehensive Quarantine Zone: The Last Check resources including guides, wiki, and strategies to help you command the checkpoint and survive the outbreak.
          </p>
        </div>
        <div class="link-column">
          <h2>Navigate</h2>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/guides">Guides</router-link></li>
            <li><router-link to="/wiki">Wiki</router-link></li>
          </ul>
        </div>
        <div class="link-column">
          <h2>Legal</h2>
          <ul>
            <li><a href="/privacy-policy" rel="nofollow">Privacy Policy</a></li>
            <li><a href="/terms-of-service" rel="nofollow">Terms of Service</a></li>
            <li><a href="/copyright" rel="nofollow">Copyright</a></li>
            <li><a href="/about-us" rel="nofollow">About Us</a></li>
            <li><a href="/contact-us" rel="nofollow">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 Quarantine Zone Guide. All rights reserved.</p>
        <p>This is an independent fan site created for informational purposes only. All trademarks and copyrights belong to their respective owners.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  padding: 30px 0 20px 0;
  background: linear-gradient(180deg, rgba(10, 15, 20, 0.98), rgba(20, 30, 40, 0.95));
  border-top: 2px solid var(--accent);
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.8), 0 -4px 30px var(--neon-glow);
  position: relative;
}

.site-footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
  opacity: 0.6;
}

.footer-grid {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
}

.footer-logo {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.logo-text {
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: var(--accent);
  text-transform: uppercase;
  text-shadow: 
    0 0 10px var(--accent),
    0 0 20px var(--neon-glow),
    2px 2px 0 var(--dark-green);
}

.footer-text {
  color: var(--text-muted);
  margin-bottom: 16px;
  line-height: 1.6;
}

.footer-brand {
  flex: 1;
  max-width: 400px;
}

.link-column h2 {
  color: var(--text);
  font-size: 1.2rem;
  margin-bottom: 16px;
  font-weight: 600;
}

.link-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.link-column a {
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.2s ease;
}

.link-column a:hover {
  color: var(--accent);
}

.footer-bottom {
  margin-top: 30px;
  border-top: 1px solid var(--border-color);
  padding-top: 20px;
  color: var(--text-muted);
  font-size: 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
}

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .footer-grid {
    flex-wrap: wrap;
    gap: 30px;
  }

  .footer-brand {
    max-width: 100%;
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .site-footer {
    padding: 20px 0;
  }

  .footer-grid {
    flex-direction: column;
    gap: 20px;
  }

  .footer-text {
    font-size: 0.9rem;
  }

  .link-column h2 {
    font-size: 1rem;
  }

  .link-column a {
    font-size: 0.9rem;
  }

  .footer-bottom {
    font-size: 0.8rem;
  }
}
</style>

