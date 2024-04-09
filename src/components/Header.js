import React from 'react'

const Header = () => {
    return (
        <div className="bg-gray-100 w-full -z-10 py-2">
            <header className="container justify-center items-center grid grid-cols-2">
                <div className="flex flex-col">
                    <h1 className="flex flex-col text-3xl font-bold z-10">
                        <span className="font-grotesk text-gray-600">━Introducing</span>
                        <span className="font-quicksand whitespace-nowrap uppercase text-4xl">
                            <span className="text-red-500">Canadian</span> Immigration ChatBot</span>
                        <div className="flex flex-row gap-1 items-center">
                            <img src="/gpt-logo.png" alt="Logo" className="w-7" />
                            <span className="whitespace-nowrap text-xl text-gray-600">Your AI-Powered Assistant</span>
                        </div>
                    </h1>
                    <p className="mt-10 text-gray-600 text-lg z-10 w-[80%]">Welcome to our ChatBot, your ultimate resource for instant answers and assistance with all your immigration related questions. Whether you’re seeking information on immigration processes, visa applications, or other immigration-related matters, our ChatBot is here to assist you 24/7. Say goodbye to long wait times and complex forms – we’ve simplified the immigration journey for you.
                    </p>
                </div>
                <img src="/immigrate.png" alt="Immigrate" className=" w-[500px] -z-1" />
            </header>
        </div>
    )
}

export default Header