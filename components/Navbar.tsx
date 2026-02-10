import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
              <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
          </div>
          <span className="text-lg font-extrabold tracking-tight text-white uppercase">
            Totem<span className="text-cyan-400">Interactivo</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
          <a href="#" className="hover:text-white transition-colors">Productos</a>
          <a href="#" className="hover:text-white transition-colors">Juegos</a>
          <a href="#" className="hover:text-white transition-colors">Casos de Éxito</a>
          <a href="#" className="hover:text-white transition-colors">Empresa</a>
        </div>

        <div>
          <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-full text-sm font-semibold transition-all border border-slate-700 active:scale-95">
            Contacto
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;