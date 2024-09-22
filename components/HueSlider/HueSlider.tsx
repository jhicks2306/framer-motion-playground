"use client";

import React from 'react';
import { useState } from 'react';
import './HueSlider.css';

type HueSliderProps = {
  hue: number;
  setHue: (hue: number) => void;
}

export default function HueSlider ({ hue, setHue }: HueSliderProps) {

    // Handle slider value change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHue(Number(e.target.value));
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
