import React from 'react';
import { Link } from 'react-router-dom';

const FormRegister = () => {
    
    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes manejar la lógica de envío del formulario
    };

    return (
        <form onSubmit={handleSubmit} className="bg-gris rounded-lg p-8 shadow-md w-80 mt-8">
            <div className="mb-4">
                <label className="block text-blanco text-sm font-bold mb-2" htmlFor="username">
                    Username
                </label>
                <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-blanco leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                />
            </div>
            <div className="mb-4">
                <label className="block text-blanco text-sm font-bold mb-2" htmlFor="mail">
                    Mail
                </label>
                <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-blanco leading-tight focus:outline-none focus:shadow-outline"
                    id="mail"
                    type="text"
                    placeholder="Enter your mail"
                />
            </div>
            <div className="mb-6">
                <label className="block text-blanco text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-blanco leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                />
            </div>
            <div className=''>
                <Link to={"/login"} className='text-principal'>Login</Link>
            </div>
            <div className="flex items|-center justify-center">
                <button
                    className="bg-principal text-blanco font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Register
                </button>
            </div>
        </form>
    );
};

export default FormRegister;