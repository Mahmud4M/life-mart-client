import { Carousel } from "flowbite-react";
import { TbCategory } from "react-icons/tb";
import { VscDebugBreakpointData } from "react-icons/vsc";

import One from "../../assets/Banner/One.jpg"
import Two from "../../assets/Banner/Two.jpg"
import Three from "../../assets/Banner/Three.jpg"
import Four from "../../assets/Banner/Four.jpg"
import Five from "../../assets/Banner/Five.jpg"

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
                                <a href="#">Medical & Health</a>
                            </li>
                            <li className="my-2"><hr /></li>
                            <li className="flex items-center gap-2">
                                <VscDebugBreakpointData className="text-yellow-600" />
                                <a href="#">All Type Food</a>
                            </li>
                            <li className="my-2"><hr /></li>
                            <li className="flex items-center gap-2">
                                <VscDebugBreakpointData className="text-yellow-600" />
                                <a href="#">Reliable Cloth</a>
                            </li>
                            <li className="my-2"><hr /></li>
                            <li className="flex items-center gap-2">
                                <VscDebugBreakpointData className="text-yellow-600" />
                                <a href="#">Games Instruments</a>
                            </li>
                            <li className="my-2"><hr /></li>
                            <li className="flex items-center gap-2">
                                <VscDebugBreakpointData className="text-yellow-600" />
                                <a href="#">Electronix Update</a>
                            </li>
                            <li className="my-2"><hr /></li>
                            <li className="flex items-center gap-2">
                                <VscDebugBreakpointData className="text-yellow-600" />
                                <a href="#">UpComming Thing</a>
                            </li>
                            <li className="my-2"><hr /></li>
                            <li className="flex items-center gap-2">
                                <VscDebugBreakpointData className="text-yellow-600" />
                                <a href="#">UpComming Thing</a>
                            </li>
                            <li className="my-2"><hr /></li>
                            <li className="flex items-center gap-2">
                                <VscDebugBreakpointData className="text-yellow-600" />
                                <a href="#">Brand One</a>
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