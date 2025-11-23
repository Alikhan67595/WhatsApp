import React from 'react'
import picture from '../../assets/picture.jpg'
import { DownArrow } from '../../components/Icons/Icons'
import { NavLink } from 'react-router-dom'


const UserComponent = ({image, name , time , messageType}) => {
  return (
<>
<NavLink to={''} className='flex items-center focus-visible:hidden group select-none flex gap-4 w-full duration-150 hover:bg-[#353636] max-[768px]:active:bg-[#1b2227cc] p-3 py-[12px] min-[768px]:rounded-[12px] relative overflow-x-hidden cursor-pointer'>

    <div className='size-11 max-[450px]:size-13 bg-amber-300 rounded-full p-1 bg-cover' style={{backgroundImage : `url(${image})`}}></div>
    <div className='flex flex-col flex-1  items-start min-w-0'>
      <span className='max-[450px]:text-[14px]'>{name}</span>
      <span className=' truncate whitespace-nowrap max-w-full text-[#FFFFFF99] max-[450px]:text-[14px]'>{messageType}</span>
    </div>
    <div className='flex flex-col justify-items-start items-end h-full pb-5 text-[12px] max-[450px]:text-[10px] text-[#FFFFFF99]'>
      {time}
    </div>
      <span className='max-[768px]:hidden absolute right-1 bottom-[18%]  px-2 rounded-[15px] translate-x-100 opacity-1000 group-hover:translate-x-0 group-hover:opacity-100 duration-150 ease-in-out'><DownArrow/></span>

</NavLink>
</>

  )
}




const All = () => {
  return (
    <>
      <div className='flex gap-1  flex-col overflow-x-auto'>

        <UserComponent image={picture} name={'Ali Khan'} time={'12:45 AM'} messageType={'Voice call'}/>
        <UserComponent image={picture} name={'Ali Khan'} time={'12:45 AM'} messageType={'Voice call'}/>
        <UserComponent image={picture} name={'Ali Khan'} time={'12:45 AM'} messageType={'Voice call'}/>
        <UserComponent image={picture} name={'Ali Khan'} time={'12:45 AM'} messageType={'Voice call'}/>
        <UserComponent image={picture} name={'Ali Khan'} time={'12:45 AM'} messageType={'Voice call'}/>
        <UserComponent image={picture} name={'Ali Khan'} time={'12:45 AM'} messageType={'voice call'}/>
        <UserComponent image={picture} name={'Ali Khan'} time={'12:45 AM'} messageType={'Voice call'}/>
        <UserComponent image={picture} name={'Ali Khan'} time={'12:45 AM'} messageType={'Voice call'}/>
        <UserComponent image={picture} name={'Ali Khan'} time={'12:45 AM'} messageType={'Voice call'}/>
        <UserComponent image={picture} name={'Ali Khan'} time={'12:45 AM'} messageType={'Voice call'}/>
        <UserComponent image={picture} name={'Ali Khan'} time={'12:45 AM'} messageType={'Voice call'}/>
        <UserComponent image={picture} name={'Ali Khan'} time={'12:45 AM'} messageType={'Voice call'}/>
        <UserComponent image={picture} name={'Ali Khan'} time={'12:45 AM'} messageType={'Voice call'}/>
        <UserComponent image={picture} name={'Ali Khan'} time={'12:45 AM'} messageType={'Voice call'}/>
        <UserComponent image={picture} name={'Ali Khan'} time={'12:45 AM'} messageType={'Voice call'}/>
        <UserComponent image={picture} name={'Ali Khan'} time={'12:45 AM'} messageType={'Voice call'}/>
        <UserComponent image={picture} name={'Ali Khan'} time={'12:45 AM'} messageType={'Voice call'}/>
        <UserComponent image={picture} name={'Ali Khan'} time={'12:45 AM'} messageType={'Voice call'}/>
        <UserComponent image={picture} name={'Ali Khan'} time={'12:45 AM'} messageType={'Voice call'}/>
        <UserComponent image={picture} name={'Ali Khan'} time={'12:45 AM'} messageType={'Voice call'}/>
        <UserComponent image={picture} name={'Ali Khan'} time={'12:45 AM'} messageType={'Voice call'}/>
        <UserComponent image={picture} name={'Ali Khan'} time={'12:45 AM'} messageType={'Voice call'}/>
        <UserComponent image={picture} name={'Ali Khan'} time={'12:45 AM'} messageType={'Voice call'}/>
        <UserComponent image={picture} name={'Ali Khan'} time={'12:45 AM'} messageType={'Voice call'}/>
        <UserComponent image={picture} name={'Ali Khan'} time={'12:45 AM'} messageType={'Voice call'}/>
        <UserComponent image={picture} name={'Ali Khan'} time={'12:45 AM'} messageType={'Voice call'}/>
        <UserComponent image={picture} name={'Ali Khan'} time={'12:45 AM'} messageType={'Voice call'}/>
        <UserComponent image={picture} name={'Ali Khan'} time={'12:45 AM'} messageType={'Voice call'}/>
        <UserComponent image={picture} name={'Ali Khan'} time={'12:45 AM'} messageType={'Voice call'}/>

      </div>
    </>
  )
}

export default All