import { FaTrophy } from 'react-icons/fa';

const achievements = [
    "Apresentação de Projeto no Rec'N Play 2024 (Jogo 'Helena')",
    "Seleção para a MostraTechDesign 2025 (Jogo 'PokeBattle')",
    "Liderança técnica comprovada em múltiplos projetos acadêmicos e de extensão."
];

const Achievements = () => {
    return (
        <section id="achievements" className="py-20">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Conquistas</h2>
            <div className="max-w-2xl mx-auto">
                <ul className="space-y-4">
                    {achievements.map((ach, index) => (
                        <li key={index} className="flex items-start">
                            <FaTrophy className="text-accent text-xl mt-1 mr-4 flex-shrink-0" />
                            <span className="text-light-gray text-lg">{ach}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Achievements;