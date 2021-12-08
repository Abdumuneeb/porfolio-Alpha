import React from "react";
import styles from "../../styles/aboutme.module.css";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div>
      <section className="bg-navbar-bg">
        <div className="container">
          <div
            className={`${styles.aboutmeWrapper} flex   justify-between bg-about-bg`}
          >
            <div
              className={` ${styles.nameWrapper} text-8xl text-link-hover font-bold`}
            >
              Arslan Khan
            </div>
            <div className={`${styles.contentWrapper} flex flex-col ml-28 `}>
              <p className="text-about-heading text-2xl mb-6 mt-24">About Me</p>
              <p
                className={`${styles.paragraphContent} mb-10 text-about-paragragraph`}
              >
                I have a fondness for creating simple solutions for complex
                problems. I have the experience and vision to make provident
                technology decisions and plans as well as the ability to
                recognize and quantify technical debt.
              </p>
            </div>
            <div className={`${styles.imgWrapper}`}>
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
