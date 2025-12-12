import {useState} from 'react'
import SearchIcon from '../Icons/SearchIcon.jsx'
import CloseIcon from '../Icons/CloseIcon.jsx'
import { BackIcon, CommunityIcon, NewGroupIcon, NewContactIcon } from '../Icons/Icons.jsx'
import NewContact from './NewContact.jsx'
import NewGroup from './NewGroup.jsx'
import NewCommunity from './NewCommunity.jsx'



const NewChat = ({setIsNewChat}) => {
      const [search, setSearch] = useState('')
      const [isNewContact, setIsNewContact] = useState(false)
      const [isNewGroup, setIsNewGroup] = useState(false)
      const [isNewCommunity, setIsNewCommunity] = useState(false)
  return (
    <>
    <div className='select-none flex flex-col p-2 bg-[#161717]'>
<div className='flex items-center'>
    <span onClick={()=>setIsNewChat(false)} className='p-[8px] rounded-full hover:bg-[#2d2e2e] cursor-pointer duration-150 ease-in-out transition-all'><BackIcon /></span>
            <h1 className='px-3 p-2  text-[16px] font-semibold'>New chat</h1>
</div>


            {/* Input div hai ye */}
            <div className=' items-center p-2 px-2  '>
              <div className='border-1 border-[#ffffff00] flex bg-[#2d2e2e] focus-within:outline-[#21c063] focus-within:outline-2 focus-within:bg-[#161717] hover:border-[#ffffff1a] hover:border-[1px]  justify-center items-center p-[7px] rounded-[27px] duration-100'>
                <span className='px-[7px]'><SearchIcon /></span>
                <input className='w-full outline-none caret-[#21c063]' type="text" placeholder='Search name or username' onChange={(e) => setSearch(e.target.value)} value={search} />
                <button className={`px-[4px] duration-100 cursor-pointer ${search.length > 0 ? "flex" : "hidden"}`} onClick={() => setSearch('')}><CloseIcon /></button>
              </div>
            </div> {/* input div end */}

            <div className='flex flex-col'>
                <div onClick={()=>setIsNewGroup(true)} className='flex gap-4  items-center py-[6px] px-3 rounded-[12px] hover:bg-[#2d2e2e] text-[17px] cursor-pointer duration-150 ease-in-out transition-all'> <span className='rounded-full bg-[#21c063] p-[10px]'><NewGroupIcon color={'#0a0a0a'}/></span> <span>New group</span></div>
                <div onClick={()=>setIsNewContact(true)} className='flex gap-4  items-center py-[6px] px-3 rounded-[12px] hover:bg-[#2d2e2e] text-[17px] cursor-pointer duration-150 ease-in-out transition-all'> <span className='rounded-full bg-[#21c063] p-[10px]'><NewContactIcon color={'#0a0a0a'}/></span> <span>New contact</span></div>
                <div onClick={()=>setIsNewCommunity(true)} className='flex gap-4  items-center py-[6px] px-3 rounded-[12px] hover:bg-[#2d2e2e] text-[17px] cursor-pointer duration-150 ease-in-out transition-all'> <span className='rounded-full bg-[#21c063] p-[10px]'><CommunityIcon color={'#0a0a0a'}/></span> <span>New community</span></div>
            </div>



                {/* New contact component div */}
                <div className={`${isNewContact ? 'newChat-in' : 'newChat-out'} h-full w-full absolute top-0 left-0 bg-[#161717]`}>
<NewContact setIsNewContact={setIsNewContact}/>
                </div>

                {/* New group component div */}
                <div className={`${isNewGroup ? 'newChat-in' : 'newChat-out'} h-full w-full absolute top-0 left-0 bg-[#161717]`}>
<NewGroup setIsNewGroup={setIsNewGroup}/>
                </div>

                {/* New community component div */}
                <div className={`${isNewCommunity ? 'newChat-in' : 'newChat-out'} h-full w-full absolute top-0 left-0 bg-[#161717]`}>
<NewCommunity setIsNewCommunity={setIsNewCommunity}/>
                </div>

          </div>
    </>
  )
}

export default NewChat