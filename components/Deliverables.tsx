import React from 'react';
import { Check } from 'lucide-react';

const Deliverables: React.FC = () => {
  const items = [
    "6 encontros ao vivo e online (1 vez por semana - 1h a 1h30 cada)",
    "PDF com atividades práticas, reflexões e espaço para planejamento pessoal",
    "Whatsapp disponível para trocas e alinhamentos entre os encontros",
    "Ferramentas testadas por quem já liderou grandes times e buscou qualidade de vida",
    "Exercícios de autocuidado e organização da rotina",
    "Missões semanais para aplicação prática no mundo corporativo",
    "Plano de Ação final, com metas claras para sua nova fase como líder"
  ];

  return (
    <section className="py-24 bg-brand-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">O que você terá</h2>
        
        <div className="bg-brand-800 rounded-2xl p-8 md:p-12 shadow-2xl border border-brand-700">
          <ul className="space-y-6">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-1">
                  <Check size={14} className="text-white font-bold" />
                </div>
                <span className="text-lg md:text-xl text-brand-50">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 text-center space-y-6">
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            Se você sente que está na hora de retomar o controle da sua vida e não só da sua agenda de reuniões.
          </p>
          <p className="text-3xl font-bold text-brand-gold">Venha para o LIDERELEVE.</p>
        </div>
      </div>
    </section>
  );
};

export default Deliverables;