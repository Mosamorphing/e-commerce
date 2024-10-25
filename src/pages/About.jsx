import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      {/* ABOUT US Section */}
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      
      {/* About Image and Text Section */}
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:w-[450px]' src={assets.about_img} alt="" />
        
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to Shoporion, your one-stop destination for stylish and elegant apparel that complements your unique personality. We're a fashion-forward brand dedicated to bringing you the finest selection of clothing, crafted with utmost care and attention to detail.</p>
          <p>We're passionate about helping you express your individuality through the art of fashion. From chic casual wear to stunning formal ensembles, our versatile range of clothing is designed to elevate your everyday look. With a focus on premium fabrics, contemporary designs, and impeccable craftsmanship, we strive to offer an unparalleled shopping experience that keeps you coming back for more.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At Shoporion, our mission is to empower individuals to express their unique style and confidence through fashion. We strive to offer an exceptional selection of elegant apparel that combines quality, comfort, and timeless design.</p>
        </div>
      </div>
      
      {/* WHY CHOOSE US Section */}
      <div className='text-xl text-center py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US?'} />
      </div>
      
      {/* Reason Cards */}
      <div className='flex flex-col md:flex-row text-sm mb-20 gap-4'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>We understand that your time is precious, and shopping for the perfect outfit should be an enjoyable and hassle-free experience. That's why we're dedicated to providing you with the utmost convenience in every aspect of your shopping journey with us.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>We understand that your time is precious, and shopping for the perfect outfit should be an enjoyable and hassle-free experience. That's why we're dedicated to providing you with the utmost convenience in every aspect of your shopping journey with us.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>We take pride in our unwavering commitment to delivering the highest quality products and ensuring an exceptional shopping experience for our valued customers. Our dedication to quality assurance is reflected in every aspect of our process, from sourcing premium materials to maintaining rigorous manufacturing standards.</p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default About;
