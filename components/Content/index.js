import React from "react";

const Content = ({ heading, paragraph }) => {
  return (
    <div>
      <div className=" flex flex-col">
        <h1 className="text-link-hover lg:text-7xl lg:leading-heading lg:font-bold lg:max-w-md sm:text-xl">
          {heading}
        </h1>
        <p className="text-xl text-white mt-10 max-w-md"> {paragraph}</p>
      </div>
    </div>
  );
};

export default Content;
