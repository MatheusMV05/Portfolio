import { motion } from 'framer-motion';

const Education = () => {
    return (
        <motion.section
            id="education"
            className="py-20 bg-gray-900 -mx-6 md:-mx-12 px-6 md:px-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-white mb-8">Formação Acadêmica</h2>
                <motion.div
                    className="bg-gray-800 p-8 rounded-xl shadow-lg inline-block"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200 }}
                >
                    <h3 className="text-2xl font-bold text-accent">Ciência da Computação</h3>
                    <p className="text-xl text-white mt-2">CESAR School</p>
                    <p className="text-md text-gray-400 mt-1">Em andamento – 3º Período</p>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Education;