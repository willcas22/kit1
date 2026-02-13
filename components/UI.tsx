
import React, { useState } from 'react';
import { ChevronDown, CheckCircle2 } from 'lucide-react';

export const Button: React.FC<{ 
  children: React.ReactNode; 
  className?: string; 
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'sticky';
}> = ({ children, className = "", onClick, variant = 'primary' }) => {
  const baseStyles = "px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary: "bg-amber-400 text-indigo-950 hover:bg-amber-300",
    outline: "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50",
    sticky: "bg-indigo-600 text-white shadow-2xl w-full md:w-auto"
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export const Section: React.FC<{ 
  children: React.ReactNode; 
  className?: string; 
  id?: string;
  bg?: string;
}> = ({ children, className = "", id, bg = "bg-white" }) => (
  <section id={id} className={`py-20 px-6 ${bg} ${className}`}>
    <div className="max-w-4xl mx-auto">
      {children}
    </div>
  </section>
);

export const Accordion: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-indigo-100 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-lg font-medium text-slate-700 hover:text-indigo-600 transition-colors"
      >
        <span>{question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`mt-2 text-slate-600 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="pb-4">{answer}</p>
      </div>
    </div>
  );
};

export const ArcangelCard: React.FC<{ 
  name: string; 
  problem: string; 
  color: string; 
  icon: string;
}> = ({ name, problem, color, icon }) => (
  <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
    <div className={`w-12 h-12 rounded-full mb-4 flex items-center justify-center ${color}`}>
      <span className="text-2xl">{icon}</span>
    </div>
    <h4 className="font-serif text-xl font-bold mb-2">{name}</h4>
    <p className="text-sm text-slate-500">{problem}</p>
  </div>
);

export const CheckItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex gap-3 items-start text-slate-700">
    <CheckCircle2 className="w-6 h-6 text-indigo-500 shrink-0" />
    <span>{children}</span>
  </li>
);
