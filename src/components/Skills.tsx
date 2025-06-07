const SkillBadge = ({ skill }) => (
    <span className="bg-gray-700 text-light-gray text-sm font-medium me-2 px-3 py-1 rounded-full">{skill}</span>
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

    return (
        <section id="skills" className="py-20">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Competências Técnicas</h2>
            <div className="max-w-4xl mx-auto space-y-8">
                {Object.entries(skills).map(([category, list]) => (
                    <div key={category}>
                        <h3 className="text-2xl font-semibold text-accent mb-4">{category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {list.map(skill => <SkillBadge key={skill} skill={skill} />)}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;