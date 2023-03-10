import React from "react";
import "./phpbanner.module.css";
import Devbutton from "../Devbutton";
const Phpbanner = () => {
  return (
    <div className="bg">
      <div className="flex ">
        <div className="md:w-3/6 w-full md:ml-24 ml-8 md:mr-0 mr-8 mt-6">
          <h1 className="md:text-5xl text-4xl font-extrabold mt-5 mb-4">
            Hire Dedicated PHP Developers
          </h1>
          <h1 className="text-xl leading-7 text-gray-600 mt-6 mb-12">
            Technology Solution assists you in hiring top PHP developers,
            consultants and coders to fulfil your project requirements. We help
            you hire the PHP development team to implement secure and powerful
            server sides of every web application.
          </h1>
          <Devbutton />
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Phpbanner;
