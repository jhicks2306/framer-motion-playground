'use client';

import React from 'react';
import { useRef } from 'react';
import { motion } from 'framer-motion';

type ColorHandleProps = {
  containerRef: React.RefObject<HTMLDivElement>;
  hue: number
}

export default function ColorHandle ({containerRef, hue} : ColorHandleProps) {

  const calculatePercentagePosition = (x: number, y: number) => {

    // TODO: Update this formula to return the percentage postion with reference to the bottom left corner.
    const container = containerRef.current;
    if (container) {
      const { width, height } = container.getBoundingClientRect();
      const percentX = (x / width) * 100;
      const percentY = (y / height) * 100;
      return { percentX, percentY };
    }
    return { percentX: 0, percentY: 0 };
  };

  return (
     <motion.div
        drag
        dragConstraints={containerRef}
        className='absolute w-4 h-4 bg-white rounded-full shadow-lg pointer-'
        style={{
          top: '50%', // Starting position relative to the parent div
          left: '90%', // Starting position relative to the parent div
          zIndex: 2,
        }}
        whileDrag={{
          scale: 1.2,
          cursor: 'grabbing',
        }}
        dragMomentum={false}
        dragElastic={0}
        whileHover={{
          scale: 1.2,
          cursor: 'grab'
        }}
        onDrag={(event, info) => {
          const { percentX, percentY } = calculatePercentagePosition(info.offset.x, info.offset.y);
          console.log(`Hue: ${hue} Percentage X: ${percentX.toFixed(2)}%, Percentage Y: ${percentY.toFixed(2)}%`);
        }}
      />
  )
};