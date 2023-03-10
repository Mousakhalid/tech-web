"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Whyus = () => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    const onScroll = () => {
      setCount((fc) => {
        if (
          window.innerHeight + window.pageYOffset >=
            document.body.offsetHeight &&
          fc < 24
        ) {
          console.log(fc + 23);
          return fc + 23;
        } else {
          return fc;
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="bg-gray-100 rounded-xl">
      <div>
        <div className="pt-24 pb-24">
          <h1 className="font-extrabold text-4xl text-center text-gray-700">
            Why Technology Solution
          </h1>
          <h1 className="font-medium text-2xl text-center text-gray-400 mt-5">
            Working since 2020
          </h1>
        </div>

        <div className="bg-cyan-700 p-16 md:flex grid">
          <div className="border-l-4 border-gray-300 border-spacing-1 ml-3 pl-8">
            <Image
              src={"/icon8.png"}
              alt="Project completed"
              width={68}
              height={68}
              className="pb-3"
            />
            <div className="text-3xl text-gray-900 font-bold">
              Projects Completed
            </div>
            <div className="text-3xl font-medium mt-4 text-gray-100 ">
              {count}+
            </div>
          </div>
          <div className="border-l-4 border-gray-300 border-spacing-1 ml-3 pl-8">
            <Image
              src={"/icon9.png"}
              alt="Project completed"
              width={68}
              height={68}
              className="pb-3"
            />
            <div className="text-3xl text-gray-900 font-bold">
              Positive Reviews
            </div>
            <div className="text-3xl font-medium mt-4 text-gray-100 ">21+</div>
          </div>
          <div className="border-l-4 border-gray-300 border-spacing-1 ml-3 pl-8">
            <Image
              src={"/icon10.png"}
              alt="Project completed"
              width={68}
              height={68}
              className="pb-3"
            />
            <div className="text-3xl text-gray-900 font-bold">Team Members</div>
            <div className="text-3xl font-medium mt-4 text-gray-100 ">5+</div>
          </div>
          <div className="border-l-4 border-gray-300 border-spacing-1 ml-3 pl-8">
            <Image
              src={"/icon11.png"}
              alt="Project completed"
              width={68}
              height={68}
              className="pb-3"
            />
            <div className="text-3xl text-gray-900 font-bold">
              Happy Clients
            </div>
            <div className="text-3xl font-medium mt-4 text-gray-100 ">21+</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
