import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.section
            id="about"
            className="py-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Sobre Mim</h2>
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
                <p className="text-lg leading-relaxed text-light-gray">
                    Desenvolvedor Backend com foco em **Java** e **Spring Boot**, com experiência prática no desenvolvimento de APIs RESTful e arquiteturas de microsserviços em projetos acadêmicos e de extensão. Apaixonado por tecnologia e resolução de problemas, busco ativamente uma oportunidade para consolidar minha carreira em desenvolvimento Java, ao mesmo tempo que construo uma trajetória para atuar, a longo prazo, na indústria de desenvolvimento de jogos. Proativo, com experiência demonstrada em liderança de equipes técnicas em ambientes ágeis.
                </p>
            </div>
        </motion.section>
    );
};

export default About;