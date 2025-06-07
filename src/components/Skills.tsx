import { motion } from 'framer-motion';

const SkillBadge = ({ skill }) => (
    <motion.span
        className="bg-gray-700 text-light-gray text-sm font-medium me-2 px-3 py-1.5 rounded-full"
        whileHover={{ scale: 1.1, backgroundColor: "#0e7490" }}
        transition={{ type: "spring", stiffness: 300 }}
    >
        {skill}
    </motion.span>
);

const Skills = () => {
    const skills = {
        "Linguagens": ["Java", "Python", "C#", "JavaScript", "C/C++"],
        "Frameworks & Ecossistemas": ["Spring Boot", "Django", "Unity Engine"],
        "Web & Frontend": ["HTML5", "CSS3", "React", "Vite", "Bootstrap", "RESTful APIs"],
        "Bancos de Dados": ["PostgreSQL", "SQLite"],
        "Ferramentas & Metodologias": ["Git", "GitHub", "Maven", "Scrum", "Kanban", "IntelliJ", "VS Code", "WebStorm", "Rider", "Figma", "ClickUp", "Notion", "Jira", "Trello"],
        "Cloud": ["Microsoft Azure (Básico)"]
    };

    // Animation for each category container
    const categoryVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1, // Stagger the badges within the category
            }
        }
    };

    return (
        <section id="skills" className="py-20">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Competências Técnicas</h2>
            <div className="max-w-4xl mx-auto space-y-8">
                {Object.entries(skills).map(([category, list]) => (
                    <motion.div
                        key={category}
                        variants={categoryVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h3 className="text-2xl font-semibold text-accent mb-4">{category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {list.map(skill => <SkillBadge key={skill} skill={skill} />)}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;