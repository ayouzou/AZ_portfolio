import React, { useEffect } from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Lottie from "lottie-react";
import man from '../assets/lottie/man.json'

import aos from 'aos'
import 'aos/dist/aos.css'
const Home = () => {

  useEffect(() => {
    console.log("Initializing AOS");
    aos.init({ duration: 2000 });
  });
  
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 home"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="small-screen hidden">
          {/* <img
            src={HeroImage}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          /> */}
          <div data-aos="fade-up"  className="rounded-2xl mx-auto w-2/3 md:w-full sm:mt-0 mt-8">
            <Lottie animationData={man} loop={true} />
          </div>
        </div>
        <div className="flex flex-col justify-center h-full" data-aos="fade-right">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm <span className="text-sky-700 sm:text-5xl">AYOUB ZOUINE</span> Full Stack Web Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have +1 year of experience building websites and desgining software.
            I love to work on web application using technologies like
            React, Tailwind, Next JS and TypeScript.
          </p>

          <div className="portfolio-btn" data-aos="fade-down">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="big-screen">
          {/* <img
            src={HeroImage}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          /> */}
           <div className="rounded-2xl mx-auto w-2/3 md:w-full">
            <Lottie animationData={man} loop={true} />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
