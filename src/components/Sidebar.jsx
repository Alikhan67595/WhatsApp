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

   <NavLink  className={({isActive})=>`${(isActive ? 'bg-[#272929]' : 'hover:bg-[#272929]')} size-[40px] flex justify-center items-center rounded-full cursor-pointer`} to={'/chats'}>{({isActive})=>(isActive ? <button><ChatFocusIcon/></button> : <button><ChatUnfocusIcon/></button>)}</NavLink>
   <NavLink className={({isActive})=>`${(isActive ? 'bg-[#272929]' : 'hover:bg-[#272929]')} size-[40px] flex justify-center items-center rounded-full cursor-pointer`} to={'/status'}>{({isActive})=>(isActive ? <button><StatusFillIcon/></button> : <button><StatusUnfillIcon/></button>)}</NavLink>
   <NavLink className={({isActive})=>`${(isActive ? 'bg-[#272929]' : 'hover:bg-[#272929]')} size-[40px] flex justify-center items-center rounded-full cursor-pointer`} to={'/channels'}>{({isActive})=>(isActive ? <button><ChannelFillIcon/></button> : <button><ChannelUnfillIcon/></button>)}</NavLink>
   <NavLink className={({isActive})=>`${(isActive ? 'bg-[#272929]' : 'hover:bg-[#272929]')} size-[40px] flex justify-center items-center rounded-full cursor-pointer`} to={'/Communities'}>{({isActive})=>(isActive ? <button><CommunityFocus/></button> : <button><CommunityUnFocus/></button>)}</NavLink>

        </div>

{/* ///////////////////////////////////////////////////////////////////////////////// */}

        <div className='flex flex-col gap-1 items-center'>

   <NavLink className={({isActive})=>`${(isActive ? 'bg-[#272929]' : 'hover:bg-[#272929]')} size-[40px] flex justify-center items-center rounded-full cursor-pointer`} to={'/setting'}>{({isActive})=>(isActive ? <button><SettingsIcon/></button> : <button><SettingunFill/></button>)}</NavLink>

   <NavLink className={({isActive})=>`${(isActive ? 'bg-[#272929]' : 'hover:bg-[#272929]')} size-[40px] flex justify-center items-center rounded-full overflow-hidden`} to={'/profile'}>{({isActive})=>(<img className={`${isActive ? 'outline-[#dfdfdf] outline-[2px]' : 'outline-none'} size-[28px] rounded-full object-fill`} src={profileImg} alt="" />)}</NavLink>

        </div>
      </nav>

      
    </>
  )
}

export default Sidebar