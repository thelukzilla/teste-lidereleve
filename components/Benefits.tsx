import React from 'react';
import { Star } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    "Mais clareza mental para tomada de decisões no trabalho, sem desgaste emocional excessivo.",
    "Técnicas práticas de gestão do tempo e de energia, para equilibrar resultados profissionais com saúde física e emocional.",
    "Melhora no foco e na produtividade, através de pequenos ajustes de rotina que respeitam o seu ritmo.",
    "Plano de ação personalizado para que, ao final da Consultoria, você tenha passos concretos para continuar evoluindo.",
    "Desenvolvimento da autoconfiança e da voz ativa: como se posicionar sem perder a naturalidade e o equilíbrio.",
    "Estratégias de liderança humanizada, com foco em empatia, comunicação clara e entrega de resultados sem burnout.",
    "Incorporação de hábitos saudáveis, como exercícios de respiração, pausas conscientes e atividades físicas.",
    "Ferramentas para lidar com pressão, metas e cobranças corporativas com mais leveza e menos autocobrança."
  ];

  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-8 leading-tight">
              Benefícios que <br/>
              <span className="text-brand-800 border-b-4 border-brand-gold">LIDERELEVE</span> proporciona
            </h2>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Star className="w-6 h-6 text-brand-gold fill-brand-gold" />
                  </div>
                  <p className="text-brand-700 text-lg leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative h-full min-h-[400px] bg-brand-50 rounded-3xl p-8 flex items-center justify-center">
             <div className="absolute inset-4 border-2 border-dashed border-brand-200 rounded-2xl"></div>
             <div className="relative text-center p-8 bg-white shadow-xl rounded-xl max-w-sm">
                <p className="text-2xl font-serif text-brand-900 italic mb-4">
                  "Um programa direto, humano e com metodologia voltada para mulheres que querem resultado com saúde, trabalho com leveza e carreira com propósito."
                </p>
                <div className="w-16 h-1 bg-brand-gold mx-auto my-4"></div>
                <p className="font-bold text-brand-800">Juliana Castanheira</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;