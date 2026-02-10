import React, { useEffect, useState } from 'react';
import Totem3D from './Totem3D';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative flex items-center overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 py-8 lg:py-12">
        
        {/* Left Column: Content */}
        <div className={`flex flex-col justify-center transition-all duration-1000 ease-out transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Nueva Generación 2026
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-4 text-slate-900 tracking-tight">
            Tótems interactivos para experiencias <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 animate-gradient-x">
              que impactan.
            </span>
          </h1>
          
          <h2 className="text-lg md:text-xl font-semibold text-slate-700 mb-3">
            Juegos, aplicaciones y desarrollos a medida para eventos y marcas.
          </h2>
          
          <p className="text-base text-slate-600 mb-6 max-w-xl leading-relaxed">
            Solución todo en uno: hardware premium de alta resistencia + software interactivo personalizado + gestión técnica profesional. Transformamos cualquier espacio en un centro de interacción digital.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="group relative px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-xl shadow-blue-500/20 active:scale-95 flex items-center justify-center gap-2">
              Solicitar presupuesto
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button className="px-6 py-3 bg-white/50 hover:bg-gray-100 text-slate-900 font-bold rounded-xl transition-all border border-slate-200/50 backdrop-blur-sm active:scale-95">
              Ver juegos y aplicaciones
            </button>
          </div>
          
          <div className="mt-8 flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-900">500+</span>
              <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Eventos Realizados</span>
            </div>
            <div className="w-px h-8 bg-slate-800" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-900">4K</span>
              <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Resolución Ultra</span>
            </div>
            <div className="w-px h-8 bg-slate-800" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-900">24/7</span>
              <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Soporte Técnico</span>
            </div>
          </div>
        </div>
        
        {/* Right Column: 3D Visualization */}
        <div className={`relative flex items-center justify-center transition-all duration-1000 ease-out delay-300 transform ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'}`}>
          <div className="relative w-full aspect-square flex items-center justify-center">
            {/* Background Halo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-gradient-to-r from-blue-200/20 to-blue-600/20 rounded-full blur-[100px] animate-pulse" />
            
            {/* 3D Component Rendering */}
            <div className="relative z-10 w-full h-full flex items-center justify-center perspective-[2000px]">
                <Totem3D />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;