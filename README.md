# Product Compare

An interactive React app to compare products side-by-side, built with Tailwind CSS.

## Features

- Compare up to 3 products at once
- Dynamic feature comparison table
- Highlight differences in features and price
- Search and filter products
- Responsive design with dark mode support
- Persistent comparison list (localStorage)

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Build for production:

```bash
npm run build
```

Run tests:

```bash
npm test
```

## Folder Structure

```
product-compare/
├── build/                # Production build output
├── public/               # Static public assets
├── src/                  # Source code
│   ├── components/       # React components
│   │   ├── CompareBar.jsx
│   │   ├── CompareTable.jsx
│   │   └── ProductCard.jsx
│   ├── data/             # Product data
│   │   └── products.js
│   ├── App.jsx           # Main app component
│   ├── App.css           # App styles
│   ├── index.js          # Entry point
│   └── ...
├── package.json          # Project metadata and scripts
├── tailwind.config.js    # Tailwind CSS config
├── postcss.config.js     # PostCSS config
└── README.md             # Project documentation
```

---

Feel free to customize and extend the app for your needs!
