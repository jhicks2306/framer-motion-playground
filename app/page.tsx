import Image from "next/image";
import * as motion from "framer-motion/client";
import HueSlider from "../components/HueSlider";
import ColorBar from "../components/ColorBar";
import SaturationBrightnessPicker from "../components/SaturationBrightnessPicker"
import ShadesAndTints from "@/components/ShadesAndTints";


export default function Home() {
  const handleColorChange = (color: string) => {
    console.log("Selected color:", color);
    // You can perform any action here with the color
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ShadesAndTints/>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}