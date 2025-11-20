import React, { useState } from 'react'
import { BackIcon, Search, Close, ChatFocusIcon } from '../Icons/Icons'
import { NavLink } from 'react-router-dom'
import picture from "../../assets/picture.jpg"
import Account from './SettingSubComp/Account.jsx'
import Accessibility from './SettingSubComp/Accessitibility.jsx'
import AppLanguage from './SettingSubComp/AppLanguages.jsx'
import AppUpdate from './SettingSubComp/AppUpdate.jsx'
import Avatar from './SettingSubComp/Avatar.jsx'
import BroadCast from './SettingSubComp/BroadCast.jsx'
import HelpAndFeedback from './SettingSubComp/HelpAndFeedback.jsx'
import InviteFriend from './SettingSubComp/InviteFriend.jsx'
import List from './SettingSubComp/List.jsx'
import Notification from './SettingSubComp/Notification.jsx'
import Privacy from './SettingSubComp/Privacy.jsx'
import StorageAndData from './SettingSubComp/StorageAndData.jsx'
import SubChats from './SettingSubComp/SubChats.jsx'







export const SettingItems = ({ onClick, icon, title, desc, Component, isOpen, setIsOpen }) => {

  return (
    <>
      <div onClick={onClick} className='cursor-pointer relative w-screen flex items-center px-6 py-4 active:bg-[#1b2227cc] hover:bg-[#1b2227cc] duration-100 ease-in-out gap-6'>
        <div>{icon}</div>
        <div className='flex flex-col'>
          <span>{title}</span>
          <span className='text-[12px]'>{desc}</span>
        </div>

        {/* /////////////////////////////////////////////// */}

        {/* Setting Sub-Component div */}

        
          <div className={`${isOpen ? 'subSlide-in' : 'subSlide-out'}  h-screen w-screen fixed z-100 top-0 left-0 bg-[#0b1014]`}>
            <div className='border-b-[1px]  border-[#ffffff1a] flex gap-4  p-2 py-5  justify-between items-center w-screen '>
                <button className='cursor-pointer' onClick={(e)=>{e.stopPropagation(),setIsOpen(false)}}><BackIcon /></button>
                <div className='flex-1 text-[18px] font-medium'>{title}</div>
              </div>
            <div>{Component}</div>
          </div>

        {/* //////////////////////////////////////////////// */}
      </div>
    </>
  )
}



const SubComponent = () => {
  return (
    <>

    </>
  )
}


const SettingListMobile = () => {

  const [open, setOpen] = useState(false)
  const [animate, setAnimate] = useState(false)
  const [closeInput, setCloseInput] = useState('')

  ///////////////////////////////////////////////////////////////////////////////////////////

  const [account, setAccount] = useState(false)
  const [privacy, setPrivacy] = useState(false)
  const [avatar, setAvatar] = useState(false)
  const [list, setList] = useState(false)
  const [subChats, setSubChats] = useState(false)
  const [broadCast, setBroadCast] = useState(false)
  const [notification, setNotification] = useState(false)
  const [storageAndData, setStorageAndData] = useState(false)
  const [accessibility, setAccessibility] = useState(false)
  const [appLanguage, setAppLanguage] = useState(false)
  const [helpAndFeedback, setHelpAndFeedback] = useState(false)
  const [inviteFriend, setInviteFriend] = useState(false)
  const [appUpdate, setAppUpdate] = useState(false)

  ///////////////////////////////////////////////////////////////////////////////////////////



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
          <SettingItems onClick={() => setAccount(true)} isOpen={account} setIsOpen={setAccount} Component={<Account setAccount={setAccount} />} icon={<ChatFocusIcon />} title={'Account'} desc={'Security, notification, change email'} />
          <SettingItems onClick={() => setPrivacy(true)} isOpen={privacy} setIsOpen={setPrivacy} Component={<Privacy setPrivacy={setPrivacy} />} icon={<ChatFocusIcon />} title={'Privacy'} desc={'Block contacts, disappearing messages'} />
          <SettingItems onClick={() => setAvatar(true)} isOpen={avatar} setIsOpen={setAvatar} Component={<Avatar setAvatar={setAvatar} />} icon={<ChatFocusIcon />} title={'Avatar'} desc={'Create, edit, profile photo'} />
          <SettingItems onClick={() => setList(true)} isOpen={list} setIsOpen={setList} Component={<List setList={setList} />} icon={<ChatFocusIcon />} title={'Lists'} desc={'Manage people and groups'} />
          <SettingItems onClick={() => setSubChats(true)} isOpen={subChats} setIsOpen={setSubChats} Component={<SubChats setSubChats={setSubChats} />} icon={<ChatFocusIcon />} title={'Chats'} desc={'Theme, wallpapers, chats history'} />
          <SettingItems onClick={() => setBroadCast(true)} isOpen={broadCast} setIsOpen={setBroadCast} Component={<BroadCast setBroadCast={setBroadCast} />} icon={<ChatFocusIcon />} title={'Broadcasts'} desc={'Manage list and send broadcasts'} />
          <SettingItems onClick={() => setNotification(true)} isOpen={notification} setIsOpen={setNotification} Component={<Notification setNotification={setNotification} />} icon={<ChatFocusIcon />} title={'Notifications'} desc={'Message, group & call tones'} />
          <SettingItems onClick={() => setStorageAndData(true)} isOpen={storageAndData} setIsOpen={setStorageAndData} Component={<StorageAndData setStorageAndData={setStorageAndData} />} icon={<ChatFocusIcon />} title={'storage and data'} desc={'Network usage, auto-download'} />
          <SettingItems onClick={() => setAccessibility(true)} isOpen={accessibility} setIsOpen={setAccessibility} Component={<Accessibility setAccessibility={setAccessibility} />} icon={<ChatFocusIcon />} title={'Accessibility'} desc={'Increase contrast, animation'} />
          <SettingItems onClick={() => setAppLanguage(true)} isOpen={appLanguage} setIsOpen={setAppLanguage} Component={<AppLanguage setAppLanguage={setAppLanguage} />} icon={<ChatFocusIcon />} title={'App language'} desc={"English (device's language)"} />
          <SettingItems onClick={() => setHelpAndFeedback(true)} isOpen={helpAndFeedback} setIsOpen={setHelpAndFeedback} Component={<HelpAndFeedback setHelpAndFeedback={setHelpAndFeedback} />} icon={<ChatFocusIcon />} title={'Help and feedback'} desc={'Help center, contact us, privacy policy'} />
          <SettingItems onClick={() => setInviteFriend(true)} isOpen={inviteFriend} setIsOpen={setInviteFriend} Component={<InviteFriend setInviteFriend={setInviteFriend} />} icon={<ChatFocusIcon />} title={'Invite a friend'} />
          <SettingItems onClick={() => setAppUpdate(true)} isOpen={appUpdate} setIsOpen={setAppUpdate} Component={<AppUpdate setAppUpdate={setAppUpdate} />} icon={<ChatFocusIcon />} title={'App updates'} />
        </div>




      </div>



    </>
  )
}

export default SettingListMobile