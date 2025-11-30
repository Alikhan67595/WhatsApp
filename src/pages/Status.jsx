import React from 'react'
import Sidebar from '../components/Sidebar.jsx'
import MobileFoot from '../components/MobileFoot.jsx'
import { handelLogout } from "../components/logut.js";

const Status = () => {
  return (
    <>
    <div className='flex'>
     <Sidebar/>
     <MobileFoot/>
    <div>Status</div>
    <button onClick={()=> handelLogout()}>logout</button>
    </div>
    </>
  )
}

export default Status