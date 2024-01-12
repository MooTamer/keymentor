import React from 'react';
import home from '../assets/home.mp4';
import { Link as ScrollLink } from 'react-scroll';
import { Parallax } from 'react-parallax';
import Kbd from "./components/kbd";
import Typewriter from "./components/typewriter";

const Home = () => {
    return (
        <Parallax bgImage={home} strength={500}>
            <div className="hero min-h-screen relative">
                {/* Video element for the background */}
                <video src={home} autoPlay loop muted className="bg-[(0,0,0,0.4)] absolute inset-0 w-full h-full object-cover">
                    Your browser does not support the video tag.
                </video>

                <div className="hero-overlay bg-black bg-opacity-40 absolute inset-0"></div>

                <div className="hero-content text-center text-neutral-content relative z-10">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Are You Ready?</h1>
                        <p className="mb-5">Unlock Your Keyboard Potential, Master Typing with <strong>KeyMentor</strong> Studio! Type Faster, Type Smarter, Type Confidently – Every Key Counts!</p>
                        <ScrollLink to="section-to-scroll" smooth={true} duration={500}>
                            <button className="btn btn-primary hover:scale-105 transition ease-in-ease-out duration-500 rounded-full">Get Started</button>
                        </ScrollLink>
                    </div>
                </div>
            </div>
            <div id="section-to-scroll">
                <Kbd />
                <Typewriter />
            </div>
        </Parallax>
    );
};

export default Home;