
import React, { useState, useEffect } from 'react';

const Totem3D: React.FC = () => {
  const [rotation, setRotation] = useState({ x: -5, y: -25 });

  // Subtle auto-rotation effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * -10;
      setRotation({ x: y - 5, y: x - 25 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="relative transition-transform duration-200 ease-out preserve-3d"
      style={{
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        width: '280px',
        height: '520px',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Back Plate */}
      <div 
        className="absolute inset-0 bg-slate-900 border border-slate-700/50 rounded-2xl shadow-2xl"
        style={{ transform: 'translateZ(-15px)' }}
      />
      
      {/* Side Left */}
      <div 
        className="absolute top-0 bottom-0 w-[30px] bg-gradient-to-r from-slate-800 to-slate-900 border-l border-slate-700/50"
        style={{ transform: 'rotateY(-90deg) translateX(-15px)', left: '0', originX: '0' }}
      />
      
      {/* Side Right */}
      <div 
        className="absolute top-0 bottom-0 w-[30px] bg-gradient-to-l from-slate-800 to-slate-900 border-r border-slate-700/50"
        style={{ transform: 'rotateY(90deg) translateX(15px)', right: '0', originX: '100%' }}
      />
      
      {/* Main Front Body */}
      <div className="absolute inset-0 bg-slate-950 border-[6px] border-slate-800 rounded-2xl overflow-hidden flex flex-col items-center justify-center shadow-2xl shadow-cyan-500/10">
        
        {/* The Screen (UI Simulation) */}
        <div className="w-[94%] h-[92%] bg-black rounded-lg relative overflow-hidden flex flex-col">
          
          {/* Top Camera Notch */}
          <div className="h-8">
          </div>

          {/* Interactive UI Display */}
          <div className="flex-1 p-4 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 flex flex-col gap-4">
            
            {/* Header UI */}
            <div className="flex justify-between items-center mb-2">
              <div className="w-12 h-1 bg-cyan-500/50 rounded-full" />
              <div className="flex gap-1">
                <div className="w-1 h-1 rounded-full bg-slate-700" />
                <div className="w-1 h-1 rounded-full bg-slate-700" />
              </div>
            </div>

            {/* Grid of Apps/Games */}
            <div className="grid grid-cols-2 gap-3 flex-1 overflow-hidden">
               {/* App 1 */}
              <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-xl p-3 flex flex-col items-center justify-center gap-2 group cursor-pointer hover:bg-cyan-500/20 transition-all">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/40 flex items-center justify-center text-cyan-200">🎮</div>
                <div className="h-1.5 w-10 bg-cyan-400/50 rounded-full" />
              </div>
               {/* App 2 */}
              <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 rounded-xl p-3 flex flex-col items-center justify-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/40 flex items-center justify-center">📸</div>
                <div className="h-1.5 w-10 bg-indigo-400/50 rounded-full" />
              </div>
               {/* App 3 */}
              <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 border border-emerald-500/30 rounded-xl p-3 flex flex-col items-center justify-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/40 flex items-center justify-center">📊</div>
                <div className="h-1.5 w-10 bg-emerald-400/50 rounded-full" />
              </div>
               {/* App 4 */}
              <div className="bg-gradient-to-br from-rose-600/20 to-pink-600/20 border border-rose-500/30 rounded-xl p-3 flex flex-col items-center justify-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-rose-500/40 flex items-center justify-center">🎁</div>
                <div className="h-1.5 w-10 bg-rose-400/50 rounded-full" />
              </div>
            </div>

            {/* Main Center Button */}
            <div className="mt-2 h-16 w-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20 relative overflow-hidden">
               <a href="https://www.adinnov.com.ar/" target='_blank' className="text-slate-950 font-black text-xs uppercase tracking-tighter">Comenzar Experiencia</a>
               <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[45deg] animate-[shimmer_3s_infinite]" />
            </div>
          </div>
          
          {/* Glass Overlay Reflex */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-30" />
          
          {/* Screen Flicker Effect (Subtle) */}
          <div className="absolute inset-0 pointer-events-none bg-cyan-500/5 animate-pulse mix-blend-overlay" />
        </div>

        {/* Home Button / Sensor Area */}
        <div className="h-20">
        </div>
      </div>

      {/* Floor Base */}
      <div 
        className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[180%] h-4 bg-slate-900 border border-slate-700/50 rounded-full blur-[40px] opacity-60"
        style={{ transform: 'rotateX(90deg) translateZ(-200px)' }}
      />
      
      {/* Ambient Lighting Accents */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-400/20 blur-[60px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-600/20 blur-[60px] rounded-full pointer-events-none" />

      <style>{`
        .preserve-3d { transform-style: preserve-3d; }
        @keyframes shimmer {
          0% { left: -100%; }
          50% { left: 100%; }
          100% { left: 100%; }
        }
      `}</style>
    </div>
  );
};

export default Totem3D;
