
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Products from './pages/Products';
import Root from './pages/Root';
import ErrorPage from './pages/ErrorPage';
import ProductDetails from './pages/ProductDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'products', element: <Products /> },
      { path: 'products/:productId', element: <ProductDetails /> }
    ],

  },

]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
