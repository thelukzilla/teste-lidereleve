import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Image */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-xl grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="https://img1.wsimg.com/isteam/ip/020eaf0f-e597-4646-ba27-af182130cb93/para%20o%20site%20certa.jpg" 
                alt="Juliana Castanheira" 
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 bg-brand-800 p-6 rounded-lg shadow-lg text-white">
              <p className="text-4xl font-serif text-brand-gold mb-1">20+</p>
              <p className="text-sm uppercase tracking-wide">Anos de experiência em liderança e gestão</p>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-4xl font-bold text-brand-900">Juliana Castanheira</h2>
            <h3 className="text-xl text-brand-gold font-medium">Criadora do Método LIDERELEVE</h3>
            
            <div className="prose prose-lg text-brand-600 space-y-4">
              <p>
                <strong>LIDERELEVE nasceu da minha própria história.</strong>
              </p>
              <p>
                Foram quase 20 anos liderando em grandes empresas, gerenciando lojas, territórios e pessoas, sob pressão constante. Fui aprimorando nessa trajetória estudos na área de Psicologia do Trabalho dentro das Organizações e na minha formação em Gestão de Pessoas, analisando sempre os comportamentos.
              </p>
              <p>
                Ao mesmo tempo, precisei encontrar minha válvula de escape, minha fonte de força e equilíbrio para conseguir liderar a minha própria Vida e ainda gerir pessoas com empatia e cuidado.
              </p>
              <p className="text-brand-800 font-semibold italic border-l-4 border-brand-gold pl-4 py-2 bg-brand-50">
                Agora, quero dividir com você tudo que aprendi na prática.
              </p>
              <ul className="space-y-2 list-none">
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">✦</span>
                  Como trabalhar com mais leveza, sem abrir mão de resultado.
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">✦</span>
                  Como incluir bem-estar na rotina sem fórmulas impossíveis.
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">✦</span>
                  Como não perder de vista aquilo que realmente importa: <strong className="ml-1 text-brand-900">VOCÊ</strong>.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;