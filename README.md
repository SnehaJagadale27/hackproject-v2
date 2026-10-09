# 🚀 NexCore — Next-Gen Animated Team Portfolio Website

> **"FOUR MINDS. ONE VISION. INFINITE POSSIBILITIES."**  
> An Apple-keynote inspired, futuristic cyberpunk team portfolio engineered for high-stakes hackathons, tech exhibitions, and engineering showcases.

---

## 🌟 Key Features

### 🎬 1. Cinematic First-Page Intro
- **Opening Experience**: Pure black screen with ambient neon nebula, grid, and letter-by-letter reveal of *"FOUR MINDS. ONE VISION. INFINITE POSSIBILITIES."*
- **3D Logo Reveal**: Glowing 3D hexagon emblem with pulsing energy waves.
- **3D Metallic Team Name Flip**: Staggered character rotation with neon edge lighting, realistic depth, shadows, screen shake, and stinger SFX.
- **Full Accessibility**: Built-in *Skip Intro* and *Replay Intro* controls.

### 👥 2. 3D Team Member Reveal & Interactive Profiles
- **4 Specialized Profiles**:
  - `Member 01` — **Abhay Chougule** (AI & Data Science Engineer)
  - `Member 02` — **Avinash Kamble** (Fullstack & Cloud Architect)
  - `Member 03` — **Sneha Jagadale** (AI/ML Researcher & Innovation Specialist)
  - `Member 04` — **Sandhya Hake** (AI/ML & Embedded Systems Developer)
- **Interactive 3D Tilt Cards**: Specular glare follow-through, spring physics, and sound feedback.
- **Immersive Profile Modal**: Click any card to view detailed tabs (Technical Stack, DNA & Strengths, Achievements, and Social Links).
- **Standalone Individual Portfolio Pages**: Dedicated full routes (`/team/abhay`, `/team/avinash`, `/team/sneha`, `/team/sandhya`).

### 📦 3. Multi-Project Innovation Vault (8 Live Projects)
- **Featured Flagship Spotlight**: *Fullstack Digital Library System* with real-time Firebase Firestore, live stats, problem/solution breakdown, and live demo links.
- **Interactive Category Filtering**:
  - `All Projects`
  - `AI & ML` (MedVision, CogniHire, FinPulse, NeuroShield)
  - `Full-Stack` (Digital Library System, NexCode Cloud IDE)
  - `IoT & Cloud` (AeroSense Telemetry, AgroVision Precision Drone AI)

### 💻 4. Cybernetic Command Center (Interactive CLI Lab)
- **Terminal Emulator**: Live interactive command line interface supporting `$ help`, `$ team`, `$ projects`, `$ run test`, `$ stats`, and `$ clear`.
- **System Telemetry**: Real-time ping, uptime status, and interactive tech matrix.

### 🎵 5. Browser-Native Web Audio Experience
- **Zero-Dependency Web Audio API**: Synthesized futuristic UI clicks, sci-fi whooshes, modal open chimes, and bass drops without needing external audio files.
- **Floating Audio Widget**: Equalizer visualizer, Mute/Unmute toggle, and volume slider.

### ✍️ 6. Iconic Final Signature
- **3D Animated Team Reveal** concluding with the motto:  
  `"WE DON'T JUST BUILD PROJECTS. WE BUILD POSSIBILITIES."`

---

## 🛠️ Technology Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4 + Custom Glassmorphism & Cyberpunk Design System
- **Animations**: Framer Motion
- **Icons**: Lucide React + React Icons (`FaGithub`, `FaLinkedin`, `FaInstagram`)
- **Routing**: React Router v7
- **Audio**: HTML5 Web Audio API

---

## 🚀 Quick Start Guide

### 1. Prerequisites
- Node.js (v18.0.0 or higher)
- npm or pnpm / yarn

### 2. Installation
```bash
# Navigate to the project folder
cd Protfillo_web

# Install dependencies
npm install
```

