import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100
        }
    }
};

const Experience = () => {
    return (
        <motion.section
            className="py-20 px-6 bg-gray-900"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.h2
                variants={itemVariants}
                className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            >
                Experiência Profissional
            </motion.h2>

            <div className="max-w-4xl mx-auto">
                <motion.div
                    variants={itemVariants}
                    className="relative"
                >
                    <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-500"></div>

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative pl-20 pb-12"
                    >
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="absolute left-6 w-5 h-5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-4 border-gray-900 z-10"
                        ></motion.div>

                        <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                            <div className="flex flex-wrap items-center justify-between mb-4">
                                <h3 className="text-2xl font-bold text-white">Co-Líder da Equipe de Desenvolvimento</h3>
                                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  Jul/2024 – Jan/2025
                </span>
                            </div>
                            <p className="text-xl text-cyan-400 font-semibold mb-4">Abaddon Game Studios (Forja Game - CESAR School)</p>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <span>Liderei uma equipe de <strong className="text-white">4 desenvolvedores</strong> na criação do game "Abaddon", utilizando a metodologia <strong className="text-cyan-400">Scrum</strong> para organizar sprints e garantir entregas contínuas.</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <span>Coordenei o ciclo de desenvolvimento do projeto, desde a prototipação no Figma até a implementação de mecânicas em C#, resultando em um protótipo funcional para o evento Forja Game.</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Experience;