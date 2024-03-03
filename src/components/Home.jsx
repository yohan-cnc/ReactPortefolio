import React, { useState, useEffect } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Typed from 'typed.js';
import Avatar from '../assets/avatar1.png';
import {Link} from 'react-scroll'

const Home = () => {
    const el = React.useRef(null);
    const [showAvatar, setShowAvatar] = useState(false);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Student', 'Programmer', ],
            loop: true,
            typeSpeed: 100,
            backSpeed: 80,
            backDelay: 1500,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            const thresholdWidth = window.screen.width * 0.8; // 60% of the screen width

            setShowAvatar(windowWidth >= thresholdWidth);
        };

        handleResize(); // Check the initial window size
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div name='home' className='w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 flex items-center'>
            {/* Left Side */}
            <div className='mx-auto lg:ml-[120px] pl-9 '>
                <p className='text-pink-600'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Yohan Canac</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
                    I'm a <span ref={el}></span>
                </h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>
                    I'm a computer science student, studying at Epita, a French engineering school.
                    Occasionally doing freelance and always having fun discovering many techs
                </p>
                <div>
                    <button >
                        <Link className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600' to="work" smooth={true} duration={500}>
                            View Work
                            <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-3' />
                            </span>
                        </Link>
                    </button>
                </div>
            </div>

            {/* Right Side */}
            {showAvatar && (
                <div className='w-[400px] pr-9 hidden sm:block'>
                    <img
                        src={Avatar}
                        alt='Avatar'
                        className='object-cover h-[83vh] w-full'
                    />
                </div>
            )}
        </div>
    );
};

export default Home;
