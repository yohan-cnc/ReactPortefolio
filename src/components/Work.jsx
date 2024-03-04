import React from 'react'
import Epicjump from '../assets/epicjump3.png'
import Meditatio from '../assets/meditatio.png'
import Sudoku from '../assets/sudoku.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300  bg-gradient-to-b from-gray-800 to-black'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                    My Work
                </p>
                <p className='py-4'>
                    Check out some of my recent projects
                </p>
            </div>

           {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* Grid item */}
                <div style={{backgroundImage: `url(${Meditatio})`}}
                className='shadow-lg shadow-[##141414] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-auto font-bold text-white tracking-wider'>
                            Android Application writted in Kotlin
                        </span>
                        <div className='pt-8 text-center'>
                        <a href="https://github.com/Meditatio/meditatio">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>More Info</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Epicjump})`}}
                className='shadow-lg shadow-[##141414] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-auto font-bold text-white tracking-wider'>
                            Unity 2D Mulitplayer Game
                        </span>
                        <div className='pt-8 text-center'>
                        <a href="https://armandsoursou.github.io/Powell/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>More Info</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Sudoku})`}}
                className='shadow-lg shadow-[##141414] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-auto font-bold text-white tracking-wider'>
                            OCR Sudoku Solver writted in C
                        </span>
                        <div className='pt-8 text-center'>
                        <a href="https://github.com/inigoalda/EPITA-Projet-S3">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>More Info</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${quarantedeuxsh})`}}
                className='shadow-lg shadow-[##141414] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-auto font-bold text-white tracking-wider'>
                            Posix Shell Implementation
                        </span>
                        <div className='pt-8 text-center'>é
                        <a href="https://trove.assistants.epita.fr/docs/42sh/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>More Info</button>
                            </a>
                        </div>
                    </div>
                </div>
                
                {/*
                <div style={{backgroundImage: `url(${work2})`}}
                className='shadow-lg shadow-[##141414] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-auto font-bold text-white tracking-wider '>
                            Abacus : in shell calculator
                        </span>
                        <div className='pt-8 text-center'>
                        <a href="">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>More Info</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${work1})`}}
                className='shadow-lg shadow-[##141414] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-auto font-bold text-white tracking-wider'>
                            OOP Waste Management Simulation
                        </span>
                        <div className='pt-8 text-center'>
                        <a href="">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>More Info</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Code})`}}
                className='shadow-lg shadow-[##141414] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-auto font-bold text-white tracking-wider'>
                            On Going...
                        </span>
                        
                    </div>
                </div>*/}
            </div>
        </div>
    </div>
  )
}

export default Work