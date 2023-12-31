import React, { useEffect } from "react";
import aos from 'aos'
import 'aos/dist/aos.css'
const About = () => {
  useEffect(() => {
    console.log("Initializing AOS");
    aos.init({ duration: 2000 });
  },[]);
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white about"

    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8" data-aos="fade-right">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-700">
            About
          </p>
        </div>

        <p className="text-xl mt-5" data-aos="fade-right">
        I am a web developer, working in both, backend and frontend programming. Excited for improving my skills and learning new technologies. I'm open to learn and work with any web technology and currently doing freelance gigs.
        </p>

        <br />

        <p className="text-xl" data-aos="fade-up">
        I like to code matters from scratch and love the idea of bringing thoughts to life. Connect with me to get your project done. <br /> <br />
        I value minimalistic designs, thoughtful branding of the content, and customer relatable experience. Let’s discover together how we can make your project convert better!<br /> <br />
        I enjoy creating or redesigning a distinct identity for a product or service, get more traffic from search engine and social platforms.
        </p>
      </div>
    </div>
  );
};

export default About;
