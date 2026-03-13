import React from 'react'
import VerifyLeadSection from '../../components/appPageComponents/VerifyLeadSection'
import NewAgentProgram from '../../components/appPageComponents/NewAgentProgram'
import StartInQuickstep from '../../components/appPageComponents/StartInQuickstep'
import LeadPricing from '../../components/appPageComponents/LeadPricing'
import HowDoesItWork from '../../components/appPageComponents/HowDoesItWork'
import FAQ from '../../components/appPageComponents/FAQ'
import Hero from '../../components/appPageComponents/Hero'

const Home = () => {
    const smallData = [
        {
            name: "Happy Clients on Their Immigration Journey",
            data: "1 Million+"
        },
        {
            name: "Verified Immigration Experts on Immify",
            data: "3,000+"
        },
        {
            name: "of Trusted Immigration Support",
            data: "15+ Years"
        },
    ]
    return (
        <>
            
            <Hero />
            <VerifyLeadSection />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 lg:p-8 '>
                {
                    smallData.map((item, index) => (
                        <div key={index} className="text-center my-4 ">
                            <h3 className="text-2xl font-semibold text-gray-800">{item.data}</h3>
                            <p className="text-gray-600">{item.name}</p>
                        </div>
                    ))
                }
            </div>

            <NewAgentProgram />
            <StartInQuickstep />
            <LeadPricing />
            <HowDoesItWork />
            <FAQ />
        </>
    )
}

export default Home