import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import resume from "../assets/portfolio/cv_zouine_ayoub.pdf"
const SocialLinksSmall = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
           <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/ayoub-zouine-3b0647233/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
           <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/ayouzou",
    },
    {
      id: 3,
      child: (
        <>
           <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:ayoubzouine83@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
           <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: resume,
      download: true,
    },

  ];

  return (
    <div className="lg:flex flex-col bottom-[5%] left-[20%] fixed">
      <ul className="flex">
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={ "flex justify-between items-center sm:w-16 w-16 h-14 sm:px-4 px-2  hover:rounded-md duration-300 bg-gray-900" +
              " " +style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinksSmall;
