import React, { useState } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AgentSignupApi } from '../../redux/actions/agentAction';

const AgentSignup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        companyName: '',
        password: '',
        country: '',
        // confirmPassword: ''
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
        await dispatch(AgentSignupApi(formData.firstName, formData.lastName, formData.email, formData.phone, formData.country, formData.companyName, formData.password,))
        // console.log('signup data:', formData);
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
                <div className="bg-black/60 p-10 rounded-xl text-center text-white max-w-md space-y-4">
                    <h1 className="text-4xl font-bold mb-2">Join Immify</h1>
                    <p className="text-lg">
                        Connect with <strong>verified immigration leads</strong> from across the globe.
                    </p>
                    <ul className="text-sm text-white/90 list-disc list-inside space-y-2 text-left">
                        <li>Grow your business with 100% phone-verified leads</li>
                        <li>3,000+ consultants already trust Immify</li>
                        <li>Instant access to high-intent clients</li>
                        <li>No registration fee – it's completely free</li>
                        <li>Dedicated support to help you close more leads</li>
                    </ul>

                </div>
            </div>


            {/* Right Form Section */}
            <div className="flex flex-1 items-center justify-center bg-white p-6 lg:px-24">
                <div className="w-full max-w-md space-y-8">


                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* First and Last Name */}
                        {/* <div>
                            <label className="block text-sm font-medium text-gray-700">First Name</label>
                            <input
                                type="text"
                                required
                                name="name"
                                onChange={handleChange}
                                value={formData.name}
                                placeholder="John don"
                                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div> */}
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <label className="block text-sm font-medium text-gray-700">First Name</label>
                                <input
                                    type="text"
                                    required
                                    name="firstName"
                                    onChange={handleChange}
                                    value={formData.firstName}
                                    placeholder="John"
                                    className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div className="w-1/2">
                                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                                <input
                                    type="text"
                                    required
                                    name="lastName"
                                    onChange={handleChange}
                                    value={formData.lastName}
                                    placeholder="Doe"
                                    className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                        </div>


                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input
                                type="email"
                                required
                                name="email"
                                onChange={handleChange}
                                value={formData.email}
                                placeholder="you@example.com"
                                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input
                                type="tel"
                                required
                                name="phone"
                                onChange={handleChange}
                                value={formData.phone}
                                pattern="[0-9]{10}"
                                placeholder="+91 9876543210"
                                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        {/* Country */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Country</label>
                            <input
                                type="text"
                                required
                                name="country"
                                onChange={handleChange}
                                value={formData.country}
                                placeholder="India"
                                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        {/* Company Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Company Name</label>
                            <input
                                type="text"
                                required
                                name="companyName"
                                onChange={handleChange}
                                value={formData.companyName}
                                placeholder="Immify Travels"
                                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        {/* Password */}
                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                required
                                placeholder="••••••••"
                                name="password"
                                onChange={handleChange}
                                value={formData.password}
                                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 pr-12"
                            />
                            <div
                                className="absolute top-[42px] right-4 cursor-pointer text-gray-500 hover:text-indigo-600"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
                            </div>
                        </div>

                        {/* Confirm Password */}
                        {/* <div className="relative">
                            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                            <input
                                type={showConfirm ? 'text' : 'password'}
                                required
                                placeholder="••••••••"
                                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 pr-12"
                            />
                            <div
                                className="absolute top-[42px] right-4 cursor-pointer text-gray-500 hover:text-indigo-600"
                                onClick={() => setShowConfirm(!showConfirm)}
                            >
                                {showConfirm ? <HiEyeOff size={20} /> : <HiEye size={20} />}
                            </div>
                        </div> */}

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300"
                            >
                                Sign Up
                            </button>
                        </div>

                        {/* Footer Links */}
                        <p className="text-center text-sm text-gray-600">
                            Already have an account?{' '}
                            {/* <a href="#" className="text-indigo-600 hover:underline">
                                Login here
                            </a> */}
                            <button onClick={() => navigate('/agent-login')} className="hover:text-indigo-600 hover:underline cursor-pointer">Login here</button>

                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AgentSignup;
