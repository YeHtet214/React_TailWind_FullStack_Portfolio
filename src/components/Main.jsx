import React from 'react';
import Hero from './routes/Hero';
import About from './routes/About';
import Projects from './routes/Projects';
import Contact from './routes/Contact';

const Main = () => {
    return (
        <main className='flex-1 flex flex-col'>
            <Hero />
            <About />
            <Projects />
            <Contact />
        </main>
    );
}

export default Main;
