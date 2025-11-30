import React, { useState } from 'react';
import logo from '../assets/logo.webp'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-sm fixed w-full z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center"> 
                        <a href="/" className="flex-shrink-0 flex items-center">
                            <img src={logo} alt="Net Web" className="h-10 w-auto sm:h-12 object-contain" />
                        </a>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/ourwhy" className="text-black hover:text-primary transition-colors">Our Why</Link>
                        
                        <a href="#features" className="text-black hover:text-primary transition-colors">Why NetVest?</a>
                        <a href="#now" className="text-black hover:text-primary transition-colors">Why Now?</a>
                        <Link to="/FAQ" className="text-black hover:text-primary transition-colors" >FAQs</Link>
    
                        <div className="flex items-center space-x-4">
                            <button className= "border-2 border-[#52A397] rounded-md px-4 py-2 text-[#52A397] font-medium hover:text-primary-light">Sign up</button>
                            <button className="bg-[#52A397] hover:bg-[#52A397]-light text-white px-5 py-2 rounded-md transition-colors">
                                Login
                            </button>
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-gray-900 focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#why" className="block px-3 py-2 text-gray-600 hover:text-primary">Our Why</a>
                        <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-primary">Why NetVest?</a>
                        <a href="#now" className="block px-3 py-2 text-gray-600 hover:text-primary">Why Now?</a>
                        <a href="#faqs" className="block px-3 py-2 text-gray-600 hover:text-primary">FAQs</a>
                        <div className="mt-4 px-3 space-y-2">
                            <button className="block w-full text-left text-primary font-medium">Login</button>
                            <button className="block w-full bg-primary text-white px-4 py-2 rounded-md text-center">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
