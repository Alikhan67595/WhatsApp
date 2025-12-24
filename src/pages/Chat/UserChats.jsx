import { use, useEffect, useState } from 'react'
import background from '../../assets/whatsapp-background.png'
import picture from '../../assets/picture.jpg'
import { AttachIcon, CameraIcon, ExpressionsIcon, PhoneFillicon, PlusIcon, Search, SendIcon, VideoCallIcon, VoiceMic } from '../../components/Icons/Icons.jsx'
import TextareaAutosize from 'react-textarea-autosize'
import CallLog from '../CallLog.jsx'
import ContactInfo from '../../components/ChatsCop/ContactInfo.jsx'
import UserChatDropDownMenu from '../../components/ChatsCop/UserChatDropDownMenu.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { openChat, setMessages,addMessage } from '../../redux/userChat/useChat.js'
import MessageCop from '../../components/ChatsCop/messageCop.jsx'
import axios from 'axios'
import { set } from 'react-hook-form'
import socket from '../../socket.js'




const UserChats = ({ isUserChats, setIsUserChats }) => {
  const dispatch = useDispatch()

  const profileImage = useSelector(state => state.chat.activeChatUserProfile)
  const userName = useSelector(state => state.chat.activeChatUserName)
  const userMessages = useSelector(state => state.chat.messages)
  const selectedUserId = useSelector(state => state.chat.activeChatUserId)
  const user = useSelector(state => state.user.user)


  const [inputValue, setInputValue] = useState('')
  const [inputLength, setInputLength] = useState(0)
  const [contactInfo, setContactInfo] = useState(false)
  const [contactPhoto, setContactPhoto] = useState(profileImage)


  let handelSendMessage = async () =>{
    try {
      if (inputValue === '' ) return
      let sendMessage = await axios.post(`https://welcome-charmine-alikhan67595-a5ec3999.koyeb.app/api/messages/sendmessages`,{message: inputValue , receiverId:selectedUserId },{withCredentials:true})
      dispatch(addMessage(sendMessage.data.addMessage))
      setInputValue('')
      setInputLength(0)
      console.log(sendMessage)


    } catch (error) {   
      console.log(error)  
    } 
  }

  useEffect(() => {
    console.log(userMessages)
    setContactPhoto(profileImage)

    const receiveMessage = (message)=>{
      console.log(message)
      dispatch(addMessage(message))
    }

    const senderMessage = (message)=>{
      console.log(message)
      dispatch(addMessage(message))
    }

    socket.on("receive-message", receiveMessage) 


    

    return () => {
    socket.off("receive-message", receiveMessage)
    
  }

  }, [dispatch, selectedUserId])




  return (
    <>
      <main className=' max-[768px]:w-full flex-1 h-screen object-fill  overflow-hidden  relative'>
        <div
          className='z-1 absolute opacity-5 max-[768px]:opacity-12 w-full h-full top-0 left-0 min-[500px]:object-fill max-[500px]:bg-cover'
          style={{ backgroundImage: `url(${background})` }}
        ></div>
        <nav className='relative z-70 flex items-center w-full p-4 h-[64px] bg-[#161717] '>
          <div onClick={() => setContactInfo(true)} className='flex-1 flex items-center gap-4 cursor-pointer mr-8 select-none'>
            <div className='size-9 bg-cover bg-contain rounded-full bg-white text-black flex justify-center items-center text-[22px] font-semibold' style={{ backgroundImage: `url(${contactPhoto})` }}>{!profileImage && userName[0].toUpperCase()}</div>
            <div className=' font-semibold text-[18px]'>{userName}</div>
          </div>
          <button className='p-[8px] hover:bg-[#3a3c3c] rounded-full duration-200 transition-colors ease-in-out '><VideoCallIcon /></button>
          <button className='p-[8px] hover:bg-[#3a3c3c] rounded-full duration-200 transition-colors ease-in-out '><PhoneFillicon /></button>
          <button className='max-[768px]:hidden p-[8px] hover:bg-[#3a3c3c] rounded-full duration-200 transition-colors ease-in-out '><Search color='#FFFFFF' /></button>
          <button className='p-[8px] hover:bg-[#3a3c3c] rounded-full duration-200 transition-colors ease-in-out '><UserChatDropDownMenu /></button>

        </nav>

        {/* main div hai ye jis mai all messages render ho gai or input bhi is mai hi hai */}
        <div className='flex flex-col max-w-[1600px] w-full h-full  m-auto '>
          <div className='flex-1 overflow-y-auto px-15 py-2 relative z-60 '>
            {
              userMessages && userMessages.map((message, i) => (
                <div key={message?._id} className={`${message?.senderId === user?._id ? "justify-end " : "justify-start"}  w-full flex  my-1 `} >

    
                   <MessageCop message={message.message} isSender={message?.senderId === user?._id} isRead={message?.isRead}/>
            
                </div>


              ))
            }
          </div>


          {/* ///////////// footer input ///////////////// */}

          {/* <div> input*/} <div className='  w-full h-[130px] '> 

            {/*  ye input sirf desktop per show ho gi  max768px per hide ho gai gi   */}
            <div className='flex items-end bg-[#242626] absolute transform -translate-x-1/2 bottom-3 left-1/2 z-100 p-[6px] w-[97%] m-auto rounded-[28px] max-w-[1600px] max-[768px]:hidden'>

              <button className='p-[8px] hover:bg-[#3a3c3c] rounded-full'><PlusIcon /></button>
              <button className='p-[8px] hover:bg-[#3a3c3c] rounded-full'><ExpressionsIcon /></button>
              <TextareaAutosize onChange={(e) => { setInputValue(e.target.value), setInputLength(e.target.value.length) }} value={inputValue} maxRows={5} placeholder="Type a message..." className="h-[20px] flex-1 px-2 py-2 mr-1 outline-none bg-[#242626] text-white resize-none text-[15px] selection:bg-[#1a5a35] selection:text-[#FAFAFA] placeholde:select-none" />
              {inputLength > 0 ?
                <button onClick={()=>handelSendMessage()} className='group p-[8px] bg-[#34be6d] rounded-full'> <SendIcon className={' text-black '} /></button>
                :
                <button className='group p-[8px] hover:bg-[#34be6d] rounded-full'> <VoiceMic className={' group-hover:text-black transition-colors duration-200'} /></button>
              }
            </div>
            {/* ////////////////////////// */}


            {/* ye div max-768px per show ho gi ye input only mobile kai liay hai */}

            <div className='w-full px-1 flex gap-1 items-end transform -translate-x-1/2 fixed bottom-2 left-1/2 z-100 m-auto min-[768px]:hidden'>

              <div className=' flex  w-full items-end bg-[#1f272a] p-[6px]  rounded-[28px] max-w-[1600px] overflow-x-hidden '>

                <button className='p-[8px] hover:bg-[#3a3c3c] active:bg-[#3a3c3c44] duration-200 transition-colors ease-in-out rounded-full '><ExpressionsIcon className={'text-[#FFFFFF99]'} /></button>

                <TextareaAutosize onChange={(e) => { setInputValue(e.target.value), setInputLength(e.target.value.length) }} value={inputValue} maxRows={5} placeholder="Type a message..." className="h-full w-full m-aut0 px-2 py-2 mr-1 outline-none  text-white resize-none text-[15px] selection:bg-[#1a5a35] selection:text-[#FAFAFA] placeholde:select-none " />


                <button className='p-[8px] hover:bg-[#3a3c3c] active:bg-[#3a3c3c44] duration-200 transition-colors ease-in-out rounded-full'><AttachIcon className={'text-[#FFFFFF99]'} /></button>

                <button  className={`${inputLength > 0 ? ' hidden' : 'flex'} p-[8px] hover:bg-[#3a3c3c] active:bg-[#3a3c3c44] duration-200 transition-colors ease-in-out rounded-full transform`}><CameraIcon className={'text-[#FFFFFF99]'} /></button>






              </div>

              <div>
                {inputLength > 0 ?
                  <button onClick={()=>handelSendMessage()} className='group p-[13px] bg-[#34be6d] rounded-full'> <SendIcon className={' text-black '} /></button>
                  :
                  <button className='p-[13px] bg-[#34be6d] rounded-full'> <VoiceMic className={' text-black transition-colors duration-200'} /></button>
                }
              </div>

            </div>

            {/* ////////////////////////// */}


          </div>


          {/* /////////////////// */}

        </div>
        {/* /////////////////////////////////// */}
      </main>
      {/* <div className={`${contactInfo ? 'contactInfo-in' : 'contactInfo-out'} w-[45%]`}>
      <div className={` w-full  max-w-[580px] max-[1300px]:w-[100%] max-[1300px]:flex-1`}> */}
      <ContactInfo setContactInfo={setContactInfo} contactInfo={contactInfo} />
      {/* </div>
      </div> */}
    </>
  )
}

export default UserChats