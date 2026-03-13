import React from 'react'
import Heading2 from '../common/Heading2'
import { LuMousePointerClick } from "react-icons/lu"
import { CiSettings } from "react-icons/ci"
import { FaRegCircleCheck } from "react-icons/fa6"

const LeadPricing = () => {
    const pricingData = [
        {
            Icon: LuMousePointerClick,
            title: 'Manual Lead Purchase',
            description: 'Browse and purchase individual immigration leads based on your specific requirements.',
            points: [
                'Flexible Pricing (₹70 to ₹399 per lead)',
                'Leads for Study, PR, Work Visa & more',
                'Choose from email, OTP & phone-verified leads',
                'Full control — select only the leads you want',
            ],
        },
        {
            Icon: CiSettings,
            title: 'Auto Lead Purchase',
            description: 'Set your preferences and receive qualified leads automatically — no manual effort required.',
            points: [
                'Fixed pricing based on destination & category',
                'Three lead tiers: Discounted, Base & Premium',
                'Advanced filters and real-time lead control',
                'Base prices starting from ₹130 per lead',
            ],
        },
    ]


    return (
        <div className="bg-[#37374b] py-12 px-4 text-white">
            <Heading2 text="Lead Pricing and Delivery That Works for You" textColor="text-white" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-10">
                {pricingData.map((item, index) => (
                    <div key={index} className="bg-white text-gray-800 rounded-2xl shadow-md p-6 flex flex-col justify-between">
                        <div>
                            <item.Icon className="text-5xl text-blue-500 mb-4" />
                            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                            <p className="text-gray-600 mb-4">{item.description}</p>

                            <ul className="space-y-3">
                                {item.points.map((point, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <FaRegCircleCheck className="text-green-500 mt-1" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-6 flex justify-center">
                            <button className="bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white px-6 py-3 rounded-xl font-medium shadow-md">
                                Join Us Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LeadPricing
