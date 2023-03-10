import React from 'react'
import SkillsCard from './SkillsCard'

const Cards = () => {
    return (
        <div>
            <div className='text-center mt-24'>
                <div>
                    <h1 className='text-4xl font-extrabold'>Save Your Time And Budget
                    </h1>
                </div>
                <div>
                    <h1 className='text-xl text-gray-600 md:px-40 px-5 mt-8'>
                        Experience the best global tech talent and enjoy
                        the tech world without getting exhausted through
                        the hiring process. Hire an expert developer,
                        designer and an engineer now.
                    </h1>
                </div>
                <SkillsCard />
            </div>
        </div>
    )
}

export default Cards