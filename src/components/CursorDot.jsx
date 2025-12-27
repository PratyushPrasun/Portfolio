import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CursorDot() {
  const dotRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const dot = dotRef.current;

    // Track mouse position
    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", onMouseMove);

    // GSAP ticker for lazy movement
    gsap.ticker.add(() => {
      pos.current.y += (mouse.current.y - pos.current.y) * 0.08;
      pos.current.x += (mouse.current.x - pos.current.x) * 0.08;

      gsap.set(dot, {
        x: pos.current.x - 6,
        y: pos.current.y - 6,
      });
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      gsap.ticker.remove(() => {});
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 w-6 h-6 rounded-full bg-red-500 accent-bg pointer-events-none z-[9999] mix-blend-difference"
    />
  );
}
