import { useState } from 'react'
import NewChatIcon from '../Icons/NewChatIcon.jsx'
import MoreIcon from '../Icons/MoreIcon.jsx'
import SearchIcon from '../Icons/SearchIcon.jsx'
import CloseIcon from '../Icons/CloseIcon.jsx'
import { NavLink, Outlet } from 'react-router-dom'
import DropdownMenu from './DropdownMenu.jsx'




const ContactList = ({ isUserChats, setIsUserChats }) => {

    const [search, setSearch] = useState('')



    return (
        <>
            <main className='flex flex-col h-screen w-screen min-[768px]:w-[31%] min-[768px]:min-w-85 md:max-w-140 border-r-[1px] border-[#ffffff1a] scroll-none'>


                <header className='flex items-center pt-2 px-5 max-[768px]:px-4 user-select-none'>

                    <h1 className=' text-[22px] font-semibold w-2/2'>WhatsApp</h1>
                    <button className='flex justify-center items-center rounded-full p-[8px] max-[768px]:px-0 m-2 min-[768px]:hover:bg-[#2d2e2e] duration-150 cursor-pointer'><NewChatIcon /></button>
                    <button className='flex justify-center items-center rounded-full p-[8px]  max-[768px]:px-0 m-1 min-[768px]:hover:bg-[#2d2e2e] duration-150 cursor-pointer'><DropdownMenu/></button>
                </header>

                <div className=' items-center p-2 px-5 max-[400px]:px-3 '>
                    <div className='border-1 border-[#ffffff00] flex bg-[#2d2e2e] focus-within:outline-[#21c063] focus-within:outline-2 focus-within:bg-[#161717] hover:border-[#ffffff1a] hover:border-[1px]  justify-center items-center p-[7px] rounded-[27px] duration-100'>
                        <span className='px-[7px]'><SearchIcon /></span>
                        <input className='w-full outline-none caret-[#21c063]' type="text" placeholder='Search or start a new chat' onChange={(e) => setSearch(e.target.value)} value={search} />
                        <button className={`px-[4px] duration-100 cursor-pointer ${search.length > 0 ? "flex" : "hidden"}`} onClick={() => setSearch('')}><CloseIcon /></button>
                    </div>
                </div>

                <div className='px-6 max-[400px]:px-3 pb-2 pt-1 flex justify-start items-center gap-2 text-[14px] max-[333px]:text-[12px] text-[#FFFFFF99] font-semibold'>
    
                    <NavLink className='focus:outline-none focus-visible:ring-2 focus-visible:ring-[#21c063] rounded-[27px]' to={"/users"} end>{({ isActive }) => (<div className={`${isActive ? 'bg-[#103529] hover:bg-[#11432e] ' : 'bg-none'} p-1 px-3 border-[1px] border-[#ffffff1a] rounded-[27px] hover:bg-[#2d2e2e] duration-100 cursor-pointer`}>All</div>)}</NavLink>
                    <NavLink className='focus:outline-none focus-visible:ring-2 focus-visible:ring-[#21c063] rounded-[27px]' to={"unread"}>{({ isActive }) => (<div className={`${isActive ? 'bg-[#103529] hover:bg-[#11432e] ' : 'bg-none'} p-1 px-3 border-[1px] border-[#ffffff1a] rounded-[27px] hover:bg-[#2d2e2e] duration-100 cursor-pointer`}>Unread</div>)}</NavLink>
                    <NavLink className='focus:outline-none focus-visible:ring-2 focus-visible:ring-[#21c063] rounded-[27px]' to={"favorites"}>{({ isActive }) => (<div className={`${isActive ? 'bg-[#103529] hover:bg-[#11432e] ' : 'bg-none'} p-1 px-3 border-[1px] border-[#ffffff1a] rounded-[27px] hover:bg-[#2d2e2e] duration-100 cursor-pointer`}>Favorites</div>)}</NavLink>
                    <NavLink className='focus:outline-none focus-visible:ring-2 focus-visible:ring-[#21c063] rounded-[27px]' to={"groups"}>{({ isActive }) => (<div className={`${isActive ? 'bg-[#103529] hover:bg-[#11432e] ' : 'bg-none'} p-1 px-3 border-[1px] border-[#ffffff1a] rounded-[27px] hover:bg-[#2d2e2e] duration-100 cursor-pointer`}>Groups</div>)}</NavLink>
              
                </div>

                {/*//////////////////////////////////////////////////////////////////////////////////////////////*/}


                <div className='min-[768px]:px-2 overflow-x-auto'>
                    <Outlet context={{isUserChats, setIsUserChats }}/>

                    
                </div>



            </main>
        </>
    )
}

export default ContactList