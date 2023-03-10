import React from "react";
import styles from './styles/banner.module.css';
import Devbutton from "../Devbutton";
const Banner = () => {
    return (
        <div className={styles.bg}>
            <div className="flex ">
                <div className="md:w-3/6 w-full md:ml-24 ml-8 md:mr-0 mr-8 mt-6">
                    <h1 className="md:text-5xl text-4xl font-extrabold mt-5 mb-4">
                        Hire Dedicated JavaScript Developers
                    </h1>
                    <h1 className="text-xl leading-7 text-gray-600 mt-6 mb-12">
                        Technology Solution is a competitive marketplace
                        for talented JavaScript developers, programmers and
                        coders. Our team of JavaScript developers is experienced
                        in relevant frameworks and libraries like jQuery, Nextjs,
                        React.
                    </h1>
                    <Devbutton />
                </div>

                <div></div>
            </div>
        </div>
    );
};

export default Banner;
