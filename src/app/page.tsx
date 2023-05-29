import Image from "next/image";
import { RiArrowDropDownFill } from "react-icons/ri";
import { GrAppsRounded } from "react-icons/gr";
import { FiEdit } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { BiBell } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { BsPlusSquare } from "react-icons/bs";
import NavBar1 from "./NavBar1";
import NavBar2 from "./NavBar2";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 text-black bg-white ">
      
      <NavBar1 />

      {/* <div className="flex justify-between items-center p-6 w-full bg-yellow-200 border-b">
        <div className="flex items-center gap-3">
          <button className="focus:bg-violet-400 p-2 rounded-3xl">Project Planning</button>
          <button className="focus:bg-violet-400 p-2 rounded-3xl">Weekly Planning Planning</button>
          <button className="focus:bg-violet-400 p-2 rounded-3xl"> Planning Insights</button>
        </div>
        <div className="flex items-center bg-white rounded-3xl p-2 gap-2">
          <FiSearch />
          <input type="text" className="border-none outline-none"/>
        </div>
      </div> */}
      <NavBar2/>
      <div className="flex justify-between items-center p-6 w-full bg-yellow-200 border-b">
        <div className="flex items-center gap2
        ">
          <p>April 10-17</p>
          <GrFormPrevious/>
          <p>Today</p>
          <GrFormNext/>
        </div>
        <div className="flex gap-1  items-center py-2 px-8 bg-blue-300 rounded-3xl ">
        <BsPlusSquare/>
        <p >Add Period</p>
        </div>
      </div>
    </main>
  );
}
