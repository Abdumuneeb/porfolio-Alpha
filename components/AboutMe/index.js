import React from "react";
import styles from "../../styles/aboutme.module.css";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div>
      <section className="bg-navbar-bg">
        <div className="container">
          <div
            className={`${styles.aboutmeWrapper} flex justify-between bg-about-bg lg:flex-row sm:flex-col`}
          >
            <div
              className={` ${styles.nameWrapper}  lg:text-8xl text-link-hover font-bold lg:m-0 sm:-mt-96 sm:text-6xl sm:mx-auto`}
            >
              Arslan Khan
            </div>
            <div
              className={`${styles.contentWrapper} m-14 flex flex-col lg:ml-28 lg:mt-0 lg:mb-0 sm:mt-44 md:mt-48 md:mb-5 lg:justify-start lg:items-start sm:mx-auto sm:justify-center sm:items-center`}
            >
              <p className="text-about-heading text-2xl mb-6 sm:mt-24">
                About Me
              </p>
              <p
                className={`${styles.paragraphContent} lg:mb-10 text-about-paragragraph lg:text-justify sm:text-sm sm:max-w-paragragraph  sm:text-center md:text-base`}
              >
                I have a fondness for creating simple solutions for complex
                problems. I have the experience and vision to make provident
                technology decisions and plans as well as the ability to
                recognize and quantify technical debt.
              </p>
            </div>
            <div
              className={`${styles.imgWrapper} md:absolute -top-80 left-10 lg:right-12 md:left-auto md:-top-30 sm:-top-80 sm:mx-auto sm:left-24`}
            >
              <Image
                src="/profile.png"
                width="438"
                height="584"
                alt="profile_pic"
              ></Image>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
