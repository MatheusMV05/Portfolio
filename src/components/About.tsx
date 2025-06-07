import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaGamepad, FaRocket, FaLightbulb } from 'react-icons/fa';

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

const About = () => {
    return (
        <motion.section
            className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.h2
                variants={itemVariants}
                className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-8 sm:mb-12 md:mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent px-4"
            >
                Sobre Mim
            </motion.h2>

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                    <motion.div
                        variants={itemVariants}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl transform rotate-3 opacity-20"></div>
                        <div className="relative bg-gray-800 p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl border border-gray-700">
                            <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4 sm:mb-6">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
                                    <FaLightbulb className="text-white text-lg sm:text-xl md:text-2xl" />
                                </div>
                                <div className="text-center sm:text-left">
                                    <h3 className="text-xl sm:text-2xl font-bold text-white">Desenvolvedor Apaixonado</h3>
                                    <p className="text-cyan-400 text-sm sm:text-base">Always Learning, Always Growing</p>
                                </div>
                            </div>
                            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-300 text-center sm:text-left">
                                Desenvolvedor Backend com foco em <span className="text-cyan-400 font-semibold">Java</span> e <span className="text-cyan-400 font-semibold">Spring Boot</span>,
                                com experiência prática no desenvolvimento de APIs RESTful e arquiteturas de microsserviços em projetos acadêmicos e de extensão.
                                Apaixonado por tecnologia e resolução de problemas, busco ativamente uma oportunidade para consolidar minha carreira em desenvolvimento Java,
                                ao mesmo tempo que construo uma trajetória para atuar, a longo prazo, na indústria de desenvolvimento de jogos.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="space-y-4 sm:space-y-6 order-1 lg:order-2"
                    >
                        {[
                            { icon: FaCode, title: "Backend Development", desc: "Java, Spring Boot, APIs RESTful" },
                            { icon: FaGamepad, title: "Game Development", desc: "Unity, C#, Game Design" },
                            { icon: FaRocket, title: "Leadership", desc: "Liderança técnica em equipes ágeis" },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.02, x: 10 }}
                                className="bg-gray-800 p-4 sm:p-5 md:p-6 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300"
                            >
                                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <item.icon className="text-white text-lg sm:text-xl" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-lg sm:text-xl font-bold text-white mb-1">{item.title}</h4>
                                        <p className="text-gray-400 text-sm sm:text-base">{item.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default About;