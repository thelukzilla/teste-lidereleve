import React from 'react';
import { ArrowRight } from 'lucide-react';

const OtherServices: React.FC = () => {
  return (
    <section className="py-20 bg-brand-800 text-white border-t border-brand-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Conheça também todas as opções de Serviços</h2>
        <p className="text-lg text-brand-200 mb-8 max-w-2xl mx-auto">
          Atualização de Currículo, Atualização de Linkedin, Consultoria Express, Preparação para Entrevista, entre outros.
        </p>
        <a 
          href="https://wa.me/5524998159609"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-brand-gold font-bold hover:text-white transition-colors text-lg"
        >
          Saiba mais <ArrowRight size={20} />
        </a>
      </div>
    </section>
  );
};

export default OtherServices;