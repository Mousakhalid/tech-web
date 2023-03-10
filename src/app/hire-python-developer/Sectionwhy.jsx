import Image from "next/image";
import React from "react";

const SectionWhy = () => {
  return (
    <div>
      <div className="md:flex grid">
        <div className="md:mr-0 mr-12">
          <Image
            src="/bg-why.avif"
            alt="why-us"
            width={3960}
            height="360"
            className="md:ml-24  ml-0 mr-4 md:mb-0 mb-7"
          />
        </div>
        <div className="md:ml-36 ml-4 pr-60">
          <h1 className="text-4xl font-extrabold mb-8">
            Why Technology Solution
          </h1>
          <h1 className="text-xl font-medium text-gray-700 mb-7">
            We are not restricted to Python but also offer end-to-end Software
            Development expertise. At Technology Solution, we believe in
            top-of-the-line expertise to serve diverse tools, frameworks,
            technologies and other components like Falcon, Django, Tornado and
            Flash to build scalable web architectures. Hire full-time or
            part-time python developers to schedule time zones to manage your
            team conveniently.
          </h1>
          <button
            className="bg-slate-800 mb-5
                        px-28 py-4 rounded-lg 
                         hover:text-gray-900 hover:bg-gray-100 text-white text-xl font-medium border hover:border-gray-900"
          >
            Hire a Developer
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionWhy;
