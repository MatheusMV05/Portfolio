import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-light-gray py-10">
            <div className="container mx-auto px-6 md:px-12 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Entre em Contato</h2>
                <p className="mb-6">Estou aberto a novas oportunidades e colaborações.</p>
                <div className="flex justify-center space-x-6 mb-8">
                    <a href="https://www.linkedin.com/in/matheus-martins-8696422b8/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">
                        <FaLinkedin size={28} />
                    </a>
                    <a href="https://github.com/MatheusMV05" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">
                        <FaGithub size={28} />
                    </a>
                    <a href="mailto:matheusmverissimo820@gmail.com" className="hover:text-accent transition-colors duration-300">
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