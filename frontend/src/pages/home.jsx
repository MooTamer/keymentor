import React from 'react';
import home from '../assets/home.mp4';
import { Link as ScrollLink } from 'react-scroll';
import { Parallax } from 'react-parallax';
import Kbd from "./components/kbd";
import Typewriter from "./components/typewriter";
import { motion } from 'framer-motion';
import Stats from './components/stats';

const Home = () => {
    return (
        <motion.div>
            <Parallax bgImage={home} strength={500}>
                <div className="hero min-h-screen relative">
                    {/* Video element for the background */}
                    <video src={home} autoPlay loop muted className="bg-[(0,0,0,0.9)] absolute inset-0 w-full h-full object-cover">
                        Your browser does not support the video tag.
                    </video>

                    <div className="hero-overlay bg-black bg-opacity-40 absolute inset-0"></div>

                    <div className="hero-content text-center text-neutral-content relative z-10">
                        <div className="max-w-md text-accent">
                            <h1 className="mb-5 text-5xl font-bold">Are You Ready?</h1>
                            <p className="mb-5">Unlock Your Keyboard Potential, Master Typing with <text className='text-base-100'>KeyMentor</text>  <strong className='text-accent'>Studio!</strong>  Type Faster, Type Smarter, Type Confidently – Every Key Counts!</p>
                            <ScrollLink to="section-to-scroll" smooth={true} duration={500}>
                                <button className="btn btn-primary text-accent hover:scale-105 transition ease-in-ease-out duration-500 rounded-full">Get Started</button>
                            </ScrollLink>
                        </div>
                    </div>
                </div>
                <Stats />
                <Kbd />
                <div id="section-to-scroll">
                    <Typewriter />
                </div>
            </Parallax>
        </motion.div>
    );
};

export default Home;