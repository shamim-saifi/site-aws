import React, { useEffect } from 'react';
// import logo from '../../assets/footer.png';
import logo from '../../assets/logo.png'

import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [adminAuth, setAdminAuth] = React.useState(false)
  const [agentAuth, setAgentAuth] = React.useState(false)
  const navigate = useNavigate()

  const navigateTo = (path) => {
    navigate(path); // Use the navigate function from react-router-dom
    setShowMenu(false); // Close the menu after navigation
  }

  return (
    <header className="flex justify-between items-center flex-wrap p-4 bg-gray-800 text-white shadow-md">
      {/* Logo */}
      <div onClick={() => navigate('/')} className="flex items-center gap-2 w-[50%] md:w-[20%] cursor-pointer">
        <img src={logo} alt="Immify Logo" className="w-[30%]" />
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex">
        <ul className="flex gap-6 text-sm font-medium">
          <li onClick={() => navigateTo('/buy-Leads')} className="hover:text-blue-400 cursor-pointer">Buy Leads</li>
          <li onClick={() => navigateTo('/about')} className="hover:text-blue-400 cursor-pointer">About</li>
          <li onClick={() => navigateTo('/how-it-work')} className="hover:text-blue-400 cursor-pointer">How it work</li>
          <li onClick={() => navigateTo('/contact')} className="hover:text-blue-400 cursor-pointer">Contact</li>
          {/* {
            localStorage.getItem('adminToken') ?
              <li onClick={() => navigateTo('/admin')} className="hover:text-blue-400 cursor-pointer">Admin</li>
              : null
          } */}
        </ul>
      </nav>

      {/* Action Buttons */}
      <div className="hidden md:flex gap-3 mt-2 md:mt-0">
        {
          localStorage.getItem("adminToken") ? (
            <button onClick={() => navigate('/admin')} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium cursor-pointer">
              Admin
            </button>
          ) : localStorage.getItem('agentToken') ? (
            <button onClick={() => navigate('/agent')} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium cursor-pointer">
              Agent
            </button>
          ) : (
            <>
              <button onClick={() => navigate('/agent-login')} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium cursor-pointer">
                Login
              </button>
              <a href="https://immify.in/"
                target="_blank"
                rel="noopener noreferrer">

                <button className="bg-white text-gray-800 hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium cursor-pointer">
                  Not an Agent?
                </button>
              </a>
            </>
          )
        }

      </div >

      {/* menu */}
      < div className="md:hidden flex items-center" >
        <button onClick={() => setShowMenu(true)} className="text-white focus:outline-none">
          <CiMenuBurger className="w-6 h-6" />
        </button>
      </div >
      {/* Mobile Menu */}
      {
        showMenu && (
          <div className="absolute top-0 right-0 bg-gray-800 text-white w-full h-screen flex flex-col items-center justify-center z-50">
            <button onClick={() => setShowMenu(false)} className="absolute top-4 right-4 text-white">
              <IoMdClose className="w-6 h-6" />
            </button>
            <ul className="flex flex-col gap-6 text-lg font-medium">
              <li onClick={() => navigateTo('/buy-Leads')} className="hover:text-blue-400 cursor-pointer">Buy Leads</li>
              <li onClick={() => navigateTo('/about')} className="hover:text-blue-400 cursor-pointer">About</li>
              <li onClick={() => navigateTo('/how-it-work')} className="hover:text-blue-400 cursor-pointer">How it work</li>
              <li onClick={() => navigateTo('/contact')} className="hover:text-blue-400 cursor-pointer">Contact</li>
            </ul>
            <div className="mt-8">
              <button onClick={() => navigate('/agent-login')} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium cursor-pointer">
                Login
              </button>
              <button className="bg-white text-gray-800 hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium ml-2 cursor-pointer">
                Not an Agent?
              </button>
            </div>
          </div>
        )
      }
    </header >
  );
};

export default Header;
