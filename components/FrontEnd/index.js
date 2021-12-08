import React from "react";
import Image from "next/image";
import styles from "../../styles/frontEnd.module.css";

const TilesDisplay = ({
  reverse,
  heading,
  paragraph,
  imgsrc16,
  imgsrc17,
  imgsrc18,
  imgsrc19,
  imgsrc20,
  imgsrc21,
}) => {
  return (
    <div>
      <section className="bg-navbar-bg">
        <div className="container">
          {/* warpper flex */}
          <div className={`${reverse || ""}  flex justify-between`}>
            <div className={` ${styles.borderWrapper} flex flex-col w-1/2`}>
              <div className={` flex flex-nowrap justify-between mt-8 mb-16`}>
                <Image
                  className={styles.imgStyling}
                  src={`${imgsrc16 || "/node-logo.png"}`}
                  width="64px"
                  height="64px"
                  alt="logo-img"
                ></Image>
                <Image
                  src={`${imgsrc17 || "/pyton-logo.png"}`}
                  width="64px"
                  height="64"
                  alt="logo-img"
                ></Image>
                <Image
                  src={`${imgsrc18 || "/php-logo.png"}`}
                  width="64px"
                  height="64"
                  alt="logo-img"
                ></Image>
                <Image
                  src={`${imgsrc19 || "/logo-tech.png"}`}
                  width="64px"
                  height="64"
                  alt="logo-img"
                ></Image>
                <Image
                  src={`${imgsrc20 || "/logo-tec1.png"}`}
                  width="64px"
                  height="64"
                  alt="logo-img"
                ></Image>
                <Image
                  src={`${imgsrc21 || "/logo-tec2.png"}`}
                  width="64px"
                  height="64"
                  alt="logo-img"
                ></Image>
              </div>

              <div className="flex flex-nowrap justify-between mb-16">
                <Image
                  src="/logo-tec3.png"
                  width="64px"
                  height="64"
                  alt="logo-img"
                ></Image>
                <Image
                  src="/logo-tec4.png"
                  width="64px"
                  height="64"
                  alt="logo-img"
                ></Image>
                <Image
                  src="/logo-tec5.png"
                  width="64px"
                  height="64"
                  alt="logo-img"
                ></Image>
                <Image
                  src="/logo-tec6.png"
                  width="64px"
                  height="64"
                  alt="logo-img"
                ></Image>
                <Image
                  src="/logo-tec7.png"
                  width="64px"
                  height="64"
                  alt="logo-img"
                ></Image>
                <Image
                  src="/logo-tec8.png"
                  width="64px"
                  height="64"
                  alt="logo-img"
                ></Image>
              </div>
              <div className="flex flex-nowrap justify-between mb-16">
                <Image
                  src="/logo-tec9.png"
                  width="64px"
                  height="64"
                  alt="logo-img"
                ></Image>
                <Image
                  src="/logo-tec10.png"
                  width="64px"
                  height="64"
                  alt="logo-img"
                ></Image>
                <Image
                  src="/logo-tec11.png"
                  width="64px"
                  height="64"
                  alt="logo-img"
                ></Image>
                <Image
                  src="/logo-tec12.png"
                  width="64px"
                  height="64"
                  alt="logo-img"
                ></Image>
                <Image
                  src="/logo-tec13.png"
                  width="64px"
                  height="64"
                  alt="logo-img"
                ></Image>
                <Image
                  src="/logo-tec14.png"
                  width="64px"
                  height="64"
                  alt="logo-img"
                ></Image>
              </div>
              <div className="flex gap-20">
                <Image
                  src="/logo-tec15.png"
                  width="64px"
                  height="64"
                  alt="logo-img"
                ></Image>
              </div>
            </div>
            <div
              className={`${styles.borderWrapper}  flex  flex-col justify-center items-center  w-1/2 `}
            >
              <h1 className="text-7xl  text-link-hover font-bold">
                {` ${heading || "<back-end>"}`}
              </h1>
              <p
                className={`${styles.paragraphContent} text-white text-center`}
              >
                {`${
                  paragraph ||
                  "With skills in over 4 different fields of design, I am the perfect person to hire when it comes to a full fledged project. Whatever your needs are, I can pretty much take on any challenge."
                }`}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TilesDisplay;
