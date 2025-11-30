import React, { useState, useEffect, useRef } from "react";
import MoreIcon from "../Icons/MoreIcon";
import {
  NewGroupRefreshedIcon,
  StarRefreshedIcon,
  CheckRefreshedIcon,
  LockIcon,
  ExitRefreshedIcon
} from '../Icons/Icons.jsx'
import { NavLink, useNavigate } from "react-router-dom";
import cookie from 'js-cookie'
import { handelLogout } from "../logut.js";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/auth/userSlice.js";




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
        <div className="min-[768px]:p-2  max-[768px]:py-4 absolute max-[768px]:bg-[#13181c] max-[768px]:right-0 min-[768px]:right-[5] mt-3 w-50 rounded-2xl  bg-[#1d1f1f]   ring-opacity-50  z-50 animate-in fade-in-0 zoom-in-95">
          {children}
        </div>
      )}
    </div>
  );
};

// --- Dropdown Item ---
const DropdownMenuItem = ({ children, className = '' }) => (
  <div
    className={`${className} flex  gap-x-2  items-center px-3  py-3 text-[15px] cursor-pointer font-semibold text-[#FFFFFF99] max-[768px]:text-[white]  transition-colors duration-150 min-[768px]:rounded-lg`}
  >
    {children}
  </div>
);

// --- Dropdown Separator ---
const DropdownMenuSeparator = () => <div className="my-1 h-px w-[90%] bg-zinc-700 m-auto " />;

// --- Exported Dropdown ---
export default function Dropdown() {
  const navigate = useNavigate();
   const dispatch = useDispatch()
  return (
    <div className="flex items-center justify-center ">
      <DropdownMenu
        trigger={
          <div className="p-0 m-0 w-max h-max cursor-pointer">
            <MoreIcon className="h-6 w-6 text-white " />
          </div>
        }
      >
        <div className="flex flex-col space-y-1  max-[768px]:hidden">

          <NavLink>
            <DropdownMenuItem className='hover:bg-[#343535]'>
              <span><NewGroupRefreshedIcon /></span>
              <span>New group</span>
            </DropdownMenuItem>
          </NavLink>
          {/* ///////////////// */}
          <NavLink>
            <DropdownMenuItem className='hover:bg-[#343535] '>
              <span><StarRefreshedIcon /></span>
              <span>Starred messages</span>
            </DropdownMenuItem>
          </NavLink>

          {/* ///////////////////// */}
          <NavLink>
            <DropdownMenuItem className='hover:bg-[#343535] '>
              <span><CheckRefreshedIcon /></span>
              <span>Select chats</span>
            </DropdownMenuItem>
          </NavLink>
          {/* //////////////////////////// */}

          <DropdownMenuSeparator />

          {/* //////////////////////// */}
          <NavLink>
            <DropdownMenuItem className='hover:bg-[#343535]'>
              <span><LockIcon /></span>
              <span>App lock</span>
            </DropdownMenuItem>
          </NavLink>
          {/* ///////////////////////////////// */}

          <div onClick={()=> {handelLogout(),dispatch(logoutUser()),navigate('/auth/login',{replace:true})}} >
            <DropdownMenuItem className='hover:bg-[#281c20] hover:text-[#fa99a4]'>

              <span><ExitRefreshedIcon className="" /></span>
              <span className="">Log out</span>
            </DropdownMenuItem>
          </div>
          {/* ///////////////////////////////// */}

        </div>


        <div className="min-[768px]:hidden">

          <NavLink>
            <DropdownMenuItem className='active:bg-[#1b2227cc]'>
              <span className="">New group</span>
            </DropdownMenuItem>
          </NavLink>


          <NavLink>
            <DropdownMenuItem className='active:bg-[#1b2227cc]'>
              <span className="">New community</span>
            </DropdownMenuItem>
          </NavLink>


          <NavLink>
            <DropdownMenuItem className='active:bg-[#1b2227cc]'>
              <span className="">Broadcast</span>
            </DropdownMenuItem>
          </NavLink>


          <NavLink>
            <DropdownMenuItem className='active:bg-[#1b2227cc]'>
              <span className="">Linked devices</span>
            </DropdownMenuItem>
          </NavLink>


          <NavLink>
            <DropdownMenuItem className='active:bg-[#1b2227cc]'>
              <span className="">Starred</span>
            </DropdownMenuItem>
          </NavLink>

          <NavLink>
            <DropdownMenuItem className='active:bg-[#1b2227cc]'>
              <span className="">Read all</span>
            </DropdownMenuItem>
          </NavLink>

          <NavLink to={'/setting'}>
            <DropdownMenuItem className='active:bg-[#1b2227cc]'>
              <span className="">Settings</span>
            </DropdownMenuItem>
          </NavLink>

          <NavLink>
            <DropdownMenuItem className='active:bg-[#1b2227cc]'>
              <span className="">Switch accounts</span>
            </DropdownMenuItem>
          </NavLink>


        </div>



      </DropdownMenu>
    </div>
  );
}
