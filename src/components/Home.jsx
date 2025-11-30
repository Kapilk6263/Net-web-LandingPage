import React from 'react'
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Stats from './Stats';
import Footer from './Footer';
import Mentions from './Mentions';
import CallToAction from './CallToAction';


const Home = () => {
  return (
   <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Mentions/>
        <CallToAction/> 
      </main>
      <Footer />
    </div>
  )
}

export default Home
