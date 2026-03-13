import React from 'react'

const Heading2 = ({ text, textColor = 'text-gray-800' }) => {
    return (
        <h2 className={`text-2xl lg:text-4xl md:w-[50%] lg:w-[60%] font-semibold ${textColor} m-auto px-1 text-center`}>
            {text}
        </h2>
    )
}

export default Heading2
