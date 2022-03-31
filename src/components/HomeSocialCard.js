import React from 'react';
import instaPic from '../assets/insta.png';
import instaHomeBG from '../assets/instaBG.jpg';

const HomeSocialCard = () => {
    return (
        <section className="text-gray-600 body-font h-50 bg-cover"
            style={{ backgroundImage: `url(${instaHomeBG})` }}
        >
            <div className="lg:flex-grow items-center md:w-full lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-left mb-16 ml-20 mt-20 md:mb-0 items-center text-center">
                <img src={instaPic} />
            </div>

        </section>
    )
}

export default HomeSocialCard;