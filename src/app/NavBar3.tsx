import React from 'react'

import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { BsPlusSquare } from "react-icons/bs";

export default function NavBar3() {
  return (
    <div className="flex justify-between items-center p-6 w-full ">
        <div className="flex items-center gap2
        ">
          <p className='font-bold'>April 10-17</p>
          <GrFormPrevious/>
          <p>Today</p>
          <GrFormNext/>
        </div>
        <div className="flex gap-1  items-center py-2 px-8 bg-[#5364FF] rounded-3xl ">
        <BsPlusSquare fill='white'/>
        <p className='text-white'>Add Period</p>
        </div>
      </div>
  )
}