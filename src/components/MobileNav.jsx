import React from 'react';
import { NavLink } from 'react-router-dom';
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const MobileNav = ({ nav, switchMenu, focus, switchActive, isActiveLink }) => {
    return (
        <div className='lg:hidden z-10'>
            <CiMenuFries 
                className='text-white z-40 cursor-pointer scale-150 hover:text-pure ease-out' 
                onClick={switchMenu}
            />
            <nav className={ nav 
                ? 'absolute top-0 left-0 w-[100vw] h-[100vh] bg-violet flex justify-center items-center z-20' 
                : "absolute top-0 left-[-100%] ease-in duration-200"
            }>
            <RxCross1 
                className='text-white cursor-pointer scale-150 hover:text-pure ease-out absolute top-6 right-6 cursor-pointer' 
                onClick={switchMenu}
            />
            <ul className='list-none flex flex-col items-center text-white'>
                <li><NavLink onClick={() => switchActive('hero')} className={() => focus(isActiveLink.hero)} name='hero' to="#hero">Home</NavLink></li>
                <li><NavLink onClick={() => switchActive('about')} className={() => focus(isActiveLink.about)} name='about' to="#about">About</NavLink></li>
                <li><NavLink onClick={() => switchActive('projects')} className={() => focus(isActiveLink.projects)} name='projects' to="#projects">Projects</NavLink></li>
                <li><NavLink onClick={() => switchActive('contact')} className={() => focus(isActiveLink.contact)} name='contact' to="#contact">Contact</NavLink></li>
            </ul>
            </nav>
        </div>
    );
}

export default MobileNav;
