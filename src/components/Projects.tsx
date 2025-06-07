import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCode, FaGamepad, FaLightbulb, FaExternalLinkAlt } from 'react-icons/fa';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

const Projects = () => {
    const projectsData = [
        {
            title: "Site Institucional BRASFI",
            tech: ["Java", "Spring Boot", "Microserviços"],
            description: "API RESTful com mais de 114 endpoints e arquitetura de microsserviços para escalabilidade.",
            repo: "https://github.com/MatheusMV05/projetos3g2",
            color: "from-green-400 to-blue-500",
            icon: FaCode,
            featured: true
        },
        {
            title: "Helena - Game Development",
            tech: ["Unity", "C#"],
            description: "Jogo 2D completo apresentado no festival Rec'N Play 2024.",
            repo: "https://github.com/vinimarques7/helena",
            color: "from-purple-400 to-pink-500",
            icon: FaGamepad,
            featured: true
        },
        {
            title: "Gerador de Resumos com LLM",
            tech: ["Python", "Ollama", "Bootstrap"],
            description: "Aplicação web que consome API local de LLM para gerar resumos automáticos.",
            repo: "https://github.com/MatheusMV05/LLM-Local-API-Project",
            color: "from-yellow-400 to-orange-500",
            icon: FaLightbulb
        },
        {
            title: "PokeBattle",
            tech: ["C", "Estrutura de Dados"],
            description: "Jogo de batalha em C selecionado para a MostraTechDesign 2025.",
            repo: "https://github.com/MatheusMV05/PokeBattle",
            color: "from-red-400 to-pink-500",
            icon: FaGamepad
        },
        {
            title: "Which Teacher",
            tech: ["Python", "Django", "JavaScript"],
            description: "Aplicação web fullstack com funcionalidades de CRUD e frontend responsivo.",
            repo: "https://github.com/vinimarques7/projeto-FDS",
            color: "from-indigo-400 to-purple-500",
            icon: FaCode
        }
    ];

    return (
        <motion.section
            className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <motion.h2
                variants={itemVariants}
                className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-8 sm:mb-12 md:mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent px-4"
            >
                Projetos em Destaque
            </motion.h2>

            <div className="max-w-7xl mx-auto">
                {/* Projetos em destaque */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
                    {projectsData.filter(project => project.featured).map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="group relative bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 hover:border-transparent transition-all duration-500"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                            <div className="relative p-4 sm:p-6 md:p-8">
                                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4 sm:mb-6 text-center sm:text-left">
                                    <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${project.color} rounded-lg flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 flex-shrink-0`}>
                                        <project.icon className="text-white text-lg sm:text-xl" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300 break-words">
                                            {project.title}
                                        </h3>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6 justify-center sm:justify-start">
                                    {project.tech.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="bg-gray-700 text-cyan-400 text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-full border border-gray-600"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed text-center sm:text-left">
                                    {project.description}
                                </p>

                                <div className="flex justify-center sm:justify-start">
                                    <motion.a
                                        href={project.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`inline-flex items-center space-x-2 bg-gradient-to-r ${project.color} text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl`}
                                    >
                                        <FaGithub className="flex-shrink-0" />
                                        <span>Ver Projeto</span>
                                        <FaExternalLinkAlt className="text-xs flex-shrink-0" />
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Outros projetos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                    {projectsData.filter(project => !project.featured).map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-xl border border-gray-700 hover:border-transparent transition-all duration-500"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                            <div className="relative p-4 sm:p-6">
                                <div className="flex items-center mb-4 text-center sm:text-left">
                                    <div className={`w-10 h-10 bg-gradient-to-r ${project.color} rounded-lg flex items-center justify-center mr-3 flex-shrink-0`}>
                                        <project.icon className="text-white text-sm" />
                                    </div>
                                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300 break-words flex-1">
                                        {project.title}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                                    {project.tech.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="bg-gray-700 text-cyan-400 text-xs font-semibold px-2 py-1 rounded-full border border-gray-600"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-gray-300 mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed line-clamp-3">
                                    {project.description}
                                </p>

                                <motion.a
                                    href={project.repo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`inline-flex items-center space-x-1 sm:space-x-2 bg-gradient-to-r ${project.color} text-white px-3 sm:px-4 py-2 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 shadow-lg hover:shadow-xl w-full justify-center`}
                                >
                                    <FaGithub className="flex-shrink-0" />
                                    <span>Ver Projeto</span>
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Projects;