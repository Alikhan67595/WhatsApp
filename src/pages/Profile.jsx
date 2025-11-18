import React from 'react'
import Sidebar from '../components/Sidebar.jsx'
import Profilelist from '../components/ProfileCop/Profilelist.jsx'

const Profile = () => {
  return (
    <>
      <div className='flex w-screen h-screen overflow-hidden'>
    <div className=''><Sidebar/></div>

    <div className='flex-1 max-[768px]:hidden'>
      <Profilelist/>
    </div> 


    </div>
    
    </>
  )
}

export default Profile