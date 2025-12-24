import {useState} from 'react'
import Sidebar from '../components/Sidebar.jsx'
import ContactList from '../components/ChatsCop/ContactList.jsx'
import { Outlet } from 'react-router-dom'
import MobileFoot from '../components/MobileFoot.jsx'
import UserChats from './Chat/UserChats.jsx'
import DefaultEmptyChat from './Chat/DefaultEmptyChat.jsx'

const Users = () => {

  const [isUserChats, setIsUserChats] = useState(false)
      // const [selectContacts, setselectContacts] = useState(null)

  return (
    <>
      <div className='flex'>
        <Sidebar />
        <MobileFoot/>
        <div className='flex flex-row w-full'>
        <ContactList isUserChats={isUserChats} setIsUserChats={setIsUserChats} />

{/* /////////////////////////////////// */}
        <div className='flex-1 flex overflow-hidden h-full '>
          {!isUserChats ?
           <DefaultEmptyChat />
           :
          <UserChats isUserChats={isUserChats} setIsUserChats={setIsUserChats} className={'h-[150px] w-[250px]'} />}
        </div>
{/* ///////////////// */}

        </div>

      </div>
    </>
  )
}

export default Users