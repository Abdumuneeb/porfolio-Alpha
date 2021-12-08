import React from "react";
import Image from "next/image";

const IconShowcase = ({ imgSrc }) => {
  return (
    <div>
      <div className="flex">
        <Image src={imgSrc} width="64px" height="64px" alt=""></Image>
      </div>
    </div>
  );
};

export default IconShowcase;
