import { motion } from 'framer-motion';
import { FaTrophy } from 'react-icons/fa';

const achievements = [
    "Apresentação de Projeto no Rec'N Play 2024 (Jogo 'Helena')",
    "Seleção para a MostraTechDesign 2025 (Jogo 'PokeBattle')",
    "Liderança técnica comprovada em múltiplos projetos acadêmicos e de extensão."
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
};

const Achievements = () => {
    return (
        <section id="achievements" className="py-20">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Conquistas</h2>
            <motion.div
                className="max-w-2xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                <ul className="space-y-4">
                    {achievements.map((ach, index) => (
                        <motion.li
                            key={index}
                            className="flex items-start"
                            variants={itemVariants}
                        >
                            <FaTrophy className="text-accent text-xl mt-1 mr-4 flex-shrink-0" />
                            <span className="text-light-gray text-lg">{ach}</span>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </section>
    );
};

export default Achievements;