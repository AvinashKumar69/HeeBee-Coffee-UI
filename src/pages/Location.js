import { motion } from "framer-motion";
import React from 'react';
import mapBG from '../assets/mapBG.jpg';


const Location = () => {
    return (
        <motion.section class="text-gray-600 body-font"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div class="container px-10 py-10 mx-auto flex flex-wrap">
                <div class="flex w-full mb-5 flex-wrap">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">HeeBee Coffee</h1>
                    <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">B XIX 353, 14, Dr Hira Singh Rd, Ghumar Mandi, Ludhiana (PB) 141001<br />&#x260E;0161-4505888<br />&#8594;08AM - 11PM</p>
                </div>
                <div class="flex flex-wrap md:-m-2 -m-1">
                    <a className="flex w-full h-full flex-wrap"
                        href='https://goo.gl/maps/59QdT4RQAMU2' target="_blank">
                        <img src={mapBG} width="100%" height="100%" />
                    </a>
                </div>
            </div>
        </motion.section>
    )
}

export default Location;