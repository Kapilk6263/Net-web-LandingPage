import React from "react";
import inc from "../assets/section41.png";
import authority from "../assets/section42.png";
import forbes from "../assets/section43.png";

const mentions = [
  {
    logo: inc,
    text: "Business Showers: Celebrating and supporting new ventures | Inc.com",
  },
  {
    logo: authority,
    text: "Female Disruptors: Michelle Haines of NetVest on the three things you need to shake up your industry | By Authority Magazine editorial staff | Authority Magazine | Medium",
  },
  {
    logo: forbes,
    text: "5 Reasons collaborations are guaranteed to help you grow your business | Forbes.com",
  },
];

const Mentions = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        
       
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          We Were Mentioned
        </h2>

        

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {mentions.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              
            
              <img 
                src={item.logo} 
                alt="media-logo" 
                className="h-14 w-auto object-contain mb-6"
              />

              
              <p className="text-gray-600 text-sm leading-relaxed max-w-[300px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Mentions;
