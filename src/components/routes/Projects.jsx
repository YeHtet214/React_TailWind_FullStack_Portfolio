import React from 'react';
import Project from "./Project";

const projects = [
    {
        title: 'Web Builder',
        description: 'A Fully Functional Full Stack Project.',
        live_link: '',
        code_link: '',
    },
    {
        title: 'Budget Tracker',
        description: 'Budget is the one to keep track of maually is not easy and it\'s more easier than ever and start with this.',
        live_link: '',
        code_link: '',
    },
    {
        title: 'Shoppee',
        description: 'An online market place where you can get everything with the best price and secure with fastest delivery!',
        live_link: '',
        code_link: '',
    },
]

const Projects = () => {
    return (
        <section className='bg-black py-10' id='projects'>
            <a name="projects" className='absolute'></a>
            <div className='mx-auto min-h-[90vh] w-11/12 lg:w-10/12 relative py-10' id='projects'>
                <div className='text-left lg:text-center'>
                    <div className="inline-block">
                        <span className='min-w-full inline-block min-h-6 translate-x-6 bg-pink'></span>
                        <h1 className='text-4xl font-extrabold translate-y-[-135%]'>Projects</h1>
                    </div>
                </div>
                {/* PROJECTS LIST  */}
                <ul className='flex flex-col gap-44'>
                    {
                        projects.map(( project, i ) => (
                            <Project key={i} id={i + 1} title={project.title} description={project.description} live_link={project.live_link} code_link={project.code_link} />
                        ))
                    }
                </ul>
            </div>
        </section>
    );
}

export default Projects;
