import Cart from "../pages/Cart/Cart.tsx";
import Menu from "../pages/Menu/Menu.tsx";
import NotFound from "../pages/NotFound/NotFound.tsx";
import Product from "../pages/Product/Product.tsx";

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
        path: '/menu/:id',
        element: <Product/>
    },
    {
        path: '*',
        element: <NotFound/>
    }
]