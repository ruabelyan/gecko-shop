# 🦎 Gecko Shop - Eublepharis Marketplace

A modern, responsive e-commerce website for selling Leopard Geckos and Eublepharis morphs, built with React and SCSS.

## ✨ Features

- 🏠 **Home Page** with hero section and featured geckos
- 🦎 **Product Grid** with filtering by category
- 📱 **Responsive Design** - works on all devices
- 🎨 **Modern UI** with smooth animations
- 🛒 **Shopping Cart** functionality
- 📄 **Product Details** page for individual geckos
- 🎯 **Category Filtering** system

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:5173`

## 📁 Project Structure

```
gecko-shop/
├── src/
│   ├── components/          # React components
│   │   ├── Header.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductGrid.jsx
│   │   └── Filter.jsx
│   ├── pages/              # Page components
│   │   ├── Home.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   └── About.jsx
│   ├── assets/
│   │   └── scss/          # SCSS styles
│   │       ├── base/      # Variables & reset
│   │       ├── components/ # Component styles
│   │       ├── layout/     # Layout styles
│   │       └── pages/     # Page styles
│   ├── data/              # Data files
│   │   └── geckos.js     # Gecko inventory
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Entry point
├── index.html
├── vite.config.js
└── package.json
```

## 🦎 Gecko Species

The shop currently features:
- **Eublepharis macularius** (Leopard Geckos)
  - Classic morphs
  - Albinos (Tremper)
  - High Yellow
  - Blazing Blizzard
  - RAPTOR
  - Enigma
  - Mack Snow
  - And more...

## 🎨 SCSS Architecture

The project uses a modular SCSS structure:

- **`base/`** - Variables, reset styles, typography
- **`layout/`** - Header, main, footer
- **`components/`** - Reusable components
- **`pages/`** - Page-specific styles

### Color Scheme
- Primary: `#8B4513` (Brown)
- Secondary: `#D2691E` (Chocolate)
- Accent: `#FFA500` (Orange)
- Background: `#F5F5F5` (Light Gray)

## 📦 Dependencies

- **React** 18.2.0 - UI library
- **React Router** 6.20.0 - Routing
- **Vite** 5.0.8 - Build tool
- **SCSS** 1.69.5 - CSS preprocessor
- **Axios** 1.6.2 - HTTP client

## 🔧 Customization

### Adding New Geckos

Edit `src/data/geckos.js`:

```javascript
{
  id: 9,
  name: "Your Gecko Name",
  species: "Eublepharis macularius",
  morph: "Morph Type",
  price: 199.99,
  image: "image-url",
  age: "Adult",
  gender: "Female",
  description: "Description here",
  available: true,
  category: "macularius"
}
```

### Changing Colors

Edit `src/assets/scss/base/_variables.scss`:

```scss
$primary-color: #YOUR_COLOR;
$secondary-color: #YOUR_COLOR;
```

## 🌐 Routes

- `/` - Home page with product grid
- `/gecko/:id` - Product detail page
- `/cart` - Shopping cart
- `/about` - About page

## 🎯 Future Enhancements

- [ ] Shopping cart functionality
- [ ] User authentication
- [ ] Payment integration
- [ ] Order management
- [ ] Search functionality
- [ ] Reviews and ratings
- [ ] Email notifications
- [ ] Admin dashboard

## 📝 License

MIT License

## 🦎 About Eublepharis

Eublepharis is a genus of geckos that includes the popular Leopard Gecko (Eublepharis macularius). These geckos are known for their beautiful morphs and gentle temperament.

---

Built with ❤️ using React & SCSS
