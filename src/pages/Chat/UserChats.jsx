import {useState} from 'react'
import background from '../../assets/Whatsapp-background.png'
import picture from '../../assets/picture.jpg'
import { ExpressionsIcon, PhoneFillicon, PlusIcon, Search, SendIcon, VideoCallIcon, VoiceMic } from '../../components/Icons/Icons.jsx'
import TextareaAutosize from 'react-textarea-autosize'
import CallLog from '../CallLog.jsx'
import SearchIcon from '../../components/Icons/SearchIcon.jsx'
import MoreIcon from '../../components/Icons/MoreIcon.jsx'
import ContactInfo from '../../components/ChatsCop/ContactInfo.jsx'


const UserChats = () => {

const [inputValue,setInputValue] = useState('')
const [inputLength,setInputLength] = useState(0)
const [contactInfo,setContactInfo] = useState(false)


console.log(inputValue)
console.log(inputLength)

  return (
    <>
      <main className='max-[1300px]:hidden flex-1 h-full object-fill  overflow-hidden  relative'>
        <div
          className='z-1 absolute w-full h-full top-0 left-0 object-fill'
          style={{ backgroundImage: `url(${background})`, opacity: 0.05 }}
        ></div>
        <nav className='relative z-50 flex items-center w-full p-4 h-[64px] bg-[#161717] '>
          <div onClick={()=>setContactInfo(true)} className='flex-1 flex items-center gap-4 cursor-pointer mr-8 select-none'>
          <div className='size-9 bg-cover bg-contain rounded-full' style={{ backgroundImage: `url(${picture})` }}></div>
          <div className=' font-semibold text-[18px]'>Ali Khan</div>
          </div>
          <button className='p-[8px] hover:bg-[#3a3c3c] rounded-full duration-200 transition-colors ease-in-out '><VideoCallIcon/></button>
          <button className='p-[8px] hover:bg-[#3a3c3c] rounded-full duration-200 transition-colors ease-in-out '><PhoneFillicon/></button>
          <button className='p-[8px] hover:bg-[#3a3c3c] rounded-full duration-200 transition-colors ease-in-out '><Search color='#FFFFFF'/></button>
          <button className='p-[8px] hover:bg-[#3a3c3c] rounded-full duration-200 transition-colors ease-in-out '><MoreIcon/></button>
        
        </nav>

        {/* main div hai ye jis mai all messages render ho gai or input bhi is mai hi hai */}
        <div className='max-w-[1600px] w-full h-full m-auto'>



          {/* ///////////// footer input ///////////////// */}


          <div className='flex items-end bg-[#242626] absolute transform -translate-x-1/2 bottom-3 left-1/2 z-100 p-[6px] w-[97%] m-auto rounded-[28px] max-w-[1600px]'>

          <button className='p-[8px] hover:bg-[#3a3c3c] rounded-full'><PlusIcon/></button>
          <button className='p-[8px] hover:bg-[#3a3c3c] rounded-full'><ExpressionsIcon/></button>
          <TextareaAutosize onChange={(e)=>{setInputValue(e.target.value), setInputLength(e.target.value.length)}} value={inputValue} maxRows={5}  placeholder="Type a message..."className="h-[20px] flex-1 px-2 py-2 mr-1 outline-none bg-[#242626] text-white resize-none text-[15px] selection:bg-[#1a5a35] selection:text-[#FAFAFA] placeholde:select-none"/>
          {inputLength > 0 ? 
          <button  className='group p-[8px] bg-[#34be6d] rounded-full'> <SendIcon className={' text-black '}/></button>
          :
          <button  className='group p-[8px] hover:bg-[#34be6d] rounded-full'> <VoiceMic className={' group-hover:text-black transition-colors duration-200'}/></button> 
          }
          </div>



          {/* ////////////////////////// */}

        </div>
        {/* /////////////////////////////////// */}
      </main>
      <div className={`${contactInfo ? 'translate-x-0 flex' : 'translate-x-full hidden'} w-[45%] transform transition-transform duration-1000 ease-in-out max-w-[580px] max-[1300px]:w-[100%] max-[1300px]:flex-1`}>
        <ContactInfo setContactInfo={setContactInfo}/>
      </div>
    </>
  )
}

export default UserChats