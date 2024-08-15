import { useEffect, useState } from "react";
import SingleCard from "../Card/SingleCard/SingleCard";
import { FaProductHunt } from "react-icons/fa";



const Product = () => {

    const [products, setProducts] = useState();

    useEffect(() => {
        fetch("/data.json")
            .then(response => response.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <>
            {/* Shop Header */}
            <div className="flex items-center gap-3 px-40 mt-10">
                <FaProductHunt className="text-xl text-yellow-600" />
                <h1 className="text-2xl">All Products</h1>
            </div>

            <div><hr /></div>

            <div className="grid grid-cols-4 gap-4 items-center px-36 mt-5">
                {
                    products?.map(product => <SingleCard product={product} key={product?.id} />)
                }
            </div>

            {/* Paginaton */}
            <div>
                <div className="flex items-center justify-center mx-auto mt-10">
                    <button className="px-4 py-2 mx-1 text-white transition-colors duration-300 transform bg-[#0f503c] rounded-md dark:bg-gray-800 dark:text-white hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                        <div className="flex items-center -mx-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-1 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg>

                            <span className="mx-1">
                                previous
                            </span>
                        </div>
                    </button>

                    <a href="#" className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                        1
                    </a>

                    <a href="#" className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                        2
                    </a>

                    <a href="#" className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                        3
                    </a>

                    <a href="#" className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                        4
                    </a>

                    <a href="#" className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                        5
                    </a>

                    <button className="px-4 py-2 mx-1 text-white transition-colors duration-300 transform bg-[#0f503c] rounded-md dark:bg-gray-800 dark:text-white hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                        <div className="flex items-center -mx-1">
                            <span className="mx-1">
                                Next
                            </span>

                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-1 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Product;