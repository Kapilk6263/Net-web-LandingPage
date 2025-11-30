import React from 'react';
import sectionImg from '../assets/section.png'

const Hero = () => {
   return (
    <section className="bg-[#EEF7F5] py-40 px-6 sm:px-10 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

       
        <div>
          <p className="text-[#52A397] font-semibold tracking-wide uppercase text-sm">
            Connect. Promote. Grow.
          </p>

          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mt-3">
            NetVest
          </h1>

          <p className="text-gray-700 mt-5 text-lg leading-relaxed">
            Where investing in yourself and your business has never been so easy.
            Welcome to the premier platform that allows you to Connect, Promote &
            Grow your business.
          </p>

          <button className="mt-8 bg-[#E8684A] hover:bg-[#d1593d] text-white px-6 py-3 rounded-md font-semibold transition duration-300">
            Get Started
          </button>
        </div>

      
        <div className="flex justify-center">
          <img 
            src={sectionImg} 
            alt="People Working"
            className="max-w-[450px] w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};


export default Hero;
