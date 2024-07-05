import React, { useEffect, useState, useRef } from 'react';
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
                ? 'absolute top-0 left-0 w-[100vw] h-[100vh] bg-violet flex justify-center items-center z-10' 
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


const DesktopNav = ({ focus, switchActive, isActiveLink }) => (
    <nav className='hidden lg:flex '>
        <ul className='list-none flex z-10 items-center text-white '>
            <li><NavLink onClick={() => switchActive('hero')} className={() => focus(isActiveLink.hero)} name='hero' to="#hero">Home</NavLink></li>
            <li><NavLink onClick={() => switchActive('about')} className={() => focus(isActiveLink.about)} name='about' to="#about">About</NavLink></li>
            <li><NavLink onClick={() => switchActive('projects')} className={() => focus(isActiveLink.projects)} name='projects' to="#projects">Projects</NavLink></li>
            <li><NavLink onClick={() => switchActive('contact')} className={() => focus(isActiveLink.contact)} name='contact' to="#contact">Contact</NavLink></li>
        </ul>
    </nav>
)

const Header = () => {
    const [headerStyle, setHeaderStyle] = useState('bg-purple shadow-lg');
    const headerRef = useRef(null);
    const [nav, setNav] = useState(false);
    const [active, setActive] = useState({
        hero: true,
        about: false,
        projects: false,
        contact: false,
    });

    useEffect(() => {
        document.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('main section');

            for (let i=0; i<sections.length; i++) {
                const sectionTop = sections[i].offsetTop;
                const sectionHeight = sections[i].offsetHeight;
                if (window.scrollY + 100 >= sectionTop && window.scrollY < sectionTop + (sectionHeight/2)) {
                    trackActiveChanges(sections[i].id); 
                    console.log(sections[i].id)
                }
            }
        })
    }, []);

    const focusActiveLink = ( navLink ) => navLink ? 'ml-4 text-xl hover:text-pink border-b-2 border-pink' : 'ml-4 text-xl hover:text-pink';

    function handleMenu() {
        setNav(nav => !nav);
    }

    function switchActive(target) {
        trackActiveChanges(target);
        scrollToSection(target);
    }

    function scrollToSection(target) {
        const section = document.getElementById(target);
        console.log(section);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }

        handleMenu();
    }

    function trackActiveChanges(target) {
        setActive(active => ({
            hero: target === 'hero' ? true : false,
            about: target === 'about' ? true : false,
            projects: target === 'projects' ? true : false,
            contact: target === 'contact' ? true : false,
        }));

        const headerHeight = headerRef.current?.offsetHeight || 0;
        if (window.scrollY > headerHeight) {
            setHeaderStyle('bg-purple shadow-lg sticky top-0 z-10')
        } else {
            setHeaderStyle('bg-purplr shadow-lg')
        }
    }

    return (
        <header className={headerStyle} ref={headerRef} >
            <div className='mx-auto min-h-full w-11/12 lg:w-10/12'>
                <div className="flex justify-between items-center">
                    <img src="./assets/logo.png" alt="Logo" className='w-20 lg:w-32 z-10 ' />
                    <MobileNav nav={nav} switchMenu={handleMenu} focus={focusActiveLink} switchActive={switchActive} isActiveLink={active} />
                    <DesktopNav focus={focusActiveLink} switchActive={switchActive} isActiveLink={active}  />
                </div>
            </div>
        </header>
    );
}

export default Header;
