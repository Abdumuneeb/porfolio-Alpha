import React from "react";

const Content = ({ heading, paragraph }) => {
  return (
    <div>
      <div className=" flex flex-col">
        <h1 className="text-link-hover text-7xl leading-heading font-bold max-w-md">
          {heading}
        </h1>
        <p className="text-xl text-white mt-10 max-w-md"> {paragraph}</p>
      </div>
    </div>
  );
};

export default Content;
