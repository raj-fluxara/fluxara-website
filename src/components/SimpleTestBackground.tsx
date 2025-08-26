import React from 'react';

interface SimpleTestBackgroundProps {
  className?: string;
}

const SimpleTestBackground: React.FC<SimpleTestBackgroundProps> = ({ 
  className = '' 
}) => {
  return (
    <div 
      className={`absolute inset-0 ${className}`}
      style={{ 
        zIndex: 10, // High z-index to ensure visibility
        opacity: 1,
        pointerEvents: 'none',
        backgroundColor: 'rgba(255, 0, 0, 0.3)' // Red background for testing
      }}
    >
      <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 text-sm font-bold rounded z-50">
        SIMPLE TEST - SHOULD BE VISIBLE
      </div>
      
      <div className="absolute inset-0 overflow-hidden">
        {/* Simple visible elements */}
        <div
          className="absolute w-6 h-6 bg-orange-500 rounded-full"
          style={{
            left: '20%',
            top: '30%',
            animation: 'pulse 2s infinite'
          }}
        />
        <div
          className="absolute w-4 h-4 bg-blue-500 rounded-full"
          style={{
            left: '60%',
            top: '50%',
            animation: 'pulse 2s infinite'
          }}
        />
        <div
          className="absolute w-5 h-5 bg-teal-500 rounded-full"
          style={{
            left: '40%',
            top: '70%',
            animation: 'pulse 2s infinite'
          }}
        />
      </div>
    </div>
  );
};

export default SimpleTestBackground;