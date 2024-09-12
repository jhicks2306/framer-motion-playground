'use client';

import React from 'react';
import { useState } from 'react';

// Utility function to convert hex color to RGB
const hexToRgb = (hex: string) => {
  // Remove the '#' if it's there
  hex = hex.replace('#', '');

  // Parse the r, g, b values from the hex string
  let bigint = parseInt(hex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  return { r, g, b };
};

// Utility function to calculate the luminance of a color
const calculateLuminance = ({ r, g, b }: { r: number; g: number; b: number }) => {
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};


export type ColorBlockProps = {
  color: string;
  isActive: boolean;
  onClick: () => void;
}

export default function ColorBlock ({
  color,
  isActive,
  onClick
} : 
  ColorBlockProps ) {

  // Convert the hex color to RGB and calculate its luminance
  const rgbColor = hexToRgb(color);
  const luminance = calculateLuminance(rgbColor);

  // Determine dot color based on the luminance
  const dotColor = luminance < 128 ? 'white' : 'black';

  return (
    <div
      className="flex-1 h-full relative cursor-pointer"
      style={{ backgroundColor: color }}
      onClick={onClick}
      >
      {isActive && (
        <div
          className="absolute top-1/2 left-1/2 w-2 h-2 bg- rounded-full transform -translate-x-1/2 -translate-y-1/2"
          style={{ backgroundColor: dotColor }}
        >
        </div>
      )}
    </div>
  );
};