import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <img src={assets.logo} className='mb-5 w-16' alt="" />
          <p className='w-full md:w-2/3 text-gray-600'>
          Shoporion stands as a testament to timeless elegance, offering an exquisite selection of apparel that transcends the boundaries of time and fashion. With a rich history of providing discerning customers with the finest garments, Shoporion remains the quintessential destination for those seeking sophistication and style.
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'> COMPANY </p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'> GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+234 6782 8838 773</li>
            <li>contact@shoporion.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ shoporion.com - All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
