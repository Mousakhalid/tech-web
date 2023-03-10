import Image from 'next/image'
import React from 'react'

const SkillsCard = () => {
    return (
        <div>
            <div className='md:flex grid'>
                <div className='bg-white shadow-2xl md:ml-36   ml-10 mt-24 rounded-xl md:mb-24 md:w-3/12 w-4/5  
                cursor-pointer hover:bg-cyan-800 duration-500 hover:text-white '>
                    <Image src={'/icon1.png'} alt="Web_tech" width={96} height={96} className="pl-4 pt-12" />
                    <h1 className='text-2xl font-extrabold text-left p-4'>Hire a Web Developer</h1>
                    <h2 className='text-xl text-gray-700 hover:text-gray-200 text-left p-4 pb-10'>Exploring a reliable software development
                        company? You’re at the right place. Hire a
                        Developer now, we at Technology solution
                        comprise secure software solutions for any
                        device, browser and OS</h2>
                </div>

                <div className='bg-white shadow-2xl md:ml-12   ml-10 mt-24 rounded-xl md:mb-24 md:w-3/12 w-4/5  
                cursor-pointer hover:bg-cyan-800 duration-500 hover:text-white '>
                    <Image src={'/icon2.png'} alt="Web_tech" width={96} height={96} className="pl-4 pt-12" />
                    <h1 className='text-2xl font-extrabold text-left p-4'>Hire an App Developer</h1>
                    <h2 className='text-xl text-gray-700 hover:text-gray-200 text-left p-4 pb-10'>Our skilled app
                        developer can help you create an innovative and user-friendly
                        mobile or web application that meets your company’s needs.
                        Build custom apps from scratch or modify existing ones.</h2>
                </div>

                <div className='bg-white shadow-2xl md:ml-12   ml-10 mt-24 rounded-xl md:mb-24 md:w-3/12 w-4/5  
                cursor-pointer hover:bg-cyan-800 duration-500 hover:text-white '>
                    <Image src={'/icon3.png'} alt="Web_tech" width={96} height={96} className="pl-4 pt-12" />
                    <h1 className='text-2xl font-extrabold text-left p-4'>Hire an AI Engineer</h1>
                    <h2 className='text-xl text-gray-700 hover:text-gray-200 text-left p-4 pb-10'>Looking for a data science engineer? Try to hire a machine learning engineer to
                        build AI products. Hiring an AI engineer
                        helps to automate your business in many ways.</h2>
                </div>


            </div>
            <div className='md:flex grid'>
                <div className='bg-white shadow-2xl md:ml-36   ml-10 md:mt-0 mt-24 rounded-xl md:mb-24 md:w-3/12 w-4/5  
            cursor-pointer hover:bg-cyan-800 duration-500 hover:text-white '>
                    <Image src={'/icon4.png'} alt="Web_tech" width={96} height={96} className="pl-4 pt-12" />
                    <h1 className='text-2xl font-extrabold text-left p-4'>Hire a Digital Marketer </h1>
                    <h2 className='text-xl text-gray-700 hover:text-gray-200 text-left p-4 pb-10'>Hire an expert digital marketer
                        specializing in email, content, inbound, social media, SEO, PR and
                        PPC. We deliver top-performing marketers to fulfill your needs.                    </h2>
                </div>

                <div className='bg-white shadow-2xl md:ml-12   ml-10 md:mt-0 mt-24 rounded-xl md:mb-24 md:w-3/12 w-4/5  
            cursor-pointer hover:bg-cyan-800 duration-500 hover:text-white '>
                    <Image src={'/icon5.png'} alt="Web_tech" width={96} height={96} className="pl-4 pt-12" />
                    <h1 className='text-2xl font-extrabold text-left p-4'>Hire a UI/UX Designer</h1>
                    <h2 className='text-xl text-gray-700 hover:text-gray-200 text-left p-4 pb-10'>Hire
                        UI/UX designers to develop responsive pages and select the set of
                        interactive elements to be displayed.
                        We comprise skilled UI/UX engineers with a thorough knowledge of HTML and CSS.                    </h2>
                </div>

                <div className='bg-white shadow-2xl md:ml-12   ml-10 md:mt-0 mt-24 rounded-xl md:mb-24 md:w-3/12 w-4/5  
            cursor-pointer hover:bg-cyan-800 duration-500 hover:text-white '>
                    <Image src={'/icon6.png'} alt="Web_tech" width={96} height={96} className="pl-4 pt-12" />
                    <h1 className='text-2xl font-extrabold text-left p-4'>Hire a Blockchain Developer</h1>
                    <h2 className='text-xl text-gray-700 hover:text-gray-200 text-left p-4 pb-10'>Exploring a reliable software development
                        company? You’re at the right place. Hire a
                        Developer now, we at Technology solution
                        comprise secure software solutions for any
                        device, browser and OS</h2>
                </div>


            </div>
        </div>
    )
}

export default SkillsCard