### 3. Running Locally
```bash
npm run dev
```
Open **[http://localhost:5173/](http://localhost:5173/)** in your browser.

### 4. Production Build
```bash
npm run build
npm run preview
```

---

## ✏️ How to Edit Team Content & Configuration

All content is centralized in a single configuration file:  
📁 **[`src/data/teamData.js`](src/data/teamData.js)**

### Updating Team Name & Branding:
```js
export const siteConfig = {
  teamName: "NexCore",      // Change your team name here
  teamInitials: "NC",       // Team initials
  hackathonName: "Hackathon 2026",
  tagline: "Four minds. Different strengths. One mission — turning ideas into meaningful solutions.",
  badge: "Tech × Creativity × Impact",
};
```

### Replacing Member Details & Photos:
Place images inside `public/assets/team/` (e.g., `Abhay.jpeg`, `Avinash.jpeg`, `sneha.jpeg`, `sandhya.jpeg`), then edit `members` in `src/data/teamData.js`:
```js
export const members = [
  {
    id: 1,
    name: "Abhay Kakaso Chougule",
    role: "AI & Data Science Engineer",
    photo: "/assets/team/Abhay.jpeg",
    bio: "Your bio here...",
    technicalSkills: ["Python", "C++", "PyTorch", ...],
    github: "https://github.com/...",
    linkedin: "https://linkedin.com/in/...",
  },
  // ...
];
```

### Adding New Projects:
Edit `allProjects` in `src/data/teamData.js`:
```js
export const allProjects = [
  {
    id: "my-new-project",
    category: "AI & ML", // 'AI & ML' | 'Full-Stack' | 'IoT & Cloud'
    title: "Project Name",
    subtitle: "Short tagline",
    description: "Detailed description...",
    technologies: ["React", "FastAPI", "Docker"],
    badge: "Production Ready",
    github: "https://github.com/...",
    demo: "https://...",
    stats: "Key performance metric",
    highlights: ["Feature 1", "Feature 2", "Feature 3"],
  },
];
```

### 📊 Setting Up Google Sheets Contact Form Backend (1-Minute Setup):
1. Create a new [Google Sheet](https://sheets.new) with headers:
   `Timestamp | Name | Email | Service | Timeline | Message`
2. In Google Sheets, click **Extensions > Apps Script** and paste this snippet:
   ```javascript
   function doPost(e) {
     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
     sheet.appendRow([
       new Date(),
       e.parameter.name,
       e.parameter.email,
       e.parameter.service,
       e.parameter.timeline,
       e.parameter.message
     ]);
     return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
       .setMimeType(ContentService.MimeType.JSON);
   }
   ```
3. Click **Deploy > New Deployment > Web app**:
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Copy the Web App URL and paste it into `src/data/teamData.js`:
   ```js
   export const contactConfig = {
     googleSheetScriptUrl: "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec",
     // ...
   };
   ```

---

## 🌐 Deployment Instructions

### Deploy to Vercel
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: Next-gen team portfolio"
   git branch -M main
   git remote add origin <YOUR_GITHUB_REPO_URL>
   git push -u origin main
   ```
2. Go to [Vercel Dashboard](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset: **Vite**.
5. Click **Deploy**.

### Deploy to Netlify
1. Connect your GitHub repository to [Netlify](https://www.netlify.com/).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **Deploy Site**.

---

## ✅ Quality & Feature Checklist

- [x] Full-screen Cinematic First-Page Intro with text reveals and 3D metallic team flip.
- [x] Skip Intro & Replay Intro buttons.
- [x] 3D Card Tilts with specular reflection physics.
- [x] 4 Team member interactive cards + popup modals + standalone routes.
- [x] 8 Featured & innovation vault projects with live category filters.
- [x] Interactive Cybernetic Terminal with executable CLI commands.
- [x] Synthesized Web Audio API sound controls with volume slider and visualizer.
- [x] High-contrast accessible futuristic color palette (Electric Cyan, Deep Navy, Violet).
- [x] Responsive on Mobile, Tablet, and Desktop screens.
- [x] Iconic Final Signature with animated 3D typography.
