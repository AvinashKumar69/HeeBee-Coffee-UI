import React from 'react';
import mapBG from '../assets/mapBG.jpg';

const MapLocation = () => {
    return (
        <section class="text-gray-600 body-font bg-cover"
            style={{ backgroundImage: `url(${mapBG})` }}>
            {/* <a href="https://goo.gl/maps/59QdT4RQAMU2" /> */}
            <div class="container px-5 py-24 mx-auto flex flex-wrap">
                <div class="flex w-full mb-20 flex-wrap">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">.</h1>
                    <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">.</p>
                </div>
            </div>
        </section>
    )
}

export default MapLocation;