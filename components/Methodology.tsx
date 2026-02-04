import React from 'react';

const Methodology: React.FC = () => {
  const steps = [
    {
      number: "1",
      title: "Autoconhecimento e Posicionamento com Leveza",
      desc: "Fortalecer a clareza de quem se é como mulher e profissional. Trabalhar autoconfiança, identidade profissional e valores."
    },
    {
      number: "2",
      title: "Corpo em Movimento Mente em Equilíbrio",
      desc: "Conectar o corpo como ferramenta de clareza mental e emocional. Incorporar micro práticas de bem-estar no dia a dia sem gerar mais peso. Promover consistência sem cobrança."
    },
    {
      number: "3",
      title: "Comunicação Assertiva com Leveza e Empatia",
      desc: "Melhorar a comunicação sem entrar no ciclo: passividade → explosão → culpa. Capacitar para conversas difíceis, conflitos e negociações mantendo o tom humano e respeitosos consigo e com o outro."
    },
    {
      number: "4",
      title: "Alta Performance Sustentável: Produzir Sem se Anular",
      desc: "Quebrar o ciclo de hiperprodutividade tóxica e ensinar a planejar de forma humana. Desmistificar a alta performance como sinônimo de sobrecarga e mostrar como ser produtiva com energia e clareza."
    },
    {
      number: "5",
      title: "O que é Liderar Leve? Resgate e Integração de Tudo",
      desc: "Despertar consciência sobre o estilo de liderança atual e abrir espaço para um novo modelo mais leve. Desconstruir a ideia de que liderança precisa ser dura, sobrecarregada e solitária. Trazer uma nova perspectiva de liderança baseada em equilíbrio e presença."
    },
    {
      number: "6",
      title: "Plano de Ação: Liderança Leve é Prática Diária",
      desc: "Fechar o ciclo com um plano que reflita tudo o que foi aprendido e vivido, de forma prática e sustentável. Criar um planejamento contínuo com metas de autocuidado + metas profissionais."
    }
  ];

  return (
    <section id="methodology" className="py-24 bg-brand-800 text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full blur-[128px]"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-gold rounded-full blur-[128px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Etapas do método</h2>
          <p className="text-brand-200 max-w-2xl mx-auto">Uma jornada estruturada para transformar sua liderança e sua vida.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-brand-900/50 border border-brand-700 p-8 rounded-2xl hover:bg-brand-900 transition-colors relative group">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-brand-gold text-brand-900 font-bold text-xl flex items-center justify-center rounded-lg shadow-lg group-hover:scale-110 transition-transform">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-4 mt-2 text-white">{step.title}</h3>
              <p className="text-brand-300 leading-relaxed text-sm">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;