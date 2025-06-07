import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaTimes,
    FaCode,
    FaHome,
    FaUser,
    FaBriefcase,
    FaProjectDiagram,
    FaCogs,
    FaGraduationCap,
    FaAward,
    FaBlog,
    FaChevronRight
} from 'react-icons/fa';

const Sidebar = ({ isOpen, toggleSidebar, activeSection, setActiveSection, navigationItems }) => {
    const menuItems = [
        { id: 'home', label: 'Início', icon: FaHome },
        { id: 'about', label: 'Sobre', icon: FaUser },
        { id: 'experience', label: 'Experiência', icon: FaBriefcase },
        { id: 'projects', label: 'Projetos', icon: FaProjectDiagram },
        { id: 'skills', label: 'Skills', icon: FaCogs },
        { id: 'education', label: 'Formação', icon: FaGraduationCap },
        { id: 'achievements', label: 'Conquistas', icon: FaAward },
        { id: 'blog', label: 'Blog', icon: FaBlog },
    ];

    const sidebarVariants = {
        closed: {
            x: '-100%',
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        },
        open: {
            x: 0,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40,
                staggerChildren: 0.05,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        closed: {
            x: -20,
            opacity: 0
        },
        open: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.nav
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={sidebarVariants}
                    className="fixed left-0 top-0 h-full w-72 sm:w-80 bg-gradient-to-b from-gray-900 to-gray-800 z-50 shadow-2xl lg:hidden"
                >
                    {/* Header da sidebar */}
                    <motion.div
                        variants={itemVariants}
                        className="p-4 sm:p-6 border-b border-gray-700"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                                    <FaCode className="text-white text-lg sm:text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-sm sm:text-base">Matheus Martins</h3>
                                    <p className="text-gray-400 text-xs sm:text-sm">Developer</p>
                                </div>
                            </div>
                            <button
                                onClick={toggleSidebar}
                                className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-700"
                                aria-label="Fechar menu"
                            >
                                <FaTimes className="text-lg" />
                            </button>
                        </div>
                    </motion.div>

                    {/* Menu items */}
                    <div className="p-3 sm:p-4 flex-1 overflow-y-auto">
                        <motion.div variants={itemVariants} className="space-y-1 sm:space-y-2">
                            {menuItems.map((item, index) => (
                                <motion.div key={item.id} variants={itemVariants}>
                                    <motion.button
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => {
                                            setActiveSection(item.id);
                                            toggleSidebar();
                                        }}
                                        className={`w-full flex items-center space-x-3 p-3 sm:p-4 rounded-xl transition-all duration-200 ${
                                            activeSection === item.id
                                                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                                                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                        }`}
                                    >
                                        <item.icon className="text-base sm:text-lg flex-shrink-0" />
                                        <span className="font-medium text-sm sm:text-base flex-1 text-left">
                                            {item.label}
                                        </span>
                                        {activeSection === item.id && (
                                            <motion.div
                                                layoutId="activeIndicator"
                                                className="ml-auto"
                                            >
                                                <FaChevronRight className="text-xs sm:text-sm" />
                                            </motion.div>
                                        )}
                                    </motion.button>

                                    {/* Separador após Conquistas */}
                                    {item.id === 'achievements' && (
                                        <motion.div
                                            variants={itemVariants}
                                            className="border-t border-gray-700 my-3 sm:my-4"
                                        />
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Footer da sidebar */}
                    <motion.div
                        variants={itemVariants}
                        className="p-4 sm:p-6 border-t border-gray-700"
                    >
                        <div className="text-center">
                            <p className="text-gray-400 text-xs sm:text-sm">
                                Portfolio 2025
                            </p>
                            <div className="flex justify-center space-x-2 mt-2">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                            </div>
                        </div>
                    </motion.div>
                </motion.nav>
            )}
        </AnimatePresence>
    );
};

export default Sidebar;