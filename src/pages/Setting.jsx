import React from 'react'
import Sidebar from '../components/Sidebar.jsx'
import SettingList from '../components/SettingCop/SettingList.jsx'
import SettingListMobile from '../components/SettingCop/SettingListMobile.jsx'


const Setting = () => {
  return (
    <>
    <div className='flex w-screen h-screen overflow-hidden'>
    <div className=''><Sidebar/></div>

    <div className='flex-1 max-[768px]:hidden'>
      <SettingList/>
    </div> 

    <div className=' min-[768px]:hidden'>
    <SettingListMobile/>
    </div>

    </div>
    
    </>
  )
}

export default Setting