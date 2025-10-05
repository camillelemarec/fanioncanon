import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Logo({ size = 'md', className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl'
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* FANION - Texte du haut (courbe convexe) */}
      <div className={`${sizeClasses[size]} font-bold font-logo text-navy-700 mb-1`}>
        FANION
      </div>
      
      {/* Fanion avec CANON à l'intérieur */}
      <div className="relative flex items-center mb-1">
        {/* Hampe du fanion */}
        <div className="w-1 h-8 bg-navy-700"></div>
        
        {/* Fanion triangulaire */}
        <div className="relative">
          <div className="w-0 h-0 border-l-[20px] border-l-navy-700 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent"></div>
          
          {/* Texte CANON dans le fanion */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-xs font-bold transform -translate-x-2">
              CANON
            </span>
          </div>
        </div>
      </div>
      
      {/* CANON - Texte du bas (courbe concave) */}
      <div className={`${sizeClasses[size]} font-bold font-logo text-navy-700`}>
        CANON
      </div>
    </div>
  );
}

// Version simplifiée pour le header
export function LogoSimple({ size = 'md', className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl'
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Fanion simple */}
      <div className="relative">
        <div className="w-1 h-6 bg-navy-700"></div>
        <div className="absolute left-1 top-0 w-0 h-0 border-l-[12px] border-l-navy-700 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent"></div>
      </div>
      
      {/* Texte */}
      <span className={`${sizeClasses[size]} font-bold font-logo text-navy-700`}>
        Fanion Canon
      </span>
    </div>
  );
}
