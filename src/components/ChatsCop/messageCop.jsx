import React from 'react'
import { MsgCheckIcon } from '../Icons/Icons.jsx'

const MessageCop = ({ message, isSender , isRead , time}) => {


    let formattedTime = new Date(time).toLocaleTimeString('en-US', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: true
})


    return (
        <div className={`${isSender ? 'sender' : 'receiver'} customFont  p-[2px] px-2 flex flex-row max-w-[60%] gap-1 `}>
            <div className=' w-full flex items-center justify-start flex-wrap  break-words whitespace-pre-wrap  '>
                {message}
            </div>

            <div className=' flex  text-[11px] justify-center items-end pt-3 gap-[4px]'>
            <div className='text-[#FFFFFF99] whitespace-nowrap'>{formattedTime}</div>
            {isSender && <div><MsgCheckIcon className={`${isRead ? "text-[#5ad2e2]" : "text-[#FFFFFF99]"} mb-1`}/></div>}
            </div>
        </div>
    )
}

export default MessageCop