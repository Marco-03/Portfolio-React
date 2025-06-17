import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SpinningCube3D from "./SpinningCube3D";

const Contact = () => {
    const titleRef = useRef(null);
    const formRef = useRef(null);

    const isTitleInView = useInView(titleRef, {
        once: false, // Trigger every time it scrolls into view
        margin: "0px 0px -50% 0px", // Trigger when 50% of the element is visible
    });

    const isFormInView = useInView(formRef, {
        once: false, // Trigger every time it scrolls into view
        margin: "0px 0px -50% 0px", // Trigger when 50% of the element is visible
    });

    // Animation variants for the title and form
    const fadeInVariants = {
        hidden: { opacity: 0, y: 20 }, // Start slightly below and invisible
        visible: {
            opacity: 1,
            y: 0, // Move to original position
            transition: { duration: 0.6, ease: "easeOut" }, // Smooth fade-in and slide-up effect
        },
    };

    return (
        <section id="contact" className="py-16 px-8">
            <div className="absolute top-100 left-100 w-[200px] h-[200px]">
                <SpinningCube3D />
            </div>
            <div className="max-w-screen-lg mx-auto">
                {/* Heading */}
                <motion.h2
                    ref={titleRef}
                    className="text-center text-4xl font-bold text-blue-50 mb-12"
                    variants={fadeInVariants}
                    initial="hidden"
                    animate={isTitleInView ? "visible" : "hidden"} // Trigger animation based on scroll visibility
                >
                    Get in Touch
                </motion.h2>

                {/* Form */}
                <motion.form
                    ref={formRef}
                    action="https://formsubmit.co/luchianmarco22@gmail.com" // Replace with your email
                    method="POST"
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8"
                    variants={fadeInVariants}
                    initial="hidden"
                    animate={isFormInView ? "visible" : "hidden"} // Trigger animation based on scroll visibility
                >
                    {/* Left Column */}
                    <div className="flex flex-col gap-6">
                        {/* Name Input */}
                        <div>
                            <label htmlFor="name" className="block text-gray-400 mb-2">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name" // Required for FormSubmit
                                placeholder="Enter your name"
                                required
                                className="w-full border border-gray-700 bg-black text-blue-50 p-3 rounded focus:outline-none focus:ring focus:ring-blue-50 transition"
                            />
                        </div>

                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-gray-400 mb-2">
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email" // Required for FormSubmit
                                placeholder="Enter your email"
                                required
                                className="w-full border border-gray-700 bg-black text-gray-300 p-3 rounded focus:outline-none focus:ring focus:ring-blue-50  transition"
                            />
                        </div>

                        {/* Phone Input */}
                        <div>
                            <label htmlFor="phone" className="block text-gray-400 mb-2">
                                Your Phone (Optional)
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone" // Optional field for FormSubmit
                                placeholder="Enter your phone number"
                                className="w-full border border-gray-700 bg-black text-gray-300 p-3 rounded focus:outline-none focus:ring focus:ring-blue-50  transition"
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div>
                        <label htmlFor="message" className="block text-gray-400 mb-2">
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            name="message" // Required for FormSubmit
                            rows={8}
                            placeholder="Write your message here..."
                            required
                            className="w-full border border-gray-700 bg-black text-gray-300 p-3 rounded focus:outline-none focus:ring focus:ring-blue-50  transition h-full resize-none"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="col-span-full text-center mt-4">
                        <button
                            type="submit" // Submit button for the form
                            className="bg-black text-white py-3 px-6 rounded hover:bg-yellow-dark transition"
                        >
                            Send Message
                        </button>
                    </div>

                    {/* Redirect to your portfolio after submission */}
                    <input type="hidden" name="_next" value="https://test.balauru.xyz/" />
                    {/* Subject of the email */}
                    <input type="hidden" name="_subject" value="New Contact Form Submission!" />
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
