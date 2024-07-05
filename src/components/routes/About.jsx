import React from 'react';

const About = () => {
    return (
        <section className='mx-auto min-h-[100vh] w-11/12 lg:w-10/12 relative py-16' id="about">
            <div className='text-left lg:text-center'>
                <div className="inline-block">
                    <span className='min-w-full  inline-block min-h-6 translate-x-6 bg-pink'></span>
                    <h1 className='text-4xl font-extrabold translate-y-[-135%]'>About Me</h1>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-10 overflow-hidden justify-center lg:gap-0 lg:items-stretch'>
                <div className='lg:max-w-[55%]'> 
                    <p className="leading-6 text-lightGray text-justify">Hi there! I'm Ye Htet, and I'm an aspiring full-stack developer with a knack for turning ideas into interactive experiences on the web. My fascination with technology sparked early, and I've spent the past [number] years honing my skills in HTML, CSS, JavaScript, React, Node.js, Express, and PostgreSQL. I'm particularly passionate about building user-friendly interfaces and crafting seamless back-end logic, and I'm eager to leverage my abilities to contribute to a team environment.

Fueled by a desire to constantly learn and grow, I'm always looking for new challenges and opportunities to expand my knowledge. In my free time, I enjoy [briefly mention a hobby related to technology or problem-solving]. This [explain how your hobby connects to your development skills]. I believe this blend of technical expertise and [positive personality trait] makes me a valuable asset to any team.</p>
                    <button className='border-2 border-pink rounded-2xl py-1 px-2 mt-4'>Download CV</button>
                </div>
                <div className='justify-center flex items-stretch'>
                    <ul className='grid grid-cols-5 grid-rows-3 gap-4 p-4 min-w-[90%] lg:w-1/2 hover:gap-0 cursor-pointer ease-out duration-300'>
                        <li className='min-w-[40px] max-h-32 col-start-1 row-start-1 col-end-2 row-end-2'><img src="./assets/react.png" alt="" /></li>
                        <li className='min-w-[40px] max-h-32 col-start-3 row-start-1 col-end-4 row-end-4'><img src="./assets/js.png" alt="" /></li>
                        <li className='min-w-[40px] max-h-32 col-start-5 row-start-1 col-end-6 row-end-2'><img src="./assets/html.png" alt="" /></li>
                        <li className='min-w-[40px] max-h-32 col-start-2 row-start-2 col-end-3 row-end-3'><img src="./assets/css.png" alt="" /></li>
                        <li className='min-w-[40px] max-h-32 col-start-4 row-start-2 col-end-5 row-end-4'><img src="./assets/express.png" alt="" /></li>
                        <li className='min-w-[40px] max-h-32 col-start-1 row-start-3 col-end-2 row-end-4'><img src="./assets/postgresql.png" alt="" /></li>
                        <li className='min-w-[40px] max-h-32 col-start-3 row-start-3 col-end-4 row-end-4'><img src="./assets/node.png" alt="" /></li>
                        <li className='min-w-[40px] max-h-32 col-start-5 row-start-3 col-end-6 row-end-4'><img src="./assets/git.png" alt="" /></li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default About;
