import React, { useRef, useState } from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  highlight?: boolean;
  tilt?: boolean;
};

export default function Card({ 
  children, 
  className = '', 
  highlight = false,
  tilt = true 
}: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt || !cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to the card center
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = e.clientX - centerX;
    const y = e.clientY - centerY;
    
    // Calculate rotation values (limited to ±10 degrees)
    const rotateX = -y / (rect.height / 2) * 10;
    const rotateY = x / (rect.width / 2) * 10;
    
    // Set the transform
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
    
    // Set the glow position
    setGlowPosition({
      x: (e.clientX - rect.left) / rect.width * 100,
      y: (e.clientY - rect.top) / rect.height * 100
    });
  };

  const handleMouseLeave = () => {
    if (!tilt) return;
    setTransform('');
  };

  return (
    <div 
      ref={cardRef}
      className={`tech-card ${highlight ? 'border-primary border-2' : ''} ${className} relative`}
      style={{ 
        transform: transform,
        transition: transform ? 'none' : 'transform 0.5s ease-out'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {tilt && (
        <div 
          className="absolute inset-0 pointer-events-none rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(99, 102, 241, 0.15), transparent 70%)`,
            zIndex: 1
          }}
        ></div>
      )}
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}