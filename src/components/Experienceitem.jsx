import React from 'react'

const Experienceitem = () => {
    const experiences = [
        {
          id: 1,
          title: "Full Stack Web Developer",
          company: "ARK-X Talent Factory",
          type: "Internship",
          date: "Jul 2023 - Dec 2023",
          duration: "6 mos",
          location: "Casablanca-Settat, Morocco",
          description: "I've had the chance to collaborate with large teams of engineers to develop scalable web-based solutions. I helped implement features on the front-end and back-end levels, using the MERN stack.",
          responsibilities: [
            "Design and develop the UI interface with React.js.",
            "Integrate designs and models provided by the teams.",
            "Set up servers and APIs with Node.js and Express.js.",
            "Manage MongoDB databases: design, creation schemas, queries, etc. Ensure road management, Data validation, and CRUD operations.",
          ],
        },
        {
          id: 2,
          title: "Developer Applications Desktop",
          company: "StelvioCar",
          type: "Internship",
          date: "Apr 2022 - May 2022",
          duration: "2 mos",
          location: "Remote",
          description: "During a month of internship, StelvioCar wanted to create a desktop application for rental car management and creation of a visual identity.",
          responsibilities: [
            "Creation of a desktop application in C# and SQL Server.",
            "Data validation and CRUD operations.",
            "Creation of a visual identity.",
          ],
        },
        // Add more entries as needed
      ];


  return (
    <div className="py-6 ">
    {experiences.map((experience) => (
      <div
        key={experience.id}
        className="py-4 border-b border-gray-600 last:border-b-0"
      >
        <p className="text-xl font-semibold">{experience.title}</p>
        <p className="text-lg">{experience.company} · {experience.type}</p>
        <p className="text-lg">{experience.date} · {experience.duration}</p>
        <p className="text-lg">{experience.location}</p>
        <p className="text-lg">{experience.description}</p>

        <ul className="list-disc pl-6">
          {experience.responsibilities.map((responsibility, index) => (
            <li key={index} className="text-base">{responsibility}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
  )
}

export default Experienceitem