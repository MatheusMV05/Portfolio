import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section id="experience" className="py-20">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Experiência Profissional</h2>
            <motion.div
                className="relative max-w-2xl mx-auto border-l-2 border-primary pl-10"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Timeline marker */}
                <div className="absolute w-4 h-4 bg-accent rounded-full -left-2.5 top-1 border-4 border-secondary"></div>

                <div className="mb-10">
                    <h3 className="text-2xl font-bold text-accent">Co-Líder da Equipe de Desenvolvimento</h3>
                    <p className="font-semibold text-white">Abaddon Game Studios (Forja Game - CESAR School)</p>
                    <p className="text-sm text-gray-400 mb-4">Jul/2024 – Jan/2025</p>
                    <ul className="list-disc list-inside text-light-gray space-y-2">
                        <li>Liderei uma equipe de **4 desenvolvedores** na criação do game "Abaddon", utilizando a metodologia **Scrum** para organizar sprints e garantir entregas contínuas.</li>
                        <li>Coordenei o ciclo de desenvolvimento do projeto, desde a prototipação no Figma até a implementação de mecânicas em C#, resultando em um protótipo funcional para o evento Forja Game.</li>
                    </ul>
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;