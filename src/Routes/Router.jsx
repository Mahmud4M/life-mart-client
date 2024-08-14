import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Main/Main";
import Banner from "../Components/Banner/Banner";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Banner />,
            }
        ]
    },
]);


export default router;