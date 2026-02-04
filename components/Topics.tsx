import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Topics: React.FC = () => {
  const topics = [
    "Posicionamento de como ser firme sem ser rígida",
    "Como ter conversas difíceis com empatia",
    "Estratégias para desenvolver equilíbrio emocional",
    "Micro hábitos de produtividade leve e como se conectar com resultados e performance",
    "Ferramentas práticas de planejamento de carreira com qualidade de vida",
    "Orientação para definir seus valores que são inegociáveis, dizendo “sim” para você",
    "Como o movimento físico pode ser sua aliada na produtividade",
    "Apoio para aumentar a sua segurança para a tomada de decisão",
    "Técnicas de organização de rotina com espaço para autocuidado",
    "Produtividade Feminina X Culpa Invisível",
    "A arte de dizer 'NÃO' sem culpa e manter a paz interior",
    "Organização com propósito: Essencial x Excesso"
  ];

  return (
    <section className="py-24 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-6">
            O que será trabalhado no <span className="text-brand-800">LIDERELEVE</span>
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm border border-brand-100 hover:shadow-md hover:border-brand-300 transition-all flex items-start gap-3"
            >
              <CheckCircle2 className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
              <p className="text-brand-700 font-medium">{topic}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Topics;