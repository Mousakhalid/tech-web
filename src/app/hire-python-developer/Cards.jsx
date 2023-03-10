import Image from "next/image";
import React from "react";

const Cards = () => {
  return (
    <div>
      <div className="md:flex grid">
        <div
          className="md:w-3/12  bg-gray-50 hover:bg-blue-400
                 text-gray-800 duration-500  hover:text-white rounded-lg md:p-6 p-4
                   shadow-lg md:ml-24 ml-4 md:mr-0  mr-4 mb-24"
        >
          <Image
            src="/icon12.png"
            alt="Custom_app"
            width={96}
            height="96"
            className="pt-5 pl-4"
          />
          <h1 className="text-3xl font-extrabold mt-3 mb-3 pl-4">
            Custom Development
          </h1>
          <h1 className="pl-4 font-normal text-xl pr-1 pb-12">
            Hire a Python Developer skilled in delivering custom python
            applications that are well-equipped to manage different challenges.
          </h1>
        </div>

        <div
          className="md:w-3/12  bg-gray-50 hover:bg-blue-400
                text-gray-800 duration-500  hover:text-white rounded-lg md:p-6 p-4
                  shadow-lg md:ml-24 ml-4 md:mr-0  mr-4 mb-24"
        >
          <Image
            src="/icon1.png"
            alt="Custom_app"
            width={96}
            height="96"
            className="pt-5 pl-4"
          />
          <h1 className="text-3xl font-extrabold mt-3 mb-3 pl-4">
            Web App Development
          </h1>
          <h1 className="pl-4 font-normal text-xl pr-1 pb-12">
            Our expert Python developers deliver the foremost web applications
            to maintain sustainability. We ensure the peak of success through
            Python.
          </h1>
        </div>

        <div
          className="md:w-3/12  bg-gray-50 hover:bg-blue-400
                text-gray-800 duration-500  hover:text-white rounded-lg md:p-6 p-4
                  shadow-lg md:ml-24 ml-4 md:mr-0  mr-4 mb-24"
        >
          <Image
            src="/icon3.png"
            alt="Custom_app"
            width={96}
            height="96"
            className="pt-5 pl-4"
          />
          <h1 className="text-3xl font-extrabold mt-3 mb-3 pl-4">
            ML with Python
          </h1>
          <h1 className="pl-4 font-normal text-xl pr-1 pb-12">
            Hire an expert team of Python programmers to create advanced ML
            applications. Our Python developers are skilled in setting up a
            stable Python development environment.
          </h1>
        </div>
      </div>

      <div className="md:flex grid">
        <div
          className="md:w-3/12  bg-gray-50 hover:bg-blue-400
                text-gray-800 duration-500  hover:text-white rounded-lg md:p-6 p-4
                  shadow-lg md:ml-24 ml-4 md:mr-0  mr-4 mb-24"
        >
          <Image
            src="/icon12.png"
            alt="Custom_app"
            width={96}
            height="96"
            className="pt-5 pl-4"
          />
          <h1 className="text-3xl font-extrabold mt-3 mb-3 pl-4">
            Enterprises App
          </h1>
          <h1 className="pl-4 font-normal text-xl pr-1 pb-12">
            We commit to delivering high-performing enterprise-oriented python
            web and mobile apps according to the specific requirements of your
            business needs.
          </h1>
        </div>

        <div
          className="md:w-3/12  bg-gray-50 hover:bg-blue-400
                text-gray-800 duration-500  hover:text-white rounded-lg md:p-6 p-4
                  shadow-lg md:ml-24 ml-4 md:mr-0  mr-4 mb-24"
        >
          <Image
            src="/icon15.png"
            alt="Custom_app"
            width={96}
            height="96"
            className="pt-5 pl-4"
          />
          <h1 className="text-3xl font-extrabold mt-3 mb-3 pl-4">
            Migration Services
          </h1>
          <h1 className="pl-4 font-normal text-xl pr-1 pb-12">
            Expand your business by integrating seasoned Python from us. Migrate
            your existing applications to Python through our competent team of
            senior Python developers.
          </h1>
        </div>

        <div
          className="md:w-3/12  bg-gray-50 hover:bg-blue-400
                text-gray-800 duration-500  hover:text-white rounded-lg md:p-6 p-4
                  shadow-lg md:ml-24 ml-4 md:mr-0  mr-4 mb-24"
        >
          <Image
            src="/icon16.png"
            alt="Custom_app"
            width={96}
            height="96"
            className="pt-5 pl-4"
          />
          <h1 className="text-3xl font-extrabold mt-3 mb-3 pl-4">
            Active Maintenance
          </h1>
          <h1 className="pl-4 font-normal text-xl pr-1 pb-12">
            Support and maintenance are our responsibility for development. Hire
            a Python developer for a timely support and maintenance services to
            lead among your competitors.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Cards;
