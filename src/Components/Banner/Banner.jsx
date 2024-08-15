import { Carousel, Dropdown } from "flowbite-react";
import { TbCategory } from "react-icons/tb";
import { VscDebugBreakpointData } from "react-icons/vsc";

import One from "../../assets/Banner/One.jpg"
import Two from "../../assets/Banner/Two.jpg"
import Three from "../../assets/Banner/Three.jpg"
import Four from "../../assets/Banner/Four.jpg"
import Five from "../../assets/Banner/Five.jpg"
import { FaRegCircleDot } from "react-icons/fa6";

const Banner = () => {
    return (
        <>
            <div className="px-36">
                <div className="flex justify-between p-7 mt-5 bg-gray-100 rounded-lg">
                    <div>
                        <div className="flex items-center gap-3">
                            <TbCategory className="text-xl" />
                            <h2 className="text-xl">All Categories</h2>
                        </div>
                        <div className="flex gap-2 mt-5">
                            <ul>
                                <li className="flex items-center gap-2">
                                    <VscDebugBreakpointData className="text-yellow-600" />
                                    <a href="#" className="hover:text-green-500 hover:duration-1000">Medical & Health</a>
                                </li>
                                <li className="my-2"><hr /></li>
                                <li className="flex items-center gap-2">
                                    <VscDebugBreakpointData className="text-yellow-600" />
                                    <a href="#" className="hover:text-green-500 hover:duration-1000">All Type Food</a>
                                </li>
                                <li className="my-2"><hr /></li>
                                <li className="flex items-center gap-2">
                                    <VscDebugBreakpointData className="text-yellow-600" />
                                    <a href="#" className="hover:text-green-500 hover:duration-1000">Reliable Cloth</a>
                                </li>
                                <li className="my-2"><hr /></li>
                                <li className="flex items-center gap-2">
                                    <VscDebugBreakpointData className="text-yellow-600" />
                                    <a href="#" className="hover:text-green-500 hover:duration-1000">Games Instruments</a>
                                </li>
                                <li className="my-2"><hr /></li>
                                <li className="flex items-center gap-2">
                                    <VscDebugBreakpointData className="text-yellow-600" />
                                    <a href="#" className="hover:text-green-500 hover:duration-1000">Electronix Update</a>
                                </li>
                                <li className="my-2"><hr /></li>
                                <li className="flex items-center gap-2">
                                    <VscDebugBreakpointData className="text-yellow-600" />
                                    <a href="#" className="hover:text-green-500 hover:duration-1000">100 to 500</a>
                                </li>
                                <li className="my-2"><hr /></li>
                                <li className="flex items-center gap-2">
                                    <VscDebugBreakpointData className="text-yellow-600" />
                                    <a href="#" className="hover:text-green-500 hover:duration-1000">500 to 1000</a>
                                </li>
                                <li className="my-2"><hr /></li>
                                <li className="flex items-center gap-2">
                                    <VscDebugBreakpointData className="text-yellow-600" />
                                    <Dropdown label="Brand Name" inline>
                                        <Dropdown.Item><div className="flex items-center gap-2"> <FaRegCircleDot className="text-yellow-600" /> One</div></Dropdown.Item>
                                        <Dropdown.Item><div className="flex items-center gap-2"> <FaRegCircleDot className="text-yellow-600" /> Two</div></Dropdown.Item>
                                        <Dropdown.Item><div className="flex items-center gap-2"> <FaRegCircleDot className="text-yellow-600" /> Three</div></Dropdown.Item>
                                    </Dropdown>
                                </li>
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