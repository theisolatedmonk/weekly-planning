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
import NavBar3 from "./NavBar3";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-2 text-black bg-white ">
      
      <NavBar1 />
      <NavBar2/>
      <NavBar3/>
    </main>
  );
}
