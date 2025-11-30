import React from 'react';
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";


const features = [
  {
    icon: icon1,
    title: "Connect",
    description:
      "Be empowered to select the network that is right for you and your business. Find professionals in your field, establish future partnerships, create your own supply chain, find a circle of investors. Let your net worth be as big as your network!",
  },
  {
    icon: icon2,
    title: "Promote",
    description:
      "Be enticing, bold, and authentic in what you have to offer through customizable marketing and solicitation campaigns. Advertise your business, your services and products, post job announcements, release contracts and statements of work. Market all that you have to offer and more!",
  },
  {
    icon: icon3,
    title: "Grow",
    description:
      "Be ambitious and find continuous ways to develop, scale, and expand your business. Explore investment opportunities, virtual events, and our one-of-a-kind business showers to celebrate your accomplishments!",
  },
];
const Stats = () => {
   return (
    <section className="py-20 px-6 sm:px-10 lg:px-20 bg-white">
      <div className="container mx-auto grid md:grid-cols-3 gap-12 text-center">

        {features.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            
           
            <div className="bg-[#E8684A] bg-opacity-30 rounded-full w-28 h-28 flex items-center justify-center">
              <img src={item.icon} alt={item.title} className="w-14" />
            </div>

            
            <h3 className="text-lg font-semibold text-gray-900 mt-6">
              {item.title}
            </h3>

           
            <p className="mt-3 text-gray-600 leading-relaxed text-sm">
              {item.description}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Stats;
