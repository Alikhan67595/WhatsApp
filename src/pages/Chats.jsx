import React from 'react'
import Sidebar from '../components/Sidebar.jsx'
import ContactList from '../components/ChatsCop/ContactList.jsx'
import { Outlet } from 'react-router-dom'
import MobileFoot from '../components/MobileFoot.jsx'

const Chats = () => {
  return (
    <>
      <div className='flex'>
        <Sidebar />
        <MobileFoot/>
        <div className='flex flex-row w-full'>
        <ContactList />
        <div className=''></div>
        </div>

      </div>
    </>
  )
}

export default Chats