import { motion } from 'framer-motion';

const SkillBadge = ({ skill }) => (
    <motion.span
        className="bg-gray-700 text-light-gray text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full hover:bg-gray-600 transition-colors duration-200 cursor-default inline-block"
        whileHover={{ scale: 1.05, backgroundColor: "#0e7490" }}
        transition={{ type: "spring", stiffness: 300 }}
    >
        {skill}
    </motion.span>
);

const Skills = () => {
    const skills = {
        "Linguagens": ["Java", "Python", "C#", "JavaScript", "C/C++"],
        "Frameworks & Ecossistemas": ["Spring Boot", "Django", "Unity Engine"],
        "Web & Frontend": ["HTML5", "CSS3", "React", "Vite", "Bootstrap", "RESTful APIs"],
        "Bancos de Dados": ["PostgreSQL", "SQLite"],
        "Ferramentas & Metodologias": ["Git", "GitHub", "Maven", "Scrum", "Kanban", "IntelliJ", "VS Code", "WebStorm", "Rider", "Figma", "ClickUp", "Notion", "Jira", "Trello"],
        "Cloud": ["Microsoft Azure (Básico)"]
    };

    // Animation for each category container
    const categoryVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1, // Stagger the badges within the category
            }
        }
    };

    const badgeVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4
            }
        }
    };

    return (
        <section id="skills" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 sm:mb-12 text-center">
                Competências Técnicas
            </h2>

            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {Object.entries(skills).map(([category, list]) => (
                        <motion.div
                            key={category}
                            variants={categoryVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            className="bg-gray-800 p-4 sm:p-6 rounded-2xl border border-gray-700 hover:border-gray-600 transition-colors duration-300"
                        >
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-accent mb-3 sm:mb-4 text-center md:text-left">
                                {category}
                            </h3>
                            <motion.div
                                className="flex flex-wrap gap-2 justify-center md:justify-start"
                                variants={categoryVariants}
                            >
                                {list.map((skill, index) => (
                                    <motion.div key={skill} variants={badgeVariants}>
                                        <SkillBadge skill={skill} />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Seção de estatísticas rápidas */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-12 sm:mt-16 md:mt-20"
            >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
                    {[
                        { number: "5+", label: "Linguagens", color: "from-blue-400 to-cyan-400" },
                        { number: "6+", label: "Projetos", color: "from-purple-400 to-pink-400" },
                        { number: "25+", label: "Tecnologias", color: "from-green-400 to-blue-400" },
                        { number: "37.5%", label: "Curso Completo", color: "from-yellow-400 to-orange-400" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="text-center bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
                        >
                            <div className={`text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 sm:mb-2`}>
                                {stat.number}
                            </div>
                            <div className="text-gray-400 text-xs sm:text-sm font-medium">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;