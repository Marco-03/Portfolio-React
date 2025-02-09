import React, { useState } from 'react';
import Loader from "./Loader";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <Loader />
            <header className="bg-black text-emerald-200 fixed w-full z-50 shadow-md border-b border-b-emerald-400 ">
                <nav className="flex justify-between items-center p-4 max-w-screen-xl mx-auto">
                    {/* Gradient Title */}
                    <h1
                        className="text-xl font-bold bg-gradient-to-l  from-[#00ff87] to-[#60efff] bg-clip-text text-transparent"
                    >
                        My Portfolio
                    </h1>

                    {/* Hamburger Menu Button */}
                    <button
                        className="text-gray-400 md:hidden"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle Menu"
                    >
                        ☰
                    </button>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex gap-6">
                        {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className="hover:text-[#60efff] transition duration-300"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Navigation */}
                    {isMobileMenuOpen && (
                        <ul className="absolute top-[60px] left-0 w-full bg-black flex flex-col gap-4 p-4 md:hidden">
                            {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="hover:text-[#60efff] transition duration-300"
                                        onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </nav>
            </header>
        </>
    );
};

export default Navbar;
