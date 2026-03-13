import React, { useState } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AgentLoginApi } from '../../redux/actions/agentAction';

const AgentLogin = () => {
    const { agentAuthExp } = useSelector((state) => state.agentContainer);

    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });


    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(AgentLoginApi(formData.email, formData.password))
        if (localStorage.getItem("agentToken")) {
            navigate('/agent');
        }

    }

    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            {/* Left Image Section */}
            <div
                className="hidden lg:flex lg:w-1/2 bg-cover bg-center items-center justify-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1650825556125-060e52d40bd0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80')",
                }}
            >
                <div className="bg-black/50 p-10 rounded-xl text-center text-white max-w-md">
                    <h1 className="text-4xl font-bold mb-2">Welcome to Immify</h1>
                    <p className="text-lg">Streamline your immigration business with verified leads.</p>
                    <a
                        href="#"
                        className="mt-6 inline-block bg-white text-indigo-700 font-semibold px-6 py-2 rounded-full hover:bg-indigo-100 transition duration-300"
                    >
                        Get Started
                    </a>
                </div>
            </div>

            {/* Right Form Section */}
            <div className="flex flex-1 items-center justify-center bg-white px-6 lg:px-24">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <h2 className="text-3xl font-extrabold text-gray-800">Agent Login</h2>
                        <p className="text-gray-500 mt-2">Welcome back! Please login to your account.</p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit} >
                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                autoComplete="email"
                                required
                                placeholder="you@example.com"
                                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        {/* Password with toggle */}
                        <div className="relative">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                autoComplete="current-password"
                                required
                                placeholder="••••••••"
                                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 pr-12"
                            />
                            <div
                                className="absolute top-[42px] right-4 cursor-pointer text-gray-500 hover:text-indigo-600"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300"
                            >
                                Login
                            </button>
                        </div>

                        {/* Footer Links */}
                        <div className="flex justify-between text-sm text-gray-500">
                            <a href="#" className="hover:text-indigo-600">
                                Forgot password?
                            </a>
                            {/* <a href="#" className="hover:text-indigo-600">
                                Create account
                            </a> */}
                            <button onClick={() => navigate('/agent-signup')} className="hover:text-indigo-600 cursor-pointer">Create account</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AgentLogin;
