'use client';

import React, { useState } from 'react';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

type ColorHandleProps = {
  containerRef: React.RefObject<HTMLDivElement>;
  normalizedHsl: number[];
}

export default function ColorHandle ({containerRef, normalizedHsl} : ColorHandleProps) {
  const [ hue, saturation, luminosity ] = normalizedHsl;
  
  //Calculate the initial start position for the handle based on saturation and luminosity.
  const initialX = (100 - luminosity)
  const initialY = (100 - saturation)

  // State to track dynamically changing saturation and luminosity during drag.
  const [dynamicSaturation, setDynamicSaturation] = useState(saturation);
  const [dynamicLuminosity, setDynamicLuminosity] = useState(luminosity);

  // Helper function to calculate percentage position of the handle within the container
  const calculatePercentagePosition = (position: number, min: number, max: number) => {
    const clampedPos = Math.max(min, Math.min(max, position)); // Ensure within bounds
    return ((clampedPos - min) / (max - min)) * 100; // Calculate percentage
  };

  const handleDrag = (event: any, info: any) => {
    if (!containerRef.current) return;

    // Get the bounding box of the container
    const boundingRect = containerRef.current.getBoundingClientRect();

    const containerWidth = boundingRect.right - boundingRect.left; // Width of the container
    const containerHeight = boundingRect.bottom - boundingRect.top; // Height of the container

    // Calculate the X and Y positions in percentage terms
    const xPercentage = calculatePercentagePosition(info.point.x, boundingRect.left, boundingRect.right);
    const yPercentage = calculatePercentagePosition(info.point.y, boundingRect.top, boundingRect.bottom);

    // Update the state with the new saturation and luminosity based on percentage
    setDynamicSaturation(100 - yPercentage);  // Saturation is relative to the Y-axis (inverted)
    setDynamicLuminosity(100 - xPercentage);  // Luminosity is relative to the X-axis (inverted)
  };

  return (
     <motion.div
        drag
        dragConstraints={containerRef}
        className='absolute w-4 h-4 bg-white rounded-full shadow-lg border-white border-2'
        style={{
          top: `${initialY}%`, // Starting position relative to the parent div
          left: `${initialX}%`, // Starting position relative to the parent div
          zIndex: 2,
          backgroundColor: `hsl(${hue}, ${dynamicSaturation}%, ${dynamicLuminosity}%)`
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
        onDrag={handleDrag}
      />
  )
};