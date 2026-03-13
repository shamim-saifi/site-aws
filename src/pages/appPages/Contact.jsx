import React from 'react';
import ContactForm from '../../components/appPageComponents/ContactForm';
import { IoLocation, IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import about from '../../assets/about1.jpg';
import contact from '../../assets/contact.jpg';

const Contact = () => {
    
    const contactData = [
        {
            Icon: IoCall,
            title: "Call or WhatsApp",
            data: "+91-7011741092"
        },
        {
            Icon: MdEmail,
            title: "Email Us",
            data: "Immify@gmail.com"
        },
        {
            Icon: IoLocation,
            title: "Office Location",
            data: "Gaur City Center, Greater Noida West, Uttar Pradesh 201009"
        }
    ];

    return (
        <>
            <section className="bg-gradient-to-br from-blue-800 to-blue-600 text-white py-16 px-4 lg:px-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    {/* Left Text Content */}
                    <div className="space-y-5">
                        <p className="text-blue-200 text-sm font-medium uppercase tracking-wide">
                            We're here to help
                        </p>
                        <h1 className="text-4xl lg:text-5xl font-bold">
                            Contact Immify
                        </h1>
                        <p className="text-white/90 text-lg">
                            Have questions? Need assistance? Reach out to our friendly support team.
                        </p>
                        <p className="text-white/70 text-base">
                            You can call or WhatsApp us at <span className="font-semibold text-white">+91-7011741092</span> or email us directly at <span className="font-semibold text-white">support@immify.com</span>.
                        </p>
                        <p className="text-white/70 text-base">
                            Our team is available Monday to Saturday, 10AM – 6PM (IST).
                        </p>
                        {/* <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300">
                            Get in Touch
                        </button> */}
                        <p className="text-sm text-white/60 italic">
                            We usually reply within 24 hours.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div>
                        <img
                            src={contact}
                            alt="Contact Immify"
                            className="w-full h-auto rounded-xl shadow-xl"
                        />
                    </div>
                </div>
            </section>

            <ContactForm />

            <section className="bg-white py-8 px-4 lg:px-16">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {contactData.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-4 p-6 rounded-xl shadow-lg border border-gray-100 bg-gradient-to-tr from-gray-50 to-white hover:shadow-xl transition duration-300"
                        >
                            <div className="bg-blue-100 p-3 rounded-full">
                                <item.Icon className="text-blue-600 w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                                <p className="text-gray-600">{item.data}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Contact;
