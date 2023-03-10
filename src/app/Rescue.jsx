import React from 'react'
import Button from './Button'

const Rescue = () => {
    return (
        <div className='bg-cyan-200 p-14 md:mr-36 mr-5  md:ml-24 ml-5 mt-10 mb-10 rounded-2xl'>
            <div className='md:flex grid justify-between'>
                <div className='md:w-4/6 w-full'>
                    <h1 className='md:text-4xl text-3xl  font-extrabold '>Rescue your company’s growth!</h1>

                    <h1 className='text-xl font-light text-gray-600 mt-5 md:w-3/4 w-full md:mb-0 mb-3'>Let us know about your
                        business plans on an introductory call, and we’ll lead the matching process</h1>
                </div>
                <Button />
            </div>
        </div >
    )
}

export default Rescue