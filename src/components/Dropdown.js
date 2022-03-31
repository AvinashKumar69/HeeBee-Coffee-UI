import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Dropdown = ({ showMenu, active }) => {
    return (
        <ul className={active ? 'flex-col flex items-center fixed inset-0 left-1/4 uppercase bg-black/40 backdrop-blur-lg gap-8 justify-center p-8 md:hidden' : 'hidden'}>
            <CloseOutlinedIcon onClick={showMenu} className='cursor-pointer' />
            <NavLink to='/' className="mr-5 text-white font-bold hover:text-yellow-600">HOME</NavLink>
            <NavLink to='/ordermenu' className="mr-5 text-white font-bold hover:text-yellow-600">ORDER/MENU</NavLink>
            <NavLink to='/about' className="mr-5 text-white font-bold hover:text-yellow-600">ABOUT US</NavLink>
            <NavLink to='/location' className="mr-5 text-white font-bold hover:text-yellow-600">LOCATION</NavLink>
            <NavLink to='/' className="mr-5 text-white font-bold hover:text-yellow-600">LOGIN</NavLink>
            <NavLink to='/' className="mr-5 text-white font-bold hover:text-yellow-600">CART</NavLink>
        </ul>
    );
};

export default Dropdown;