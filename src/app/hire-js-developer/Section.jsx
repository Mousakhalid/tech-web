import Image from "next/image";
import React from "react";

const Section = () => {
  return (
    <div className="mt-24 ">
      <div className="md:flex grid md:ml-24 ml-4 md:mr-0 mr-4 ">
        <div className="md:content-center ">
          <Image
            src={"/hire-now.jpg"}
            alt="Hire"
            width={"2370"}
            height={"400"}
          />
        </div>

        <div className="md:ml-20 ml-4 md:mt-0 mt-9">
          <h1
            className="text-4xl font-extrabold 
                    text-gray-900 mb-6
                    "
          >
            Hire Skilled JavaScript Developers
          </h1>
          <h1 className="text-xl text-gray-700">
            JavaScript is a client-side development language that assists in
            creating a dynamic range of website content. It is powered by
            Node.js and serves as a quick server-side language throughout the
            application to code in JavaScript. Technology Solution trains
            JavaScript developers to leverage this popular programming language
            to build richly interactive web and mobile applications while
            accelerating loading time.
            <h1 className="mt-5">
              Explore a few major benefits of JavaScript developers.
              <li className="mt-2">Efficiency</li>
              <li>Speed</li>
              <li>Versatility</li>
              <li>Popularity</li>
              <li>Updates</li>
              <li>Rich Functionality</li>
            </h1>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Section;
