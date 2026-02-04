import React from 'react';
import { MessageCircle } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-brand-50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-900 mb-8 uppercase tracking-tight">
          Garanta sua Vaga!!!
        </h2>
        
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-brand-gold relative transform hover:scale-105 transition-transform duration-300">
          <div className="bg-brand-gold py-4">
            <p className="text-brand-900 font-bold uppercase tracking-widest text-sm">Mentoria Completa</p>
          </div>
          
          <div className="p-10 md:p-14 space-y-8">
            <div>
              <p className="text-brand-500 text-lg uppercase font-semibold mb-2">Investimento</p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl text-brand-400 font-bold">R$</span>
                <span className="text-6xl font-bold text-brand-900">799,90</span>
              </div>
              <p className="text-brand-600 font-medium mt-2">no Pix à vista</p>
            </div>

            <div className="w-full h-px bg-gray-100"></div>

            <div>
              <p className="text-brand-800 text-xl font-medium">
                Ou <span className="font-bold">5x</span> de <span className="font-bold text-2xl">R$ 169,98</span>
              </p>
              <p className="text-sm text-gray-500 mt-1">no cartão de crédito</p>
            </div>

            <a 
              href="https://wa.me/5524998159609" 
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-5 bg-green-600 text-white font-bold text-xl rounded-xl shadow-lg hover:bg-green-700 transition-all flex items-center justify-center gap-3 animate-pulse"
            >
              <MessageCircle size={28} />
              Garantir Vaga!
            </a>
            
            <p className="text-xs text-gray-400">Vagas limitadas para garantir o acompanhamento personalizado.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;