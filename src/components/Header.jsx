import React, { useEffect, useState, useRef } from 'react';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

const Header = () => {
    const [headerStyle, setHeaderStyle] = useState('bg-black bg-opacity-50 shadow-lg z-20');
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

    const focusActiveLink = ( navLink ) => navLink ? 'ml-4 text-sm hover:text-pink border-b-2 border-pink' : 'ml-4 text-sm hover:text-pink';

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
            setHeaderStyle('bg-black bg-opacity-75 shadow-lg sticky top-0 z-10')
        } else {
            setHeaderStyle('bg-black bg-opacity-75 shadow-lg')
        }
    }

    return (
        <header className={headerStyle} ref={headerRef} >
            <div className='mx-auto min-h-full w-11/12 lg:w-10/12'>
                <div className="flex justify-between items-center">
                    <a href="/">
                        <img src="./assets/logo.png" alt="Logo" className='w-16 lg:w-20 z-10 ' />
                    </a>
                    <MobileNav nav={nav} switchMenu={handleMenu} focus={focusActiveLink} switchActive={switchActive} isActiveLink={active} />
                    <DesktopNav focus={focusActiveLink} switchActive={switchActive} isActiveLink={active}  />
                </div>
            </div>
        </header>
    );
}

export default Header;
