import React from "react";

import Image from "next/image";
import { RiArrowDropDownFill } from "react-icons/ri";
import { GrAppsRounded } from "react-icons/gr";
import { FiEdit } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { BiBell } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";

export default function NavBar1() {
  return (
    <div className="flex justify-between items-center p-6 w-full shadow-[0px_2px_15px_rgba(0,0,0,0.15)]">
      <div className="flex flex-col">
        <div className=" flex gap-1 items-center">
          <p>Educator</p>
          <RiArrowDropDownFill />
        </div>
        <p className="text-sm">Arthshala</p>
      </div>
      <div className="flex gap-4 justify-between">
        <div className="flex gap-1 items-center hover:border-b-[#5364FF] hover:border-b-2">
          <GrAppsRounded />
          <p>Planning</p>
        </div>
        <div className="flex gap-1 items-center  hover:border-b-[#5364FF] hover:border-b-2 ">
          <FiEdit />
          <p>Documentation</p>
        </div>
        <div className="flex gap-1 items-center  hover:border-b-[#5364FF] hover:border-b-2">
          <IoDocumentTextOutline />
          <p>Housekeeping</p>
        </div>
      </div>
      <div className="flex gap-2">
        <FiSearch />
        <BiBell />
        <div className="flex gap-1 items-center">
          <FaUserCircle />
          <RiArrowDropDownFill />
        </div>
      </div>
    </div>
  );
}
