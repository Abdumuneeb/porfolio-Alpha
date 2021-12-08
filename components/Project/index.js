import React from "react";
import styles from "../../styles/projects.module.css";
import Image from "next/image";

const Project = ({
  width,
  height,
  backgroundStyling,
  heading,
  paragraph,
  imgSrc,
}) => {
  return (
    <div>
      <div className="flex flex-col ">
        <div
          style={{
            background: backgroundStyling,
          }}
          className={` text-center mt-12 w-9/12 h-80 flex justify-center mx-auto items-center align-middle`}
        >
          <Image
            width={width}
            height={height}
            src={imgSrc}
            alt="project-logo"
          ></Image>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-6xl text-headingThree mt-10 font-bold sm:text-3xl">
            {heading}
          </h1>
          <p
            className={`${styles.paragraph} text-headingThree text-center leading-6 mt-4`}
          >
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
