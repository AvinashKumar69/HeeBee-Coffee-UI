import React from 'react';
import instaPic from '../assets/insta.png';
import instaHomeBG from '../assets/instaBG.jpg';

const HomeSocialCard = () => {
    return (
        <section className="text-gray-600 body-font h-50 bg-cover"
            style={{ backgroundImage: `url(${instaHomeBG})` }}
        >
            <div className="mx-auto my-auto overflow-hidden">
                <img className='mx-auto' src={instaPic} />
            </div>

        </section>
    )
}

export default HomeSocialCard;