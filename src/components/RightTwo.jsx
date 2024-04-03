import React from 'react'

const RightTwo = () => {
  return (
    <div>
      <div className='lg:pl-[300px]  lg:pt-7 md:pt-6 md:pl-[200px] md:w-[550px] pt-6 pr-5 pl-2 lg:pr-0 md:pr-0 '>
        <p className='font-bold lg:pb-4 md:pb-4 lg:w-[550px] pb-4'>Delete information for specific invitees</p>
        <p className='lg:w-[760px] text-[15.5px] lg:pb-4 md:w-[550px] md:pb-4 pb-4'>Enter an invitee's email to delete all of their personally identifiable information from your organization and integrations. During the data deletion process, Calendly removes the deleted invitee from their spot on group events and cancels both pending and upcoming events with them.</p>
        <p>
            <textarea className=' bg-white border border-gray-400 lg:w-[760px] lg:h-[100px] rounded-[15px] md:w-[550px] md:h-[100px] w-[400px] h-[100px]'  type="text" />
        </p>
        <div className='flex'>
        <button className='rounded-[25px] border boder-gray bg-[#C44543] mt-4 w-[90px] pr-6 pl-4 h-[50px] text-[18px] text-white mb-10 '>Delete</button>       
        <div className='lg:ml-[750px] md:ml-[400px] relative md:mt-3 ml-[200px] lg:mt-0 mt-4'>
          <div className='bg-red-500 rounded-[25px] w-[25px] h-[25px] text-center text-white lg:absolute lg:top-0 lg:right-0 lg:-mt-2 lg:-mr-2 md:top-0 md:right-0 md:absolute md:-mt-2 md:-mr-2 absolute top-0 right-0 -mt-2'>10</div>
        <button className='border bg-[#353F4E] lg:pl-3 lg:pr-3 lg:h-[50px] text-white rounded-lg border-gray-700 shadow-md shadow-gray-600 md:pl-3 md:pr-3 md:h-[50px] pl-2 pr-2'>Getting started</button>
        </div>
        </div>
        <hr className="w-[760px] mb-[]"/>
      </div>
      
    </div>
  )
}

export default RightTwo
