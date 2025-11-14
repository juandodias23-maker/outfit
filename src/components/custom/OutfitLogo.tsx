export default function OutfitLogo({ className = "h-10" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Ícone de cabide estilizado */}
      <svg 
        viewBox="0 0 40 40" 
        className="h-full w-auto"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Gancho do cabide */}
        <path 
          d="M20 4C18.3431 4 17 5.34315 17 7C17 8.65685 18.3431 10 20 10C21.6569 10 23 8.65685 23 7C23 5.34315 21.6569 4 20 4Z" 
          fill="#FF6F61"
          stroke="#FF6F61"
          strokeWidth="1.5"
        />
        <path 
          d="M20 10V14" 
          stroke="#FF6F61" 
          strokeWidth="2.5" 
          strokeLinecap="round"
        />
        
        {/* Barra horizontal do cabide */}
        <path 
          d="M8 14L20 14L32 14L30 28C29.8 30 28 32 26 32H14C12 32 10.2 30 10 28L8 14Z" 
          fill="#2D3748"
          stroke="#2D3748"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        
        {/* Detalhe decorativo */}
        <circle cx="20" cy="14" r="2" fill="#FF6F61" />
      </svg>

      {/* Texto "outfit" */}
      <div className="flex items-baseline font-bold text-2xl tracking-tight">
        <span className="text-gray-800">Out</span>
        <span className="text-[#1E3A8A]">fit</span>
      </div>
    </div>
  );
}
