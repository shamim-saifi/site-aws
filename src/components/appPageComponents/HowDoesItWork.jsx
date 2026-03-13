import React from 'react'
import Heading2 from '../common/Heading2'
import workStepImg from '../../assets/workStep.png'

const HowDoesItWork = () => {
    const workSteps = [
        {
            step: "STEP 01",
            title: "User submits immigration enquiry",
            description:
                "Every lead on Immify comes directly from individuals actively seeking immigration assistance. They submit an enquiry form on our website with their immigration goals, destination preferences, and contact details.",
        },
        {
            step: "STEP 02",
            title: "Instant phone & email verification",
            description:
                "As soon as the enquiry is submitted, we verify the user's phone number through OTP and confirm their email address to ensure accuracy and authenticity.",
        },
        {
            step: "STEP 03",
            title: "Manual intent verification",
            description:
                "Our support team speaks with each lead to verify their immigration needs and seriousness. Only genuinely interested individuals are marked as verified and shared with consultants.",
        },
    ]

    return (
        <section className="bg-[#f9f9f9] py-12 px-4">
            <Heading2 text="How Does Immify Generate & Verify Immigration Leads?" textColor="text-gray-800" />


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto mt-10 items-center">
                <div className="w-full">
                    <img
                        src={workStepImg}
                        alt="Workflow illustration"
                        className="w-full h-auto rounded-xl shadow-md"
                    />
                </div>

                <div className="space-y-6">
                    {workSteps.map((step, index) => (
                        <div key={index} className="bg-white rounded-xl shadow p-6 border-l-4 border-blue-500 transition hover:shadow-lg">
                            <h4 className="text-sm font-semibold text-blue-600 mb-1">{step.step}</h4>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                            <p className="text-gray-700 leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowDoesItWork
