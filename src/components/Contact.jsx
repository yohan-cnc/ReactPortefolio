import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className= 'w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/6378a8db-8096-4bf9-91fa-89846bd06d2c" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
                    Contact Me
                </p>
                <p className='text-gray-300 py-4'>
                    Submit the form below or send me an email - yohan.canac.21@gmail.com
                </p>
            </div>
            <input className='bg-transparent p-2 border-2 rounded-md text-white' type="text" placeholder="Name" name='name' />
            <input className='my-4 p-2 bg-transparent border-2 rounded-md text-white'type="email" placeholder="Email" name='email' />
            <textarea className='bg-transparent p-2 border-2 rounded-md text-white' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact