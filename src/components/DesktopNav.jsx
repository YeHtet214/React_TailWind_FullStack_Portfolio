import React from 'react';
import { NavLink } from 'react-router-dom';

const DesktopNav = ({ focus, switchActive, isActiveLink }) => (
    <nav className='hidden lg:flex '>
        <ul className='list-none flex z-20 items-center text-white '>
            <li><NavLink onClick={() => switchActive('hero')} className={() => focus(isActiveLink.hero)} name='hero' to="#hero">Home</NavLink></li>
            <li><NavLink onClick={() => switchActive('about')} className={() => focus(isActiveLink.about)} name='about' to="#about">About</NavLink></li>
            <li><NavLink onClick={() => switchActive('projects')} className={() => focus(isActiveLink.projects)} name='projects' to="#projects">Projects</NavLink></li>
            <li><NavLink onClick={() => switchActive('contact')} className={() => focus(isActiveLink.contact)} name='contact' to="#contact">Contact</NavLink></li>
        </ul>
    </nav>
)

export default DesktopNav;
