'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import style from './style.module.scss';

const AnimatedText = ({text}) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;
    
    const letters = text.split(' ').map((char, i) => (
      `<span style="opacity: 0; font-size: 1em; line-height: 1em; margin-right: 0.2em; text-wrap:nowrap;">${char}</span>`
    )).join('');

    textRef.current.innerHTML = letters;
    const spans = textRef.current.querySelectorAll('span');
    gsap.to(textRef.current, { visibility: 'visible', duration: 0 });



    gsap.to(spans, {
      opacity: 1,
      fontSize: "1em",
      y: 0,
      stagger: 0.05,
      duration: 2,
      ease: 'power2.out'
    });
  }, []);

  return (
    <h1 ref={textRef} className={style.title} style={{ visibility: 'hidden' }}>
      {text}
    </h1>
  );
};

export default AnimatedText;
