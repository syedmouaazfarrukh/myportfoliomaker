# Portfolio Website

A modern, clean portfolio website inspired by the modern design aesthetics

## Features

- **Modern Dark Theme**: Sleek dark background with gradient accents
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Scroll-triggered animations and hover effects
- **Organized Sections**: 
  - Header with name and tagline
  - Skills showcase
  - Experience (organized by year)
  - Education
  - Research Papers
  - Projects
  - Speaker Sessions
  - Notable Mentions
  - Travel Stats

## Getting Started

1. **Open the website**: Simply open `index.html` in your web browser
2. **Customize your content**: Edit `index.html` to add your own information:
   - Update your name and tagline in the header section
   - Add your skills in the skills section
   - Fill in your experience, education, projects, etc.
   - Customize colors and styling in `styles.css` if needed

## File Structure

```
myportfoliomaker/
├── index.html      # Main HTML file
├── styles.css      # All styling and design
├── script.js       # Interactive features and animations
└── README.md       # This file
```

## Customization Guide

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --bg-color: #0a0a0a;           /* Background color */
    --text-primary: #ffffff;        /* Main text color */
    --text-secondary: #a0a0a0;      /* Secondary text color */
    --accent-color: #3b82f6;        /* Accent/primary color */
    --border-color: #1f1f1f;        /* Border color */
    --card-bg: #111111;             /* Card background */
}
```

### Adding Experience Items

Use this template in the experience section:

```html
<div class="experience-item">
    <div class="exp-header">
        <span class="exp-icon">AB</span>
        <div class="exp-title-group">
            <h4 class="exp-company">Company Name</h4>
            <span class="exp-status">Present</span>
        </div>
    </div>
    <p class="exp-role">Your Role</p>
    <p class="exp-duration">Jan. 2025 - Present</p>
    <p class="exp-description">Description here.</p>
    <ul class="exp-highlights">
        <li>Highlight 1</li>
        <li>Highlight 2</li>
    </ul>
</div>
```

### Status Badges

Available status classes:
- `exp-status` - Default (Present/Current)
- `exp-status.acquired` - Green badge for acquired companies
- `exp-status.paused` - Yellow badge for paused projects

### Adding Skills

Simply add more skill tags:

```html
<span class="skill-tag">Your Skill</span>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment to GitHub Pages

Your portfolio is ready to be deployed to GitHub Pages! Follow these steps:

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in with your account (mouaazfarrukh99@gmail.com)
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository (e.g., `portfolio` or `my-portfolio`)
4. Make it **Public** (required for free GitHub Pages)
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

### Step 2: Push Your Code to GitHub

Run these commands in your terminal (from the project directory):

```bash
# Add your GitHub repository as remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Rename branch to main if needed
git branch -M main

# Push your code
git push -u origin main
```

**Note:** Replace `YOUR_USERNAME` with your GitHub username and `REPO_NAME` with your repository name.

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **Deploy from a branch**
5. Choose **main** branch and **/ (root)** folder
6. Click **Save**

### Step 4: Access Your Portfolio

Your portfolio will be available at:
```
https://YOUR_USERNAME.github.io/REPO_NAME/
```

**Note:** It may take a few minutes for the site to be live. GitHub will show you the URL once it's ready.

### Updating Your Portfolio

Whenever you make changes:

```bash
git add .
git commit -m "Update portfolio"
git push
```

Your changes will automatically be deployed to GitHub Pages within a few minutes!

## License

Feel free to use this template for your own portfolio!
