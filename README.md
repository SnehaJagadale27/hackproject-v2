# Team Portfolio Website

A premium, futuristic hackathon team portfolio built with React, Vite, Tailwind CSS, and Framer Motion. 
Designed to look professional, fast, and visually impressive — perfect for Tech + Non-Tech Hackathons.

## Features

- **Modern Aesthetic**: Glassmorphism, deep navy/dark mode, glow effects, animated background orbs.
- **Framer Motion Animations**: Scroll reveals, interactive hover states on cards, scaling images.
- **Single Source of Truth**: All page content (team info, text, project details, stats) is controlled via a single file `src/data/teamData.js`. No need to dive into UI code to change data.
- **Micro-Interactions**: Animated number counters, smooth scroll sticky Navbar, floating back-to-top button.
- **Responsive**: Mobile-first design for perfect display across all devices.

## Setup & Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## How to Edit Content

To replace placeholder text and images with your own:

1. Open `src/data/teamData.js`.
2. Edit the variables inside (e.g., `members`, `project`, `achievements`, etc).
3. The UI will instantly update on the site.

### Updating Images

Place your images in the `public/assets/` folder:
- Team Members: `public/assets/team/member1.jpg`, `member2.jpg`, etc.
- Project Image: `public/assets/project/project-main.jpg`

*Note: The app will fallback to beautiful gradient placeholders if an image is missing or the path is wrong!*

## Deployment

This website requires no backend and can be easily deployed to Vercel or Netlify.

### Vercel Deployment

1. Make sure your code is pushed to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and create a new project.
3. Import your GitHub repository.
4. Leave the default Vite settings (`npm run build` and `dist` directory output).
5. Click **Deploy**.
