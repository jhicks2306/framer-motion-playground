'use client';

import React, { act } from 'react';
import { useState } from 'react';
import { ColorBlockProps } from "./ColorBlock"
import ColorBlock from "./ColorBlock"

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const ColorBar = () => {
  const [colorBlocks, setColorBlocks] = useState<string[]>([
    '#e5e9e6',
    '#3b4b50',
    '#502e2f',
    '#243033',
    '#afbcc0',
    '#1d221d',
  ]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleIncrement = () => {
    const newColor = getRandomColor();
    setColorBlocks([...colorBlocks, newColor]);
  };

  const handleDecrement = () => {
    if (colorBlocks.length > 1) {
      setColorBlocks(colorBlocks.slice(0, -1));
    }
  };

  const handleBlockClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  return (
    <div className="flex items-center space-x-4 h-[32px]">
      {/* Slider */}
      <div className="relative w-full h-full flex rounded-lg overflow-hidden">
        {colorBlocks.map((color, index) => (
          <ColorBlock
            key={index}
            color={color}
            isActive= {index === activeIndex}
            onClick={() => handleBlockClick(index)}
          ></ColorBlock>
        ))}
      </div>

      {/* Increment/Decrement Buttons */}
      <div className="flex flex-row h-[32px]">
        <button
          onClick={handleDecrement}
          className="bg-gray-100 px-3 border-y border-l border-gray-300 rounded-l-md"
        >
          -
        </button>
        <button
          onClick={handleIncrement}
          className="bg-gray-100 px-3 border border-gray-300 rounded-r-md"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ColorBar;
