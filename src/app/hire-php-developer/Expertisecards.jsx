import Image from 'next/image'
import React from 'react'

const Expertisecards = () => {
    return (
        <div>
            <div className='md:flex grid'>
                <div className='md:w-3/12  bg-gray-50 hover:bg-blue-400
                 text-gray-800 duration-500  hover:text-white rounded-lg md:p-6 p-4
                   shadow-lg md:ml-24 ml-4 md:mr-0  mr-4 mb-24'>
                    <Image src='/icon12.png' alt='Custom_app' width={96} height='96'
                        className='pt-5 pl-4' />
                    <h1 className='text-3xl font-extrabold mt-3 mb-3 pl-4'>Custom App Dev</h1>
                    <h1 className='pl-4 font-normal text-xl pr-1 pb-12'>Our custom application
                        development is designed to fulfil
                        your business needs and assist you
                        in achieving your business goals.</h1>
                </div>

                <div className='md:w-3/12  bg-gray-50 hover:bg-blue-400
                text-gray-800 duration-500  hover:text-white rounded-lg md:p-6 p-4
                  shadow-lg md:ml-24 ml-4 md:mr-0  mr-4 mb-24'>
                    <Image src='/icon13.png' alt='Custom_app' width={96} height='96'
                        className='pt-5 pl-4' />
                    <h1 className='text-3xl font-extrabold mt-3 mb-3 pl-4'>CRM Platforms</h1>
                    <h1 className='pl-4 font-normal text-xl pr-1 pb-12'>Are you
                        looking to create a new CRM from scratch or upgrade your
                        current solution? We have a competent team of PHP developers
                        to help.</h1>
                </div>

                <div className='md:w-3/12  bg-gray-50 hover:bg-blue-400
                text-gray-800 duration-500  hover:text-white rounded-lg md:p-6 p-4
                  shadow-lg md:ml-24 ml-4 md:mr-0  mr-4 mb-24'>
                    <Image src='/icon14.png' alt='Custom_app' width={96} height='96'
                        className='pt-5 pl-4' />
                    <h1 className='text-3xl font-extrabold mt-3 mb-3 pl-4'>API Integration</h1>
                    <h1 className='pl-4 font-normal text-xl pr-1 pb-12'>We believe
                        in empowering your business management, analytics
                        and marketing with API integration services to make
                        your project end-to-end.</h1>
                </div>

            </div>


            <div className='md:flex grid'>
                <div className='md:w-3/12  bg-gray-50 hover:bg-blue-400
                text-gray-800 duration-500  hover:text-white rounded-lg md:p-6 p-4
                  shadow-lg md:ml-24 ml-4 md:mr-0  mr-4 mb-24'>
                    <Image src='/icon12.png' alt='Custom_app' width={96} height='96'
                        className='pt-5 pl-4' />
                    <h1 className='text-3xl font-extrabold mt-3 mb-3 pl-4'>Cloud Solutions</h1>
                    <h1 className='pl-4 font-normal text-xl pr-1 pb-12'>We are
                        available on a full-time, part-time and project basis
                        to deliver cloud solutions with custom PHP development services.</h1>
                </div>

                <div className='md:w-3/12  bg-gray-50 hover:bg-blue-400
                text-gray-800 duration-500  hover:text-white rounded-lg md:p-6 p-4
                  shadow-lg md:ml-24 ml-4 md:mr-0  mr-4 mb-24'>
                    <Image src='/icon15.png' alt='Custom_app' width={96} height='96'
                        className='pt-5 pl-4' />
                    <h1 className='text-3xl font-extrabold mt-3 mb-3 pl-4'>PHP Consulting</h1>
                    <h1 className='pl-4 font-normal text-xl pr-1 pb-12'>Our PHP
                        development team ensures to consult while assisting your
                        business to make the most out of the PHP applications.</h1>
                </div>

                <div className='md:w-3/12  bg-gray-50 hover:bg-blue-400
                text-gray-800 duration-500  hover:text-white rounded-lg md:p-6 p-4
                  shadow-lg md:ml-24 ml-4 md:mr-0  mr-4 mb-24'>
                    <Image src='/icon16.png' alt='Custom_app' width={96} height='96'
                        className='pt-5 pl-4' />
                    <h1 className='text-3xl font-extrabold mt-3 mb-3 pl-4'>Active Maintenance</h1>
                    <h1 className='pl-4 font-normal text-xl pr-1 pb-12'>Hiring PHP
                        developers with us ensures safety and leads to
                        timely maintain and  prevent your software
                        from being outdated.</h1>
                </div>

            </div>
        </div>
    )
}

export default Expertisecards
