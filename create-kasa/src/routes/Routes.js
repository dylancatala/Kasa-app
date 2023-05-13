import About from '../pages/about/About';
import Home from '../pages/home/Home';
import NotFound from '../pages/notfound/NotFound'
import Products from '../pages/products/Products'

export const routes =
  [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/products/:id",
      element: <Products />
    },
    {
      path: "*",
      element: <NotFound />
    }
  ];