import React from "react";
import Image from "next/image";

const Partnership = () => {
  return (
    <div>
      {/*  Partnership section start */}
      <div className="flex flex-col">
        <h1 className="text-link-hover text-7xl border-2 border-border font-bold text-center py-14">
          {"<partnerships>"}
        </h1>
      </div>
      <div className="flex flex-auto">
        <div className="border-2  border-border p-20  w-full">
          <Image
            src="/brand1-icon.png"
            alt="brand-icons"
            width="120"
            height="70"
          ></Image>
        </div>

        <div className="border-2 border-border p-20 w-full">
          <Image
            src="/brand2-icon.png"
            alt="brand-icons"
            width="120"
            height="70"
          />
        </div>
        <div className="border-2 border-border p-20 w-full">
          <Image
            src="/brand3-icon.png"
            alt="brand-icons"
            width="120"
            height="70"
          />
        </div>
        <div className="border-2 border-border p-20 w-full">
          <Image
            src="/brand4-icon.png"
            alt="brand-icons"
            width="120"
            height="70"
          />
        </div>

        <div className="border-2 border-border p-20 w-full">
          <Image
            src="/brand5-icon.png"
            alt="brand-icons"
            width="120"
            height="70"
          />{" "}
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-white text-7xl border-2 border-border font-bold text-center py-14">
          {"Lexus North America"}
        </h1>
      </div>

      {/* Partnership section End */}
    </div>
  );
};

export default Partnership;
