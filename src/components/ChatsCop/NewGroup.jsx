import React from 'react'
import { BackIcon, CommunityIcon, NewGroupIcon, NewContactIcon } from '../Icons/Icons.jsx'

const NewGroup = ({setIsNewGroup}) => {
  return (
      <div className='select-none flex flex-col p-2 bg-[#161717]'>
            <div className='flex items-center'>
                <span onClick={()=>setIsNewGroup(false)} className='p-[8px] rounded-full hover:bg-[#2d2e2e] cursor-pointer duration-150 ease-in-out transition-all'><BackIcon /></span>
                        <h1 className='px-3 p-2  text-[16px] font-semibold'>New group</h1>
            </div>
        </div>
  )
}

export default NewGroup