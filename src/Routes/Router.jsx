import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Check from "../Components/Check/Check";

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
                path: '/check',
                element: <Check />,
            }
        ]
    },
]);


export default router;