import { useRef, useState, useEffect, useCallback } from 'react';

export function useHorizontalScroll<T extends HTMLElement = HTMLDivElement>() {
  const containerRef = useRef<T | null>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftStart, setScrollLeftStart] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);

  // Translate mouse wheel (vertical scroll) into horizontal scrolling seamlessly
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      // If user scrolls vertically with mouse wheel, translate to horizontal scroll
      if (e.deltaY !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY * 1.2;
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      el.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent<T>) => {
    if (e.button !== 0) return; // Only primary click
    const el = containerRef.current;
    if (!el) return;

    setIsMouseDown(true);
    setHasDragged(false);
    setStartX(e.pageX - el.offsetLeft);
    setScrollLeftStart(el.scrollLeft);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsMouseDown(false);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsMouseDown(false);
    // Keep hasDragged flag active briefly so click handlers on cards can ignore accidental clicks after dragging
    setTimeout(() => {
      setHasDragged(false);
    }, 50);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<T>) => {
      if (!isMouseDown) return;
      const el = containerRef.current;
      if (!el) return;

      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 1.5; // Drag sensitivity multiplier

      if (Math.abs(walk) > 5) {
        setHasDragged(true);
        e.preventDefault();
      }

      el.scrollLeft = scrollLeftStart - walk;
    },
    [isMouseDown, startX, scrollLeftStart]
  );

  return {
    containerRef,
    isMouseDown,
    hasDragged,
    dragProps: {
      onMouseDown: handleMouseDown,
      onMouseLeave: handleMouseLeave,
      onMouseUp: handleMouseUp,
      onMouseMove: handleMouseMove,
    },
  };
}
