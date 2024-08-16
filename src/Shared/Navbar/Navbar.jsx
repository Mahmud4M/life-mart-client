import { BsCart4 } from "react-icons/bs";
import { FaChevronRight, FaRegHeart, FaSearch } from "react-icons/fa";
import "./Navbar.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Navbar = () => {

    // const [products, setProducts] = useState();
    // const [category, setCategory] = useState('');

    
    //   useEffect(() => {
    //     const productData = async () => {
    //         try {
    //             const result = await axios.get(`http://localhost:5000/products-data`);
    //             setProducts(result.data)
    //         } catch (error) {
    //             console.log(error.message);
    //         }
    //     };
    //     productData();
    // }, [])


    // const handleCategoryClick = (category) => {
    //     setCategory(category)
    //   };

    // console.log(products);


    return (
        <>
            <div className='flex z-10 justify-between items-center px-36 py-3 text-white bg-[#0f503c]'>
                <div>
                    <Link to='/' className="text-4xl font-bold cursor-pointer">Life<span className="text-yellow-600">Mart</span></Link>
                </div>
                <div className="flex items-center gap-10">
                    <div className="">
                        <Link><h1>Sign In / Register</h1></Link>
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
                            <Link to='/products'>Shop</Link>
                        </li>
                        <li> <FaChevronRight className="text-gray-400" /> </li>
                        <li className="link-underline link-underline-black link-underline:hover text-[#0f503c]">
                            <Link to='/products'>About Us</Link>
                        </li>
                        <li> <FaChevronRight className="text-gray-400" /> </li>
                        <li className="link-underline link-underline-black link-underline:hover text-[#0f503c]">
                            <Link to='/products'>Contact</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;