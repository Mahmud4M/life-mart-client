import { BsCart4 } from "react-icons/bs";
import { FaChevronRight, FaRegHeart } from "react-icons/fa";
import "./Navbar.css"
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    //Sign Out
    const signOut = () => {
        return logOut
    }

    return (
        <>
            <div className='nav-one flex z-10 justify-between items-center px-36 py-3 text-white bg-[#0f503c]'>
                <div>
                    <Link to='/' className="logo text-4xl font-bold cursor-pointer">Life<span className="text-yellow-600">Mart</span></Link>
                </div>
                <div className="nav-item flex items-center gap-10">
                    <div className="sign-in">
                        {
                            user ? <>
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img
                                                alt="Tailwind CSS Navbar component"
                                                src='/user.jpg' />
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow border border-yellow-600">
                                        <li><Link className="text-black">Profile </Link> </li>
                                        <li><Link onClick={signOut()} className="text-black">Logout</Link></li>
                                    </ul>
                                </div>
                            </>
                                :
                                <>
                                    <Link to='/sign-in'>Sign In</Link>
                                    <Link className="ml-5" to='/sign-up'>Register</Link>
                                </>
                        }
                    </div>
                    <div className="relative">
                        <div><FaRegHeart className="heart w-9 h-9" /></div>
                        <div className="heart-notif bg-yellow-600 w-6 h-6 rounded-full text-white text-center absolute top-[-7px] left-[20px]">4</div>
                    </div>

                    <div className="relative">
                        <div><BsCart4 className="cart w-9 h-9" /></div>
                        <div className="cart-notif bg-yellow-600 w-6 h-6 rounded-full text-white text-center absolute top-[-7px] left-[20px]">0</div>
                    </div>
                </div>
            </div>

            <div className="nav-two flex items-center px-36 py-3 uppercase text-gray-600 border-b-2 border-gray-300 font-roboto">
                <div>
                    <ul className="nav-ul flex items-center gap-5 ">
                        <li className="link-underline link-underline-black link-underline:hover text-[#0f503c]">
                            <Link className="nav-li" to="/">Home</Link>
                        </li>
                        <li> <FaChevronRight className="nav-icon text-gray-400" /> </li>
                        <li className="link-underline link-underline-black link-underline:hover text-[#0f503c]">
                            <Link className="nav-li" to='/products'>Shop</Link>
                        </li>
                        <li> <FaChevronRight className="nav-icon text-gray-400" /> </li>
                        <li className="link-underline link-underline-black link-underline:hover text-[#0f503c]">
                            <Link className="nav-li" to='/products'>About Us</Link>
                        </li>
                        <li> <FaChevronRight className="nav-icon text-gray-400" /> </li>
                        <li className="link-underline link-underline-black link-underline:hover text-[#0f503c]">
                            <Link className="nav-li" to='/products'>Contact</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;