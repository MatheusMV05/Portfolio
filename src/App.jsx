import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaCode } from 'react-icons/fa';

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

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

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
            <header className="fixed top-0 left-0 right-0 z-30 bg-gray-900/80 backdrop-blur-md border-b border-gray-700">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <button
                            onClick={toggleSidebar}
                            className="lg:hidden text-white hover:text-cyan-400 transition-colors"
                        >
                            <FaBars size={20} />
                        </button>
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                                <FaCode className="text-white text-sm" />
                            </div>
                            <span className="font-bold text-lg">Matheus Martins</span>
                        </div>
                    </div>

                    <div className="hidden lg:flex space-x-1">
                        {[
                            { id: 'home', label: 'Início' },
                            { id: 'about', label: 'Sobre' },
                            { id: 'experience', label: 'Experiência' },
                            { id: 'projects', label: 'Projetos' },
                            { id: 'skills', label: 'Skills' },
                            { id: 'education', label: 'Formação' },
                            { id: 'achievements', label: 'Conquistas' },
                            { id: 'blog', label: 'Blog' },
                        ].map((item) => (
                            <motion.button
                                key={item.id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveSection(item.id)}
                                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                                    activeSection === item.id
                                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                                }`}
                            >
                                {item.label}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </header>

            {/* Sidebar para mobile */}
            <Sidebar
                isOpen={sidebarOpen}
                toggleSidebar={toggleSidebar}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
            />

            {/* Conteúdo principal */}
            <main className="pt-20 relative z-10">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeSection}
                        initial="initial"
                        animate="in"
                        exit="out"
                        variants={pageVariants}
                        transition={pageTransition}
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