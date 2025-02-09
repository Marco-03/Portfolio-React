import React from 'react';
import {motion} from 'framer-motion';
import SpinningCube3D from './SpinningCube3D';

const About = () => {
    const contentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                delayChildren: 0.2,
                staggerChildren: 0.2,
            },
        },
    };

    const titleVariants = {
        hidden: { opacity: 0, y: -50, rotate: -5 },
        visible: {
            opacity: 1,
            y: 0,
            rotate: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const lineVariants = {
        hidden: { scaleX: 0 },
        visible: {
            scaleX: 1,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <section id="about" className="relative py-20 px-8 overflow-hidden">
            <div className="absolute top-10 left-auto w-[200px] h-[200px]">
                <SpinningCube3D />
            </div>
            <div className="absolute bottom-10 right-10 w-[150px] h-[150px]">
                <SpinningCube3D />
            </div>

            <motion.div
                className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                variants={contentVariants}
            >
                {/* Profile Picture */}
                <motion.img
                    src="/images/profile_pic.jpg"
                    alt="Profile"
                    className="w-64 h-64 object-cover rounded-full border-4 border-b-emerald-400 border-e-emerald-400 border-t-emerald-400 border-l-emerald-400 relative"
                    whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        boxShadow: '0 10px 30px rgba(96, 239, 255, 0.3)',
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    style={{
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)'
                    }}
                    variants={contentVariants}
                />

                {/* About Text with Animated Line */}
                <motion.div className="relative pl-8" variants={contentVariants}>
                    <motion.h2
                        className="text-4xl font-bold mb-6 pt-10"
                        variants={titleVariants}
                        style={{
                            background: 'linear-gradient(45deg, #00ff87, #60efff)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent',
                            textShadow: '0 2px 10px rgba(0, 255, 135, 0.3)'
                        }}
                    >
                        About Me
                    </motion.h2>

                    {/* Decorative Line */}
                    <motion.div
                        className="absolute left-0 top-5 h-full w-1 bg-gradient-to-b from-[#00ff87] to-[#60efff] origin-left"
                        variants={lineVariants}
                    />

                    <motion.p
                        className="text-lg leading-relaxed text-gray-300 mb-6 relative z-10"
                        style={{
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
                        }}
                    >
                        <span className="block pl-4 border-opacity-50">
                            I’m a First-Class Honours Enterprise Computing student passionate about bridging code and real-world impact.
                            My toolkit spans frontend development (React.js), DevOps pipelines (AWS/Docker), and project leadership—honed
                            through co-founding a software services company and optimizing network systems by 30% at a global tech firm.
                            I thrive on collaborative problem-solving, whether building a QR-driven social platform that cut load times by 15%
                            or mentoring 30+ students in web development. Currently exploring roles in software engineering, I aim to grow while
                            delivering clean, scalable solutions that balance technical rigor with user needs.
                        </span>
                    </motion.p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
