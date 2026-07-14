import { useEffect, useRef } from 'react';

export function useMouse() {
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updateMouse = (clientX, clientY) => {
      mouseRef.current.x = (clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -((clientY / window.innerHeight) * 2 - 1);
    };

    const handlePointerMove = (event) => {
      updateMouse(event.clientX, event.clientY);
    };

    const handleTouchMove = (event) => {
      const touch = event.touches[0];

      if (touch) {
        updateMouse(touch.clientX, touch.clientY);
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return mouseRef;
}
