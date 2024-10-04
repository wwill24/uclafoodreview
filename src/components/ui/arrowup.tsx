import React from 'react';

interface ArrowUpProps {
  isHighlighted: boolean; 
  isHovered: boolean;    
  onClick: () => void;    
  onMouseEnter: () => void; 
  onMouseLeave: () => void;  
}

export default function ArrowUp({ isHighlighted, isHovered, onClick, onMouseEnter, onMouseLeave }: ArrowUpProps) {
    const fillColor = isHighlighted || isHovered ? "#2b6db8" : "none";

    return (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill={fillColor}
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="lucide lucide-arrow-big-up cursor-pointer hover:scale-125"
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave} 
        >
            <path d="M9 18v-6H5l7-7 7 7h-4v6H9z"/>
        </svg>
    );
}
