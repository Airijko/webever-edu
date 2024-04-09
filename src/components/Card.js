import React from 'react'

const Card = ({ img, title, content }) => {
    return (
        <div className="flex flex-row md:flex-col justify-center items-center border rounded-xl p-10 w-full h-full md:h-[300px] md:w-[300px] gap-2.5">
            <img src={img} alt="Logo" className="w-[80px]" />
            <h1 className="text-xl">
                {title}
            </h1>
            <p className="text-sm">{content}</p>
        </div>
    )
}

export default Card