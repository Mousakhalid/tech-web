import React from 'react'
import AccordianData from './AccordianData'

const Accordian = () => {
    return (
        <div>
            <div>
                <div className='md:m-12 m-4'>
                    <h1 className='md:text-5xl text-3xl font-extrabold text-gray-900 text-center'>Want
                        to Know More?</h1>
                    <h1 className='text-xl font-medium text-gray-600 md:text-center text-justify md:m-12 m-3'>Explore the following FAQs to attain relevant information
                        concerning different aspects of our company, products and services.
                        Feel free to contact us for further information.</h1>
                </div>
                <div>

                </div>
            </div>
            <AccordianData />
        </div>
    )
}

export default Accordian