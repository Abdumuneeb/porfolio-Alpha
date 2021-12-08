import styles from "../../styles/navbar.module.css";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <section className={styles.navbarSection}>
        <nav className="flex flex-row justify-end items-center bg-navbar-bg mx-auto">
          <ul className="flex flex-row">
            <li className="mr-6 py-6">
              <Link href={"/"}>
                <a className=" text-white text-base font-bold capitalize hover:text-link-hover">
                  Home
                </a>
              </Link>
            </li>
            <li className="mr-6 py-6">
              <Link href={"/"}>
                <a className=" text-white text-base font-bold capitalize hover:text-link-hover">
                  skills
                </a>
              </Link>
            </li>
            <li className="mr-6 py-6">
              <Link href={"/"}>
                <a className=" text-white text-base font-bold capitalize hover:text-link-hover">
                  Projects
                </a>
              </Link>
            </li>
            <li className="mr-6 py-6">
              <Link href={"/"}>
                <a className=" text-white text-base font-bold capitalize hover:text-link-hover">
                  testimonials
                </a>
              </Link>
            </li>

            <li className="mr-20 py-6">
              <Link href={"/"}>
                <a className=" text-white text-base font-bold capitalize hover:text-link-hover">
                  contact
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
