# NAVADEV C N — Personal Portfolio Monograph

> *“Building at the intersection of technology, business and ideas.”*

An editorial, luxury-grade personal portfolio engineered for **Navadev C N**, first-year **Computer Science and Business Systems (CSBS)** student at **Govt. Model Engineering College (MEC), Kerala**.

Designed with the aesthetic philosophy of **Apple + luxury fashion editorial + premium architecture monograph + modern technology brand**.

---

## 🏛️ Design System & Philosophy

- **Color Palette**: Deep obsidian carbon (`#09090b`), warm ivory (`#f6f3ed`), soft platinum slate (`#9c988f`), and gilded champagne bronze (`#cbb279`).
- **Typography Hierarchy**:
  - Display Serifs: *Cormorant Garamond* (Editorial headings, quotes, monograms)
  - Interface & Body Sans: *Plus Jakarta Sans* (Clean, legible, modern)
  - Coordinates & Indices: *JetBrains Mono* (Architectural notation, timestamps, system markers)
- **Zero Clutter**: No neon gradients, no generic AI glowing borders, no cartoon graphics, no progress bars, and no typical student templates.
- **Micro-Interactions**: Restrained scroll reveals, live Kochi IST clock, image zoom hover transitions, and interactive case study deep-dives.

---

## 📂 Project Structure

```
PROJECTS/
├── index.html                   # Semantic HTML5 editorial layout
├── styles.css                   # Custom luxury design system & responsive styling
├── script.js                    # Dependency-free vanilla JavaScript (IST clock, modals, uploader)
├── README.md                    # Documentation & customization guide
└── assets/
    └── images/
        ├── navadev-portrait.jpg     # Hero campaign portrait (3:4 ratio)
        ├── project-vecta.jpg        # Quantitative trading engine visual
        ├── project-synergy.jpg      # Enterprise ERP dashboard visual
        ├── project-atlas.jpg        # CSBS curriculum knowledge graph visual
        ├── project-aura.jpg         # Spatial luxury commerce visual
        └── interest-architecture.jpg# Minimalist architectural light study visual
```

---

## 📸 Updating Your Professional Photograph

You have two seamless options to set your own photo:

### Option 1: File Replacement (Permanent)
Simply copy your photo into `assets/images/` and name it `navadev-portrait.jpg` (replacing the default placeholder).

### Option 2: Live Browser Uploader (Instant)
1. Open the portfolio in any browser.
2. Click the **"Change Photo"** button at the top right of the hero portrait.
3. Drag and drop or browse to select your photo.
4. Your photo will immediately load and persist in browser local storage. You can click "Reset to Editorial Campaign" anytime.

---

## 🚀 How to Preview & Run

### Method 1: Direct File Opening
Double-click `index.html` in your file browser (Finder) or right-click `index.html` → *Open With* → *Google Chrome / Safari / Arc*.

### Method 2: Local Python Server (Recommended)
Run in Terminal:
```bash
python3 -m http.server 8080
```
Then visit `http://localhost:8080` in your web browser.

---

## 🌐 Deploying to the Web

This portfolio is built with pure web standards (HTML5, CSS3, Vanilla JS) with **zero build step**, making it instantaneous to deploy:

### Deploy to GitHub Pages:
1. Initialize a git repository and commit:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Navadev C N portfolio monograph"
   ```
2. Push to your GitHub repository `navadevcn.github.io` (or a project repo).
3. Go to **Repository Settings → Pages → Deploy from branch (main/root)**.

### Deploy to Vercel / Netlify / Cloudflare Pages:
Simply drag-and-drop the `PROJECTS` folder directly into the Vercel or Netlify dashboard. It deploys globally in under 10 seconds.

---

## 🛠️ Personalization Checklist

- [ ] **About Section**: Edit the narrative paragraphs in `index.html` (`#about`) to add any personal anecdotes or milestones.
- [ ] **Email & Links**: Update your LinkedIn and Twitter handles in the `#contact` section.
- [ ] **Projects**: Update GitHub repository URLs or add new case study entries in `script.js` (`caseStudyData`).
