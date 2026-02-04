import React from 'react';

const PainPoints: React.FC = () => {
  return (
    <section className="py-20 bg-brand-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Já se sentiu assim?</h2>
        <div className="space-y-6 text-xl leading-relaxed text-brand-100 font-light">
          <p>
            Você já chegou longe. Superou metas, trabalhou com equipes, entregou resultados. Mas... em algum momento da jornada, talvez você tenha se perguntado:
          </p>
          <div className="bg-white/10 p-8 rounded-xl border border-white/20 backdrop-blur-sm mt-8 transform hover:scale-105 transition-duration-500">
            <p className="font-serif italic text-2xl text-white">
              “E a minha saúde? Onde está o meu bem-estar no meio de tanta cobrança e entrega?”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;