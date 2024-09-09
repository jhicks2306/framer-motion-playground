import Image from "next/image";
import * as motion from "framer-motion/client"


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="h-[530px] w-[650px] bg-card rounded-lg flex flex-col">
          <div className="h-[50px] w-full rounded-t-lg bg-[#FCFCFC] border-b-2 border-[#EEEEEE] flex flex-row items-center p-4 justify-between">
            <p className="text-neutral-900 text-xs font-semibold">Shades and Tints</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#999999" viewBox="0 0 256 256"><path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"></path></svg>
          </div> 
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}