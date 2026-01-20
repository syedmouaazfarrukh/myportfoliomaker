# GitHub Pages Deployment Guide

## Quick Start

Your portfolio is already set up with git! Follow these steps to deploy:

### 1. Create GitHub Repository

1. Visit https://github.com/new
2. Repository name: `portfolio` (or any name you prefer)
3. Make it **Public**
4. **Don't** check any initialization options
5. Click "Create repository"

### 2. Connect and Push

Run these commands (replace `YOUR_USERNAME` with your GitHub username):

```bash
cd "/Users/mouaazfarrukh/Documents/Work/DashGen Solutions/myportfoliomaker"

# Add your GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to: `https://github.com/YOUR_USERNAME/portfolio/settings/pages`
2. Under "Source", select:
   - Branch: **main**
   - Folder: **/ (root)**
3. Click **Save**

### 4. Your Portfolio URL

Your site will be live at:
```
https://YOUR_USERNAME.github.io/portfolio/
```

(Replace `portfolio` with your actual repository name if different)

⏱️ **Note:** It takes 1-2 minutes for the site to go live after enabling Pages.

---

## Troubleshooting

### If you get authentication errors:
- Use a Personal Access Token instead of password
- Or use GitHub CLI: `gh auth login`

### If the site shows 404:
- Wait 2-3 minutes after enabling Pages
- Check that your repository is Public
- Verify the branch is named `main` (not `master`)

### To update your portfolio:
```bash
git add .
git commit -m "Your update message"
git push
```

Changes deploy automatically within 1-2 minutes!

