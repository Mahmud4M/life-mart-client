import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
    return (
        <div>

            <div className="">
                <Navbar />
            </div>

            <div className='min-h-[calc(100vh-68px)]'>
                <Outlet />
            </div>

            <Footer />

        </div>
    );
};

export default Main;