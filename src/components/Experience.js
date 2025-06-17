import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SpinningCube3D from './SpinningCube3D';

const Experience = () => {
    const experiences = [
        {
            role: 'Frontend Developer',
            company: 'Company XYZ',
            duration: 'Jan 2020 - Present',
            description:
                'Developed responsive web applications using React and Tailwind CSS.',
            image: '/images/html-logo.png',
        },
        {
            role: 'Web Developer Intern',
            company: 'Company ABC',
            duration: 'Jun 2019 - Dec 2019',
            description:
                'Assisted in building e-commerce websites using modern JavaScript frameworks.',
            image: '/images/html-logo.png',
        },
        {
            role: 'Web Developer Intern',
            company: 'Company ABC',
            duration: 'Jun 2019 - Dec 2019',
            description:
                'Assisted in building e-commerce websites using modern JavaScript frameworks.',
            image: '/images/html-logo.png',
        },

    ];


    // Ref for the title
    const titleRef = useRef(null);
    const isTitleInView = useInView(titleRef, {
        once: false, // Trigger every time it scrolls into view
        margin: "0px 0px -50% 0px", // Trigger when 50% of the element is visible
    });

    // Animation variants for the title
    const titleVariants = {
        hidden: { opacity: 0, y: -20 }, // Start slightly above and invisible
        visible: {
            opacity: 1,
            y: 0, // Move to original position
            transition: { duration: 0.6, ease: "easeOut" }, // Smooth fade-in and slide-down effect
        },
    };

    return (
        <section id="experience" className="relative py-16 px-8">
            {/* Spinning Cubes */}
            <div className="absolute top-10 left-5 w-[150px] h-[150px]">
                <SpinningCube3D />
            </div>
            <div className="absolute bottom-10 right-5 w-[150px] h-[150px]">
                <SpinningCube3D />
            </div>

            <div className="max-w-screen-lg mx-auto">
                {/* Section Title with Fade-In Animation */}
                <motion.h2
                    ref={titleRef}
                    className="text-center text-4xl font-bold text-blue-50 mb-10"
                    variants={titleVariants}
                    initial="hidden"
                    animate={isTitleInView ? "visible" : "hidden"} // Trigger animation based on scroll visibility
                >
                    Experience
                </motion.h2>

                {/* Experience Cards */}
                {experiences.map((exp, index) => (
                    <ExperienceCard
                        key={index}
                        exp={exp}
                        reverse={index % 2 !== 0}
                    />
                ))}
            </div>
        </section>
    );
};

const ExperienceCard = ({ exp, reverse }) => {
    const cardRef = useRef(null);
    const isCardInView = useInView(cardRef, {
        once: false, // Trigger every time it scrolls into view
        margin: "0px 0px -50% 0px", // Trigger when 50% of the card is visible
    });

    // Animation variants for the cards
    const cardVariants = {
        hidden: { opacity: 0, y: 20 }, // Start slightly below and invisible
        visible: {
            opacity: 1,
            y: 0, // Move to original position
            transition: { duration: 0.6, ease: "easeOut" }, // Smooth fade-in and slide-up effect
        },
    };

    return (
        <motion.div
            ref={cardRef}
            className={`flex flex-col md:flex-row ${
                reverse ? 'md:flex-row-reverse' : ''
            } items-center gap-6 mb-12 relative bg-black p-6 rounded-lg shadow-xl`}
            variants={cardVariants}
            initial="hidden"
            animate={isCardInView ? "visible" : "hidden"} // Trigger animation based on scroll visibility
            whileHover={{
                scale: 1.05,
                rotateZ: 2,
                boxShadow: '0px 25px 50px rgba(0, 0, 0, 0.5)',
                transition: { duration: 0.4, ease: [0.25, 0.8, 0.25, 1] },
            }}
        >
            {/* Image */}
            <motion.div
                whileHover={{
                    y: -10, // Slight upward movement on hover
                    transition: { duration: 0.4 },
                }}
            >
                <img
                    src={exp.image}
                    alt={exp.role}
                    className="w-full md:w-[200px] h-[150px] object-cover rounded-md"
                />
            </motion.div>

            {/* Text */}
            <motion.div
                className="bg-neutral-800 p-6 rounded-lg shadow-md transition duration-300"
                whileHover={{
                    y: -10, // Slight upward movement on hover
                    transition: { duration: 0.4 },
                }}
            >
                <h3 className="text-xl font-semibold text-zinc-950">{exp.role}</h3>
                <p className="text-gray-400">{exp.company} - {exp.duration}</p>
                <p className="mt-2 text-gray-300">{exp.description}</p>
            </motion.div>

            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent rounded-lg pointer-events-none"></div>
        </motion.div>
    );
};

export default Experience;
