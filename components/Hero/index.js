import React from "react";
import styles from "../../styles/hero.module.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const Hero = () => {
  return (
    <div>
      <section className={styles.heroSection}>
        <div className="container">
          <div className="flex">
            <div className={styles.logoWrapper}>
              <span>
                <a href="#">
                  <TwitterIcon
                    style={{ width: "40px", height: "40px" }}
                    className={`mr-5  hover:text-link-hover text-white `}
                  />
                </a>
              </span>
              <span>
                <a href="#">
                  <GitHubIcon
                    style={{ width: "40px", height: "40px" }}
                    className={`mr-5 hover:text-link-hover text-white `}
                  />
                </a>
              </span>
              <span>
                <a href="#">
                  <LinkedInIcon
                    style={{ width: "40px", height: "40px" }}
                    className={` mr-5 w-10 h-10 hover:text-link-hover text-white`}
                  />
                </a>
              </span>
            </div>
            <div>
              <h3 className="text-6 mt-96 text-2xl ml-16 text-headingThree">
                Veteran Systems Architect
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
