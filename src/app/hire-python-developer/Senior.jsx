import Image from "next/image";
import React from "react";

const Senior = () => {
  return (
    <div className="mt-24 ">
      <div className="md:flex grid md:ml-24 ml-4 md:mr-0 mr-4 ">
        <div className="md:content-center ">
          <Image
            src={"/hire-now.jpg"}
            alt="Hire"
            width={"2970"}
            height={"400"}
          />
        </div>

        <div className="md:ml-20 ml-4 md:mt-0 mt-9">
          <h1
            className="text-4xl font-extrabold 
                    text-gray-900 mb-6
                    "
          >
            Hire Senior Python Developers
          </h1>
          <h1 className="text-xl text-gray-700">
            Technology Solution has trained Python developers to develop secure,
            scalable and reliable solutions for more than a 2 years. Our Python
            development team comprises top-of-line expertise to resolve complex
            business problems. Hire Python coders to leverage a diverse
            selection of technologies like Celery Django, MySQL, XML, AWS,
            JavaScript, jQuery, HTML/HTML5 and Flask to generate updated web
            applications in a minimal period
            <li className="mt-7">High Performance</li>
            <li>Ability to run on any OS</li>
            <li>Reduced development cost</li>
            <li>Easy troubleshooting</li>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Senior;
