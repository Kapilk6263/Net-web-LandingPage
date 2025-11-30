import React from 'react';
import section3 from '../assets/section3.png'
import section4 from '../assets/graph.png'

const FeatureSection = ({ title, description, image, reversed }) => (
  <div
    className={`flex flex-col ${
      reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
    } items-center gap-12 py-16 lg:py-24`}
  >
    
    <div className="flex-1 px-4">
      <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
        {title}
      </h2>
      <p className="text-lg text-gray-600 leading-relaxed">{description}</p>

    </div>

   
    <div className="flex-1 w-full">
      <img
        src={image}
        alt={title}
        className="rounded-xl w-full h-full object-cover shadow-md"
      />
    </div>
  </div>
);

const Features = () => {
    return (
    <section id="features" className="py-16 bg-[#ffffff]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <FeatureSection
          
          image={section3}
          title="Why NetVest?"
          description="The NetVest site uniquely allows entrepreneurs to design and navigate business with customers, networks, and business partners of choice. Yes, the site is designed to give entrepreneurs the ultimate power to determine who they want to engage with to steer and navigate their business needs. NetVest provides innovative capabilities such as networking groups (private and public), free marketing and advertisement, virtual business rooms and live opportunities to attend virtual business pitches."
          reversed={true}
        />
        <div id="now">
        <FeatureSection
          title="Why Now?"
          description="Small Businesses comprise 99.9% of all U.S businesses and data continues to show that approximately 20% of new businesses fail during the first two years of operating. It’s time to focus on the growth, development and success of small businesses. NetVest is that game changer; it shifts the paradigm from the restrictive and traditional way of getting your foot in the door to giving aspiring and established entrepreneurs instant access to everything and everyone they need to fully engage in a thriving business life cycle. It’s time to take control over your own future, it’s time to Connect, Promote and Grow with NetVest!"
          image={section4}
        />
 </div>
      </div>
    </section>
  );
};

export default Features;
