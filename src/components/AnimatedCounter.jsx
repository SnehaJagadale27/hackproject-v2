import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export default function AnimatedCounter({ value, duration = 2000 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!inView) return;
    const numericPart = parseInt(value, 10);
    const suffix = value.toString().replace(/^\d+/, '');
    if (isNaN(numericPart)) {
      setDisplay(value);
      return;
    }
    let start = 0;
    const step = Math.ceil(numericPart / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= numericPart) {
        start = numericPart;
        clearInterval(timer);
      }
      setDisplay(start + suffix);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value, duration]);

  return <span ref={ref}>{display}</span>;
}
