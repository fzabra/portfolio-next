"use client"
import { useEffect } from 'react';

type ScrollHandler = (movementY: number) => void;

const useMouseScroll = (scrollHandler: ScrollHandler) => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      scrollHandler(event.movementY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [scrollHandler]);
};

export default useMouseScroll;
