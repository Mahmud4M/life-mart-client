import { useEffect, useState } from "react";
import SingleCard from "../Card/SingleCard/SingleCard";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { AiFillProduct } from "react-icons/ai";
import Category from './../../Pages/Category/Category';



const Product = () => {

    const [products, setProducts] = useState();
    const [currentPage, setCurrentPage] = useState();
    const [itemperpage, setItemperpage] = useState(16);
    const [count, setCount] = useState(1);
    const [filter, setFilter] = useState('');
    const [sort, setSort] = useState('');
    const [sortPrice, setSortPrice] = useState('');
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
        const productData = async () => {
            try {
                const result = await axios.get(`http://localhost:5000/products-data?page=${currentPage}&size=${itemperpage}&filter=${filter}&sort=${sort}&sortPrice=${sortPrice}&search=${search}&category=${category}`);
                setProducts(result.data)
            } catch (error) {
                console.log(error.message);
            }
        };
        productData();
    }, [currentPage, sort, filter, itemperpage, sortPrice, search, category])


    // Fecth count-number data
    useEffect(() => {
        const count = async () => {
            try {
                const count = await axios.get(`http://localhost:5000/product-count?filter=${filter}&search=${search}`);
                setCount(count.data.count)
            } catch (error) {
                console.log(error.message);
            }
        };
        count();
    }, [filter, search])

    // Handle Pagination Button
    const handlePaginationButton = (value) => {
        setCurrentPage(value);
    }


    // Select Pagination Calculation
    const numberofPages = Math.ceil(count / itemperpage);
    const pages = [...Array(numberofPages).keys()].map(element => element + 1);


    const handleSearch = e => {
        e.preventDefault();
        const search = e.target.search.value;
        setSearch(search)
    }


    return (
        <>

            {/* Shop Header */}
            <div>
                <div className="flex items-center justify-center gap-3 mt-16">
                    <AiFillProduct className="text-3xl text-[#0f503c] hover:text-yellow-600 hover:duration-1000]" />
                    <h1 className="text-4xl font-semibold">Our Products</h1>
                    <AiFillProduct className="text-3xl text-[#0f503c] hover:text-yellow-600 hover:duration-1000]" />
                </div>
            </div>

            <div className="flex justify-between items-center px-40 mt-10">

                <div className="flex items-center gap-2">
                    <select
                        onChange={e => {
                            setCategory(e.target.value)
                            setCurrentPage(1)
                        }}
                        value={category}
                        name="category"
                        id="category"
                        className="border-black uppercase">
                        <option>Filter By Category</option>
                        <option value='Medical & Health'>Medical & Health</option>
                        <option value='Reliable Cloth'>Reliable Cloth</option>
                        <option value='Games Instruments'>Games Instruments</option>
                        <option value='Electronix Update'>Electronix</option>
                        <option value='All Type Food'>Foods</option>
                    </select>
                </div>

                <div className="flex items-center gap-2">
                    <select
                        onChange={e => {
                            setSortPrice(e.target.value)
                            setCurrentPage(1)
                        }}
                        value={sortPrice}
                        name="price"
                        id="price"
                        className="border-black uppercase">
                        <option>SORT BY PRICE</option>
                        <option value='low'>Price Low to High</option>
                        <option value='high'> Price High to Low</option>
                    </select>
                </div>

                <div className="flex items-center gap-2">
                    <select
                        onChange={e => {
                            setSort(e.target.value)
                            setCurrentPage(1)
                        }}
                        value={sort}
                        name="sort"
                        id="sort"
                        className="border-black uppercase">
                        <option>SORT BY DATED</option>
                        <option value='asc'>Assending First</option>
                        <option value='dsc'>Dessinding First</option>
                    </select>
                </div>

                <div className="flex items-center gap-2">
                    <select
                        onChange={e => {
                            setFilter(e.target.value)
                            setCurrentPage(1)
                        }}
                        value={filter}
                        name="brand"
                        id="brand"
                        className="border-black uppercase">
                        <option value='Boshudhara'>Filter By Brand</option>
                        <option value='Square'>Square</option>
                        <option value='Fresh'>Fresh</option>
                        <option value='Boshudhara'>Bashundhara</option>
                        <option value='Transtac'>Transtac</option>
                        <option value='Life'>Life</option>
                    </select>
                </div>

                <div>
                    <form onSubmit={handleSearch}>
                        <div className="flex flex-col p-1.5 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                            <input name="search" className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent" type="text" placeholder="Enter your product name ..." aria-label="Enter your product name ..." />

                            <button className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"><FaSearch className="text-white text-xl" /></button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="mt-3"><hr /></div>

            <div className="grid grid-cols-4 gap-4 items-center px-36 mt-5">
                {
                    products?.map(product => <SingleCard product={product} key={product?._id} />)
                }
            </div>

            {/* Paginaton */}
            <div>
                <div className="flex items-center justify-center mx-auto mt-10">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => handlePaginationButton(currentPage - 1)}
                        className="px-4 $ py-2 mx-1 text-white transition-colors duration-300 transform bg-[#0f503c] rounded-md dark:bg-gray-800 dark:text-white hover:bg-yellow-600 hover:text-white dark:hover:text-gray-200">
                        <div className="flex items-center -mx-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-1 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg>

                            <span className="mx-1">
                                previous
                            </span>
                        </div>
                    </button>


                    {
                        pages.map(btnNum => <button
                            onClick={() => handlePaginationButton(btnNum)}
                            key={btnNum}
                            href="#"
                            className={`hidden ${currentPage === btnNum ? 'bg-yellow-600 text-white' : ''} px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-yellow-600 dark:hover:bg-yellow-600 hover:text-white dark:hover:text-gray-200`}>
                            {btnNum}
                        </button>)
                    }


                    <button
                        disabled={currentPage === numberofPages}
                        onClick={() => handlePaginationButton(currentPage + 1)}
                        className="px-4 py-2 mx-1 text-white transition-colors duration-300 transform bg-[#0f503c] rounded-md dark:bg-gray-800 dark:text-white hover:bg-yellow-600 dark:hover:bg-yellow-600 hover:text-white dark:hover:text-gray-200">
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