import Image from 'next/image'
import React from 'react'


const SectionWhy = () => {
    return (
        <div>
            <div className='md:flex grid'>
                <div className='md:mr-0 mr-12'>
                    <Image src='/bg-why.avif' alt='why-us' width={1960} height="360" className='md:ml-24  ml-0 mr-4 md:mb-0 mb-7' />
                </div>
                <div className='md:ml-36 ml-4 pr-60'>
                    <h1 className='text-4xl font-extrabold mb-8'>Why Technology Solution</h1>
                    <h1 className='text-xl font-medium text-gray-700 mb-7'>At Technlogy Solution,
                        we offer fully customised PHP
                        development services to help you
                        achieve your business goals. Our
                        dedicated team is projected to scale
                        your company to the next level. We
                        prioritise translating higher-quality
                        results through top tech talent and faster
                        development.</h1>
                    <button className='bg-slate-800 mb-5
                        px-28 py-4 rounded-lg 
                         hover:text-gray-900 hover:bg-gray-100 text-white text-xl font-medium border hover:border-gray-900'>
                        Hire a Developer
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SectionWhy
