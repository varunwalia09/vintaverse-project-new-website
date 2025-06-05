'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import './Card.css'; 

gsap.registerPlugin(ScrollTrigger);

export default function Card({ frontText, description, skills }) {
  const containerRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const cardInner = innerRef.current;
    const cardContainer = containerRef.current;

    // Reset rotation on mount
    gsap.set(cardInner, { rotateY: 0 });

    const trigger = ScrollTrigger.create({
      trigger: cardContainer,
      start: 'top 50%',
      end: 'top 35%',
      scrub: true,
      onUpdate: (self) => {
        // Map scroll progress 0->1 to rotation 0->180 degrees
        const rotation = gsap.utils.mapRange(0, 1, 0, 180, self.progress);
        gsap.to(cardInner, {
          rotateY: rotation,
          duration: 0.3,
          ease: 'power1.out',
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <div className="card-container" ref={containerRef}>
      <div className="card-inner" ref={innerRef}>
        <div className="card-front">
          <p className="card-title">{frontText}</p>
          <p className="card-description">{description}</p>
          {skills?.length > 0 && (
            <ul className="card-skills">
              {skills.map((skill, index) => (
                <li key={index}>• {skill}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="card-back">
          <Image
            src="/assets/vinta2.png"
            alt="Back Image"
            width={300}
            height={200}
            priority
          />
        </div>
      </div>
    </div>
  );
}
