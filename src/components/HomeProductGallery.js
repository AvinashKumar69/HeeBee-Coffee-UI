import React from 'react';
import galleyImage1 from '../assets/alternateFRONTpic1.jpg';
import coffeeBGimage from '../assets/coffeeBGimage.jpg';

const HomeProductGallery = () => {
    return (
        <section className="text-gray-600 body-font"
            style={{ backgroundImage: `url(${coffeeBGimage})` }}>
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="lg:w-2/3 mx-auto">
                    <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4 rounded-lg">
                        <img alt="gallery" className="w-full object-cover h-full object-center block absolute inset-0" src={galleyImage1} />
                    </div>
                    <div className="flex flex-wrap -mx-2">
                        <div className="px-2 w-1/2">
                            <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative rounded-lg">
                                <img alt="gallery" className="w-full object-cover h-full object-center block absolute inset-0" src={galleyImage1} />
                            </div>
                        </div>
                        <div className="px-2 w-1/2">
                            <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative rounded-lg">
                                <img alt="gallery" className="w-full object-cover h-full object-center block absolute inset-0" src={galleyImage1} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeProductGallery;