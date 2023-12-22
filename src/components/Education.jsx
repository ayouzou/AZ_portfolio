import React from 'react'

const Education = () => {
    const educationDetails = [
        {
            id: 1,
            title: "Formation en Stack MERN",
            institution: "JobInTech",
            location: "Casablanca",
            year: "2023",
        },
        {
            id: 2,
            title: " Techniques de Développement Informatique",
            institution: "ISTA",
            location: "Berrechid",
            year: "2020 - 2022",
        },
        {
            id: 3,
            title: "BAC en Science Physique",
            institution: "Lycée Hassan II",
            location: "Deroua",
            year: "2019 - 2020 ",
        },
        // Add more entries as needed
    ];
    return (
        <div className="py-6">
            {educationDetails.map((education) => (
                <div
                    key={education.id}
                    className="mb-6 border-b border-gray-600 last:border-b-0"
                >
                    <p className="text-xl font-semibold">{education.title}</p>
                    <p className="text-lg">{education.institution}</p>
                    <p className="text-lg">{education.location}</p>
                    <p className="text-lg">{education.year}</p>
                </div>
            ))}
        </div>
    )
}

export default Education