import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Check from "../Components/Check/Check";
import Product from "../Components/Products/Product";
import Category from "../Pages/Category/Category";
import Signin from "../Components/Authentication/SignIn/Signin";
import SignUp from "../Components/Authentication/SignUp/SignUp";

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
    { path: '/sign-up', element: <SignUp /> },
    { path: '/sign-in', element: <Signin /> }
]);


export default router;