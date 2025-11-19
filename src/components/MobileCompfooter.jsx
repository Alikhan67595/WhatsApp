import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  CommunityUnFocus,
  CommunityFocus,
  PhoneFillicon,
  PhoneUnfill,
  StatusFillIcon,
  StatusUnfillIcon,
  ChatFocusIcon,
  ChatUnfocusIcon,
  SettingunFill,
  SettingsIcon,
} from './Icons/Icons.jsx'



const MobileCompfooter = ({to, activeIcon, inactiveIcon, className='', title}) => {
  return (
    <>

    <NavLink to={to} className="w-[18%] min-[425px]:w-[15%] ">
    {({isActive})=>(
      <div className='flex flex-col justify-center items-center'>
        <span className={`w-full   rounded-[18px] flex justify-center items-center text-center`}>

        <span className={`${isActive ? 'grow-width bg-[#103629] w-full' : 'w-[80%]'} ${className}    rounded-[18px] flex justify-center items-center text-center`}>{isActive ? activeIcon : inactiveIcon}</span>
        </span>
        <span className='text-[12px] font-semibold'>{title}</span>
      </div>
    )}
    </NavLink>

    </>
  )
}

export default MobileCompfooter