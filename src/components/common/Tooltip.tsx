import React, { useState, useEffect, ReactNode } from 'react';

interface TooltipProps {
  message: string;
  children: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ message, children }) => {
  const [show, setShow] = useState(false);       // Controls fade-in/out
  const [isVisible, setIsVisible] = useState(false); // Controls presence in DOM

  useEffect(() => {
    if (show) {
      setIsVisible(true);
    } else {
      // Wait for fade-out animation before unmounting
      const timer = setTimeout(() => setIsVisible(false), 200); // 200ms = animation duration
      return () => clearTimeout(timer);
    }
  }, [show]);

  return (
    <div
      className="relative flex justify-center"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {isVisible && (
        <div
          className={`absolute bottom-full left-[45%] mb-1 px-3 py-2 w-max max-w-7xl bg-gray-800 text-white text-xs rounded shadow-lg z-10 ${
            show ? 'animate-fade-in-2' : 'animate-fade-out'
          }`}
        >
          {/* <div className="absolute transform -translate-x-1/2 top-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-800" /> */}
          {message}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
