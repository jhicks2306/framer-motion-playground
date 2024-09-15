'use client';

import React from 'react';

interface SaturationBrightnessPickerProps {
  color: string;
}

const SaturationBrightnessPicker: React.FC<SaturationBrightnessPickerProps> = ({ color }) => {
  const [r, g, b] = color.match(/\d+/g)?.map(Number) ?? [0, 0, 0];
  console.log(r,g,b)

  const rgbToHsl = (r: number, g: number, b: number): [number, number, number] => {
    r /= 255;
    g /= 255;
    b /= 255;
    console.log(r,g,b)

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }

    return [h * 360, s * 100, l * 100];
  };

  const [hue] = rgbToHsl(r, g, b);
  const normalizedHue = Math.min(360, Math.max(0, hue));

  // Define the linear gradient for hue, saturation, and lightness
  const gradientBackground = `linear-gradient(
    to left,
    hsl(${normalizedHue}, 0%, 0%),
    hsl(${normalizedHue}, 100%, 100%)
  )`;

  // Define the radial gradient for the specific hue
  const radialGradientBackground = `radial-gradient(
    circle,
    hsl(${normalizedHue}, 100%, 50%) 0%,
    hsl(${normalizedHue}, 100%, 50%, 0) 100%
  )`;

  return (
    <div className='grow overflow-hidden'
      style={{
        background: gradientBackground,
        borderRadius: '8px',
      }}>
      <div className='relative h-[200%] w-[100%]'
      style={{
        background: radialGradientBackground,
        borderRadius: '8px',
        zIndex: 1,
        mixBlendMode: 'overlay',
        bottom: '100%'
      }}>
    </div>
    </div>
  );
};


export default SaturationBrightnessPicker;
