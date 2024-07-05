import React from 'react';

const Contact = () => {
    const inputStyle = 'py-3 px-2 text-white font-bold border-2 border-lightViolet bg-purple rounded-md';
    return (
        <section className='mx-auto py-16 min-h-[90vh] w-11/12 lg:w-10/12 relative' id='contact'>
            <div className='text-left lg:text-center'>
                <div className="inline-block">
                    <span className='min-w-full inline-block min-h-6 translate-x-6 bg-pink'></span>
                    <h1 className='text-4xl font-extrabold translate-y-[-135%]'>Contact</h1>
                </div>
            </div>
            <div className='lg:max-w-lg mx-auto'>
                <h4>
                    Have a question or want  to work together? Please leave a comment 
                    and I will get back to you as soon as possible.
                </h4>
                <form action="POST" className='flex flex-col gap-8 mt-12'>
                    <input type="text" placeholder="Name" className={inputStyle} />
                    <input type="email" placeholder="Email" className={inputStyle} />
                    <textarea name="message" placeholder='Message' className={`${inputStyle} resize-none`} rows={7}></textarea>
                    <div className='max-w-fit self-end relative cursor-pointer before:absolute before:w-full before:h-[5px] before:bottom-0 before:left-0 before:bg-pink hover:before:h-full hover:before:content-["Submit"] before:ease-in before:duration-100 before:text-center before:flex before:items-center before:justify-center before:text-xl'>
                        <button className='text-xl py-2 px-4'>Submit</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;
