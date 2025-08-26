import React, { useRef } from 'react';

interface DataTransformationBackgroundProps {
  className?: string;
}

const DataTransformationBackground: React.FC<DataTransformationBackgroundProps> = ({ 
  className = '' 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 ${className}`}
      style={{ 
        zIndex: 1,
        opacity: 0.8,
        pointerEvents: 'none'
      }}
    >
      {/* Single prominent background element - Right side */}
      <div className="absolute right-0 top-0 w-1/2 h-full overflow-hidden">
        
        {/* Single gradient orb - more visible */}
        <div className="absolute -right-24 top-32">
          <div 
            className="w-72 h-72 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255, 116, 51, 0.15) 0%, rgba(255, 116, 51, 0.08) 40%, rgba(0, 102, 204, 0.06) 70%, transparent 90%)',
              animation: 'singleFloat 10s ease-in-out infinite alternate'
            }}
          />
        </div>

        {/* Data network visualization */}
        <div className="absolute right-32 top-40">
          <div className="relative">
            {/* Central data hub */}
            <div 
              className="w-6 h-6 rounded-full"
              style={{
                backgroundColor: '#ff7433',
                boxShadow: '0 0 24px rgba(255, 116, 51, 0.4)',
                animation: 'hubPulse 3s ease-in-out infinite'
              }}
            />
            
            {/* Connected data nodes */}
            {Array.from({ length: 6 }).map((_, i) => {
              const angle = (i * 60) * Math.PI / 180;
              const radius = 50;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <React.Fragment key={i}>
                  {/* Connection line */}
                  <div
                    className="absolute opacity-40"
                    style={{
                      left: '12px',
                      top: '12px',
                      width: `${radius}px`,
                      height: '2px',
                      transformOrigin: '0 0',
                      transform: `rotate(${i * 60}deg)`,
                      background: `linear-gradient(to right, rgba(255, 116, 51, 0.6), rgba(0, 102, 204, 0.4))`,
                      animation: `lineGlow ${2.5 + i * 0.2}s ease-in-out infinite alternate`,
                      animationDelay: `${i * 0.4}s`
                    }}
                  />
                  {/* Data node */}
                  <div
                    className="absolute w-3 h-3 rounded-full"
                    style={{
                      left: `${12 + x}px`,
                      top: `${12 + y}px`,
                      backgroundColor: i % 2 === 0 ? '#0066cc' : '#00a6cc',
                      transform: 'translate(-50%, -50%)',
                      animation: `nodeGlow ${2 + i * 0.1}s ease-in-out infinite alternate`,
                      animationDelay: `${i * 0.3}s`,
                      boxShadow: `0 0 12px ${i % 2 === 0 ? 'rgba(0, 102, 204, 0.5)' : 'rgba(0, 166, 204, 0.5)'}`
                    }}
                  />
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Data transformation flow - more prominent */}
        <div className="absolute right-24 top-2/3">
          <div className="flex items-center space-x-8">
            
            {/* Input data points */}
            <div className="flex flex-col space-y-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={`input-${i}`}
                  className="w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: 'rgba(255, 116, 51, 0.8)',
                    boxShadow: '0 0 10px rgba(255, 116, 51, 0.4)',
                    animation: `dataInput ${1.8 + i * 0.3}s ease-in-out infinite alternate`,
                    animationDelay: `${i * 0.4}s`
                  }}
                />
              ))}
            </div>

            {/* Processing arrow - more visible */}
            <div className="flex items-center">
              <div 
                className="w-12 h-1 rounded"
                style={{
                  background: 'linear-gradient(to right, rgba(255, 116, 51, 0.8), rgba(0, 102, 204, 0.8))',
                  animation: 'flowArrow 2.5s ease-in-out infinite'
                }}
              />
              <div 
                className="w-0 h-0 ml-1"
                style={{
                  borderLeft: '6px solid rgba(0, 102, 204, 0.8)',
                  borderTop: '3px solid transparent',
                  borderBottom: '3px solid transparent',
                  animation: 'arrowGlow 2.5s ease-in-out infinite'
                }}
              />
            </div>

            {/* Output organized pattern */}
            <div className="grid grid-cols-2 gap-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={`output-${i}`}
                  className="w-2 h-2 rounded-sm"
                  style={{
                    backgroundColor: 'rgba(0, 166, 204, 0.9)',
                    boxShadow: '0 0 8px rgba(0, 166, 204, 0.4)',
                    animation: `dataOutput ${1.5 + i * 0.1}s ease-in-out infinite alternate`,
                    animationDelay: `${i * 0.2}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Floating data particles - more visible */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${2 + (i % 2)}px`,
              height: `${2 + (i % 2)}px`,
              right: `${30 + (i % 2) * 25}%`,
              top: `${35 + (i % 3) * 20}%`,
              backgroundColor: i % 2 === 0 ? 'rgba(255, 116, 51, 0.7)' : 'rgba(0, 102, 204, 0.7)',
              animation: `particleFloat ${3 + i * 0.5}s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.8}s`,
              boxShadow: `0 0 6px ${i % 2 === 0 ? 'rgba(255, 116, 51, 0.3)' : 'rgba(0, 102, 204, 0.3)'}`
            }}
          />
        ))}

      </div>
    </div>
  );
};

export default DataTransformationBackground;