import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Check from "../Components/Check/Check";
import Product from "../Components/Products/Product";
import Category from "../Pages/Category/Category";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/products',
                element: <Product />
            },
            {
                path: '/check',
                element: <Check />,
            },
            {
                path: '/category',
                element: <Category />
            }
        ]
    },
]);


export default router;