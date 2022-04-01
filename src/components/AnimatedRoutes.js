import { AnimatePresence } from "framer-motion";
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import AboutUs from '../pages/AboutUs';
import Home from '../pages/Home';
import OrderMenu from '../pages/OrderMenu';
// import { AnimatePresence } from "framer-motion/dist/framer-motion";

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/ordermenu' element={<OrderMenu />} />
                <Route exact path='/aboutus' element={<AboutUs />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;