import React from 'react'
import { NavLink } from 'react-router-dom'
import profileImg from '../assets/picture.jpg'
import Mobilefooter from './MobileCompfooter.jsx'
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
  ChannelFillIcon,
  ChannelUnfillIcon

} from './Icons/Icons.jsx'



const Sidebar = () => {
  return (
    <>
      <nav className='bg-[#1d1f1f] h-screen w-[40px] py-[10px] px-[32px] border-r-[1px] border-[#ffffff1a] hidden md:flex flex-col'>
        <div className='flex flex-col gap-1 items-center h-[90%]'>

   <NavLink  className={({isActive})=>`${(isActive ? 'bg-[#272929]' : 'hover:bg-[#272929]')} size-[40px] flex justify-center items-center rounded-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#21c063]`} to={'/users'}>{({isActive})=>(isActive ? <div><ChatFocusIcon/></div> : <div><ChatUnfocusIcon/></div>)}</NavLink>
   <NavLink className={({isActive})=>`${(isActive ? 'bg-[#272929]' : 'hover:bg-[#272929]')} size-[40px] flex justify-center items-center rounded-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#21c063]`} to={'/status'}>{({isActive})=>(isActive ? <div><StatusFillIcon/></div> : <div><StatusUnfillIcon/></div>)}</NavLink>
   <NavLink className={({isActive})=>`${(isActive ? 'bg-[#272929]' : 'hover:bg-[#272929]')} size-[40px] flex justify-center items-center rounded-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#21c063]`} to={'/channels'}>{({isActive})=>(isActive ? <div><ChannelFillIcon/></div> : <div><ChannelUnfillIcon/></div>)}</NavLink>
   <NavLink className={({isActive})=>`${(isActive ? 'bg-[#272929]' : 'hover:bg-[#272929]')} size-[40px] flex justify-center items-center rounded-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#21c063]`} to={'/Communities'}>{({isActive})=>(isActive ? <div><CommunityFocus/></div> : <div><CommunityUnFocus/></div>)}</NavLink>

        </div>

{/* ///////////////////////////////////////////////////////////////////////////////// */}

        <div className='flex flex-col gap-1 items-center'>

   <NavLink className={({isActive})=>`${(isActive ? 'bg-[#272929]' : 'hover:bg-[#272929]')} size-[40px] flex justify-center items-center rounded-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#21c063]`} to={'/setting'}>{({isActive})=>(isActive ? <div><SettingsIcon/></div> : <div><SettingunFill/></div>)}</NavLink>

   <NavLink className={({isActive})=>`${(isActive ? 'bg-[#272929]' : 'hover:bg-[#272929]')} size-[40px] flex justify-center items-center rounded-full overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#21c063]`} to={'/profile'}>{({isActive})=>(<img className={`${isActive ? 'outline-[#dfdfdf] outline-[2px]' : 'outline-none'} size-[28px] rounded-full bg-cover bg-contain`} src={profileImg} alt="" />)}</NavLink>

        </div>
      </nav>

      
    </>
  )git
}

export default Sidebar