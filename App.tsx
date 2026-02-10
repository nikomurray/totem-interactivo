import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-500/30 selection:text-blue-200">
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[30%] h-[30%] bg-blue-400/8 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[35%] h-[35%] bg-blue-600/8 blur-[120px] rounded-full" />
      </div>
      
      <Navbar />
      <main className="relative z-10">
        <Hero />
      </main>
    </div>
  );
};

export default App;