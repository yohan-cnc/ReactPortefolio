import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen  bg-gradient-to-b from-gray-800 to-black text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                        About Me
                    </p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>
                        Hi. I'm Yohan, nice to meet you. Please take a look around.
                    </p>
                </div> 
                <div>
                    <p>I'm a 20 years old student living in Toulouse, France. 
                        I'm studing computer science at Epita, a top french 
                        engineering school. I've learned a lot of technologies
                        for both school et personal projects. I've also spend a
                        semester at UQAC, Canada to learn new skills and techs.
                    </p>
                </div> 
            </div> 
        </div>
    </div>
  )
}

export default About