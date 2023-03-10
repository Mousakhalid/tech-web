import Devbutton from "../Devbutton";
import React from "react";
import "./pythonbanner.css";

const PythonBanner = () => {
  return (
    <div className="bg">
      <div className="flex ">
        <div className="md:w-3/6 w-full md:ml-24 ml-8 md:mr-0 mr-8 mt-6">
          <h1 className="md:text-5xl text-4xl font-extrabold mt-5 mb-4">
            Hire Dedicated Python Developers
          </h1>
          <h1 className="text-xl leading-8 text-gray-600 mt-6 mb-12">
            Technology Solution delivers top-quality Python developers with a
            market-competitive scope. Hire a pro team to build the right
            product.
          </h1>
          <Devbutton />
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default PythonBanner;
