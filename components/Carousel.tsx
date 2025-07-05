'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const images = [
  '/carousel-1.png',
  '/carousel-2.png',
  '/carousel-3.png',
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-100 overflow-hidden rounded-md mb-6">
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={src}
            alt={`Slide ${i + 1}`}
            fill
            className="object-cover object-top"
            sizes="100vw"
            priority={i === 0}
          />
        </div>
      ))}
    </div>
  );
}