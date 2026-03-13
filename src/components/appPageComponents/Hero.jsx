import React, { useRef, useState } from 'react';
import workStepImg from '../../assets/workStep.png';
import bg from '../../assets/bg.jpg';
import { FaPhoneAlt, FaCheckCircle, FaUserTie, FaRocket } from "react-icons/fa";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AgentSignupApi } from '../../redux/actions/agentAction';

const Hero = () => {
  const { agentLoading } = useSelector((state) => state.agentContainer);

  const heroRef = useRef(null);
  const [position, setPosition] = useState({ x: -9999, y: -9999 }); // hide initially
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

  const handleMouseMove = (e) => {
    const rect = heroRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: -99499, y: -9999 }); // move out of view on leave
  };

  const handleSubmit = async () => {
    const {
      firstName,
      lastName,
      email,
      phone,
      country,
      companyName,
      password,
    } = formData;

    if (!firstName) return alert("Please enter your First Name");
    if (!lastName) return alert("Please enter your Last Name");
    if (!email) return alert("Please enter your Email");
    if (!phone) return alert("Please enter your Phone Number");
    if (!country) return alert("Please select your Country");
    if (!companyName) return alert("Please enter your Company Name");
    if (!password) return alert("Please enter your Password");


    if (!phone || !/^\d{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }
    await dispatch(AgentSignupApi(formData.firstName, formData.lastName, formData.email, formData.phone, formData.country, formData.companyName, formData.password,))
    if (localStorage.getItem("agentToken")) {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        companyName: '',
        password: '',
        country: '',
        // confirmPassword: ''
      })
      navigate('/agent');
    }
  }

  return (
    <div
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative bg-cover bg-center min-h-[100vh] flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Glowing Cursor Circle */}
      <div
        className="pointer-events-none absolute w-60 h-60 rounded-full bg-blue-400/50 blur-3xl transition-transform duration-75 ease-out z-0"
        style={{
          transform: `translate(${position.x - 400}px, ${position.y - 400}px)`
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Glass Container */}
      <div className="relative z-10 w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 backdrop-blur-md bg-white/8 border border-white/10 shadow-xl rounded-2xl p-4 lg:p-8 m-4">
        {/* Left Content */}

        <div className="text-white space-y-5 flex flex-col justify-center">
          <p className="text-blue-200 font-medium flex items-center gap-2">
            <FaPhoneAlt className="text-blue-300" /> Call us: +91-7011741092
          </p>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Immify – Verified Leads for Agents
          </h1>

          <p className="text-lg text-white/90 flex items-center gap-2">
            <MdOutlineVerifiedUser className="text-green-400" />
            100% phone-verified immigration leads from trusted sources.
          </p>

          <ul className="space-y-2 text-white/80 text-base">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-400" />
              3,000+ immigration consultants already onboard
            </li>
            <li className="flex items-center gap-2">
              <FaRocket className="text-yellow-400" />
              Instant access to high-intent prospects
            </li>
            <li className="flex items-center gap-2">
              <FaUserTie className="text-purple-300" />
              Dedicated support to close more leads
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-400" />
              No registration fee – start free
            </li>
          </ul>

          <div className="bg-white/10 p-4 rounded-lg shadow-inner border border-white/20 text-sm text-white/80 italic max-w-md space-y-1">
            <p className="flex items-center gap-2">
              <AiFillStar className="text-yellow-300" />
              “Immify doubled our conversions in 3 months!”
            </p>
            <span className="block text-white font-semibold pl-6">— Aryan Mehta, VisaPro Consultants</span>
          </div>

          <button onClick={() => navigate('/how-it-work')} className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 w-fit">
            Learn How It Works
          </button>

          <p className="text-sm text-white/60 italic">
            No upfront fees. Start for free.
          </p>
        </div>


        {/* Right Form */}
        <div className="flex flex-col items-center text-white space-y-4">
          <h2 className="text-2xl font-semibold">Agent Registration</h2>

          {/* First + Last Name */}
          <div className="w-full max-w-md flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              placeholder="First Name"
              className="flex-1 p-3 bg-white/20 border border-white/30 rounded-md placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300 backdrop-blur-sm"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              placeholder="Last Name"
              className="flex-1 p-3 bg-white/20 border border-white/30 rounded-md placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300 backdrop-blur-sm"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Email Address"
            className="w-full max-w-md p-3 bg-white/20 border border-white/30 rounded-md placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300 backdrop-blur-sm"
          />

          {/* Phone */}
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="Phone Number"
            className="w-full max-w-md p-3 bg-white/20 border border-white/30 rounded-md placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300 backdrop-blur-sm"
          />

          {/* Company Name */}
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            placeholder="Company Name"
            className="w-full max-w-md p-3 bg-white/20 border border-white/30 rounded-md placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300 backdrop-blur-sm"
          />

          {/* Country */}
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            placeholder="Country"
            className="w-full max-w-md p-3 bg-white/20 border border-white/30 rounded-md placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300 backdrop-blur-sm"
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            placeholder="Password"
            className="w-full max-w-md p-3 bg-white/20 border border-white/30 rounded-md placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300 backdrop-blur-sm"
          />

          <button
            className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300 w-full max-w-md"
            onClick={() => handleSubmit()}
            disabled={agentLoading}
          >
            Register Now
          </button>

          <p className="text-sm text-white/80 text-center">
            Register now and get <strong>20% bonus credits</strong>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Hero;
