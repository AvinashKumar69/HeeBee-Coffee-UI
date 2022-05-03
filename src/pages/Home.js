import { motion } from "framer-motion";
import React from "react";
import HeroSection from "../components/HeroSection";
import HomeProductGallery from "../components/HomeProductGallery";
import HomeSocialCard from "../components/HomeSocialCard";
import MapLocation from "../components/MapLocation";


const Home = () => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <HeroSection />
            <HomeProductGallery />
            <HomeSocialCard />
            <MapLocation />
        </motion.div>
    )
}

export default Home;