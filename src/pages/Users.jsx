import React from 'react'
import Sidebar from '../components/Sidebar.jsx'
import ContactList from '../components/ChatsCop/ContactList.jsx'
import { Outlet } from 'react-router-dom'
import MobileFoot from '../components/MobileFoot.jsx'
import UserChats from './Chat/UserChats.jsx'
import DefaultEmptyChat from './Chat/DefaultEmptyChat.jsx'

const Users = () => {
  return (
    <>
      <div className='flex'>
        <Sidebar />
        <MobileFoot/>
        <div className='flex flex-row w-full'>
        <ContactList />
        <div className='flex-1 flex overflow-hidden h-full max-[768px]:hidden'>
         {location.pathname.startsWith("/users") ? <UserChats className={'h-[150px] w-[250px]'} /> : <UserChats />}
        </div>
        </div>

      </div>
    </>
  )
}

export default Users