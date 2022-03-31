import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from '../assets/LogoHeeBee1.png';

const NavBar = () => {
    return (
        <header className="text-gray-600 body-font bg-black">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <div className="mb-2 sm:mb-0 flex flex-row">
                    <div className="h-10 w-10 self-center mr-2">
                        <img className="h-10 w-10 self-center" src={Logo} />
                    </div>
                    <div>
                        <NavLink to="/" className="text-2xl no-underline text-white font-bold hover:text-yellow-600 font-sans font-bold">
                            HeeBee Coffee
                        </NavLink>
                    </div>
                </div>

                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <NavLink to='/' className="mr-5 text-white font-bold hover:text-yellow-600">HOME</NavLink>
                    <NavLink to='/ordermenu' className="mr-5 text-white font-bold hover:text-yellow-600">ORDER/MENU</NavLink>
                    <NavLink to='/aboutus' className="mr-5 text-white font-bold hover:text-yellow-600">ABOUT US</NavLink>
                    <NavLink to='/location' className="mr-5 text-white font-bold hover:text-yellow-600">LOCATION</NavLink>
                </nav>
                <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                </button>
                {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </button> */}
            </div>
        </header>
    )
}

export default NavBar;