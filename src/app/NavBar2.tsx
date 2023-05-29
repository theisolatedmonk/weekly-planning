import React from 'react'
import { FiSearch } from 'react-icons/fi'



export default function NavBar2() {
  return (
    <div className="flex justify-between items-center p-6 w-full bg-yellow-200 border-b">
    <div className="flex items-center gap-3">
      <button className="focus:bg-violet-400 p-2 rounded-3xl">Project Planning</button>
      <button className="focus:bg-violet-400 p-2 rounded-3xl">Weekly Planning Planning</button>
      <button className="focus:bg-violet-400 p-2 rounded-3xl"> Planning Insights</button>
    </div>
    <div className="flex items-center bg-white rounded-3xl p-2 gap-2">
      <FiSearch />
      <input type="text" className="border-none outline-none"/>
    </div>
  </div>
  )
}