import "./Banner.css";
import { Carousel } from "flowbite-react";
import { TbCategory } from "react-icons/tb";
import One from "../../assets/Banner/One.jpg";
import Two from "../../assets/Banner/Two.jpg";
import Three from "../../assets/Banner/Three.jpg";
import Four from "../../assets/Banner/Four.jpg";
import Five from "../../assets/Banner/Five.jpg";
import { FaBriefcaseMedical, FaLeaf } from "react-icons/fa";
import { IoMdShirt } from "react-icons/io";
import { RiComputerFill } from "react-icons/ri";
import { AiFillGift } from "react-icons/ai";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { MdSportsFootball } from "react-icons/md";
import { Link } from "react-router-dom";

const Banner = () => {




    return (
        <>
            <div className="banner px-36">
                <div className="banner-item flex justify-between p-7 mt-5 bg-gray-100 rounded-lg">
                    <div>
                        <div className="flex items-center gap-3">
                            <TbCategory className="text-xl" />
                            <h2 className="banner-head text-xl">Top Categories</h2>
                        </div>
                        <div className="flex gap-2 mt-5">
                            <ul>
                                <li
                                    // onClick={() => handleMedical('Medical & Health')}
                                    className="flex items-center gap-4">
                                    <FaBriefcaseMedical className="banner-cat-one" />
                                    <Link to='/products' className="banner-cat-list hover:text-green-500 hover:duration-1000">Medical & Health</Link>
                                </li>
                                <li
                                    // onClick={() => handleMedical('medical')}
                                    className="my-2"><hr /></li>
                                <li className="flex items-center gap-3">
                                    <IoMdShirt className="banner-cat-two text-xl" />
                                    <Link href="#" className="banner-cat-list hover:text-green-500 hover:duration-1000">Fashion</Link>
                                </li>
                                <li className="my-2"><hr /></li>
                                <li
                                    className="flex items-center gap-4">
                                    <FaLeaf className="banner-cat-one" />
                                    <Link to='/products' className="banner-cat-list hover:text-green-500 hover:duration-1000">Home Decoration</Link>
                                </li>
                                <li className="my-2"><hr /></li>
                                <li
                                    // onClick={() => handleMedical('medical')}
                                    className="flex items-center gap-3">
                                    <AiFillGift className="banner-cat-two text-xl" />
                                    <Link to='/products' className="banner-cat-list hover:text-green-500 hover:duration-1000">Gifts & Cards</Link>
                                </li>
                                <li className="my-2"><hr /></li>
                                <li
                                    // onClick={() => handleMedical('medical')}
                                    className="flex items-center gap-3">
                                    <RiComputerFill className="banner-cat-two text-xl" />
                                    <Link to='/products' className="banner-cat-list hover:text-green-500 hover:duration-1000">Electronics</Link>
                                </li>
                                <li className="my-2"><hr /></li>
                                <li
                                    // onClick={() => handleMedical('medical')}
                                    className="flex items-center gap-3">
                                    <FaHeadphonesSimple className="banner-cat-two text-xl" />
                                    <Link to='/products' className="banner-cat-list hover:text-green-500 hover:duration-1000">Headphones</Link>
                                </li>
                                <li className="my-2"><hr /></li>
                                <li
                                    // onClick={() => handleMedical('medical')}
                                    className="flex items-center gap-3">
                                    <MdSportsFootball className="banner-cat-two text-xl" />
                                    <Link to='/products' className="banner-cat-list hover:text-green-500 hover:duration-1000">Sports Items</Link>
                                </li>
                                <li className="my-2"><hr /></li>
                            </ul>
                        </div>
                    </div>

                    <div className="carousel w-56 sm:w-64 xl:w-80 2xl:w-[55rem] h-56 sm:h-64 xl:h-80 2xl:h-96">
                        <Carousel>
                            <img src={Five} title="Medical & Health" alt="Loading..." />
                            <img src={Four} title="All Type Food" alt="Loading..." />
                            <img src={Two} title="Electronix Update" alt="Loading..." />
                            <img src={Three} title="Reliable Cloth" alt="Loading..." />
                            <img src={One} title="Games" alt="Loading..." />
                        </Carousel>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Banner;