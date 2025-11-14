import { useState } from 'react'
import NewChatIcon from './Icons/NewChatIcon.jsx'
import MoreIcon from './Icons/MoreIcon.jsx'
import SearchIcon from './Icons/SearchIcon.jsx'
import CloseIcon from './Icons/CloseIcon.jsx'
import { NavLink, Outlet } from 'react-router-dom'
import DropdownMenu from './DropdownMenu.jsx'




const ContactList = () => {

    const [search, setSearch] = useState('')



    return (
        <>
            <main className='flex flex-col h-screen w-screen min-[768px]:w-[31%] min-[768px]:min-w-85 md:max-w-140 border-r-[1px] border-[#ffffff1a] scroll-none'>


                <header className='flex items-center pt-2 px-4 user-select-none'>

                    <h1 className=' text-[22px] font-semibold w-2/2'>WhatsApp</h1>
                    <div className='flex justify-center items-center rounded-full p-[8px] m-2 hover:bg-[#2d2e2e] duration-150 cursor-pointer'><NewChatIcon /></div>
                    <div className='flex justify-center items-center rounded-full p-[8px] m-1 hover:bg-[#2d2e2e] duration-150 cursor-pointer'><DropdownMenu/></div>
                </header>

                <div className=' items-center p-2 px-5 '>
                    <div className='border-1 border-[#ffffff00] flex bg-[#2d2e2e] focus-within:outline-[#21c063] focus-within:outline-2 focus-within:bg-[#161717] hover:border-[#ffffff1a] hover:border-[1px]  justify-center items-center p-[7px] rounded-[27px] duration-100'>
                        <span className='px-[7px]'><SearchIcon /></span>
                        <input className='w-full outline-none caret-[#21c063]' type="text" placeholder='Search or start a new chat' onChange={(e) => setSearch(e.target.value)} value={search} />
                        <button className={`px-[4px] duration-100 cursor-pointer ${search.length > 0 ? "flex" : "hidden"}`} onClick={() => setSearch('')}><CloseIcon /></button>
                    </div>
                </div>

                <div className='px-6 pt-1 flex justify-start items-center gap-2 text-[14px] max-[333px]:text-[12px] text-[#FFFFFF99] font-semibold'>
    
                    <NavLink to={"/chats"} end>{({ isActive }) => (<button className={`${isActive ? 'bg-[#103529] hover:bg-[#11432e] ' : 'bg-none'} p-1 px-3 border-[1px] border-[#ffffff1a] rounded-[27px] hover:bg-[#2d2e2e] duration-100 cursor-pointer`}>All</button>)}</NavLink>
                    <NavLink to={"unread"}>{({ isActive }) => (<button className={`${isActive ? 'bg-[#103529] hover:bg-[#11432e] ' : 'bg-none'} p-1 px-3 border-[1px] border-[#ffffff1a] rounded-[27px] hover:bg-[#2d2e2e] duration-100 cursor-pointer`}>Unread</button>)}</NavLink>
                    <NavLink to={"favorites"}>{({ isActive }) => (<button className={`${isActive ? 'bg-[#103529] hover:bg-[#11432e] ' : 'bg-none'} p-1 px-3 border-[1px] border-[#ffffff1a] rounded-[27px] hover:bg-[#2d2e2e] duration-100 cursor-pointer`}>Favorites</button>)}</NavLink>
                    <NavLink to={"groups"}>{({ isActive }) => (<button className={`${isActive ? 'bg-[#103529] hover:bg-[#11432e] ' : 'bg-none'} p-1 px-3 border-[1px] border-[#ffffff1a] rounded-[27px] hover:bg-[#2d2e2e] duration-100 cursor-pointer`}>Groups</button>)}</NavLink>
              
                </div>



                {/*//////////////////////////////////////////////////////////////////////////////////////////////*/}


                <div className='px-4'>
                    <Outlet />

                    
                </div>



            </main>
        </>
    )
}

export default ContactList