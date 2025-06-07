import React from 'react';
import { motion } from 'framer-motion';
import { FaBlog } from 'react-icons/fa';

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
            type: "spring",
            stiffness: 100
        }
    }
};

const Blog = () => {
    return (
        <motion.section
            className="py-20 px-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.h2
                variants={itemVariants}
                className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            >
                Blog
            </motion.h2>

            <motion.div
                variants={itemVariants}
                className="max-w-2xl mx-auto text-center"
            >
                <div className="bg-gray-800 p-12 rounded-2xl border border-gray-700">
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <FaBlog className="text-white text-3xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Blog em Construção</h3>
                    <p className="text-gray-400 mb-6">
                        Em breve você poderá acompanhar meus artigos sobre desenvolvimento, tecnologia e experiências no mundo da programação.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-full font-bold transition-all duration-300"
                        disabled
                    >
                        Em Breve
                    </motion.button>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default Blog;