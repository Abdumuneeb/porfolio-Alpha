import React from "react";
import AboutMe from "../components/AboutMe";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import FrontEnd from "../components/FrontEnd";
import Project from "../components/Project";
import styles from "../styles/projects.module.css";
import Partnership from "../components/Partnership";
import Content from "../components/Content";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <FrontEnd />
      <FrontEnd
        reverse="flex-row-reverse"
        heading="<front-end> "
        paragraph="With skills in over 4 different fields of design, I am the perfect person to hire when it comes to a full fledged project. Whatever your needs are, I can pretty much take on any challenge."
        imgsrc16="/logo-tec16.png"
        imgsrc17="/logo-tec17.png"
        imgsrc18="/logo-tec18.png"
        imgsrc19="/logo-tec19.png"
        imgsrc20="/logo-tec20.png"
        imgsrc21="/logo-tec21.png"
      />
      {/* Project section start */}
      <section className={styles.projectSection}>
        <div className="container">
          <div className={` flex flex-wrap lg:flex-row sm:flex-col`}>
            <div
              className={`${styles.borderStyle} lg:w-1/2 flex flex-col justify-center items-center sm:w-full`}
            >
              <h1 className="lg:text-7xl font-bold text-center text-link-hover sm:text-3xl">
                {"<projects spotlight>"}
              </h1>
              <p
                className={`${styles.paragraph} text-white text-center  mt-10`}
              >
                Here are the some of the heavy-hitters that I’ve worked for
                during the span of my 16 years Experience as a Systems Architect
                and Full-Stack Developer
              </p>
            </div>

            <div className={`${styles.borderStyle} lg:w-1/2 sm:w-full`}>
              <Project
                width="230"
                height="40"
                backgroundStyling="linear-gradient(180deg, rgba(17, 24, 39, 0) 0%, #111827 100%), #0C4A6E"
                imgSrc="/project-logo1.png"
                heading="SCTE ISBE "
                paragraph="I led and was the principal developer of the team tasked with the transformation of a 15 years old legacy system into a modern event-driven distributed system, deployed on serverless infrastructure."
              />
            </div>
          </div>

          <div className={`flex flex-wrap`}>
            <div className={`${styles.borderStyle} lg:w-1/2 sm:w-full`}>
              <Project
                width="230"
                height="40"
                backgroundStyling="linear-gradient(180deg, rgba(17, 24, 39, 0) 0%, #111827 100%), #B91C1C"
                imgSrc="/project-logo2.png"
                heading="Litecure LLC"
                paragraph="I designed and architected a highly interactive and robust learning platform with e-commerce and content management capabilities. "
              />
            </div>
            <div className={`${styles.borderStyle} lg:w-1/2 sm:w-full`}>
              <Project
                width="230"
                height="40"
                backgroundStyling="linear-gradient(180deg, rgba(31, 41, 55, 0) 0%, #1F2937 100%), #22C55E"
                imgSrc="/project-logo3.png"
                heading="Furbaby Tracker"
                paragraph="React Native - NodeJS - ReactJS - MongoDB"
              />
            </div>
          </div>

          <div className={`flex flex-wrap`}>
            <div className={`${styles.borderStyle} lg:w-1/2 sm:w-full`}>
              <Project
                width="230"
                height="40"
                backgroundStyling="linear-gradient(180deg, rgba(17, 24, 39, 0) 0%, #111827 100%), #0EA5E9"
                imgSrc="/project-logo4.png"
                heading="Litecure LLC"
                paragraph="I designed and architected a highly interactive and robust learning platform with e-commerce and content management capabilities. "
              />
            </div>
            <div
              className={`${styles.borderStyle} lg:w-1/2 flex justify-center items-center sm:w-full`}
            >
              <a className="text-center" href="#">
                <h1 className="lg:text-7xl font-bold text-center text-link-hover sm:text-2xl">
                  {"View All -->"}
                </h1>
              </a>
            </div>
          </div>
          {/* partnership section compoennt calling */}
          <Partnership />
          <div className="flex lg:flex-row sm:flex-col">
            {/* Content section start */}
            <div className="flex lg:w-1/2 border-2 border-border p-20 sm:w-full">
              <Content
                heading="This is what people say about me"
                paragraph="Here are a few lines from people who I have worked with over the past 16+ years in my development career."
              />
            </div>
            <div className="flex flex-col justify-between items-center text-2xl leading-10 mx-w-xsm  lg:w-1/2 border-2 border-border p-20 sm:w-full">
              <p className="text-white text-center">
                Kudos to a job well done.Arslan is a pleasure to work with and
                only good things can be said on our experience with dealing with
                Arslan.He went over and above our requirements and communication
                was top notch.Highly recommended to all. We will be using his
                services/expertise again very soon
              </p>
              <p className="text-white text-center">
                Micheal Scott - Regional Manager
              </p>
              <a href="#">
                <p className="text-link-hover font-bold text-center">
                  Dundler Mifflin
                </p>
              </a>
            </div>
            {/* Content section end */}
          </div>
          {/* business section start */}
          <div className="flex lg:flex-row sm:flex-col">
            <div className="flex flex-col lg:w-1/2 border-2 border-border lg:order-1 sm:order-2 sm:w-full">
              <form className="p-10">
                <lable className="text-gray-50 text-2xl"> Name</lable>
                <input className="bg-gray-800 w-full h-14 mt-3 mb-10 text-white" />
                <lable className="text-gray-50 text-2xl"> Email</lable>
                <input className="bg-gray-800 w-full h-14 mt-3 mb-10 text-white" />
                <lable className="text-gray-50 text-2xl"> Message</lable>
                <textarea className="bg-gray-800 w-full h-52 mt-3 mb-10 text-white"></textarea>
                <button className="w-full bg-link-hover h-16 font-bold ">
                  LET’S GET STARTED
                </button>
              </form>
            </div>
            <div className="flex lg:w-1/2 border-2 border-border p-20 lg:order-2 sm:w-full">
              <Content
                heading="Let’s Talk Business"
                paragraph="Now that you know a lot about me, let me know if you are interested to work with me."
              />
            </div>
          </div>
          {/* business section end */}
        </div>
      </section>
      {/* project section ends */}
    </div>
  );
};

export default Home;
