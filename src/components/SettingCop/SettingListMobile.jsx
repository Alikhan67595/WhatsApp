import React, { useState } from 'react'
import { BackIcon, Search, Close, ChatFocusIcon } from '../Icons/Icons'
import { NavLink } from 'react-router-dom'
import picture from "../../assets/picture.jpg"


export const SettingItems = ({ icon, title, desc }) => {
  return (
    <>
      <div className='w-screen flex items-center px-6 py-4 active:bg-[#1b2227cc] gap-6'>
    <div>{icon}</div>
    <div className='flex flex-col'>
      <span>{title}</span>
      <span className='text-[12px]'>{desc}</span>
    </div>
      </div>
    </>
  )
}


const SettingListMobile = () => {

  const [open, setOpen] = useState(false)
  const [animate, setAnimate] = useState(false)
  const [closeInput, setCloseInput] = useState('')


  const handleOpen = () => {
    setAnimate(true);
    setOpen(true);
  }

  const handleClose = () => {
    setAnimate(true);
    setOpen(false);
  }

  return (
    <>
      <div className='overflow-y-scroll h-screen relative'>


<div className={`fixed z-50 top-0 left-0  bg-[#0b1014] ${!open ? 'border-b-[1px]  border-[#ffffff1a]' : 'border-b-[1px]  border-[#ffffff00]'}`} >
        <nav className={` flex gap-4 p-2 pb-2 my-2   justify-center items-center w-screen relative  h-[50px] duration-200 ease-in-out `}>
          {!open
            &&
            <div className='duration-150 ease-in-out flex gap-4  p-2  justify-between items-center w-screen '>
              <NavLink to={'/chats'}><BackIcon /></NavLink>
              <div className='flex-1 text-[18px] font-medium'>Settings</div>
              <div onClick={handleOpen}><Search /></div>
            </div>
          }


          <div className={`${animate ? (open ? " slide-in" : " slide-out") : 'scale-x-0 opacity-0'}  flex w-[92%]  transition-all duration-200  justify-center items-center   origin-right gap-1 px-2 py-[6px]  bg-[#13181c] rounded-[30px] absolute top-0`}>

            {open && <div onClick={handleClose}><BackIcon /></div>}
            <input className='w-full outline-none  py-1 px-1 placeholder:text-[16px]' onChange={(e) => setCloseInput(e.target.value)} value={closeInput} type="text" placeholder='Search...' />
            {closeInput.length > 0 && <div className='cursor-pointer' onClick={() => setCloseInput('')}><Close /></div>}
          </div>


        </nav>

</div>
        {/* /////////////////////////////////////////// */}

          

        <NavLink to={'/profile'} className='mt-[60px] flex gap-5 px-5 py-4 items-center border-b-[1px] border-[#ffffff1a]'>
          <div className='size-20 rounded-full bg-cover' style={{ backgroundImage: `url(${picture})` }}></div>
          <div className='flex flex-col gap-2'>
            <div className='text-[17px]'>Ali Khan</div>
            <div className='text-[14px]'>alikhan@gmail.com</div>
            <div className='text-[12px] py-1 border-[#ffffff1a] border-[1px] rounded-[15px] text-center flex justify-center items-center'>How are you</div>
          </div>
        </NavLink>

        {/* ////////////////////////////////// */}


        <div className='flex flex-col my-1 mb-15'>
          <SettingItems icon={<ChatFocusIcon />} title={'Account'} desc={'Security, notification, change email'} />
          <SettingItems icon={<ChatFocusIcon />} title={'Privacy'} desc={'Block contacts, disappearing messages'} />
          <SettingItems icon={<ChatFocusIcon />} title={'Avatar'} desc={'Create, edit, profile photo'} />
          <SettingItems icon={<ChatFocusIcon />} title={'Lists'} desc={'Manage people and groups'} />
          <SettingItems icon={<ChatFocusIcon />} title={'Chats'} desc={'Theme, wallpapers, chats history'} />
          <SettingItems icon={<ChatFocusIcon />} title={'Broadcasts'} desc={'Manage list and send broadcasts'} />
          <SettingItems icon={<ChatFocusIcon />} title={'Notifications'} desc={'Message, group & call tones'} />
          <SettingItems icon={<ChatFocusIcon />} title={'storage and data'} desc={'Network usage, auto-download'} />
          <SettingItems icon={<ChatFocusIcon />} title={'Accessibility'} desc={'Increase contrast, animation'} />
          <SettingItems icon={<ChatFocusIcon />} title={'App language'} desc={"English (device's language)"} />
          <SettingItems icon={<ChatFocusIcon />} title={'Help and feedback'} desc={'Help center, contact us, privacy policy'} />
          <SettingItems icon={<ChatFocusIcon />} title={'Invite a friend'} />
          <SettingItems icon={<ChatFocusIcon />} title={'App updates'} />
        </div>


       

      </div>
    </>
  )
}

export default SettingListMobile