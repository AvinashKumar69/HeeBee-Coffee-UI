import React from "react";
import HeroSection from "../components/HeroSection";
import HomeProductGallery from "../components/HomeProductGallery";
import HomeSocialCard from "../components/HomeSocialCard";
import MapLocation from "../components/MapLocation";


const Home = () => {

    return (
        <>
            <HeroSection />
            <HomeProductGallery />
            <HomeSocialCard />
            <MapLocation />
        </>
    )
}

export default Home;