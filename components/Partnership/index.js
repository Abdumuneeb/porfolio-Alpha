import React from "react";
import Image from "next/image";

const Partnership = () => {
  return (
    <div>
      {/*  Partnership section start */}
      <div className="flex flex-col">
        <h1 className="text-link-hover lg:text-7xl border-2 border-border font-bold text-center py-14 sm:text-4xl">
          {"<partnerships>"}
        </h1>
      </div>
      <div className="flex flex-col flex-auto flex-wrap md:flex-wrap sm:flex-row">
        <div className="border-2 text-center  border-border p-20  lg:w-1/5 md:1/5 sm:w-1/3">
          <Image
            src="/brand1-icon.png"
            alt="brand-icons"
            width="120"
            height="70"
          ></Image>
        </div>

        <div className="border-2  text-center border-border p-20 lg:w-1/5 sm:w-1/3">
          <Image
            src="/brand2-icon.png"
            alt="brand-icons"
            width="120"
            height="70"
          />
        </div>
        <div className="border-2 text-center border-border p-20 lg:w-1/5 sm:w-1/3">
          <Image
            src="/brand3-icon.png"
            alt="brand-icons"
            width="120"
            height="70"
          />
        </div>
        <div className="border-2 text-center border-border p-20 lg:w-1/5 sm:w-1/3">
          <Image
            src="/brand4-icon.png"
            alt="brand-icons"
            width="120"
            height="70"
          />
        </div>

        <div className="border-2 text-center border-border p-20 lg:w-1/5 sm:w-1/3 sm:flex-auto">
          <Image
            src="/brand5-icon.png"
            alt="brand-icons"
            width="120"
            height="70"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-white lg:text-7xl border-2 border-border font-bold text-center py-14 sm:text-3xl">
          {"Lexus North America"}
        </h1>
      </div>

      {/* Partnership section End */}
    </div>
  );
};

export default Partnership;
