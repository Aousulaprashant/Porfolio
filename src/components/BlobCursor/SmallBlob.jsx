import { useEffect, useRef } from "react";

const COLORS = [
  "#FF6B6B",
  "#FFD93D",
  "#6BCB77",
  "#4D96FF",
  "#A66DD4",
  "#FF9F1C",
];

const AnimatedBlobCursor = ({ count = 12, size = 18 }) => {
  const dotsRef = useRef([]);
  const positions = useRef([]);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const lastMoveTime = useRef(Date.now());

  useEffect(() => {
    positions.current = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
    }));

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      lastMoveTime.current = Date.now();
    };

    document.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      const now = Date.now();
      const idle = now - lastMoveTime.current > 300;

      positions.current.forEach((dot, i) => {
        if (idle) {
          // Floating mode (idle)
          dot.x += dot.vx;
          dot.y += dot.vy;

          // Bounce from edges
          if (dot.x < 0 || dot.x > window.innerWidth) dot.vx *= -1;
          if (dot.y < 0 || dot.y > window.innerHeight) dot.vy *= -1;
        } else {
          // Active mode (follow cursor with overshoot/stretch)
          const dx = mouse.current.x - dot.x;
          const dy = mouse.current.y - dot.y;
          dot.x += dx * (0.12 + i * 0.01); // stretch effect
          dot.y += dy * (0.12 + i * 0.01);
        }

        const el = dotsRef.current[i];
        if (el) {
          el.style.transform = `translate3d(${dot.x}px, ${dot.y}px, 0)`;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [count]);

  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (dotsRef.current[i] = el)}
          className="hidden md:flex md:fixed w-full mx-auto top-0 left-0 rounded-full pointer-events-none"
          style={{
            zIndex: 0, // always behind content
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: COLORS[i % COLORS.length],
            filter: "blur(1px)",
            opacity: 0.9,
            transition: "transform 0.1s linear",
          }}
        />
      ))}
    </>
  );
};

export default AnimatedBlobCursor;
