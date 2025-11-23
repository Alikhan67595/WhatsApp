import React, { useState, useEffect, useRef } from "react";
import MoreIcon from "../Icons/MoreIcon.jsx";
import { BlockIcon, ClearIcon, CloseCircleIcon, DeleteIcon, DisappearingMessagesIcon, HeartIcon, InfoIcon, MuteNotificationsIcon, ThumbsDownIcon, CheckRefreshedIcon } from '../Icons/Icons.jsx'
import { NavLink } from "react-router-dom";





// --- Dropdown Menu Component ---
const UserChatDropDownMenu = ({ children, trigger }) => {
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
        <div className="min-[768px]:p-2  max-[768px]:py-4   absolute max-[768px]:bg-[#13181c] max-[768px]:right-0 min-[768px]:right-[0] mt-3 w-60 max-[768px]:w-50 rounded-2xl  bg-[#1d1f1f]   ring-opacity-50  z-50 animate-in fade-in-0 zoom-in-95">
          {children}
        </div>
      )}
    </div>
  );
};

// --- Dropdown Item ---
const DropdownMenuItem = ({ children, className = '' }) => (
  <div
    className={`${className} flex  gap-x-2  items-center px-3  py-2 max-[768px]:py-4 text-[15px] cursor-pointer font-semibold text-[#FFFFFF99] max-[768px]:text-[white]  transition-colors duration-150 min-[768px]:rounded-lg`}
  >
    {children}
  </div>
);

// --- Dropdown Separator ---
const DropdownMenuSeparator = () => <div className="my-1 h-px w-[90%] bg-zinc-700 m-auto " />;

// --- Exported Dropdown ---
export default function Dropdown() {
  return (
    <div className="flex items-center justify-center ">
      <UserChatDropDownMenu
        trigger={
          <div className="p-0 m-0 w-max h-max cursor-pointer">
            <MoreIcon className="h-6 w-6 text-white " />
          </div>
        }
      >
        <div className="flex flex-col   max-[768px]:hidden">

          <NavLink>
            <DropdownMenuItem className='hover:bg-[#343535]'>
              <span><InfoIcon/></span>
              <span>Contact info</span>
            </DropdownMenuItem>
          </NavLink>
          {/* ///////////////// */}
          <NavLink>
            <DropdownMenuItem className='hover:bg-[#343535] '>
              <span><CheckRefreshedIcon /></span>
              <span>Select messages</span>
            </DropdownMenuItem>
          </NavLink>

          {/* ///////////////////// */}
          <NavLink>
            <DropdownMenuItem className='hover:bg-[#343535] '>
              <span><MuteNotificationsIcon /></span>
              <span>Mute notifications</span>
            </DropdownMenuItem>
          </NavLink>
          {/* //////////////////////////// */}


          <NavLink>
            <DropdownMenuItem className='hover:bg-[#343535] '>
              <span><DisappearingMessagesIcon /></span>
              <span>Disappearing messages</span>
            </DropdownMenuItem>
          </NavLink>


          {/* ///////////////////// */}


          <NavLink>
            <DropdownMenuItem className='hover:bg-[#343535] '>
              <span><HeartIcon /></span>
              <span>Add to favorites</span>
            </DropdownMenuItem>
          </NavLink>


          {/* ///////////////////// */}


          <NavLink>
            <DropdownMenuItem className='hover:bg-[#343535] '>
              <span><CloseCircleIcon /></span>
              <span>Close chat</span>
            </DropdownMenuItem>
          </NavLink>

          {/* ///////////////////// */}



          <DropdownMenuSeparator />

          {/* //////////////////////// */}


          <NavLink>
            <DropdownMenuItem className='hover:bg-[#281c20] hover:text-[#fa99a4]'>

              <span><ThumbsDownIcon className="" /></span>
              <span className="">Report</span>
            </DropdownMenuItem>
          </NavLink>


          {/* ///////////////////////////////// */}


          <NavLink>
            <DropdownMenuItem className='hover:bg-[#281c20] hover:text-[#fa99a4]'>

              <span><BlockIcon className="" /></span>
              <span className="">Block</span>
            </DropdownMenuItem>
          </NavLink>


          {/* ///////////////////////////////// */}


          <NavLink>
            <DropdownMenuItem className='hover:bg-[#281c20] hover:text-[#fa99a4]'>

              <span><ClearIcon className="" /></span>
              <span className="">Clear chat</span>
            </DropdownMenuItem>
          </NavLink>



          {/* ///////////////////////////////// */}


          <NavLink>
            <DropdownMenuItem className='hover:bg-[#281c20] hover:text-[#fa99a4]'>

              <span><DeleteIcon className="" /></span>
              <span className="">Delete chat</span>
            </DropdownMenuItem>
          </NavLink>


          {/* ///////////////////////////////// */}


        

        </div>


        <div className="min-[768px]:hidden">

          <NavLink>
            <DropdownMenuItem className='active:bg-[#1b2227cc]'>
              <span className="">View contsct</span>
            </DropdownMenuItem>
          </NavLink>


          <NavLink>
            <DropdownMenuItem className='active:bg-[#1b2227cc]'>
              <span className="">Search</span>
            </DropdownMenuItem>
          </NavLink>


          <NavLink>
            <DropdownMenuItem className='active:bg-[#1b2227cc]'>
              <span className="">Report</span>
            </DropdownMenuItem>
          </NavLink>


          <NavLink>
            <DropdownMenuItem className='active:bg-[#1b2227cc]'>
              <span className="">Mute notifications</span>
            </DropdownMenuItem>
          </NavLink>


          <NavLink>
            <DropdownMenuItem className='active:bg-[#1b2227cc]'>
              <span className="">Disappearing messages</span>
            </DropdownMenuItem>
          </NavLink>

          <NavLink>
            <DropdownMenuItem className='active:bg-[#1b2227cc]'>
              <span className="">Chat theme</span>
            </DropdownMenuItem>
          </NavLink>

          <NavLink >
            <DropdownMenuItem className='active:bg-[#1b2227cc]'>
              <span className="">More</span>
            </DropdownMenuItem>
          </NavLink>



        </div>



      </UserChatDropDownMenu>
    </div>
  );
}
