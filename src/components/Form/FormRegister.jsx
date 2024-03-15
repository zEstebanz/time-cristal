import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { registerRequest } from '../../api/auth.js';

const FormRegister = () => {

    const { register, handleSubmit } = useForm();

    return (
        <form onSubmit={handleSubmit(async(values) => {
            console.log(values);
            const res = await registerRequest(values)
            console.log(res)
        })} className="bg-gris rounded-lg p-8 shadow-md w-80 mt-8">
            <div className="mb-4">
                <label className="block text-blanco text-sm font-bold mb-2" htmlFor="username">
                    Username
                </label>
                <input
                    className="appearance-none border-none rounded w-full py-2 px-3 text-gray-700 bg-[#222] leading-tight focus:outline-none focus:shadow-outline text-white"
                    placeholder="Enter your username"
                    id="username"
                    type="text"
                    {...register('username', { required: true })}
                />
            </div>
            <div className="mb-4">
                <label className="block text-blanco text-sm font-bold mb-2" htmlFor="mail">
                    Mail
                </label>
                <input
                    className="appearance-none border-none rounded w-full py-2 px-3 text-gray-700 bg-[#222] leading-tight focus:outline-none focus:shadow-outline text-white"
                    placeholder="Enter your mail"
                    id="mail"
                    type="text"
                    {...register('mail', { required: true })}
                />
            </div>
            <div className="mb-6">
                <label className="block text-blanco text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input
                    className="appearance-none border-none rounded w-full py-2 px-3 text-gray-700 bg-[#222] leading-tight focus:outline-none focus:shadow-outline text-white"
                    placeholder="Enter your password"
                    id="password"
                    type="password"
                    {...register('password', { required: true })}
                />
            </div>
            <div className='mb-4'>
                <Link to={"/login"} className='text-blanco'>Ya tienes cuentas? <span className='text-principal'>Iniciar Sesion</span></Link>
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