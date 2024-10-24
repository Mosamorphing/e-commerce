import React from 'react'
import { assets } from '../assets/assets'

export const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>

        <div>
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'> Flexible Return Policy </p>
            <p className='text-gray-400'> We offer a flexible exchange return policy. <br></br>We are not a cult</p>
        </div>
        <div>
            <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'> 14 days Return Policy </p>
            <p className='text-gray-400'> We provide 14 days free return policy. <br></br> Take your time</p>
        </div>        <div>
            <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'> Best Customer Support </p>
            <p className='text-gray-400'> With the help of our in-person and AI customer support system, <br></br>we provide round the clock support for our customers</p>
        </div>
    </div>
  )
}

export default OurPolicy