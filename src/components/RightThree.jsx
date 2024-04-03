import React from 'react'

const RightThree = () => {
  return (
    <div className='lg:pl-[300px] md:pl-[200px] pl-2'>
      <p className='font-bold pt-8 pb-4'>Delete information within a period of time</p>
      <p className='pb-4 md:w-[550px]'>Choose a date range to delete all information from scheduled events within that period of time</p>
      <div>
      <input className=' bg-white border border-gray-400 w-[320px] h-[50px] rounded-[7px]' type="text" />
      <button className='rounded-[25px] border boder-gray bg-[#C44543] mt-4 w-[90px] pr-6 pl-4 h-[50px] text-[18px] text-white mb-9 ml-5 '>Delete</button>
      <hr className="w-[760px]"/>
      </div>
    </div>
  )
}

export default RightThree
