import React, { useState } from 'react';
import Card from './Card';
import storeBuilder from '../assets/portfolio/landing.png'
import CHATAPP from '../assets/portfolio/CHATAPP.png'
import StoreAZ from '../assets/portfolio/StoreAZ.png'
import carsrental from '../assets/portfolio/carsRental.png'
import trvl from '../assets/portfolio/trvl.png'
import books from '../assets/portfolio/books.png'
import trvl2 from '../assets/portfolio/trvl2.png'



const buttons = [
    { name: 'all', label: 'All' },
    { name: 'full stack', label: 'Full Stack' },
    { name: 'front end', label: 'Front End' },
];
// import './style.css'
const Services = () => {
    const projects = [
        {
            imageSrc: storeBuilder,
            title: 'Store Builder',
            description: 'Store builder we provide to our customer a store with functionality to start manage his store e-comm with backoffice also.',
            stack: 'MERN: MongoDB-Reactjs-Expressjs-Nodejs, Redux-ReactQuery-Tailwind',
            option: 'full stack',
            href:'https://github.com/ayouzou/AZ_store_/tree/main/client'

        },
        {
            imageSrc: CHATAPP,
            title: 'Chat App',
            description: 'I build a chat-app Real time by using MERN Stack',
            stack: 'MERN: MongoDB-Reactjs-Expressjs-Nodejs, Redux-Bootstrap',
            option: 'full stack',
            href:'/'

        },
        {
            imageSrc: StoreAZ,
            title: 'StoreAZ Template',
            description: 'This template of store-ecom from store builder with login register and dashboard!',
            stack: 'MERN: MongoDB-Reactjs-Expressjs-Nodejs, Redux-ReactQuery-Tailwind',
            option: 'full stack',
            href:'https://github.com/ayouzou/AZ_store_/tree/main/client'

        },
        {
            imageSrc: carsrental,
            title: 'Car Rental Desktop App',
            description: 'Desktop application for renting cars, built with C# and SQL Server ADO.NET. The application allows users to manage car rentals and includes a back office for efficient operation.',
            stack: 'C#-SQL Server ADO.NET',
            option: 'full stack',
            href:'/'
        },
        {
            imageSrc: trvl,
            title: 'Travel Website Front End',
            description: 'I created the front-end for a travel website using React and Tailwind CSS.',
            stack: 'React-Tailwind CSS',
            option: 'front end',
            href:'https://trvl-kappa.vercel.app/'
        },
        {
            imageSrc: books,
            title: 'Bookstore Interface',
            description: 'I developed a front-end interface for a bookstore, incorporating book search functionality. The interface is built using React and CSS, and it consumes data from an API through a context.',
            stack: 'React-CSS',
            option: 'front end',
            href:'https://github.com/ayouzou/Books_api'
        },
        {
            imageSrc: trvl2,
            title: 'Travel Website Front End',
            description: 'I created the front-end for a travel website using React and Tailwind CSS.',
            stack: 'React-Tailwind CSS',
            option: 'front end',
            href:'https://travel-ayouzou.vercel.app/'
        },
        // {
        //     imageSrc: CHATAPP,
        //     title: 'Chat App',
        //     description: 'I build a chat-app Real time by using MERN Stack',
        //     stack: 'MERN: MongoDB-Reactjs-Expressjs-Nodejs, Redux-Bootstrap',
        //     option: 'front end'

        // },
        // {
        //     imageSrc: StoreAZ,
        //     title: 'StoreAZ Template',
        //     description: 'This template of store-ecom from store builder with login register and dashboard!',
        //     stack: 'MERN: MongoDB-Reactjs-Expressjs-Nodejs, Redux-ReactQuery-Tailwind',
        //     option: 'front end'

        // },
    ];
    const [displayedProjects, setDisplayedProjects] = useState(projects.slice(0, 9));;
    const [selectedFilter, setSelectedFilter] = useState(null);
    const loadMoreProjects = () => {
        const currentLength = displayedProjects.length;
        const newProjects = projects.slice(currentLength, currentLength + 9);
        setDisplayedProjects([...displayedProjects, ...newProjects]);
    };
    const handleFilter = (filter) => {
        setSelectedFilter(filter);
        const filteredProjects =
            filter === 'all' ? projects : projects.filter((project) => project.option === filter);
        setDisplayedProjects(filteredProjects.slice(0, 9)); 
    };
    return (
        <div name="portfolio"
            className='text-white bg-gradient-to-b from-black to-gray-800  h-auto'>
            <div className='max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full  '>
                <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                    <div className="pb-8">
                        <h1 className='text-4xl font-bold inline border-b-4 border-cyan-700 '>MY PROJECTS</h1>
                    </div>
                    <p className="text-xl mt-5"> Some Things I've built so far </p>
                </div>
                <h6></h6>
                <div className="flex mx-auto">
                {buttons.map((button) => (
                    <div
                        key={button.name}
                        onClick={() => handleFilter(button.name)}
                        className={`cursor-pointer px-6 py-3 ${
                            selectedFilter === button.name ? 'bg-cyan-700 text-white' : 'text-cyan-700'
                        }`}
                    >
                        {button.label}
                    </div>
                ))}
            </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 sm:h-auto h-auto mt-5  ' >
                    {displayedProjects.map((project, index) => (
                        <Card key={index} {...project} />
                    ))}
                </div>
                {displayedProjects.length < projects.length && (
                    <div className="flex justify-center mt-5">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={loadMoreProjects}
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>
        </div >
    );
};

export default Services;
