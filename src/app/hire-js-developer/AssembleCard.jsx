import React from "react";

const AssembleCard = () => {
  return (
    <div>
      <div className="md:flex grid mt-24 md:ml-12 ml-3 md:mr-0 mr-4">
        <div className="flex items-center flex-col md:w-3/12 w-full md:ml-12 ml-1 md:mt-0 mt-6">
          <div
            className="rounded-full p-8 bg-blue-400 
                     text-center font-extrabold text-white text-3xl w-24"
          >
            1
          </div>
          <h1 className="mt-1 text-3xl text-center font-extrabold">
            Choose the Expert Resource
          </h1>
          <h1 className="mt-5 text-xl text-center font-medium text-gray-600">
            Opt for an expert engineer, developer and designer from a wide pool
            of 21+ resources. We are problem solvers who value integrity.
          </h1>
        </div>
        <div className="flex items-center flex-col md:w-3/12 w-full md:ml-12 ml-1 md:mt-0 mt-6">
          <div
            className="rounded-full p-8 bg-blue-400 
                     text-center font-extrabold text-white text-3xl w-24"
          >
            2
          </div>
          <h1
            className="mt-1 text-3xl text-center 
                    font-extrabold"
          >
            Begin with Initial Interview
          </h1>
          <h1 className="mt-5 text-xl text-center font-medium text-gray-600">
            Every member at Technology Solution is an expert in their domain.
            Schedule your interview today to initiate your project with
            exceptional results.
          </h1>
        </div>
        <div className="flex items-center flex-col md:w-3/12 w-full md:ml-12 ml-1 md:mt-0 mt-6">
          <div
            className="rounded-full p-8 bg-blue-400 
                     text-center font-extrabold text-white text-3xl w-24"
          >
            3
          </div>
          <h1
            className="mt-1 text-3xl text-center 
                    font-extrabold"
          >
            Hire Developers within a Day
          </h1>
          <h1 className="mt-5 text-xl text-center font-medium text-gray-600">
            We will match you with an expert resource based on your project
            requirements and make your engineering team within 24 hours.
          </h1>
        </div>
      </div>
      <div className="flex-col text-center items-center justify-center">
        <h1 className="font-extrabold md:text-4xl text-2xl pl-8 pr-8  text-center mt-24">
          JavaScript Developers Currently Available
        </h1>
        <h1 className="text-xl font-medium text-gray-600 text-center m-8 leading-6 ">
          In contrast to Java, Python, C# and PHP, JavaScript has become a
          widespread and fast-growing programming language. Here is a diverse
          range of JavaScript Developers ready to join your team.
        </h1>
      </div>
    </div>
  );
};

export default AssembleCard;
