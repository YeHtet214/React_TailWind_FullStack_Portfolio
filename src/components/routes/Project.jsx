import React from 'react';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

const Project = ({ id, title, description, live_link, code_link }) => {
    const flexContainerStyle = id % 2 === 0 ? 'lg:flex-row-reverse' : '' ;
    const flexItemImgStyle = id % 2 === 0 ? 'pl-4 lg:pl-28' : 'pr-4 lg:pr-28';
    const flexItemContentStyle = id % 2 === 0 ? 'lg:translate-x-20' : 'lg:-translate-x-16';
    
    return (
        <div className={`flex flex-col content-center gap-12 lg:flex-row lg:gap-0 ${flexContainerStyle} `}>
            <div className={`bg-violet lg:col-span-2 py-10 lg:py-24 ${flexItemImgStyle}`}>
                <img src='./assets/project1.png' alt={'Project ' + id} />
            </div>
            <div className={` leading-loose ${flexItemContentStyle}`}>
                <h3 className='text-2xl font-bold text-pure'>{title}</h3>
                <p className='tracking-wider text-white text-ellipsis max-w-sm break-words'>{description}</p>
                <div className='flex mb-2'>
                    <caption className='felx-1 italic'>Technologies: </caption>
                    <div className='text-white flex gap-2 items-center ml-4'>
                        <FaHtml5 className='text-'/>
                        <FaCss3Alt />
                        <IoLogoJavascript />
                        <FaReact />
                        <SiExpress />
                    </div>
                </div>
                <div className='inline-block mb-2.5 relative cursor-pointer before:absolute before:w-full before:h-2 before:bottom-0 before:left-0 before:bg-pink hover:before:h-full hover:before:content-["Live_App"] before:ease-in before:duration-100 before:text-center before:flex before:items-center before:justify-center before:text-xl'>
                    <a href={live_link} className='text-xl py-2 px-4'>Live App</a>
                </div><br />
                <div className='inline-block relative cursor-pointer before:absolute before:w-full before:h-2 before:bottom-0 before:left-0 before:bg-pink hover:before:h-full hover:before:content-["Source_Code"] before:ease-in before:duration-100 before:text-center before:flex before:items-center before:justify-center before:text-xl'>
                    <a href={code_link} className='text-xl py-2 px-4'>Source Code</a>
                </div>
            </div>
        </div>
    );
}

export default Project;
