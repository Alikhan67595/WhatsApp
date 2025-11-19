import React, { useState, useEffect, useRef } from "react";
import MoreIcon from "../Icons/MoreIcon.jsx";
import {
  NewGroupRefreshedIcon,
  StarRefreshedIcon,
  CheckRefreshedIcon,
  LockIcon,
  ExitRefreshedIcon,
  Bin,
  Folder,
  Camera,
  View
} from '../Icons/Icons.jsx'
import { NavLink } from "react-router-dom";
import picture from '../../assets/picture.jpg'




// --- Dropdown Menu Component ---
const DropdownMenu = ({ children, trigger }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        {trigger}
      </div>

      {isOpen && (
        <div className="min-[768px]:p-2  max-[768px]:py-4 absolute max-[768px]:bg-[#13181c] max-[768px]:right-0 w-45 rounded-2xl  bg-[#1d1f1f]  z-60 animate-in fade-in-0 zoom-in-95 top-[60%] left-[50%] max-[768px]:left-[30%]">
          {children}
        </div>
      )}
    </div>
  );
};

// --- Dropdown Item ---
const DropdownMenuItem = ({ children, className = '' }) => (
  <div
    className={`${className} flex  gap-x-2  items-center px-3  py-2 text-[15px] cursor-pointer font-semibold text-[#FFFFFF99] max-[768px]:text-[white]  transition-colors duration-150 min-[768px]:rounded-lg`}
  >
    {children}
  </div>
);

// --- Dropdown Separator ---
const DropdownMenuSeparator = () => <div className="my-1 h-px w-[90%] bg-zinc-700 m-auto " />;

// --- Exported Dropdown ---
export default function Dropdown({setViewphoto}) {
  return (
    <>
    <div className="flex items-center justify-center ">
      <DropdownMenu
        trigger={
          <div className="flex relative justify-center items-center ">
                            <span className="flex size-30 bg-amber-400 rounded-full bg-cover justify-center items-center" style={{ backgroundImage: `url(${picture})` }}><div className='h-full w-full flex flex-col justify-center items-center leading-[16px] text-[14px] font-medium hover:bg-[#000000b9] rounded-full text-center opacity-0 hover:opacity-100 duration-150 ease-in-out transition-all select-none cursor-pointer'> 
                                <span>change</span>
                                 <span>profile</span>  
                                 <span>photo</span>  
                                 </div></span>
                        </div>
        }
      >
        <div className="flex flex-col space-y-1  ">

          <NavLink  onClick={()=>setViewphoto(true)}>
            <DropdownMenuItem className='hover:bg-[#343535]'>
              <span><View /></span>
              <span>View photo</span>
            </DropdownMenuItem>
          </NavLink>
          {/* ///////////////// */}
          <NavLink>
            <DropdownMenuItem className='hover:bg-[#343535] '>
              <span><Camera /></span>
              <span>Take photo</span>
            </DropdownMenuItem>
          </NavLink>

          {/* ///////////////////// */}
          <NavLink>
            <DropdownMenuItem className='hover:bg-[#343535] '>
              <span><Folder /></span>
              <span>Upload photo</span>
            </DropdownMenuItem>
          </NavLink>
          {/* //////////////////////////// */}

          <DropdownMenuSeparator />

        

          <NavLink>
            <DropdownMenuItem className='hover:bg-[#281c20] hover:text-[#fa99a4] max-[768px]:text-[#fa99a4]'>

              <span><Bin className="max-[768px]:text-[#fa99a4]" /></span>
              <span className="max-[768px]:text-[#fa99a4]">Remove photo</span>
            </DropdownMenuItem>
          </NavLink>
          {/* ///////////////////////////////// */}

        </div>


      </DropdownMenu>

    </div>


        


</>

  );
}
