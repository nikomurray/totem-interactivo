import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-7xl rounded-full border border-slate-200/50 bg-white/60 backdrop-blur-xl shadow-sm">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="w-44" />
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
          <a href="#" className="transition-colors hover:text-blue-600">
            Productos
          </a>
          <a href="#" className="transition-colors hover:text-blue-600">
            Juegos
          </a>
          <a href="#" className="transition-colors hover:text-blue-600">
            Casos de Éxito
          </a>
          <a href="#" className="transition-colors hover:text-blue-600">
            Empresa
          </a>
        </div>

        {/* CTA */}
        <div className="flex items-center">
          <button className="rounded-full border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-blue-500 active:scale-95">
            Contacto
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
