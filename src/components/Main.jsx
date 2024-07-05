import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
            {/* <Routes>
                <Route path='/hero' element={<Hero />} />
                <Route path='/about' element={<About />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>  */}
        </main>
    );
}

export default Main;
