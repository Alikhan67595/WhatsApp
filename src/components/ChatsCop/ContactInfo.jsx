import React from 'react'
import { ExitRefreshedIcon, PencilWhite , CloseIcon} from '../Icons/Icons'

const ContactInfo = ({contactInfo,setContactInfo}) => {
  return (
    <>
    <div className={`w-full p-3`}>

    <nav className='flex items-center gap-1 font-semibold'>
    <button onClick={()=>setContactInfo(false)} className='p-[8px] rounded-full hover:bg-[#3a3c3c] transition-colors duration-200 ease-in-out'><CloseIcon/></button>
    <div className='flex-1'>Contact info</div>
    <button className='p-[8px] rounded-full hover:bg-[#3a3c3c] transition-colors duration-200 ease-in-out'><PencilWhite/></button>
    </nav>


    </div>
    </>
  )
}

export default ContactInfo