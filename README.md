# 🛒 ShoppyGlobe - E-commerce Application

ShoppyGlobe is a fully functional, responsive e-commerce application built with React and Vite. It features a modern UI, robust state management using Redux Toolkit, and seamless client-side routing.

This project was developed to demonstrate proficiency in advanced React concepts including Hooks, Redux, Performance Optimization (Lazy Loading), and API integration.

## Features

- roduct Browsing: Fetches product data dynamically from the DummyJSON API(https://dummyjson.com/).
- Search Functionality: Real-time product filtering by title and tags using Redux state.
- Shopping Cart:
    - Add items to cart.
    - Adjust quantities (increment/decrement).
    - Remove items.
    - Automatic total price calculation.
- Product Details: Dynamic routing to view detailed information for individual products.
- Checkout Flow: A functional checkout form with validation that clears the cart upon order placement.
- Performance Optimization: 
    - Lazy Loading:Route-based code splitting using `React.lazy` and `Suspense`.
    - Image Optimization: Lazy loading for product images to improve initial load time.
- Error Handling: Custom 404 "Not Found" page and graceful API error handling.

## Tech Stack

- Frontend Library: React
- State Management: Redux Toolkit & React-Redux
- Routing:React Router DOM
- Styling:Tailwind CSS
- API: DummyJSON(https://dummyjson.com/)

## Project Structure

src/ 
|- components/
│   |- Cart.jsx           # Cart view and total calculation
│   |- CartItem.jsx       # Individual cart item controls
│   |- Checkout.jsx       # Order form and summary
│   |- Header.jsx         # Navigation and Search bar
│   |- NotFound.jsx       # 404 Error page
│   |- ProductDetail.jsx  # Single product view
│   |- ProductItem.jsx    # Product card component
│   |- ProductList.jsx    # Main grid display with search logic
|- redux/
│   |- cartSlice.js       # Redux logic (Actions & Reducers)
│   |- store.js           # Redux Store configuration
|- utils/
│   |- useFetchProducts.js # Custom Hook for API fetching
|- App.jsx                # Layout wrapper
|- main.jsx               # Entry point with Router configuration

# INSTALLATION & SETUP

1. Clone the repository:
    - git clone https://github.com/your-username/your-repo-name.git
    - cd your-repo-name

2. Install  All Dependencies:
    - npm install
    (This will automatically install All These Dependencies which required to this app.)

3. Setup Tailwind CSS
    npm install tailwindcss @tailwindcss/vite

4. Run the project:
    npm run dev\

# Git Repo Link
https://github.com/Trupal-Gondaliya/ShoppyGlobe