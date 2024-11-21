import React from "react";
import logo from '../assets/logocp.webp';

const Footer = () => {
    return (
        <footer className=" text-white py-8 max-w-screen-xl mx-auto">
            <div className="container mx-auto flex flex-col md:flex-row  md:items-start md:justify-between">
                {/* Logo Section */}
                <div className="text-center md:text-left mb-6 md:mb-0">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-16 mx-auto md:mx-0 rounded-lg"
                    />
                    <p className="text-xl md:text-2xl">CAREER <span className="font-bold">PATH</span></p>
                    
                </div>

                {/* Navigation Links */}
                <div className="mt-8 md:mt-0">
                    <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                    <ul className="space-y-2">
                        <li>
                            <a href="/" className="hover:underline">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#services" className="hover:underline">
                                Services
                            </a>
                        </li>
                        <li>
                            <a className="hover:underline">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a className="hover:underline">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="mt-8 md:mt-0">
                    <h2 className="text-xl font-bold mb-4">Contact Us</h2>
                    <p className="mb-2">
                        <i className="fas fa-envelope mr-2"></i>
                        <p>admin@careerpath.com</p>
                    </p>
                    <p className="mb-2">
                        <i className="fas fa-phone"></i>
                        +1 234 567 890
                    </p>
                    <div className="flex space-x-4 mt-4 justify-center md:justify-start">
                        <a href="#" className="hover:text-[#1ABC9C]">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="#" className="hover:text-[#1ABC9C]">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="hover:text-[#1ABC9C]">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-8 text-center border-t border-gray-400 pt-4">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
