import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';



const Skills = () => {
    const skills = [
        { name: 'JavaScript', icon: process.env.PUBLIC_URL + '/skills_pics/js-logo.png' },
        { name: 'Flask', icon: process.env.PUBLIC_URL + '/skills_pics/flask-logo.png' },
        { name: 'HTML', icon: process.env.PUBLIC_URL + '/skills_pics/html-logo.png' },
        { name: 'React', icon: process.env.PUBLIC_URL + '/skills_pics/react-logo.png' },
        { name: 'CSS', icon: process.env.PUBLIC_URL + '/skills_pics/css-logo.png' },
        { name: 'Python', icon: process.env.PUBLIC_URL + '/skills_pics/python-logo.png' },
        { name: 'Docker', icon: process.env.PUBLIC_URL + '/skills_pics/docker-logo.png' },
        { name: 'Django', icon: process.env.PUBLIC_URL + '/skills_pics/django-logo.png' },
    ];


    const controls = useAnimation();
    const [ref, isInView] = useInView({
        threshold: 0.8,
        triggerOnce: false,
    });

    // Responsive dimensions
    const triangleWidth = "clamp(80px, 15vw, 150px)";
    const triangleHeight = "clamp(70px, 13vw, 130px)";

    // Animation variants (keep existing animations)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const triangleVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
            },
        },
        hover: {
            y: -8,
            scale: 1.05,
            transition: { type: "spring", stiffness: 400 },
        },
    };

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [isInView, controls]);

    return (
        <section id="skills" style={{paddingTop: '80px', paddingBottom: '100px'}}>

            <motion.h2
                ref={ref}
                className="text-center text-4xl font-bold mb-10 pb-20 pt-7"
                variants={{
                    hidden: {
                        opacity: 0,
                        y: -50,
                        rotate: -5,
                        background: 'linear-gradient(45deg, #00ff87, #60efff)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        color: 'transparent'
                    },
                    visible: {
                        opacity: 1,
                        y: 0,
                        rotate: 0,
                        transition: {
                            duration: 0.8,
                            ease: [0.34, 1.56, 0.64, 1]
                        }
                    }
                }}
                initial="hidden"
                animate={controls}
                style={{
                    background: 'linear-gradient(45deg, #00ff87, #60efff)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    textShadow: '0 2px 10px rgba(0, 255, 135, 0.3)'
                }}
            >
                Primary Skills
            </motion.h2>
            {/* Skills Grid */}
            <motion.div
                className="grid justify-center gap-y-8 max-w-screen-xl mx-auto px-4"
                style={{
                    gridTemplateColumns: `repeat(auto-fill, minmax(${triangleWidth}, 1fr))`,
                    gridAutoRows: `calc(${triangleHeight} * 0.6)`,
                }}
                variants={containerVariants}
                initial="hidden"
                animate={controls}
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="relative group justify-self-center"
                        variants={triangleVariants}
                        whileHover="hover"
                        style={{
                            width: triangleWidth,
                            height: triangleHeight,
                            gridRow: `span 2`,
                            marginTop:
                                index % 2 !== 0 ? `-calc(${triangleHeight} * 0.4)` : 0,
                        }}
                    >
                        {/* Triangle Container */}
                        <div
                            className="absolute inset-0 backdrop-blur-sm"
                            style={{
                                clipPath:
                                    index % 2 === 0
                                        ? 'polygon(50% 0%, 100% 100%, 0% 100%)'
                                        : 'polygon(50% 100%, 100% 0%, 0% 0%)',
                                background: 'linear-gradient(-45deg, #1a1a1a, #2d2d2d)'
                            }}
                        >
                            <div
                                className="absolute left-1/2 -translate-x-1/2"
                                style={{
                                    top:
                                        index % 2 === 0 ? '70%' : '30%',
                                    transform:
                                        'translate(-50%, -50%)',
                                }}
                            >
                                <div
                                    className="w-[clamp(40px,8vw,64px)] h-[clamp(40px,8vw,64px)] flex items-center justify-center">
                                    <img
                                        src={skill.icon}
                                        alt={skill.name}
                                        className="w-full h-full object-contain p-2"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Skill Label */}
                        <div
                            className={`absolute w-full ${
                                index % 2 === 0
                                    ? 'top-full pt-3'
                                    : 'bottom-full pb-3'
                            }`}
                        >
                            <p className="text-center font-medium text-gray-100 text-sm">
                                {skill.name}
                            </p>
                        </div>

                        {/* Hover Effect with gradient */}
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{
                                clipPath:
                                    index % 2 === 0
                                        ? 'polygon(50% 0%, 100% 100%, 0% 100%)'
                                        : 'polygon(50% 100%, 100% 0%, 0% 0%)',
                                background: 'linear-gradient(45deg, rgba(96, 239, 255, 0.2), rgba(0, 255, 135, 0.2))'
                            }}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
