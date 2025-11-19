import React from 'react'
import Sidebar from '../components/Sidebar.jsx'
import MobileFoot from '../components/MobileFoot.jsx'

const CallLog = () => {
  return (
    <>
    <div className='md:hidden flex'>
    <Sidebar/>
    <MobileFoot/>
    </div>
    </>
  )
}

export default CallLog