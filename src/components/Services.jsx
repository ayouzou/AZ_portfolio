import React from 'react';
import Card from './Card';
import storeBuilder from '../assets/portfolio/landing.png'
import CHATAPP from '../assets/portfolio/CHATAPP.png'
import StoreAZ from '../assets/portfolio/StoreAZ.png'


// import './style.css'
const Services = () => {
    const projects = [
        {
            imageSrc: storeBuilder,
            title: 'Store Builder',
            description: 'Store builder we provide to our customer a store with functionality to start manage his store e-comm with backoffice also.',
            stack: 'MERN: MongoDB-Reactjs-Expressjs-Nodejs, Redux-ReactQuery-Tailwind',
        },
        {
            imageSrc: CHATAPP,
            title: 'Chat App',
            description: 'I build a chat-app Real time by using MERN Stack',
            stack: 'MERN: MongoDB-Reactjs-Expressjs-Nodejs, Redux-Bootstrap',
        },
        {
            imageSrc: StoreAZ,
            title: 'StoreAZ Template',
            description: 'This template of store-ecom from store builder with login register and dashboard!',
            stack: 'MERN: MongoDB-Reactjs-Expressjs-Nodejs, Redux-ReactQuery-Tailwind',
        },
    ];
    return (
        <div name="portfolio" 
        className='text-white bg-gradient-to-b from-black to-gray-800 '>
            <div className='max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full '>
                <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                    <div className="pb-8">
                        <h1 className='text-4xl font-bold inline border-b-4 border-cyan-700 '>MY PROJECTS</h1>
                    </div>
                    <p className="text-xl mt-5"> Some Things I've built so far </p>
                </div>
                <h6></h6>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 sm:h-80 h-full mt-5  ' >
                    {projects.map((project, index) => (
                        <Card key={index} {...project} />
                    ))}
                </div>
            </div>
        </div >
    );
};

export default Services;
