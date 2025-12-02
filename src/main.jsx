import { StrictMode , lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import NotFound from './components/NotFound.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'

const ProductList = lazy(() => import("./components/ProductList.jsx"));
const ProductDetail = lazy(() => import("./components/ProductDetail.jsx"));
const Cart = lazy(() => import("./components/Cart.jsx"));

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <App />,
    children : [
      {
        path : "/",
        element : (
          <Suspense fallback={<div>Loading...</div>}>
            <ProductList />
          </Suspense>
        )
      },
      {
        path : "/product/:id",
        element : (
          <Suspense fallback={<div>Loading....</div>}>
            <ProductDetail />
          </Suspense>
        )
      },
      {
        path : "/cart",
        element : (
          <Suspense fallback={<div>Loading....</div>}>
            <Cart />
          </Suspense>
        )
      }
    ],
    errorElement : <NotFound />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>,
)
