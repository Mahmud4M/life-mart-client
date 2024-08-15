import { BsCart4 } from "react-icons/bs";
import { FaChevronRight, FaRegHeart, FaSearch } from "react-icons/fa";
import "./Navbar.css"
import { useState } from "react";

const Navbar = () => {

    const [active, setActive] = useState(false);

    window.addEventListener("scroll", function () {
        if (this.window.scrollY > 100) {
            setActive(true)
        }
        else {
            setActive(false)
        }
    })

    return (
        <>
            <div className='flex z-10 justify-between items-center px-36 py-3 text-white bg-[#0f503c]'>
                <div>
                    <a href="#" className="text-4xl font-bold cursor-pointer">Life<span className="text-yellow-600">Mart</span></a>
                </div>
                <div className="flex items-center gap-5">
                    <div>
                        <form>
                            <div className="flex flex-col p-1.5 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                                <input className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent" type="text" name="email" placeholder="Search your product ..." aria-label="Search your product ..." />

                                <button className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"><FaSearch className="text-yellow-600 text-xl" /></button>
                            </div>
                        </form>
                    </div>

                    <div className="relative">
                        <div><FaRegHeart className="w-9 h-9" /></div>
                        <div className="bg-yellow-600 w-6 h-6 rounded-full text-white text-center absolute top-[-7px] left-[20px]">4</div>
                    </div>

                    <div className="relative">
                        <div><BsCart4 className="w-9 h-9" /></div>
                        <div className="bg-yellow-600 w-6 h-6 rounded-full text-white text-center absolute top-[-7px] left-[20px]">0</div>
                    </div>
                </div>
            </div>
            <div className="flex items-center px-36 py-3 uppercase text-gray-600 border-b-2 border-gray-300 font-roboto">
                <div>
                    <ul className="flex items-center gap-5 ">
                        <li className="link-underline link-underline-black link-underline:hover text-[#0f503c]">
                            <a href="/">Home</a>
                        </li>
                        <li> <FaChevronRight className="text-gray-400" /> </li>
                        <li className="link-underline link-underline-black link-underline:hover text-[#0f503c]">
                            <a href="/">About</a>
                        </li>
                        <li> <FaChevronRight className="text-gray-400" /> </li>
                        <li className="link-underline link-underline-black link-underline:hover text-[#0f503c]">
                            <a href="/">Shop</a>
                        </li>
                        <li> <FaChevronRight className="text-gray-400" /> </li>
                        <li className="link-underline link-underline-black link-underline:hover text-[#0f503c]">
                            <a href="/">Product</a>
                        </li>
                        <li> <FaChevronRight className="text-gray-400" /> </li>
                        <li className="link-underline link-underline-black link-underline:hover text-[#0f503c]">
                            <a href="/">Cart</a>
                        </li>
                        <li> <FaChevronRight className="text-gray-400" /> </li>
                        <li className="link-underline link-underline-black link-underline:hover text-[#0f503c]">
                            <a href="/">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;