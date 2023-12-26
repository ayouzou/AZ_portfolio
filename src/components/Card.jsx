import React from 'react';
import './style.css'

const Card = ({ imageSrc, title, description, stack,href }) => {
 
  return (
    <a href={href} target='_blank' className="card rounded-lg  shadow-md mb-5 cursor-pointer   ">
      <img src={imageSrc} alt="" className="card-image mb-4 sm:w-full w-96 sm:h-60 h-52 object-cover rounded-md" />
      <div className="card-details ">
        <h2 className="sm:px-4 sm:text-xl font-bold sm:mb-2 text-white border-b-2  border-cyan-300">{title}</h2>
        <p className="sm:px-4 text-white sm:mb-4 sm:font-semibold font-normal">{description}</p>
        <h3 className="sm:px-4 sm:text-lg  font-bold sm:mb-2 text-white border-b-2 border-cyan-300">Stack <span className='text-cyan-500'>&</span> Library</h3>
        <p className="sm:px-4 text-white font-semibold">{stack}</p>
      </div>
    </a>
  );
};
export default Card;
