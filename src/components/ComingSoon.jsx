import { useState } from 'react';
import logo from '../assets/noctiluca_logo.png';

const ComingSoon = ({ onUnlock }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  // LA CONTRASEÑA ESTÁ DEFINIDA AQUÍ:
  const secretPassword = 'noctiluca2026';

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === secretPassword) {
      localStorage.setItem('noctiluca_unlocked', 'true');
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-noctiluca-dark text-white flex flex-col items-center justify-center font-sans relative overflow-hidden">
      {/* Círculo de luz decorativo de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-noctiluca-primary rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
      
      <div className="text-center p-8 max-w-md z-10 flex flex-col items-center">
        <img 
          src={logo} 
          alt="Noctiluca" 
          className="w-48 md:w-64 mb-10 object-contain drop-shadow-[0_0_15px_rgba(74,178,212,0.3)]"
        />
        
        <h2 className="text-2xl md:text-3xl font-light text-white mb-4 uppercase tracking-[0.2em]">
          En remodelación
        </h2>
        <div className="w-16 h-0.5 bg-noctiluca-primary mx-auto mb-6"></div>
        <p className="text-gray-400 mb-16 text-sm md:text-base font-light tracking-wide">
          Estamos preparando nuestro nuevo portafolio.
        </p>
        
        {/* Zona oculta de contraseña (medio transparente) */}
        <form 
          onSubmit={handleLogin} 
          className="mt-12 flex flex-col items-center opacity-20 hover:opacity-100 focus-within:opacity-100 transition-all duration-500"
        >
          <p className="text-[10px] text-gray-500 mb-3 uppercase tracking-widest">
            Acceso Privado
          </p>
          <div className="flex gap-2">
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-black/50 border border-gray-800 rounded-sm px-4 py-2 text-sm text-center focus:outline-none focus:border-noctiluca-primary transition-colors text-white w-40 placeholder-gray-700"
              placeholder="••••••••"
            />
            <button 
              type="submit" 
              className="bg-noctiluca-dark border border-gray-800 rounded-sm px-4 py-2 text-sm hover:border-noctiluca-primary hover:text-noctiluca-accent transition-colors"
            >
              Entrar
            </button>
          </div>
          {error && <span className="text-red-500 text-xs mt-3">Contraseña incorrecta</span>}
        </form>
      </div>
    </div>
  );
};

export default ComingSoon;
