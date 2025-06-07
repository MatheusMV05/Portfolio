import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaHeart, FaRocket } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const contactInfo = [
        {
            icon: FaEnvelope,
            label: 'Email',
            value: 'matheusmartinsvcontato@gmail.com',
            href: 'mailto:matheusmartinsvcontato@gmail.com',
            color: 'from-red-500 to-pink-500'
        },
        {
            icon: FaMapMarkerAlt,
            label: 'Localização',
            value: 'Recife, PE',
            href: '#',
            color: 'from-blue-500 to-cyan-500'
        }
    ];

    const socialLinks = [
        {
            icon: FaLinkedin,
            href: 'https://www.linkedin.com/in/matheus-martins-8696422b8/',
            label: 'LinkedIn',
            color: 'hover:text-blue-500'
        },
        {
            icon: FaGithub,
            href: 'https://github.com/MatheusMV05',
            label: 'GitHub',
            color: 'hover:text-gray-400'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.1,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <motion.footer
            className="relative z-10 bg-gray-900 border-t border-gray-700"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Seção principal do footer */}
                <div className="py-8 sm:py-12 lg:py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                        {/* Informações de contato */}
                        <motion.div variants={itemVariants} className="text-center lg:text-left">
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                                Entre em Contato
                            </h3>
                            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
                                Estou aberto a novas oportunidades e colaborações.
                            </p>

                            <div className="space-y-3 sm:space-y-4">
                                {contactInfo.map((contact, index) => (
                                    <motion.a
                                        key={index}
                                        href={contact.href}
                                        className="flex items-center justify-center lg:justify-start space-x-3 text-gray-300 hover:text-white transition-colors duration-300 group"
                                        whileHover={{ scale: 1.02, x: contact.href === '#' ? 0 : 5 }}
                                        onClick={contact.href === '#' ? (e) => e.preventDefault() : undefined}
                                    >
                                        <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${contact.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                            <contact.icon className="text-white text-sm sm:text-base" />
                                        </div>
                                        <div className="text-left">
                                            <div className="text-xs sm:text-sm text-gray-500">{contact.label}</div>
                                            <div className="text-sm sm:text-base font-medium">{contact.value}</div>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Redes sociais */}
                        <motion.div variants={itemVariants} className="text-center">
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                                Redes Sociais
                            </h3>
                            <div className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-125`}
                                        whileHover={{ y: -5, rotate: 5 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <social.icon className="text-2xl sm:text-3xl" />
                                    </motion.a>
                                ))}
                            </div>

                            <motion.div
                                className="bg-gray-800 p-4 sm:p-6 rounded-2xl border border-gray-700"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="flex items-center justify-center space-x-2 text-cyan-400 mb-2">
                                    <FaRocket className="text-lg" />
                                    <span className="font-bold text-sm sm:text-base">Status</span>
                                </div>
                                <p className="text-gray-300 text-xs sm:text-sm">
                                    Disponível para novas oportunidades
                                </p>
                                <div className="flex justify-center mt-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Tecnologias principais */}
                        <motion.div variants={itemVariants} className="text-center lg:text-left">
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                                Principais Tecnologias
                            </h3>
                            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-4 sm:mb-6">
                                {['Java', 'Spring Boot', 'React', 'Python', 'Unity', 'C#'].map((tech, index) => (
                                    <motion.span
                                        key={index}
                                        className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs sm:text-sm font-bold px-2 sm:px-3 py-1 rounded-full"
                                        whileHover={{ scale: 1.1, rotate: 2 }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>

                            <div className="text-gray-400 text-xs sm:text-sm space-y-1 sm:space-y-2">
                                <p>🎓 3º Período - Ciência da Computação</p>
                                <p>🏫 CESAR School</p>
                                <p>🎮 Desenvolvedor Java & Game Dev</p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Linha divisória */}
                <div className="border-t border-gray-700"></div>

                {/* Copyright */}
                <motion.div
                    variants={itemVariants}
                    className="py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0"
                >
                    <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
                        &copy; {currentYear} Matheus Martins. Desenvolvido com
                        <motion.span
                            className="inline-flex items-center mx-1"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
                        >
                            <FaHeart className="text-red-500 text-xs" />
                        </motion.span>
                        usando React & Tailwind CSS.
                    </p>

                    <div className="flex items-center space-x-1 text-xs sm:text-sm text-gray-500">
                        <span>Versão 1.0.0</span>
                        <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                        <span>Deploy Vercel</span>
                    </div>
                </motion.div>
            </div>

            {/* Background decorativo */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent pointer-events-none"></div>
        </motion.footer>
    );
};

export default Footer;