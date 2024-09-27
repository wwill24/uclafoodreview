import React from 'react';

interface ArrowDownProps {
  isHighlighted: boolean;
  isHovered: boolean;    
  onClick: () => void; 
  onMouseEnter: () => void; 
  onMouseLeave: () => void; 
}

export default function ArrowDown({ isHighlighted, isHovered, onClick, onMouseEnter, onMouseLeave }: ArrowDownProps) {
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
          className="lucide lucide-arrow-big-down cursor-pointer"
          onClick={onClick}
          onMouseEnter={onMouseEnter} // Attach mouse enter event
          onMouseLeave={onMouseLeave} // Attach mouse leave event
        >
            <path d="M15 6v6h4l-7 7-7-7h4V6h6z"/>
        </svg>
    );
}
