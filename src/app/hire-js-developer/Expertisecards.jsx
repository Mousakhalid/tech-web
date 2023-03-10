import Image from "next/image";
import React from "react";

const Expertisecards = () => {
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
            Web Development
          </h1>
          <h1 className="pl-4 font-normal text-xl pr-1 pb-12">
            Web development is at the core of the entire language, and we lead
            it through simple web applications to robust websites.
          </h1>
        </div>

        <div
          className="md:w-3/12  bg-gray-50 hover:bg-blue-400
                text-gray-800 duration-500  hover:text-white rounded-lg md:p-6 p-4
                  shadow-lg md:ml-24 ml-4 md:mr-0  mr-4 mb-24"
        >
          <Image
            src="/icon2.png"
            alt="Custom_app"
            width={96}
            height="96"
            className="pt-5 pl-4"
          />
          <h1 className="text-3xl font-extrabold mt-3 mb-3 pl-4">
            Server-side Apps
          </h1>
          <h1 className="pl-4 font-normal text-xl pr-1 pb-12">
            We have a competitive portfolio of delivering server-side apps built
            through Node.js. It allows developers to build complex server-side
            applications.
          </h1>
        </div>

        <div
          className="md:w-3/12  bg-gray-50 hover:bg-blue-400
                text-gray-800 duration-500  hover:text-white rounded-lg md:p-6 p-4
                  shadow-lg md:ml-24 ml-4 md:mr-0  mr-4 mb-24"
        >
          <Image
            src="/icon5.png"
            alt="Custom_app"
            width={96}
            height="96"
            className="pt-5 pl-4"
          />
          <h1 className="text-3xl font-extrabold mt-3 mb-3 pl-4">UI/UX</h1>
          <h1 className="pl-4 font-normal text-xl pr-1 pb-12">
            Our UI/UX design and engineering division delivers services to focus
            on exceeding expectations through creating user-friendly designs.
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
            Enterprise App Dev
          </h1>
          <h1 className="pl-4 font-normal text-xl pr-1 pb-12">
            We deliver enterprise solutions to assist in achieving IT goals and
            resolving operational processes. Our JavaScript development services
            deliver customization and integration.
          </h1>
        </div>

        <div
          className="md:w-3/12  bg-gray-50 hover:bg-blue-400
                text-gray-800 duration-500  hover:text-white rounded-lg md:p-6 p-4
                  shadow-lg md:ml-24 ml-4 md:mr-0  mr-4 mb-24"
        >
          <Image
            src="/icon20.png"
            alt="Custom_app"
            width={96}
            height="96"
            className="pt-5 pl-4"
          />
          <h1 className="text-3xl font-extrabold mt-3 mb-3 pl-4">
            eCommerce platforms
          </h1>
          <h1 className="pl-4 font-normal text-xl pr-1 pb-12">
            The relevant eCommerce platforms are scaled overnight and offer
            customised, rapid-development, budget-friendly solutions to evaluate
            your idea throughout the market.
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
            Hiring Javascript developers with us ensures safety and leads to
            timely maintenance and support to prevent your software from being
            outdated.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Expertisecards;
