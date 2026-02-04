import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-br from-brand-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-8 text-center lg:text-left">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-brand-100 text-brand-800 text-xs font-bold tracking-wider uppercase mb-4">
                Mentoria de Liderança
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-900 leading-tight">
                Conheça o <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-800 to-brand-gold">LIDERELEVE</span>
              </h1>
            </div>
            
            <div className="space-y-4 text-lg text-brand-600 leading-relaxed">
              <p>
                Sua carreira anda acelerada, mas sente que está perdendo o controle da própria saúde e bem-estar, seu corpo e sua mente estão pedindo socorro?
              </p>
              <p className="font-semibold text-brand-800">
                Chegou o momento de se reconectar com seus VALORES e PROPÓSITOS.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#pricing"
                className="px-8 py-4 bg-brand-800 text-white font-bold uppercase tracking-wider rounded-lg shadow-lg hover:bg-brand-900 transition-all transform hover:scale-105"
              >
                Quero me inscrever
              </a>
              <a
                href="#about"
                className="px-8 py-4 border-2 border-brand-200 text-brand-800 font-bold uppercase tracking-wider rounded-lg hover:bg-brand-50 transition-colors"
              >
                Saber mais
              </a>
            </div>
          </div>

          {/* Visual */}
          <div className="order-1 lg:order-2 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-lg aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://img1.wsimg.com/isteam/ip/020eaf0f-e597-4646-ba27-af182130cb93/para%20o%20site%20certa.jpg" 
                alt="Lidereleve Juliana Castanheira" 
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-bold text-xl">Juliana Castanheira</p>
                <p className="text-brand-gold text-sm uppercase tracking-widest">Mentora de Carreira</p>
              </div>
            </div>
            
            {/* Decor Elements */}
            <div className="absolute -z-10 top-10 -right-10 w-32 h-32 bg-brand-gold/20 rounded-full blur-2xl"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-brand-800/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce text-brand-300">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;