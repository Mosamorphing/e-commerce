import React from 'react'

export const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2x1 font-medium text-gray-800'>20% OFF IF YOU SUBSCRIBE NOW</p>
        <p className='text-gray-400 mt-3'>
        By subscribing now, you'll open the door to a world of exclusive benefits designed to enhance your journey.
        </p>
        <form onSubmit={onSubmitHandler}className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE NOW</button>
        </form>
    </div>
  )
}

export default NewsletterBox