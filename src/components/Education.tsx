import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaClock, FaAward, FaChartLine, FaLaptopCode, FaProjectDiagram } from 'react-icons/fa';

const Education = () => {
    const academicProgress = {
        currentPeriod: "3º Período",
        totalPeriods: 8,
        progressPercentage: 37.5,
        expectedGraduation: "2027.2"
    };

    const currentSubjects = [
        { name: "Algoritmos e Estrutura de Dados", focus: "Estruturas complexas, algoritmos de ordenação" },
        { name: "Fundamentos de Projetos 3: Metodologia Científica", focus: "Pesquisa científica, metodologia" },
        { name: "Infraestrutura de Hardware (AOC)", focus: "Arquitetura de computadores" },
        { name: "Infraestrutura de Software (SO)", focus: "Sistemas operacionais" },
        { name: "Programação Orientada a Objetos", focus: "Java, conceitos OOP" },
        { name: "Projeto 3", focus: "Desenvolvimento de software" }
    ];

    const nextPeriodSubjects = [
        { name: "Estatística e Probabilidade", focus: "Análise estatística, probabilidade" },
        { name: "Fundamentos de Projetos 4: Empreendedorismo", focus: "Inovação, gestão de negócios" },
        { name: "Infraestrutura de Comunicação (RSD)", focus: "Redes, protocolos de comunicação" },
        { name: "Modelagem e Projeto de BD", focus: "Design de bancos de dados" },
        { name: "Projeto 4", focus: "Desenvolvimento avançado" },
        { name: "Teoria da Computação", focus: "Fundamentos teóricos" }
    ];

    const academicProjects = [
        {
            name: "PokeBattle",
            description: "Jogo desenvolvido em C com estruturas de dados avançadas",
            achievement: "Selecionado para MostraTechDesign 2025",
            tech: ["C", "Estruturas de Dados", "Algoritmos"]
        }
    ];

    const skills = [
        { category: "Programação", items: ["Java", "Python", "C/C++", "JavaScript", "C#"] },
        { category: "Metodologias", items: ["Scrum", "Kanban", "TDD", "Clean Code"] },
        { category: "Ferramentas", items: ["Git", "IntelliJ", "VS Code", "Figma"] }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.1,
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.section
            id="education"
            className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    variants={itemVariants}
                    className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-8 sm:mb-12 md:mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                >
                    Formação Acadêmica
                </motion.h2>

                {/* Instituição Principal */}
                <motion.div
                    variants={itemVariants}
                    className="bg-gray-800 rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-700 mb-8 sm:mb-12 relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10"></div>

                    <div className="relative z-10">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 sm:mb-8">
                            <div className="flex items-center mb-4 lg:mb-0">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mr-4 sm:mr-6">
                                    <FaGraduationCap className="text-white text-2xl sm:text-3xl" />
                                </div>
                                <div>
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">Ciência da Computação</h3>
                                    <p className="text-xl sm:text-2xl text-cyan-400 font-bold">CESAR School</p>
                                    <p className="text-gray-400 text-sm sm:text-base">Recife, Pernambuco</p>
                                </div>
                            </div>

                            <div className="bg-gray-700 rounded-2xl p-4 sm:p-6 text-center">
                                <div className="text-2xl sm:text-3xl font-black text-cyan-400">{academicProgress.currentPeriod}</div>
                                <div className="text-gray-300 text-sm sm:text-base">de {academicProgress.totalPeriods} períodos</div>
                                <div className="text-xs sm:text-sm text-gray-400 mt-1">Previsão: {academicProgress.expectedGraduation}</div>
                            </div>
                        </div>

                        {/* Barra de Progresso */}
                        <div className="mb-6 sm:mb-8">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-gray-300 text-sm sm:text-base font-medium">Progresso do Curso</span>
                                <span className="text-cyan-400 font-bold text-sm sm:text-base">{academicProgress.progressPercentage}%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-3 sm:h-4">
                                <motion.div
                                    className="bg-gradient-to-r from-cyan-400 to-blue-500 h-3 sm:h-4 rounded-full relative"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${academicProgress.progressPercentage}%` }}
                                    transition={{ duration: 2, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                >
                                    <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Grid de Informações Acadêmicas */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
                    {/* Disciplinas Atuais - 3º Período */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-gray-800 rounded-2xl p-4 sm:p-6 border border-gray-700"
                    >
                        <div className="flex items-center mb-4 sm:mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl flex items-center justify-center mr-4">
                                <FaClock className="text-white text-lg" />
                            </div>
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-white">3º Período</h3>
                                <p className="text-orange-400 text-sm">Em Andamento</p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            {currentSubjects.map((subject, index) => (
                                <motion.div
                                    key={index}
                                    className="p-3 sm:p-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl transition-all duration-300"
                                    whileHover={{ scale: 1.02, x: 5 }}
                                >
                                    <div className="text-orange-300 font-medium text-sm sm:text-base mb-1">{subject.name}</div>
                                    <div className="text-gray-400 text-xs sm:text-sm">{subject.focus}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Próximo Período - 4º Período */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-gray-800 rounded-2xl p-4 sm:p-6 border border-gray-700"
                    >
                        <div className="flex items-center mb-4 sm:mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                                <FaChartLine className="text-white text-lg" />
                            </div>
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-white">4º Período</h3>
                                <p className="text-cyan-400 text-sm">Próximo Semestre</p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            {nextPeriodSubjects.map((subject, index) => (
                                <motion.div
                                    key={index}
                                    className="p-3 sm:p-4 bg-gray-700 rounded-xl border border-gray-600 hover:border-cyan-500/50 transition-all duration-300"
                                    whileHover={{ scale: 1.02, x: 5 }}
                                >
                                    <div className="text-cyan-300 font-medium text-sm sm:text-base mb-1">{subject.name}</div>
                                    <div className="text-gray-400 text-xs sm:text-sm">{subject.focus}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Projetos Acadêmicos */}
                <motion.div
                    variants={itemVariants}
                    className="mb-8 sm:mb-12"
                >
                    <div className="flex items-center mb-6 sm:mb-8">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                            <FaProjectDiagram className="text-white text-lg" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white">Projeto Acadêmico em Destaque</h3>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        {academicProjects.map((project, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-800 rounded-2xl p-4 sm:p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
                                whileHover={{ y: -5, scale: 1.02 }}
                            >
                                <h4 className="text-lg sm:text-xl font-bold text-white mb-2">{project.name}</h4>
                                <p className="text-gray-300 text-sm sm:text-base mb-3">{project.description}</p>
                                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg p-2 sm:p-3 mb-3">
                                    <div className="flex items-center">
                                        <FaAward className="text-purple-400 mr-2 flex-shrink-0" />
                                        <span className="text-purple-300 text-xs sm:text-sm font-medium">{project.achievement}</span>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-1 sm:gap-2">
                                    {project.tech.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="bg-gray-700 text-cyan-400 text-xs font-semibold px-2 py-1 rounded-full border border-gray-600"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Competências Desenvolvidas */}
                <motion.div variants={itemVariants}>
                    <div className="flex items-center mb-6 sm:mb-8">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                            <FaChartLine className="text-white text-lg" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white">Competências Desenvolvidas</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                        {skills.map((skillGroup, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-800 rounded-2xl p-4 sm:p-6 border border-gray-700"
                                whileHover={{ scale: 1.02 }}
                            >
                                <h4 className="text-lg sm:text-xl font-bold text-cyan-400 mb-3 sm:mb-4">{skillGroup.category}</h4>
                                <div className="flex flex-wrap gap-1 sm:gap-2">
                                    {skillGroup.items.map((skill, skillIndex) => (
                                        <motion.span
                                            key={skillIndex}
                                            className="bg-gray-700 text-gray-300 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full hover:bg-cyan-600 hover:text-white transition-colors duration-200"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Education;