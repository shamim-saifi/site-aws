import React from 'react'
import logo from '../../assets/logo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaXmark } from 'react-icons/fa6'
import { CgHomeAlt } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import {
    FaCalendarWeek,
    FaFilePrescription,
    FaUserDoctor,
} from "react-icons/fa6";
import { FaUser, FaRegNewspaper } from "react-icons/fa";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { IoIosDocument } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { AdminLogoutApi } from '../../redux/actions/adminAction';
import toast from 'react-hot-toast';
import { Contact } from 'lucide-react';

const AdminAside = ({ closeAside }) => {
    const { pathname } = useLocation();
    const newPathProfile = pathname.split("/");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logoutHander = async () => {
        await dispatch(AdminLogoutApi());
        // localStorage.removeItem("adminToken");
        // localStorage.removeItem("adminProfile");
        navigate("/");
    };

    const adminAsideLinks = [
        {
            path: ["/admin"],
            label: "Dashboard",
            icon: <CgHomeAlt size={23} />
        },
        {
            path: [
                "/admin/agents",
                `/admin/agents/${newPathProfile[newPathProfile.length - 1]}`
            ],
            label: "Agent",
            icon: <FaUser size={23} />
        },

        {
            path: [
                "/admin/leads",
                `/admin/leads/${newPathProfile[newPathProfile.length - 1]}`

            ],
            label: "Leads",
            icon: <FaCalendarWeek size={23} />
        },
        {
            path: [
                "/admin/sold/leads",
                `/admin/sold/leads/${newPathProfile[newPathProfile.length - 1]}`
            ],
            label: "Sold Leads",
            icon: <FaRegNewspaper size={23} />
        },
        // {
        //     path: ["/admin/unsold/leads"],
        //     label: "UnSold Leads",
        //     icon: <FaRegNewspaper size={23} />
        // },
        {
            path: ["/admin/payment"],
            label: "Payment",
            icon: <RiMoneyRupeeCircleFill size={23} />
        },
        {
            path: [
                "/admin/news",
                "/admin/news/add",
                `/admin/news/edit/${newPathProfile[newPathProfile.length - 1]}`
            ],
            label: "News",
            icon: <FaRegNewspaper size={23} />
        },
        {
            path: ["/admin/contact"],
            label: "Contact",
            icon: <Contact size={23} />
        },

    ]

    return (
        <div className="w-full h-full relative flex flex-col ">

            <div className="flex justify-center items-center">
                <div className="my-2.5 px-4">
                    <Link to={"/"}>
                        <img
                            src={logo}
                            alt="immiy Logo"
                            className="h-[100px] w-[100px] object-cover"
                        />
                    </Link>
                </div>
                <div
                    className="lg:hidden absolute right-0 bg-black  text-white  p-2 font-bold rounded-bl-lg cursor-pointer top-0"
                    onClick={closeAside}
                >
                    <FaXmark size={20} />
                </div>
            </div>

            <div className="flex-grow flex flex-col gap-2.5">
                {
                    adminAsideLinks.map((item, index) => (
                        <Link key={index} to={item.path[0]} className={`cursor-pointer py-4 ps-9 relative flex items-center hover:bg-gray-500 hover:text-white gap-3 duration-500 text-white ${item.path.includes(pathname) ? "bg-gray-500 text-white" : "bg-gray-700"}`}>
                            {item.path.includes(pathname) && (
                                <div className="absolute top-0 left-0 w-1.5 h-full bg-white rounded-tr-lg rounded-br-lg"></div>
                            )}

                            <div className={`${item.path.includes(pathname) ? "text-white" : ""} cursor-pointer}`}>
                                {item.icon}
                            </div>

                            <p className={`font-semibold ${item.path.includes(pathname) ? "text-white" : ""}`}>
                                {item.label}
                            </p>

                        </Link>
                    ))
                }
                <div
                    onClick={() => logoutHander()}
                    className={`cursor-pointer py-4 ps-9 relative flex items-center hover:bg-blue-500 hover:text-white gap-3 duration-500 text-white `}
                >
                    <div>
                        <CiLogout size={23} />
                    </div>
                    <p className='font-semibold'>
                        Log Out
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AdminAside