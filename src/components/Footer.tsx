import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative z-10 bg-gray-900 border-t border-gray-700 py-8">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Entre em Contato</h2>
                <p className="mb-6 text-gray-400">Estou aberto a novas oportunidades e colaborações.</p>
                <div className="flex justify-center space-x-6 mb-8">
                    <a
                        href="https://www.linkedin.com/in/matheus-martins-8696422b8/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
                    >
                        <FaLinkedin size={28} />
                    </a>
                    <a
                        href="https://github.com/MatheusMV05"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
                    >
                        <FaGithub size={28} />
                    </a>
                    <a
                        href="mailto:matheusmverissimo820@gmail.com"
                        className="hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
                    >
                        <FaEnvelope size={28} />
                    </a>
                </div>
                <p className="text-sm text-gray-500">
                    &copy; {currentYear} Matheus Martins. Desenvolvido com React & Tailwind CSS.
                </p>
            </div>
        </footer>
    );
};

export default Footer;