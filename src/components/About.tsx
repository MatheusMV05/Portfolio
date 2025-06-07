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
            className="py-20 px-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.h2
                variants={itemVariants}
                className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            >
                Sobre Mim
            </motion.h2>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    variants={itemVariants}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl transform rotate-3 opacity-20"></div>
                    <div className="relative bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700">
                        <div className="flex items-center mb-6">
                            <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mr-4">
                                <FaLightbulb className="text-white text-2xl" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">Desenvolvedor Apaixonado</h3>
                                <p className="text-cyan-400">Always Learning, Always Growing</p>
                            </div>
                        </div>
                        <p className="text-lg leading-relaxed text-gray-300">
                            Desenvolvedor Backend com foco em <span className="text-cyan-400 font-semibold">Java</span> e <span className="text-cyan-400 font-semibold">Spring Boot</span>,
                            com experiência prática no desenvolvimento de APIs RESTful e arquiteturas de microsserviços em projetos acadêmicos e de extensão.
                            Apaixonado por tecnologia e resolução de problemas, busco ativamente uma oportunidade para consolidar minha carreira em desenvolvimento Java,
                            ao mesmo tempo que construo uma trajetória para atuar, a longo prazo, na indústria de desenvolvimento de jogos.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="space-y-6"
                >
                    {[
                        { icon: FaCode, title: "Backend Development", desc: "Java, Spring Boot, APIs RESTful" },
                        { icon: FaGamepad, title: "Game Development", desc: "Unity, C#, Game Design" },
                        { icon: FaRocket, title: "Leadership", desc: "Liderança técnica em equipes ágeis" },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.02, x: 10 }}
                            className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                                    <item.icon className="text-white text-xl" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white">{item.title}</h4>
                                    <p className="text-gray-400">{item.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default About;