# 🚀 **Deployment Guide - Portfolio Website**

## 📋 **Overview**

This guide explains how to deploy your portfolio website to GitHub Pages using the improved deployment workflow.

## 🔧 **Prerequisites**

- Git installed on your system
- GitHub account
- Node.js 18+ installed locally (for testing)

## 📁 **Repository Setup**

### 1. **Initial Repository Creation**

```bash
# Navigate to your project directory
cd d:\Kuliah\porto\web\webportnew\web-port

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "feat: Initial portfolio website deployment

✨ Features:
- Complete portfolio with React + Vite
- Responsive design with modern animations
- Hero section with CV download
- Skills, Experience, Projects sections
- Organizations and Certificates display
- Contact form with social links
- Green-blue theme with smooth transitions
"

# Add remote repository (replace with your repo URL)
git remote add origin https://github.com/RakhaYandra/web-port.git

# Push to GitHub
git push -u origin main
```

### 2. **GitHub Pages Configuration**

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **"GitHub Actions"**
4. The deployment will start automatically on the next push

## 🔄 **Deployment Process**

### **Automatic Deployment**

The workflow triggers automatically when you:

- Push to the `main` branch
- Manually trigger via GitHub Actions tab

### **Manual Deployment**

1. Go to your repository → **Actions** tab
2. Select **"Deploy Portfolio to GitHub Pages"**
3. Click **"Run workflow"**
4. Choose the `main` branch
5. Click **"Run workflow"**

## 📊 **Deployment Workflow Features**

### **🔍 Build Verification**

- ✅ Dependency installation with caching
- ✅ Code linting (ESLint)
- ✅ Production build generation
- ✅ Asset verification (including organization images)
- ✅ Build size optimization

### **📦 Artifact Management**

- ✅ Build artifacts upload/download
- ✅ File integrity verification
- ✅ Proper directory structure validation

### **🚀 Deployment Steps**

- ✅ GitHub Pages configuration
- ✅ Asset deployment
- ✅ DNS propagation
- ✅ Success notification with live URL

## 🐛 **Troubleshooting**

### **Common Issues & Solutions**

#### **1. Build Fails**

```bash
# Check locally first
npm ci
npm run build

# Common fixes:
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

#### **2. Assets Not Loading**

- ✅ Verify images exist in `/assets/` folder
- ✅ Check `vite.config.js` base path: `/web-port/`
- ✅ Ensure `getImageUrl()` utility is working

#### **3. Organization Section Issues**

- ✅ Check `organizations.json` syntax
- ✅ Verify all `imageSrc` files exist
- ✅ Ensure proper image formats (PNG/JPG)

#### **4. 404 Page Not Found**

- ✅ Verify repository name matches base path
- ✅ Check GitHub Pages source is set to "GitHub Actions"
- ✅ Wait 5-10 minutes for DNS propagation

#### **5. Workflow Permission Errors**

1. Go to repository **Settings** → **Actions** → **General**
2. Under **Workflow permissions**, select:
   - ✅ **"Read and write permissions"**
   - ✅ **"Allow GitHub Actions to create and approve pull requests"**

## 📱 **Post-Deployment**

### **Verification Checklist**

- [ ] Site loads at `https://RakhaYandra.github.io/web-port/`
- [ ] All sections render properly
- [ ] Images load correctly (hero, skills, organizations)
- [ ] Navigation works smoothly
- [ ] CV download button redirects to Google Drive
- [ ] Mobile responsiveness works
- [ ] Animations and transitions function

### **Performance Optimization**

- ✅ Images are optimized and compressed
- ✅ CSS/JS bundles are minified
- ✅ Lazy loading implemented where possible
- ✅ Proper caching headers set

## 🔄 **Updating Your Portfolio**

```bash
# Make your changes locally
# Test the changes
npm run dev

# Commit and push
git add .
git commit -m "update: description of changes"
git push origin main

# Deployment happens automatically!
```

## 📈 **Monitoring**

### **GitHub Actions**

- Monitor workflow runs in the **Actions** tab
- Check build logs for any issues
- View deployment success/failure notifications

### **Site Analytics**

Consider adding:

- Google Analytics
- GitHub repository insights
- Vercel/Netlify analytics (if migrating)

## 🌐 **Alternative Deployment Options**

### **Vercel (Recommended Alternative)**

```bash
npm install -g vercel
vercel --prod
```

### **Netlify**

1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`

## 📞 **Support**

If you encounter issues:

1. Check the **Actions** tab for detailed logs
2. Verify all files are committed and pushed
3. Review the troubleshooting section above
4. Contact repository maintainer if needed

---

## ✨ **Success!**

Your portfolio is now live at: **https://RakhaYandra.github.io/web-port/**

Enjoy your automated deployment! 🎉
