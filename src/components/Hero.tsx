import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center items-start text-left">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white">
                MATHEUS MARTINS
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-accent mt-2">
                Desenvolvedor Java Backend | Game Developer
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-light-gray">
                📍 Recife, PE
            </p>
            <div className="mt-8 flex space-x-6">
                <a href="https://www.linkedin.com/in/matheus-martins-8696422b8/" target="_blank" rel="noopener noreferrer" className="text-light-gray hover:text-accent transition-colors duration-300">
                    <FaLinkedin size={32} />
                </a>
                <a href="https://github.com/MatheusMV05" target="_blank" rel="noopener noreferrer" className="text-light-gray hover:text-accent transition-colors duration-300">
                    <FaGithub size={32} />
                </a>
                <a href="mailto:matheusmverissimo820@gmail.com" className="text-light-gray hover:text-accent transition-colors duration-300">
                    <FaEnvelope size={32} />
                </a>
                <a href="tel:+5581993314408" className="text-light-gray hover:text-accent transition-colors duration-300">
                    <FaPhoneAlt size={28} />
                </a>
            </div>
        </section>
    );
};

export default Hero;