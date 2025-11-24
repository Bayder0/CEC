# 🚀 Steps to Push Code to GitHub

## ✅ Step 1: I've already done this for you
- ✅ Initialized Git repository
- ✅ Added all files (excluding node_modules)
- ✅ Created initial commit

## 📝 Step 2: Connect to Your GitHub Repository

You need to tell me your GitHub repository URL, or run these commands:

### Option A: If your GitHub repo URL is: `https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git`

Run this command (replace with YOUR actual URL):
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Option B: I can help you do it

**Tell me:**
1. Your GitHub username
2. Your repository name

Or just give me the full URL of your GitHub repository.

---

## 🔐 Step 3: Authentication

When you run `git push`, GitHub will ask you to authenticate:

**Option 1: Personal Access Token (Recommended)**
1. Go to GitHub.com → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name (e.g., "Nahrain Website")
4. Select scopes: `repo` (full control)
5. Click "Generate token"
6. Copy the token
7. When Git asks for password, paste the token instead

**Option 2: GitHub Desktop App**
- Download GitHub Desktop (easier for beginners)

---

## ✅ Step 4: After Push

Once the code is on GitHub, go to **Vercel.com** and:
1. Sign in with GitHub
2. Import your repository
3. Click "Deploy"
4. Get your live URL! 🎉

---

**Need help? Tell me your GitHub repo URL and I'll create the exact commands for you!**

