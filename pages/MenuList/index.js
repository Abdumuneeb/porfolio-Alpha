import Link from "next/link";
import React from "react";
import CloseIcon from "@material-ui/icons/Close";

const MenuList = () => {
  return (
    <div className="w-full h-full absolute top-0 left-0 bg-navbar-bg">
      <button className="block ml-auto cursor-pointer">
        <Link href="/">
          <a>
            <CloseIcon className="text-white" />
          </a>
        </Link>
      </button>
      <div className="flex flex-col justify-center my-auto items-center mt-20">
        <Link href="/">
          <a>
            <p className="text-white text-2xl mb-2 hover:text-link-hover">
              Home
            </p>
          </a>
        </Link>
        <Link href="/skills">
          <a>
            <p className="text-white text-2xl mb-2 hover:text-link-hover">
              Skills
            </p>
          </a>
        </Link>

        <Link href="/projects">
          <a>
            <p className="text-white text-2xl mb-2 hover:text-link-hover">
              Projects
            </p>
          </a>
        </Link>
        <Link href="/test">
          <a>
            <p className="text-white text-2xl mb-2 hover:text-link-hover  ">
              Testimonials
            </p>
          </a>
        </Link>
        <Link href="/contact">
          <a>
            <p className="text-white text-2xl mb-2 hover:text-link-hover  ">
              contact
            </p>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default MenuList;
