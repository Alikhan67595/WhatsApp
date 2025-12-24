import React from 'react'
import { MsgCheckIcon } from '../Icons/Icons.jsx'

const MessageCop = ({ message, isSender , isRead}) => {

    return (
        <div className={`${isSender ? 'sender' : 'receiver'}  p-[2px] px-2 flex flex-row  gap-1`}>
            <div className=' w-full flex items-center justify-start    '>
                {message}
            </div>

            <div className=' flex  text-[11px] justify-center items-center pt-3 gap-[4px]'>
            <div className='text-[#FFFFFF99]'>10:00<span className='opacity-0'>.</span>AM</div>
            {isSender && <div><MsgCheckIcon className={`${isRead ? "text-[#5ad2e2]" : "text-[#FFFFFF99]"}`}/></div>}
            </div>
        </div>
    )
}

export default MessageCop