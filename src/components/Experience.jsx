import React, { useState } from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import typescript from "../assets/typescript.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import express from "../assets/express.png"
import mongodb from "../assets/mongodb.png"
import redux from "../assets/redux.png"
import Education from "./Education";
import Experienceitem from "./Experienceitem";
const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: node,
      title: "NodeJs",
      style: "shadow-green-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: typescript,
      title: "TypeScript",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 10,
      src: express,
      title: "Express",
      style: "shadow-white",
    },
    {
      id: 11,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 12,
      src: redux,
      title: "Redux",
      style: "shadow-purple-500",
    },
  ];
  const [activeTab, setActiveTab] = useState("skills");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const tabs = [
    { name: "experience", label: "Experience" },
    { name: "education", label: "Education" },
    { name: "skills", label: "Skills" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "education":
        return <Education/>;
      case "experience":
        return <Experienceitem/>;
      default:
        return (
          <div name='experience'
           className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        );
    }
  };
  return (
    <div className="bg-gradient-to-b from-gray-800 to-black ">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white ">
        <div className="flex justify-center">
          {tabs.map((tab) => (
            <div
              key={tab.name}
              onClick={() => handleTabClick(tab.name)}
              className={`cursor-pointer px-6 py-3 ${activeTab === tab.name
                  ? "bg-cyan-700 text-white"
                  : "text-cyan-700"
                }`}
            >
              {tab.label}
            </div>
          ))}
        </div>
        <div>
          <p className="text-4xl font-bold border-b-4 border-cyan-700 p-2">
            {tabs.find((tab) => tab.name === activeTab)?.label}
          </p>
          <p className="py-2">
            {activeTab === "experience" }
            {activeTab === "education"}
            {activeTab === "skills" }
          </p>
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default Experience;
