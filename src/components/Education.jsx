import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';


const Education = () => {
    const educationDetails = [
        {
            id: 1,
            title: "MERN Stack Training",
            institution: "JobInTech",
            location: "Casablanca",
            year: "2023",
        },
        {
            id: 2,
            title: "Computer Development Techniques",
            institution: "ISTA",
            location: "Berrechid",
            year: "2020 - 2022",
        },
        {
            id: 3,
            title: "High School Diploma in Physical Science",
            institution: "Hassan II High School",
            location: "Deroua",
            year: "2019 - 2020",
        },
    ];

    return (
        <div className="py-6">
            {educationDetails.map((education) => (
                <div key={education.id} className="mb-6 border-b border-gray-600 last:border-b-0">
                    <p className="text-xl font-semibold">{education.title}</p>
                    <p className="text-lg">{education.institution}</p>
                    <p className="text-lg">{education.location}</p>
                    <p className="text-lg">{education.year}</p>
                </div>
            ))}
            <div className="portfolio-btn" >
                <Link
                    to="Certification"
                    smooth
                    duration={500}
                    className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                >
                    Certification
                    <span className="group-hover:rotate-90 duration-300">
                        <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default Education