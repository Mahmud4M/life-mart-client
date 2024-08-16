import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";

const SignUp = () => {


    const { createUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    const page = location?.state ? location.state : '/';

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.userName.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const conPassword = form.conPassword.value;
        const userData = { name, photo, email, password, conPassword }

        console.log(userData);

        // create user
        try {
            const result = await createUser(email, password)
            // navigate(page, { replace: true })
            toast.success('User Created Successfully.')
        }
        catch (error) {
            toast.error(error?.message)
            // event.target.reset();
        }


        // Post user data in mongodb
        // try {
        //     const { data } = await axios.post('http://localhost:5000/users', userData)
        //     if (data) {
        //         toast.success('Users added Successfully.')
        //         console.log(data)
        //     }
        // } catch (err) {
        //     console.log(err)
        // }

    }


    return (
        <>
            <section className="bg-white dark:bg-gray-900 rounded-xl mt-10">
                <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
                    <form onSubmit={handleSubmit} className="w-full max-w-md">
                        <div className="flex justify-center mx-auto mt-5">
                        </div>
                        <div className="flex items-center justify-center mt-6">
                            <h1 className="w-1/3 pb-4 text-center text-[#0f503c] capitalize border-b-2 border-gray-500 dark:border-blue-400 dark:text-white text-4xl font-semibold font-roboto">Sign Up</h1>
                        </div>
                        <div className="relative flex items-center mt-8">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </span>
                            <input type="text" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" name="userName" placeholder="Username" />
                        </div>

                        <div className="relative flex items-center mt-8">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                </svg>
                            </span>
                            <input type="text" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" name="photo" placeholder="Photo Url" />
                        </div>

                        <div className="relative flex items-center mt-6">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </span>
                            <input type="email" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" name="email" placeholder="Email address" />
                        </div>
                        <div className="relative flex items-center mt-4">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </span>
                            <input type="password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" name="password" placeholder="Password" />
                        </div>
                        <div className="relative flex items-center mt-4">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </span>
                            <input type="password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" name="conPassword" placeholder="Confirm Password" />
                        </div>
                        <div className="mt-6">
                            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#0f503c] rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Sign Up
                            </button>
                            <div className="mt-6 text-center mb-5">
                                <p href="#" className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                                    Already have an account? Please <Link to='/sign-in'><button className="text-yellow-500">SignIn</button></Link>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default SignUp;