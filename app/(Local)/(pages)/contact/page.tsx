import Location from '@/app/Components/icon/location'
import Message from '@/app/Components/icon/message'
import Phone from '@/app/Components/icon/phone'
import React from 'react'


export default function Contact() {
  return (
    <div className='  my-[4rem]'>
      <div>

        <p className=' font-medium text-gray-500 text-lg'>Contact us</p>
        <h1 className='mt-2 text-2xl font-semibold text-gray-800 md:text-3xl'>Chat to our friendly team</h1>
        <p className='mt-3 text-gray-500'>We’d love to hear from you. Please fill out this form or shoot us an email.</p>
      </div>
      <div className=' grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3'>
        <div>
          <span className=' inline-block p-3 text-gray-500 rounded-full bg-gray-100/80'><Message/></span>
          <h2 className='mt-4 text-base font-medium text-gray-800'>Email</h2>
          <p className=' text-gray-500 text-sm mt-2'>Our friendly team is here to help.</p>
          <p className=' text-gray-500 text-sm mt-2'>bariabdalrhman@gmail.com</p>
        </div>
        <div>
          <span className=' inline-block p-3 text-gray-500 rounded-full bg-gray-100/80'><Phone/></span>
          <h2 className='mt-4 text-base font-medium text-gray-800'>Phone</h2>
          <p className=' text-gray-500 text-sm mt-2'>+963939176488</p>
        </div>
        <div>
          <span className=' inline-block p-3 text-gray-500 rounded-full bg-gray-100/80'><Location/></span>
          <h2 className='mt-4 text-base font-medium text-gray-800'>Office</h2>
          <p className=' text-gray-500 text-sm mt-2'>Syria, Damascus</p>
        </div>
      </div>
    </div>
  )
}
