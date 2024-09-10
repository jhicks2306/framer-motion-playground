"use client";

import React from 'react';
import { useState } from 'react';
import './HueSlider.css';

export default function HueSlider () {
  const [hue, setHue] = useState(50); // Default slider value


    // Handle slider value change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(hue)
    };

  return (
    <input
      type="range"
      min="0"
      max="360"
      className="hue-slider"
      onChange={handleChange}
    />
  );
};
