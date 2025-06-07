import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaLinkedin,
    FaGithub,
    FaEnvelope,
    FaPhoneAlt,
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
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />

            <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                    className="mb-8"
                >
                    <div className="w-32 h-32 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mb-8 shadow-2xl">
                        <FaCode className="text-white text-4xl" />
                    </div>
                </motion.div>

                <motion.h1
                    className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    MATHEUS MARTINS
                </motion.h1>

                <motion.div
                    className="mb-8"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={currentRole}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                            >
                                {roles[currentRole]}
                            </motion.span>
                        </AnimatePresence>
                    </h2>
                    <p className="text-xl text-gray-300 flex items-center justify-center">
                        <FaRocket className="mr-2 text-cyan-400" />
                        📍 Recife, PE
                    </p>
                </motion.div>

                <motion.div
                    className="flex justify-center space-x-6 mb-12"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    {[
                        { icon: FaLinkedin, href: "https://www.linkedin.com/in/matheus-martins-8696422b8/", color: "from-blue-600 to-blue-700" },
                        { icon: FaGithub, href: "https://github.com/MatheusMV05", color: "from-gray-700 to-gray-800" },
                        { icon: FaEnvelope, href: "mailto:matheusmverissimo820@gmail.com", color: "from-red-500 to-red-600" },
                        { icon: FaPhoneAlt, href: "tel:+5581993314408", color: "from-green-500 to-green-600" }
                    ].map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            className={`p-4 rounded-full bg-gradient-to-r ${social.color} text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                        >
                            <social.icon size={24} />
                        </motion.a>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    <motion.a
                        href="/cv-matheus-martins.pdf"
                        download="Matheus-Martins-CV.pdf"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 mx-auto"
                    >
                        <FaDownload />
                        <span>Curriculo</span>
                    </motion.a>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Hero;