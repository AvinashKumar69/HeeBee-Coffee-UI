import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/LogoHeeBee1.png';
import MenuItems from '../components/Dropdown';

const Header = () => {

    const [active, setActive] = useState(false)

    const showMenu = () => {
        setActive(!active)
    }

    return (
        <div className='fixed w-full text-white flex justify-between p-4 items-center bg-black'>

            <div className="mb-2 sm:mb-0 flex flex-row">
                <div className="h-10 w-10 self-center mr-2">
                    <img className="h-10 w-10 self-center" src={Logo} />
                </div>
                <div>
                    <NavLink to="/" className="text-2xl no-underline text-white font-bold hover:text-yellow-600 font-sans font-bold">
                        HeeBee <br /> Coffee
                    </NavLink>
                </div>
            </div>

            <nav>

                <div className='absolute right-6 md:hidden top-6 scale-150'>
                    <MenuOutlinedIcon onClick={showMenu} className='scale-150 cursor-pointer' />
                </div>

                <ul className='hidden md:flex gap-8 p-6 uppercase bg-white/10'>
                    <NavLink to='/' className="mr-5 text-white font-bold hover:text-yellow-600">HOME</NavLink>
                    <NavLink to='/ordermenu' className="mr-5 text-white font-bold hover:text-yellow-600">ORDER/MENU</NavLink>
                    <NavLink to='/about' className="mr-5 text-white font-bold hover:text-yellow-600">ABOUT US</NavLink>
                    <NavLink to='/location' className="mr-5 text-white font-bold hover:text-yellow-600">LOCATION</NavLink>
                    <NavLink to='/' className="mr-5 text-white font-bold hover:text-yellow-600">LOGIN</NavLink>
                    <NavLink to='/' className="mr-5 text-white font-bold hover:text-yellow-600">CART</NavLink>
                </ul>

                <MenuItems showMenu={showMenu} active={active} />

            </nav>

        </div>
    );
};

export default Header;