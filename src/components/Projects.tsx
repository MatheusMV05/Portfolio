import { FaGithub } from 'react-icons/fa';

const projectsData = [
    {
        title: "Site Institucional BRASFI",
        tech: "Java, Spring Boot, Microserviços",
        description: "Atuei como Líder de Backend, arquitetando e desenvolvendo a API RESTful com mais de 114 endpoints e implementando uma arquitetura de microsserviços.",
        repo: "https://github.com/MatheusMV05/projetos3g2"
    },
    {
        title: "Helena - Game Development",
        tech: "Unity, C#",
        description: "Co-liderei o desenvolvimento de um jogo 2D completo. O projeto foi selecionado e apresentado no festival de tecnologia Rec'N Play 2024.",
        repo: "https://github.com/vinimarques7/helena"
    },
    {
        title: "Gerador de Resumos com LLM",
        tech: "Python, Ollama, Bootstrap",
        description: "Desenvolvi uma aplicação web que consome uma API local de um LLM (Ollama) para gerar resumos automáticos de textos.",
        repo: "https://github.com/MatheusMV05/LLM-Local-API-Project"
    },
    {
        title: "PokeBattle",
        tech: "Linguagem C, Estrutura de Dados",
        description: "Liderei o desenvolvimento de um jogo de batalha em C, aplicando conceitos de algoritmos e estruturas de dados. Selecionado para a MostraTechDesign 2025.",
        repo: "https://github.com/MatheusMV05/PokeBattle"
    },
    {
        title: "Which Teacher",
        tech: "Python, Django Fullstack, JavaScript",
        description: "Participei do desenvolvimento de uma aplicação web como fullstack, implementando funcionalidades de CRUD e um frontend responsivo.",
        repo: "https://github.com/vinimarques7/projeto-FDS"
    }
];

const ProjectCard = ({ title, tech, description, repo }) => (
    <div className="bg-gray-800 rounded-lg p-6 flex flex-col justify-between shadow-lg hover:shadow-accent/50 transition-shadow duration-300 transform hover:-translate-y-1">
        <div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-sm text-accent font-semibold my-2">{tech}</p>
            <p className="text-light-gray">{description}</p>
        </div>
        <a href={repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-4 text-accent hover:text-white transition-colors duration-300">
            Ver Repositório <FaGithub className="ml-2" />
        </a>
    </div>
);


const Projects = () => {
    return (
        <section id="projects" className="py-20">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Projetos em Destaque</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;