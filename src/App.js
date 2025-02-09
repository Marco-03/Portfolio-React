import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import SpinningSphere from './components/SpinningSphere';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import CardInfo from "./components/CardInfo";
import Hamster from "./components/Hamster";

const App = () => {
    const [showHamster, setShowHamster] = useState(false); // State for hamster visibility

    useEffect(() => {
        AOS.init({
                duration: 1000,
            once: true,
        });

        const handleScroll = () => {
            const scrollHeight = window.scrollY + window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            // Show badge when near the bottom of the page
            if (scrollHeight >= documentHeight - 100) {
                setShowHamster(true); // Show hamster at the bottom
            } else {
                setShowHamster(false); // Hide hamster when not at the bottom
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Navbar/>
            <main className="text-gray-300">
                <About/>
                <Projects/>
                    <Skills/>
                    <SpinningSphere/>
                <Experience/>
                <Contact/>

                <CardInfo/>
            </main>
            <footer className="bg-black text-gray-400 text-center py-4 mt-auto border-t border-gray-700">
                {/* Conditionally render Hamster */}
                {showHamster && <Hamster />}
                © {new Date().getFullYear()} Marco's Portfolio. All rights reserved.
            </footer>
        </>
    );
};

export default App;
