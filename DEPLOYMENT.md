# Deployment Guide

## Option 1: Deploy to Vercel (Recommended - Easiest & Best for Next.js)

Vercel is made by the creators of Next.js and is the best option for hosting Next.js apps.

### Steps:

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to https://vercel.com
   - Sign up/login with your GitHub account
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"
   - Done! You'll get a URL like: `your-project.vercel.app`

3. **Important:** You need to update the data file handling. The current setup won't persist changes. We should use the initial courses from the code.

---

## Option 2: Deploy to GitHub Pages (Static Site Only)

GitHub Pages only supports static files. Your current site uses server-side features that won't work.

### To make it work with GitHub Pages, you would need to:
1. Remove API routes
2. Remove file system operations
3. Convert to static export
4. Store courses data in a static JSON file

**Note:** This is more complex and loses the ability to add courses through the admin panel.

---

## Recommendation

**Use Vercel** - it's free, supports all Next.js features, and takes 2 minutes to deploy!

