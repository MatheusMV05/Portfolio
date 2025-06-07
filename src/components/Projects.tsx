import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCode, FaGamepad, FaLightbulb } from 'react-icons/fa';

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
            icon: FaCode
        },
        {
            title: "Helena - Game Development",
            tech: ["Unity", "C#"],
            description: "Jogo 2D completo apresentado no festival Rec'N Play 2024.",
            repo: "https://github.com/vinimarques7/helena",
            color: "from-purple-400 to-pink-500",
            icon: FaGamepad
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
            className="py-20 px-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <motion.h2
                variants={itemVariants}
                className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            >
                Projetos em Destaque
            </motion.h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ y: -10, scale: 1.02 }}
                        className="group relative bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 hover:border-transparent transition-all duration-500"
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                        <div className="relative p-8">
                            <div className="flex items-center mb-6">
                                <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-lg flex items-center justify-center mr-4`}>
                                    <project.icon className="text-white text-xl" />
                                </div>
                                <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300">
                                    {project.title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="bg-gray-700 text-cyan-400 text-xs font-semibold px-3 py-1 rounded-full border border-gray-600"
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>

                            <p className="text-gray-300 mb-6 line-clamp-3">{project.description}</p>

                            <motion.a
                                href={project.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`inline-flex items-center space-x-2 bg-gradient-to-r ${project.color} text-white px-6 py-3 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl`}
                            >
                                <FaGithub />
                                <span>Ver Projeto</span>
                            </motion.a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Projects;