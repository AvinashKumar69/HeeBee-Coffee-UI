import React from 'react';
import HeroImageBG from '../assets/homeImage1.jpg';



const HeroSection = () => {
    return (
        <section className="text-gray-600 body-font h-screen bg-cover"
            style={{ backgroundImage: `url(${HeroImageBG})` }}>
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 ml-20 mt-20 md:mb-0 items-center text-center">
                    <p className="mb-8 mt-10 leading-relaxed text-white">NOW YOU CAN FEEL THE ENERGY.</p>
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white font-bold">Start your day with
                        <br className="hidden text-white font-bold lg:inline-block" />A black Coffee
                    </h1>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-900 rounded text-lg animate-bounce">ORDER NOW
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;