'use client';

import React, { useEffect } from 'react';
import { useState } from 'react';
import * as motion from "framer-motion/client";
import HueSlider from "../HueSlider";
import ColorBar from "../ColorBar";
import SaturationBrightnessPicker from "../SaturationBrightnessPicker"

export default function ShadesAndTints () {
  const [hue, setHue] = useState(50); // Hue state in the parent
  const [colorBlocks, setColorBlocks] = useState<string[]>([
    '#e5e9e6',
    '#3b4b50',
    '#502e2f',
    '#243033',
    '#afbcc0',
    '#1d221d',
  ]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    console.log("Hue Updated:", hue)
  }, [hue])

  return (
    <div className="h-[530px] w-[650px] bg-card rounded-lg flex flex-col">
      <div className="h-[50px] w-full rounded-t-lg bg-[#FCFCFC] border-b-2 border-[#EEEEEE] flex flex-row items-center p-4 justify-between">
        <p className="text-neutral-900 text-xs font-semibold">Shades and Tints</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#999999" viewBox="0 0 256 256"><path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"></path></svg>
      </div>
      <div className="flex grow flex-col p-4 gap-2.5 bg-white"> 
        <input type="text" className="bg-secondary text-secondary-foreground placeholder-secondary-placeholder text-xs h-[30px] px-2.5 rounded-md" placeholder="Name of color set..." />
        <SaturationBrightnessPicker color="rgb(180, 255, 255)"/>
        <ColorBar
          colorBlocks={colorBlocks}
          setColorBlocks={setColorBlocks}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <HueSlider hue={hue} setHue={setHue}/>
        <motion.button className="bg-secondary text-secondary-foreground h-[30px] text-xs rounded-md">Auto-calculate</motion.button>
        <motion.button className="bg-primary text-primary-foreground h-[30px] text-xs rounded-md">Add colors to project assets</motion.button>
      </div>
    </div>
  )
}