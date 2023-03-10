import styles from "../styles/banner.module.css";
import React from "react";
import Button from "./Button";

const Banner = ({ title, desc }) => {
  return (
    <div className={styles.bg}>
      <div className="flex md:w-3/6 w-full">
        <div>
          <h1 className="text-4xl font-semibold md:ml-36 ml-5 mt-10 ">
            {title}
          </h1>
          <div className="md:ml-36 ml-5 text-2xl text-gray-500 mt-6 mb-5">
            {desc}
          </div>
          <div>
            <Button />
          </div>
        </div>

        <div>
        
        </div>
      </div>
    </div>
  );
};

export default Banner;
