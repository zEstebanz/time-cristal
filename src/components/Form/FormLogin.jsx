import React from 'react';
import { Link } from 'react-router-dom';

const FormLogin = () => {

    return (
        <form  className="bg-gris rounded-lg p-8 shadow-md w-80 mt-8 dark:border dark:border-inherit">
            <div className="mb-4">
                <label className="block text-blanco text-sm font-bold mb-2" htmlFor="username">
                    Username
                </label>
                <input
                    className="appearance-none border-none rounded w-full py-2 px-3 text-gray-700 bg-[#222] leading-tight focus:outline-none focus:shadow-outline text-white"
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                />
            </div>
            <div className="mb-6">
                <label className="block text-blanco text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input
                    className="appearance-none border-none rounded w-full py-2 px-3 text-gray-700 bg-[#222] leading-tight focus:outline-none focus:shadow-outline text-white"
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                />
            </div>
            <div className='mb-4'>
                <Link to={"/register"} className='text-blanco'>No tienes cuentas? <span className='text-principal'>Register</span></Link>
            </div>
            <div className="flex items-center justify-center">
                <Link to={"/timecrystal"}>
                    <button
                        className="bg-principal text-blanco font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Log In
                    </button>
                </Link>
            </div>
        </form>
    );
};

export default FormLogin;