import React from 'react'

import Html from '../assets/html.png';
import Css from '../assets/css.png';
import Python from '../assets/python.png';
import C from '../assets/C_Logo.png';
import Cplus from '../assets/c-.png';
import Csharp from '../assets/c-sharp.png';
import Android from '../assets/Android_Studio_Icon_3.6.svg.png';
import Unity from '../assets/unity2.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#272829] text-gray-300' >
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                <p className='py-4'>// These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#141414] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Html} alt="Html icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#141414] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Css} alt="Css icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#141414] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={C} alt="C icon" />
                    <p className='my-4'>C</p>
                </div>
                <div className='shadow-md shadow-[#141414] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Cplus} alt="C++ icon" />
                    <p className='my-4'>C++</p>
                </div>
                <div className='shadow-md shadow-[#141414] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Csharp} alt="C# icon" />
                    <p className='my-4'>C#</p>
                </div>
                <div className='shadow-md shadow-[#141414] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Python} alt="Python icon" />
                    <p className='my-4'>PYTHON</p>
                </div>
                <div className='shadow-md shadow-[#141414] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Android} alt="Android Studio icon" />
                    <p className='my-4'>ANDROID STUDIO</p>
                </div>
                <div className='shadow-md shadow-[#141414] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Unity} alt="Unity icon" />
                    <p className='my-4'>UNITY</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills