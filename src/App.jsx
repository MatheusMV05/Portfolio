import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaCode, FaTimes } from 'react-icons/fa';

// Import dos componentes
import AnimatedBackground from './components/AnimatedBackground';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Blog from './components/Blog';
import Footer from './components/Footer';

// Configurações de animação
const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
};

const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
};

function App() {
    const [activeSection, setActiveSection] = useState('home');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Detectar se está em mobile
    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);

        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    // Fechar sidebar quando mudar de seção em mobile
    useEffect(() => {
        if (isMobile && sidebarOpen) {
            setSidebarOpen(false);
        }
    }, [activeSection, isMobile]);

    // Prevenir scroll do body quando sidebar estiver aberta
    useEffect(() => {
        if (sidebarOpen && isMobile) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [sidebarOpen, isMobile]);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    const navigationItems = [
        { id: 'home', label: 'Início' },
        { id: 'about', label: 'Sobre' },
        { id: 'experience', label: 'Experiência' },
        { id: 'projects', label: 'Projetos' },
        { id: 'skills', label: 'Skills' },
        { id: 'education', label: 'Formação' },
        { id: 'achievements', label: 'Conquistas' },
        { id: 'blog', label: 'Blog' },
    ];

    const renderSection = () => {
        switch (activeSection) {
            case 'home': return <Hero />;
            case 'about': return <About />;
            case 'experience': return <Experience />;
            case 'projects': return <Projects />;
            case 'skills': return <Skills />;
            case 'education': return <Education />;
            case 'achievements': return <Achievements />;
            case 'blog': return <Blog />;
            default: return <Hero />;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
            <AnimatedBackground />

            {/* Header fixo */}
            <header className="fixed top-0 left-0 right-0 z-30 bg-gray-900/90 backdrop-blur-md border-b border-gray-700">
                <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <button
                            onClick={toggleSidebar}
                            className="lg:hidden text-white hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-gray-800"
                            aria-label="Toggle menu"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={sidebarOpen ? 'close' : 'menu'}
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {sidebarOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
                                </motion.div>
                            </AnimatePresence>
                        </button>

                        <div className="flex items-center space-x-2 sm:space-x-3">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                                <FaCode className="text-white text-xs sm:text-sm" />
                            </div>
                            <span className="font-bold text-sm sm:text-base lg:text-lg truncate">
                                Matheus Martins
                            </span>
                        </div>
                    </div>

                    {/* Menu desktop */}
                    <div className="hidden lg:flex space-x-1 xl:space-x-2">
                        {navigationItems.map((item) => (
                            <motion.button
                                key={item.id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveSection(item.id)}
                                className={`px-2 xl:px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm xl:text-base ${
                                    activeSection === item.id
                                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                                }`}
                            >
                                {item.label}
                            </motion.button>
                        ))}
                    </div>

                    {/* Indicador de seção ativa - mobile */}
                    <div className="lg:hidden">
                        <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded-full">
                            {navigationItems.find(item => item.id === activeSection)?.label}
                        </span>
                    </div>
                </div>
            </header>

            {/* Overlay para mobile quando sidebar está aberta */}
            <AnimatePresence>
                {sidebarOpen && isMobile && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                        onClick={toggleSidebar}
                    />
                )}
            </AnimatePresence>

            {/* Sidebar para mobile */}
            <Sidebar
                isOpen={sidebarOpen}
                toggleSidebar={toggleSidebar}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
                navigationItems={navigationItems}
            />

            {/* Conteúdo principal */}
            <main className="pt-16 sm:pt-20 relative z-10">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeSection}
                        initial="initial"
                        animate="in"
                        exit="out"
                        variants={pageVariants}
                        transition={pageTransition}
                        className="min-h-screen"
                    >
                        {renderSection()}
                    </motion.div>
                </AnimatePresence>
            </main>

            <Footer />
        </div>
    );
}

export default App;