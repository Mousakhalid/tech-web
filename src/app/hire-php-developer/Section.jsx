import Image from 'next/image'
import React from 'react'

const Section = () => {
    return (
        <div className='mt-24 '>
            <div className='md:flex grid md:ml-24 ml-4 md:mr-0 mr-4 '>
                <div className='md:content-center '>
                    <Image src={'/hire-now.jpg'} alt="Hire" width={"1370"} height={"400"} />
                </div>

                <div className='md:ml-20 ml-4 md:mt-0 mt-9'>
                    <h1 className='text-4xl font-extrabold 
                    text-gray-900 mb-6
                    '>Hire Trustworthy PHP Development Resources</h1>
                    <h1 className='text-xl text-gray-700'>
                        Technology Solution delivers qualified PHP developers
                        to assist you in leveraging PHP-based software solutions.
                        We have been in the market for the past 2 years and make
                        ourselves competitive in the following.
                        <li className='mt-7'>High Performance</li>
                        <li>Ability to run on any OS</li>
                        <li>Reduced development cost</li>
                        <li>Easy troubleshooting</li>
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Section