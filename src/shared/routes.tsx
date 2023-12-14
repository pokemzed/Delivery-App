import Cart from "../pages/Cart/Cart.tsx";
import Menu from "../pages/Menu/Menu.tsx";
import NotFound from "../pages/NotFound/NotFound.tsx";
import Product from "../pages/Product/Product.tsx";
import Login from "../pages/Login/Login.tsx";
import Register from "../pages/Register/Register.tsx";
import Success from "../pages/Success/Success.tsx";

export const routes = [
    {
        path: '/',
        element: <Menu/>
    },
    {
        path: '/cart',
        element: <Cart/>
    },
    {
      path: '/success',
      element: <Success/>
    },
    {
        path: '/menu/:id',
        element: <Product/>
    },
    {
        path: '/auth/login',
        element: <Login/>
    },
    {
        path: '/auth/reg',
        element: <Register/>
    },
    {
        path: '*',
        element: <NotFound/>
    }
]