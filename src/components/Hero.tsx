import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

// Animation variants for the container to orchestrate staggered animations
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Time delay between each child animation
        },
    },
};

// Animation variants for individual items (fade in and slide up)
const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
};

const Hero = () => {
    return (
        <motion.section
            id="home"
            className="min-h-screen flex flex-col justify-center items-center md:items-start text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.h1
                className="text-5xl md:text-7xl font-extrabold text-white"
                variants={itemVariants}
            >
                MATHEUS MARTINS
            </motion.h1>
            <motion.h2
                className="text-2xl md:text-3xl font-semibold text-accent mt-2"
                variants={itemVariants}
            >
                Desenvolvedor Java Backend | Game Developer
            </motion.h2>
            <motion.p
                className="mt-4 max-w-2xl text-lg text-light-gray"
                variants={itemVariants}
            >
                📍 Recife, PE
            </motion.p>
            <motion.div className="mt-8 flex space-x-6" variants={itemVariants}>
                <a href="https://www.linkedin.com/in/matheus-martins-8696422b8/" target="_blank" rel="noopener noreferrer" className="text-light-gray hover:text-accent transition-all duration-300 hover:scale-110">
                    <FaLinkedin size={32} />
                </a>
                <a href="https://github.com/MatheusMV05" target="_blank" rel="noopener noreferrer" className="text-light-gray hover:text-accent transition-all duration-300 hover:scale-110">
                    <FaGithub size={32} />
                </a>
                <a href="mailto:matheusmverissimo820@gmail.com" className="text-light-gray hover:text-accent transition-all duration-300 hover:scale-110">
                    <FaEnvelope size={32} />
                </a>
                <a href="tel:+5581993314408" className="text-light-gray hover:text-accent transition-all duration-300 hover:scale-110">
                    <FaPhoneAlt size={28} />
                </a>
            </motion.div>
        </motion.section>
    );
};

export default Hero;