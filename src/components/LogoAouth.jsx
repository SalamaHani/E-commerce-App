import React from "react";

function LogoAouth() {
  return (
    <>
      <div className="relative items-center hidden bg-black w-full h-full bg-brand-950 dark:bg-white/5 lg:grid lg:w-1/2">
        <div className="flex items-center justify-center z-1">
          <div className="absolute right-0 top-0 -z-1 w-full max-w-[250px] xl:max-w-[450px]">
            <img src="/public/images/grid-01.svg" alt="grid" />
          </div>
          <div className="absolute bottom-0 left-0 -z-1 w-full max-w-[250px] rotate-180 xl:max-w-[450px]">
            <img src="/public/images/grid-01.svg" alt="grid" />
          </div>

          <div className="flex flex-col items-center max-w-xs">
            <a href="index.html" className="block mb-4">
              <img src="/public/images/logo-darkmode.png" alt="" />
            </a>
            <p className="text-center text-gray-400 dark:text-white/60">
              Brunch bitters synth, VHS crucifix heirloom meggings bicycle
              rights.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogoAouth;
