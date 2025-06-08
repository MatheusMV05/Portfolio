import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaLinkedin,
    FaGithub,
    FaEnvelope,
    FaCode,
    FaRocket,
    FaDownload
} from 'react-icons/fa';

const Hero = () => {
    const [currentRole, setCurrentRole] = useState(0);
    const roles = [
        "Java Backend Developer",
        "Game Developer",
        "Full Stack Developer",
        "Problem Solver"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.section
            className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />

            <div className="relative z-10 text-center max-w-5xl mx-auto w-full">
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                    className="mb-6 sm:mb-8"
                >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mb-6 sm:mb-8 shadow-2xl">
                        <FaCode className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
                    </div>
                </motion.div>

                <motion.h1
                    className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    MATHEUS MARTINS
                </motion.h1>

                <motion.div
                    className="mb-6 sm:mb-8 space-y-2 sm:space-y-4"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white min-h-[2rem] sm:min-h-[2.5rem] md:min-h-[3rem] lg:min-h-[4rem]">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={currentRole}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block"
                            >
                                {roles[currentRole]}
                            </motion.span>
                        </AnimatePresence>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 flex items-center justify-center flex-wrap gap-2">
                        <FaRocket className="text-cyan-400 flex-shrink-0" />
                        <span>📍 Recife, PE</span>
                    </p>
                </motion.div>

                <motion.div
                    className="flex justify-center flex-wrap gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-12"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    {[
                        { icon: FaLinkedin, href: "https://www.linkedin.com/in/matheus-martins-8696422b8/", color: "from-blue-600 to-blue-700", label: "LinkedIn" },
                        { icon: FaGithub, href: "https://github.com/MatheusMV05", color: "from-gray-700 to-gray-800", label: "GitHub" },
                        { icon: FaEnvelope, href: "mailto:matheusmartinsvcontato@gmail.com", color: "from-red-500 to-red-600", label: "Email" },
                    ].map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            className={`p-2 sm:p-3 md:p-4 rounded-full bg-gradient-to-r ${social.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0`}
                        >
                            <social.icon className="text-base sm:text-lg md:text-xl lg:text-2xl" />
                        </motion.a>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex justify-center"
                >
                    <motion.a
                        href="/cv-matheus-martins.pdf"
                        download="Matheus-Martins-CV.pdf"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 max-w-xs sm:max-w-none"
                    >
                        <FaDownload className="flex-shrink-0" />
                        <span>Baixar Currículo</span>
                    </motion.a>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Hero;