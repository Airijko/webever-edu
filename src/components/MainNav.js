import React from 'react'

import Logo from "../images/logo-1.png";

const MainNav = () => {
    return (
        <nav className="flex flex-row px-10 py-5 w-full z-10">
            <div className='flex flex-row items-center w-full'>
                <img src={Logo} alt="Logo" className="w-auto h-[50px]" />
                <div className="flex flex-row justify-end gap-7.5 text-sm uppercase flex-grow">
                    <div href="/" className="">Home</div>
                    <div href="/" className="">Services</div>
                    <div href="/" className="">Training</div>
                    <div href="/" className="">Inquiry</div>
                    <div href="/" className="">About us</div>
                    <div href="/" className="">Contact</div>
                </div>
            </div>
        </nav>
    )
}

export default MainNav