import React from 'react';

interface StarProps {
  fillPercentage: number;
}

export default function BusinessCardStar({ fillPercentage }: StarProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="lucide lucide-star"
    >
      {/* Background star */}
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
        fill="none"
        stroke="#238dd3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Filled portion of the star */}
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
        fill="gold"
        stroke='#238dd3'
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        clipPath={`inset(0 ${100 - fillPercentage}% 0 0)`}
      />
    </svg>
  );
}
