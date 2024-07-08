import React from 'react';
import { FaArrowDownLong } from "react-icons/fa6";
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
    return (
        <section className='mx-auto py-4 min-h-[90vh] w-11/12 lg:w-10/12 relative' id='hero'>
            <div className='radial-background top-0 -left-60'></div>
            <div className='flex items-center justify-center min-h-[90vh]'>
                <div className='text-left lg:text-center z-10 relative'>
                    <h1 className='text-4xl mb-3 font-bold'>
                        <Typewriter 
                            words={['Full-Stack Web Developer | Building Powerful and Engaging Experiences']}
                            cursor={false}
                            typeSpeed={10}
                        />
                    </h1>
                    <h4 className='text-xl text-lightGray mb-4'>Let's collaborate to create a website that drives results.</h4>
                    <button className='border-2 border-pink bg-pink py-2 px-4 rounded-md'>Get In Touch</button>
                </div>
                <a href="#about" className='cursor-pointer absolute bottom-8 lg:bottom-12 left-50 rounded-3xl p-2 border-2 shadow-inner-btn border-purple'>
                    <FaArrowDownLong className='text-white animate-bounce ' />
                </a>
            </div>            
        </section>
    );
}

export default Hero;
