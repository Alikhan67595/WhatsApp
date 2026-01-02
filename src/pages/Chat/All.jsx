import {useEffect, useState} from 'react'
import { DownArrow } from '../../components/Icons/Icons'
import {  useOutletContext } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {openChat, setMessages} from '../../redux/userChat/useChat.js'
import axios from 'axios'
import { api_server_key } from '../../server.js'
import { useQueryClient, useQuery} from '@tanstack/react-query'


const UserComponent = ({image, name , time , messageType, contactId}) => {

    const queryClient = useQueryClient()
  const {isUserChats, setIsUserChats} = useOutletContext()
  const dispatch = useDispatch()
  const isChatOpen = useSelector(state => state.chat.isChatOpen)  
  const contactUserId = useSelector(state => state.chat.activeChatUserId)  

  

    const isActive  = contactUserId === contactId

    
    const handelUserProfile = async () => {
      dispatch(openChat({
        id : contactId,
        name : name,
        profilePhoto : image
      }))
      
    }
    
    let handelFetchUserMessage = async (contactUserId) =>{
      try {
        let message =  await axios.get(`${api_server_key}/api/messages/getmessages/${contactUserId}`,{withCredentials:true})
        console.log(message.data.messages)
        dispatch(setMessages(message.data.messages))
      //  return message.data.messages
      } catch (error) {
        console.log(error)
      }
    }

    // const {data} = useQuery({
    //   queryKey : []
    // })
    
    
    useEffect(()=>{
      setIsUserChats(isChatOpen)

      if(contactId && contactUserId === contactId){
        handelFetchUserMessage(contactUserId)
      }
},[contactUserId, isChatOpen]) 


  
  
  return (
<>
<button onClick={()=>{handelUserProfile(),console.log("Contact ID dispatched:", contactUserId);}} to={''} className={`flex items-center focus-visible:hidden group select-none flex gap-4 w-full duration-150 hover:bg-[#353636] max-[768px]:active:bg-[#1b2227cc] p-3 py-[12px] min-[768px]:rounded-[12px] relative overflow-x-hidden cursor-pointer ${isActive && 'bg-[#353636]' }`}>

    <div className='text-[23px] text-black font-semibold size-11 max-[450px]:size-13 bg-white rounded-full p-1 bg-cover' style={{backgroundImage : `url(${image && image})`}}>{!image && name[0].toUpperCase()}</div>
    <div className='flex flex-col flex-1  items-start min-w-0'>
      <span className='max-[450px]:text-[14px]'>{name}</span>
      <span className=' truncate whitespace-nowrap max-w-full text-[#FFFFFF99] max-[450px]:text-[14px]'>{messageType}</span>
    </div>
    <div className='flex flex-col justify-items-start items-end h-full pb-5 text-[12px] max-[450px]:text-[10px] text-[#FFFFFF99]'>
      {time}
    </div>
      <span className='max-[768px]:hidden absolute right-1 bottom-[18%]  px-2 rounded-[15px] translate-x-100 opacity-1000 group-hover:translate-x-0 group-hover:opacity-100 duration-150 ease-in-out'><DownArrow/></span>

</button>
</>

  )
}




const All = () => {

  const {isUserChats, setIsUserChats} = useOutletContext()
  
  let user = useSelector(state => state.user.user)

  const [contacts, setContacts] = useState([])



  useEffect(()=>{
    setContacts(user?.contacts)
  },[user])

  return (
    <>
      <div className='flex gap-1  flex-col overflow-x-auto'>
{
       contacts && contacts.map((contact)=>(
         <UserComponent key={contact.userId} image={contact.profilePhoto} name={contact.contactName} time={'12:45 AM'} messageType={'Voice call'} contactId={contact.userId}/>
       ))
     
}
      </div>
    </>
  )
}

export default All