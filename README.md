# 🚀 Rakha Putra Pebri Yandra - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Full-Stack Developer and UI/UX Designer.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-4.4.5-yellow?style=for-the-badge&logo=vite)

## ✨ Features

- **🎨 Modern Design**: Clean, professional interface with glassmorphism effects
- **📱 Fully Responsive**: Optimized for all devices and screen sizes
- **⚡ Fast Performance**: Built with Vite for lightning-fast load times
- **🌟 Smooth Animations**: Engaging micro-interactions and scroll animations
- **♿ Accessible**: WCAG compliant with proper focus management
- **🎯 Interactive Filtering**: Dynamic project filtering by technology
- **💌 Contact Integration**: Direct email integration with form validation
- **🔍 SEO Optimized**: Proper meta tags and semantic HTML structure

## 🛠️ Technologies Used

### Frontend

- **React 18.2.0** - Modern JavaScript library for building user interfaces
- **Vite 4.4.5** - Next generation frontend tooling
- **CSS Modules** - Scoped and maintainable styling
- **Modern CSS** - Custom properties, Grid, Flexbox, and advanced animations

### Design System

- **Custom CSS Variables** - Consistent theming and easy customization
- **Responsive Grid System** - Mobile-first responsive design
- **Glassmorphism UI** - Modern frosted glass aesthetic
- **Smooth Animations** - CSS transitions and keyframe animations

### Tools & Deployment

- **ESLint** - Code linting and quality assurance
- **GitHub Pages** - Static site hosting
- **Figma** - Design and prototyping

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/RakhaYandra/web-port.git
   cd web-port
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173/web-port/`

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## 📁 Project Structure

```
src/
├── components/           # Reusable React components
│   ├── About/           # About section with personal info
│   ├── Contact/         # Contact form and social links
│   ├── Experience/      # Work experience timeline
│   ├── Hero/            # Landing section with intro
│   ├── Navbar/          # Navigation with mobile menu
│   ├── Projects/        # Project showcase with filtering
│   └── Skills/          # Technical skills display
├── data/                # JSON data files
│   ├── history.json     # Work experience data
│   ├── projects.json    # Projects information
│   └── skills.json      # Technical skills list
├── assets/              # Images and static assets
├── App.jsx              # Main application component
├── vars.css             # CSS custom properties
├── index.css            # Global styles
└── main.jsx             # Application entry point
```

## 🎨 Design System

### Color Palette

- **Primary**: `#6366f1` (Indigo)
- **Secondary**: `#ec4899` (Pink)
- **Accent**: `#06b6d4` (Cyan)
- **Background**: `#0a0e1a` (Dark Blue)
- **Text**: `#ffffff` / `#e2e8f0` (White/Light Gray)

### Typography

- **Primary Font**: Inter (Google Fonts)
- **Monospace**: JetBrains Mono
- **Font Sizes**: Fluid typography with clamp()

### Components

- **Glass Cards**: Backdrop blur with subtle borders
- **Gradient Buttons**: Smooth hover animations
- **Responsive Grid**: Auto-fit grid layouts
- **Smooth Scrolling**: Enhanced user experience

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
--breakpoint-sm: 640px; /* Small devices */
--breakpoint-md: 768px; /* Tablets */
--breakpoint-lg: 1024px; /* Laptops */
--breakpoint-xl: 1280px; /* Desktops */
--breakpoint-2xl: 1536px; /* Large screens */
```

## 🔧 Customization

### Adding New Projects

Edit `src/data/projects.json`:

```json
{
  "title": "Project Name",
  "imageSrc": "projects/image.png",
  "description": "Project description",
  "skills": ["React", "Node.js"],
  "demo": "https://demo-link.com",
  "source": "https://github.com/username/repo"
}
```

### Updating Skills

Edit `src/data/skills.json`:

```json
{
  "title": "Skill Name",
  "imageSrc": "skills/skill-icon.png"
}
```

### Modifying Theme Colors

Update `src/vars.css`:

```css
:root {
  --color-primary: #your-color;
  --gradient-primary: linear-gradient(135deg, #color1, #color2);
}
```

## 🚀 Performance Optimizations

- **Code Splitting**: Automatic chunk splitting by Vite
- **Image Optimization**: Responsive images with proper alt tags
- **CSS Optimization**: Purged unused styles in production
- **Lazy Loading**: Intersection Observer for animations
- **Minification**: Automatic minification in production builds

## 📈 SEO Features

- **Meta Tags**: Comprehensive meta information
- **Structured Data**: JSON-LD for better search results
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Alt Tags**: Descriptive alternative text for images
- **Sitemap**: Auto-generated sitemap for search engines

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Rakha Putra Pebri Yandra**

- 📧 Email: rakhaputrapebriyandra272@gmail.com
- 💼 LinkedIn: [linkedin.com/in/rakhaputrapebriyandra](https://linkedin.com/in/rakhaputrapebriyandra)
- 🐱 GitHub: [github.com/RakhaYandra](https://github.com/RakhaYandra)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from various open-source icon libraries
- Font families from Google Fonts
- Color palette inspired by modern design systems

---

⭐ **If you found this project helpful, please give it a star!** ⭐
