# Gecko Shop - Project Information

## 📋 Overview
A complete e-commerce React application for selling Eublepharis geckos, built with modern web technologies.

## 🏗️ Architecture

### Technology Stack
- **React 18** - UI Framework
- **Vite** - Build Tool & Dev Server
- **React Router** - Navigation
- **SCSS** - Styling with modular architecture
- **Axios** - HTTP requests (ready for backend integration)

### Project Structure
```
gecko-shop/
├── public/
│   └── gecko-icon.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductGrid.jsx
│   │   └── Filter.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   └── About.jsx
│   ├── data/
│   │   └── geckos.js (8 sample geckos)
│   ├── assets/scss/
│   │   ├── base/
│   │   │   ├── _variables.scss
│   │   │   └── _reset.scss
│   │   ├── layout/
│   │   │   ├── _header.scss
│   │   │   └── _main.scss
│   │   ├── components/
│   │   │   ├── _product-card.scss
│   │   │   ├── _product-grid.scss
│   │   │   └── _filter.scss
│   │   ├── pages/
│   │   │   └── _product-detail.scss
│   │   └── main.scss
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
├── README.md
└── .gitignore
```

## 🦎 Features

### Implemented
✅ Product listing with grid layout
✅ Category filtering
✅ Product detail pages
✅ Responsive design
✅ Modern SCSS styling
✅ Shopping cart structure
✅ Navigation system

### Ready for Development
🔄 Shopping cart functionality
🔄 User authentication
🔄 Checkout process
🔄 Payment integration
🔄 Admin dashboard
🔄 Search functionality
🔄 Reviews system

## 📦 Gecko Inventory

The shop includes 8 carefully selected gecko specimens:

1. **Classic Leopard Gecko** - $89.99
2. **Albinos Leopard Gecko** - $149.99
3. **High Yellow Leopard Gecko** - $119.99
4. **Blazing Blizzard** - $199.99
5. **RAPTOR** - $249.99
6. **Enigma** - $179.99
7. **White and Yellow** - $159.99
8. **Mack Snow** - $129.99

All geckos include:
- Full species information
- Morph details
- Age and gender
- High-quality images (using Unsplash)
- Detailed descriptions

## 🎨 Design System

### Colors
- **Primary**: Brown (#8B4513)
- **Secondary**: Chocolate (#D2691E)
- **Accent**: Orange (#FFA500)
- **Background**: Light Gray (#F5F5F5)

### Typography
- System font stack
- Size scale from 0.75rem to 2rem
- Clear hierarchy

### Components
- Card-based layout
- Smooth transitions
- Hover effects
- Responsive grid

## 🚀 Getting Started

```bash
# Navigate to project
cd gecko-shop

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📝 Code Quality

- Clean component structure
- Modular SCSS architecture
- Responsive design
- Accessible markup
- SEO-friendly setup

## 🔗 References

Inspired by: https://www.geckoboa.com/eublepharis-species

## 📄 License

MIT License - Feel free to use and modify

---

**Created**: 2024-10-27
**Framework**: React 18 + Vite
**Styling**: SCSS
**Status**: Ready for development
