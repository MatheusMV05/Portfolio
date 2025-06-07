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

const Sidebar = ({ isOpen, toggleSidebar, activeSection, setActiveSection }) => {
    const menuItems = [
        { id: 'home', label: 'Início', icon: FaHome },
        { id: 'about', label: 'Sobre', icon: FaUser },
        { id: 'experience', label: 'Experiência', icon: FaBriefcase },
        { id: 'projects', label: 'Projetos', icon: FaProjectDiagram },
        { id: 'skills', label: 'Skills', icon: FaCogs },
        { id: 'education', label: 'Formação', icon: FaGraduationCap },
        { id: 'achievements', label: 'Conquistas', icon: FaAward },
        { id: 'blog', label: 'Blog', icon: FaBlog, divider: true },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                        onClick={toggleSidebar}
                    />
                    <motion.nav
                        initial={{ x: -300 }}
                        animate={{ x: 0 }}
                        exit={{ x: -300 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed left-0 top-0 h-full w-72 bg-gradient-to-b from-gray-900 to-gray-800 z-50 shadow-2xl"
                    >
                        <div className="p-6 border-b border-gray-700">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                                        <FaCode className="text-white text-lg" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold">Matheus</h3>
                                        <p className="text-gray-400 text-sm">Developer</p>
                                    </div>
                                </div>
                                <button
                                    onClick={toggleSidebar}
                                    className="lg:hidden text-gray-400 hover:text-white transition-colors"
                                >
                                    <FaTimes />
                                </button>
                            </div>
                        </div>

                        <div className="p-4">
                            {menuItems.map((item) => (
                                <div key={item.id}>
                                    {item.divider && <div className="border-t border-gray-700 my-4" />}
                                    <motion.button
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => {
                                            setActiveSection(item.id);
                                            toggleSidebar();
                                        }}
                                        className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                                            activeSection === item.id
                                                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                                                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                        }`}
                                    >
                                        <item.icon className="text-lg" />
                                        <span className="font-medium">{item.label}</span>
                                        {activeSection === item.id && (
                                            <motion.div
                                                layoutId="activeIndicator"
                                                className="ml-auto"
                                            >
                                                <FaChevronRight className="text-sm" />
                                            </motion.div>
                                        )}
                                    </motion.button>
                                </div>
                            ))}
                        </div>
                    </motion.nav>
                </>
            )}
        </AnimatePresence>
    );
};

export default Sidebar;