import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/UserContext";

const FormLogin = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const { signIn, isAuthenticated, authErrors: loginErrors } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
      if (isAuthenticated) navigate("/timecrystal")
    }, [isAuthenticated]);

    const onSubmit = handleSubmit((data) => {
        signIn(data);
    });
    return (
        <div>
            <form
                className="bg-gris rounded-lg p-8 shadow-md w-80 mt-8"
                onSubmit={onSubmit}
            >
                {
                    loginErrors.map((error, i) => (
                        <div className="bg-red-500 text-blanco items-center rounded-lg shadow-md w-full py-2 px-3 mb-4" key={i}>
                            <p>
                                {error}
                            </p>
                        </div>
                    ))
                }
                <div className="mb-4">
                    <label
                        className="block text-blanco text-sm font-bold mb-2"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        className="appearance-none border-none rounded w-full py-2 px-3 text-gray-700 bg-[#222] leading-tight focus:outline-none focus:shadow-outline text-white"
                        type="text"
                        placeholder="Enter your email"
                        {...register("email", { required: true })}
                    />
                    {errors.email && (<p className="text-red-500"> email is required </p>)}
                </div>
                <div className="mb-6">
                    <label
                        className="block text-blanco text-sm font-bold mb-2"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <input
                        className="appearance-none border-none rounded w-full py-2 px-3 text-gray-700 bg-[#222] leading-tight focus:outline-none focus:shadow-outline text-white"
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", { required: true })}
                    />
                    {errors.password && (<p className="text-red-500"> password is required </p>)}
                </div>
                <div className="mb-4">
                    <Link to={"/register"} className="text-blanco">
                        don't have an account yet?{" "}
                        <span className="text-principal">Register</span>
                    </Link>
                </div>
                <div className="flex items|-center justify-center">
                    <button
                        className="bg-principal text-blanco font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormLogin;