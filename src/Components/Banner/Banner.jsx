import { Carousel } from "flowbite-react";
import { TbCategory } from "react-icons/tb";
import { VscDebugBreakpointData } from "react-icons/vsc";

import One from "../../assets/Banner/One.jpg"
import Two from "../../assets/Banner/Two.jpg"
import Three from "../../assets/Banner/Three.jpg"
import Four from "../../assets/Banner/Four.jpg"
import Five from "../../assets/Banner/Five.jpg"
import { FaBriefcaseMedical, FaLeaf } from "react-icons/fa";
import { IoMdShirt } from "react-icons/io";
import { RiComputerFill } from "react-icons/ri";
import { AiFillGift } from "react-icons/ai";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { MdSportsFootball } from "react-icons/md";

const Banner = () => {




    return (
        <>
            <div className="px-36">
                <div className="flex justify-between p-7 mt-5 bg-gray-100 rounded-lg">
                    <div>
                        <div className="flex items-center gap-3">
                            <TbCategory className="text-xl" />
                            <h2 className="text-xl">Top Categories</h2>
                        </div>
                        <div className="flex gap-2 mt-5">
                            <ul>
                                <li
                                    // onClick={() => handleMedical('Medical & Health')}
                                    className="flex items-center gap-4">
                                    <FaBriefcaseMedical className="" />
                                    <a href="#" className="hover:text-green-500 hover:duration-1000">Medical & Health</a>
                                </li>
                                <li
                                    // onClick={() => handleMedical('medical')}
                                    className="my-2"><hr /></li>
                                <li className="flex items-center gap-3">
                                    <IoMdShirt className="text-xl" />
                                    <a href="#" className="hover:text-green-500 hover:duration-1000">Fashion</a>
                                </li>
                                <li className="my-2"><hr /></li>
                                <li
                                    className="flex items-center gap-4">
                                    <FaLeaf className="" />
                                    <a href="#" className="hover:text-green-500 hover:duration-1000">Home Decoration</a>
                                </li>
                                <li className="my-2"><hr /></li>
                                <li
                                    // onClick={() => handleMedical('medical')}
                                    className="flex items-center gap-3">
                                    <AiFillGift className="text-xl" />
                                    <a href="#" className="hover:text-green-500 hover:duration-1000">Gifts & Cards</a>
                                </li>
                                <li className="my-2"><hr /></li>
                                <li
                                    // onClick={() => handleMedical('medical')}
                                    className="flex items-center gap-3">
                                    <RiComputerFill className="text-xl" />
                                    <a href="#" className="hover:text-green-500 hover:duration-1000">Electronics</a>
                                </li>
                                <li className="my-2"><hr /></li>
                                <li
                                    // onClick={() => handleMedical('medical')}
                                    className="flex items-center gap-3">
                                    <FaHeadphonesSimple className="text-xl" />
                                    <a href="#" className="hover:text-green-500 hover:duration-1000">Headphones</a>
                                </li>
                                <li className="my-2"><hr /></li>
                                <li
                                    // onClick={() => handleMedical('medical')}
                                    className="flex items-center gap-3">
                                    <MdSportsFootball className="text-xl" />
                                    <a href="#" className="hover:text-green-500 hover:duration-1000">Sports Items</a>
                                </li>
                                <li className="my-2"><hr /></li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-56 sm:w-64 xl:w-80 2xl:w-[55rem] h-56 sm:h-64 xl:h-80 2xl:h-96">
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