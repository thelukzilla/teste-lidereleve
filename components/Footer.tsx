import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-900 text-brand-400 py-8 border-t border-brand-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">
          Copyright © {new Date().getFullYear()} LIDERELEVE – Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;