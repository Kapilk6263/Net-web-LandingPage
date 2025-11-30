import React, { useState } from "react";

const faqData = [
  {
    question: "Q1. What is NetVest?",
    answer:
      "NetVest is the premier virtual platform that provides small businesses and entrepreneurs with the resources and partnerships necessary to expand business opportunities and support business growth. NetVest offers innovative capabilities such as networking groups (private and public), free marketing and advertising, and virtual events such as business meetings and business pitches."
  },
  {
    question: "Q2. What is a NetVestor?",
    answer:
      "A NetVestor is a business owner, entrepreneur, or contractor who participates in the NetVest ecosystem."
  },
  {
    question: "Q3. I’m an individual contractor, can I sign up for a small business account?",
    answer: "Yes! Individual contractors are welcome and encouraged to join."
  },
  {
    question: "Q4. How much does it cost to be a NetVest Member?",
    answer: "Membership pricing varies based on tier and features included."
  },
  {
    question: "Q5. How much does a Business Shower cost?",
    answer: "Business Shower pricing depends on event size and add-ons."
  },
  {
    question: "Q6. How much does it cost to conduct a virtual Conference on NetVest?",
    answer: "The NetVest Virtual Event and Conferencing tool is 100% free for members. NetVest is designed to bring people together to bridge what you know and who you know with other networkers, small businesses and investors for a common purpose."
  },
   {
    question: "Q7. How do I contact NetVest for customer service-related issues?",
    answer: "Please email Customerservice@net-vest.com for customer service-related issues and a member of the NetVest team will get back to you.."
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 bg-[#E9F4F2]">
      <div className="container mx-auto px-6 lg:px-20">
        
        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">

          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-[#F8CFC8] rounded-lg shadow-md transition"
            >
              
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-lg"
              >
                {faq.question}

                <span className="text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

             
              {activeIndex === index && (
                <div className="bg-white px-6 py-4 border-t transition duration-300">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FAQ;
