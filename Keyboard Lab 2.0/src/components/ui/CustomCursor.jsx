import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div
      className="fixed top-0 left-0 size-3.5 bg-white border-2 border-gray-500 rounded-full pointer-events-none z-50"
      style={{
        transform: `translate(${mousePosition.x - 7}px, ${mousePosition.y - 7}px)`,
      }}
    />;
};

export default CustomCursor;
