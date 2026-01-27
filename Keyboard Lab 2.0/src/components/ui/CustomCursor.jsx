// import React, { useEffect, useState } from "react";

// const CustomCursor = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return <div
//       className="fixed top-0 left-0 size-3.5 bg-white border-2 border-gray-500 rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out"
//       style={{
//         transform: `translate(${mousePosition.x - 7}px, ${mousePosition.y - 7}px)`,
//       }}
//     />;
// };

// export default CustomCursor;
import React, { useEffect, useRef } from "react";

/**
 * CustomCursor
 * - Add `data-cursor="hover"` to any element you want to trigger the enlarged/colored cursor
 *   or rely on built-in selectors (button, a, input[type="button"], .btn).
 *
 * Usage example:
 * <button data-cursor="hover">Click me</button>
 */
const CustomCursor = () => {
  const cursorRef = useRef(null);
  const rafRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });
  const hoveringRef = useRef(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Hide native cursor while using custom one (optional)
    document.documentElement.classList.add("cursor-none");

    // Mouse move -> store position and schedule rAF update
    const handleMouseMove = (e) => {
      posRef.current.x = e.clientX;
      posRef.current.y = e.clientY;
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(() => {
          rafRef.current = null;
          // use left/top and keep CSS translate(-50%,-50%) for centering
          cursor.style.left = `${posRef.current.x}px`;
          cursor.style.top = `${posRef.current.y}px`;
        });
      }
    };

    // Decide whether an element should trigger hover state:
    const isInteractive = (el) => {
      if (!el) return false;
      // built-in selector list + explicit data attribute
      return !!el.closest(
        'button, a, input[type="button"], input[type="submit"], [role="button"], [data-cursor="hover"], .btn'
      );
    };

    // When pointer moves over elements we can also detect via mouseover/mouseout:
    const handleMouseOver = (e) => {
      const over = isInteractive(e.target);
      if (over && !hoveringRef.current) {
        hoveringRef.current = true;
        cursor.classList.add("custom-cursor--hover");
      } else if (!over && hoveringRef.current) {
        // might be entering non-interactive element, keep checking on mouseout
      }
    };

    const handleMouseOut = (e) => {
      // check new target under pointer
      const next = document.elementFromPoint(posRef.current.x, posRef.current.y);
      if (!isInteractive(next) && hoveringRef.current) {
        hoveringRef.current = false;
        cursor.classList.remove("custom-cursor--hover");
      }
    };

    // Also support keyboard focus (accessibility)
    const handleFocusIn = (e) => {
      if (isInteractive(e.target)) {
        hoveringRef.current = true;
        cursor.classList.add("custom-cursor--hover");
      }
    };
    const handleFocusOut = (e) => {
      if (hoveringRef.current) {
        hoveringRef.current = false;
        cursor.classList.remove("custom-cursor--hover");
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("focusin", handleFocusIn);
    document.addEventListener("focusout", handleFocusOut);

    return () => {
      document.documentElement.classList.remove("cursor-none");
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("focusin", handleFocusIn);
      document.removeEventListener("focusout", handleFocusOut);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      // pointer-events-none is critical so it won't intercept clicks.
      // position via left/top; CSS handles centering (-50% translations).
      className={
        // tailwind classes — adapt if some classes are missing in your config
        "fixed left-0 top-0 w-3.5 h-3.5 bg-white border-2 border-gray-500 rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-out custom-cursor"
      }
      // inline style left/top will be set in rAF; initial off-screen to avoid jump
      style={{ left: "-100px", top: "-100px" }}
      aria-hidden="true"
    />
  );
};

export default CustomCursor;
