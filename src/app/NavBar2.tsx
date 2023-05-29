import React from 'react'
import { FiSearch } from 'react-icons/fi'



export default function NavBar2() {
  return (
    <div className="flex flex-col justify-between items-center p-6 w-full ">
        <div className="flex justify-between items-center p-6 w-full  ">
    <div className="flex items-center gap-3">
      <button className="focus:bg-violet-400 p-2 rounded-md">Project Planning</button>
      <button className="focus:bg-violet-400 p-2 rounded-md">Weekly Planning Planning</button>
      <button className="focus:bg-violet-400 p-2 rounded-md"> Planning Insights</button>
    </div>
    <div className="flex items-center bg-white rounded-3xl p-2 gap-2 border-2">
      <FiSearch />
      <input type="text" className="border-none outline-none"/>
    </div>
    </div>
    <hr className='w-full bg-black' />

  </div>
  )
}