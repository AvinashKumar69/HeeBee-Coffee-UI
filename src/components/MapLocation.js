import React from 'react';
import mapBG from '../assets/mapBG.jpg';

const MapLocation = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap">
                <a className="flex w-full h-full flex-wrap"
                    href='https://goo.gl/maps/59QdT4RQAMU2'>
                    <img src={mapBG} width="100%" height="100%" />
                </a>
            </div>
        </section>
    )
}

export default MapLocation;