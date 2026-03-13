import React from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
const AdminHeader = ({ openAside }) => {
    return (
        <header className="lg:hidden flex justify-between lg:justify-end items-center p-2.5 m-2.5 sm:m-5 shadow bg-white ">
            <button
                className="lg:hidden p-2 bg-gray-100 active:bg-gray-200 rounded-lg transition-colors"
                onClick={openAside}
                aria-label="Open menu"
            >
                <FaBarsStaggered size={24} className="text-gray-700" />
            </button>

            <div className="h-14">
                <Link to={"/"}>
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-full h-full object-cover"
                    />
                </Link>
            </div>
        </header>
    )
}

export default AdminHeader