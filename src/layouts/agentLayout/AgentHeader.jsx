import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const AgentHeader = ({ openAside }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear token or session here
        localStorage.removeItem("agentToken");
        navigate("/agent/login");
    };

    return (
        <header className="lg:hidden flex justify-between items-center p-2.5 m-2.5 sm:m-5 shadow bg-white relative">
            {/* Menu Toggle */}
            <button
                className="lg:hidden p-2 bg-gray-100 active:bg-gray-200 rounded-lg transition-colors"
                onClick={openAside}
                aria-label="Open menu"
            >
                <FaBarsStaggered size={24} className="text-gray-700" />
            </button>

            {/* Agent Profile */}
            <div className="relative">
                <button
                    onClick={() => setDropdownOpen((prev) => !prev)}
                    className="w-10 h-10 rounded-full bg-blue-600 text-white text-sm font-semibold flex items-center justify-center"
                >
                    AG
                </button>

                {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow z-10 text-sm">
                        <Link
                            to="/agent/profile"
                            className="block px-4 py-2 hover:bg-gray-50 text-gray-700"
                            onClick={() => setDropdownOpen(false)}
                        >
                            View Profile
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="w-full text-left px-4 py-2 hover:bg-gray-50 text-red-500"
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default AgentHeader;
