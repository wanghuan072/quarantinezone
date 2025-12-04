# Quarantine Zone: The Last Check - Guide Site

A comprehensive guide website for Quarantine Zone: The Last Check game, built with Vue 3 and Vite.

## Project Structure

```
quarantinezone/
├── src/
│   ├── assets/
│   │   └── css/
│   │       └── global.css          # Global styles with military/quarantine theme
│   ├── components/
│   │   ├── AppHeader.vue           # Header with logo and navigation
│   │   └── AppFooter.vue            # Footer component
│   ├── views/
│   │   ├── HomeView.vue            # Home page with What is, Reviews, FAQ sections
│   │   ├── GuidesView.vue          # Guides page (placeholder)
│   │   └── WikiView.vue            # Wiki page (placeholder)
│   ├── App.vue                     # Main app component
│   ├── main.js                     # Application entry point
│   └── router/
│       └── index.js                # Vue Router configuration
├── index.html                      # HTML template
├── package.json                    # Dependencies
└── vite.config.js                  # Vite configuration
```

## Features

- **Military/Quarantine Theme**: Cold color scheme (blues, grays) matching the game's atmosphere
- **Responsive Design**: Mobile-friendly layout
- **Clean Navigation**: Simple header with logo and nav links (Home, Guides, Wiki)
- **Home Page Sections**:
  - Hero section with game introduction
  - What is Quarantine Zone section
  - Player Reviews section
  - Frequently Asked Questions section

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Design Notes

The design uses a military/quarantine checkpoint theme with:
- Primary accent color: `#4a9eff` (blue)
- Dark backgrounds: `#0a0f14` to `#141a20`
- Grid pattern overlay for technical/military feel
- Clean, functional typography
- Minimal UI elements focused on content

## Game Information

**Quarantine Zone: The Last Check** is a survival simulation game where players command a checkpoint during a zombie outbreak. Players must screen survivors, manage resources, and make critical decisions that affect the outcome of the game.

- Developer: Brigada Games
- Publisher: Devolver Digital
- Platform: Steam (PC)
