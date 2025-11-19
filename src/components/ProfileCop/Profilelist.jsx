import { useState, useRef, useEffect } from 'react'
import { AccountCircleIcon, WebIcCheck, PencilRefreshedIcon, Mood, PhoneFillicon, CopyRefreshedIcon, MailIcon, BackIcon } from '../Icons/Icons.jsx'
import picture from '../../assets/picture.jpg'
import Dropdown from './ProfileDropdownMenu.jsx'
import { NavLink } from 'react-router-dom'




const Profilelist = () => {

    const [isFocus, setIsFocus] = useState(false)
    const [desisFocus, setDesisFocus] = useState(false)
    const nameInput = useRef(null)
    const desInput = useRef(null)
    const [inputlength, setInputLength] = useState("Ali khan")
    const [viewphoto, setViewphoto] = useState(false)



    useEffect(() => {

        if (isFocus) {
            nameInput.current.focus()
        }

        if (desisFocus) {
            desInput.current.focus()
        }

    }, [isFocus, desisFocus])


    return (
        <>

            <div className='flex w-full '>


                {/* /////////////// */}


                <main className='p-2 flex flex-col h-screen max-[768px]:w-screen min-[768px]:w-[32%] min-[768px]:min-w-100 md:max-w-160   '>
                    {/* /////////////////// */}
                    <div className='flex items-center '>
                        <NavLink to={"/setting"} className='min-[768px]:hidden pl-2'><BackIcon/></NavLink>
                    <h1 className='px-3 p-2  text-[20px] font-semibold max-[768px]:text-[18px] max-[768px]:font-medium '>Profile</h1>
</div>


                    <div className='w-full min-[768px]:py-8 pt-8 flex flex-col gap-7 max-[768px]:overflow-hidden min-[768px]:overflow-y-auto overflow-x-hidden z-10 relative'>

                        <Dropdown setViewphoto={setViewphoto} />

                        <div className='flex flex-col my-5 '>

                            {/* /////////////////////////////////////// */}
                            <div className='w-full flex flex-col p-5 gap-3'>
                                <div className='text-[15px] text-[#FFFFFF80] font-semibold'>Name</div>
                                <div className={`${isFocus ? 'focus-within:border-[#21c063]' : 'border-none'}  duration-100 ease-in-out border-[#FFFFFF80] w-full flex border-b-[2px]  pb-1`} >
                                    <input disabled={!isFocus} ref={nameInput} onChange={(e) => setInputLength(e.target.value)} value={inputlength} className={`w-full outline-none text-[17px] selection:bg-[#1a5a35]`} maxLength={25} type="text" />

                                    <div className='flex duration-100 ease-in-out'>

                                        {isFocus
                                            &&
                                            <div className='flex gap-3 duration-150 ease-in-out'>
                                                <span className='text-[#FFFFFF80] select-none'>
                                                    {25 - (inputlength.length || 0)}
                                                </span>

                                                <button type='button' className='cursor-pointer'>
                                                    <Mood />
                                                </button>

                                            </div>
                                        }
                                        <button type='button' className='pl-2 duration-150 ease-in-out transition-all cursor-pointer' onClick={() => setIsFocus(!isFocus)}>{!isFocus ? <PencilRefreshedIcon /> : <WebIcCheck />}</button>
                                    </div>


                                </div>
                            </div>

                            {/* /////////////////////////////////// */}

                            <div className='w-full flex flex-col p-5 gap-3'>
                                <div className='text-[15px] text-[#FFFFFF80] font-semibold'>About</div>
                                <div className={`${desisFocus ? 'focus-within:border-[#21c063]' : 'border-none'}  duration-100 ease-in-out border-[#FFFFFF80] w-full flex border-b-[2px]  pb-1`} >
                                    <input disabled={!desisFocus} ref={desInput} className={`w-full outline-none text-[17px] selection:bg-[#1a5a35] `} type="text" defaultValue={'Hey there! I am using WhatsApp.'} maxLength={126} />

                                    <div className='flex duration-100 ease-in-out'>

                                        {desisFocus
                                            &&
                                            <button type='button' className='flex gap-3 duration-150 ease-in-out cursor-pointer'>
                                                <Mood />
                                            </button>
                                        }
                                        <button type='button' className='cursor-pointer pl-2 duration-150 ease-in-out transition-all' onClick={() => setDesisFocus(!desisFocus)}>{!desisFocus ? <PencilRefreshedIcon /> : <WebIcCheck />}</button>
                                    </div>


                                </div>
                            </div>

                            {/* ///////////////////////////////////// */}

                            <div className='w-full  flex flex-col  p-5 gap-3'>
                                <div className='text-[15px] text-[#FFFFFF80] font-semibold'>Email</div>
                                <div className='flex justify-between items-center h-[40px]'>
                                    <div className='flex gap-5 text-[18px]'>
                                        <span>
                                            <MailIcon />
                                        </span>
                                        <span>
                                            alikhan@gmail.com
                                        </span>
                                    </div>

                                    <div className='size-[40px] rounded-full grid place-items-center hover:bg-[#2d2e2e] duration-100 ease-in-out cursor-pointer'>
                                        <CopyRefreshedIcon />
                                    </div>
                                </div>

                            </div>
                            {/* ////////////////////////////////////////// */}
                        </div>



                    </div>

                    {/* /////////////////////////////// */}
                </main>

                {/*/////////////////  */}


                <div className='flex-1 max-[768px]:hidden '>
                    <div className='flex flex-col gap-12 select-none items-center justify-center  h-screen text-[30px] font-normal'>
                        <span className=''>
                            <AccountCircleIcon />
                        </span>

                        <span>
                            Profile
                        </span>
                    </div>
                </div>

                {/* //////////////// */}

                {
                    viewphoto &&
                    <div onClick={()=>setViewphoto(false)} className='w-screen h-screen absolute bg-[#161717e3] top-0 left-0  z-100 flex justify-center items-center flex-col duration-1000 ease-in-out transition-all'>
                        <div className='w-full h-[50px] fixed top-0   bg-[#161717] px-10 py-2'>
                          <div className='flex gap-3 text-[18px] font-semibold  items-center'>  <span className='h-[40px] w-[40px] rounded-full bg-cover' style={{backgroundImage : `url(${picture})`}}></span> <span>Ali Khan</span></div>
                        </div>


                        <div className='h-[640px] w-[640px] max-[1440PX]:h-[540px] max-[1440PX]:w-[540px] max-[1200PX]:w-[500px] max-[1200PX]:w-[500px] max-[400px]:w-[95%] max-[400px]:h-[50%]  mt-[50px] overflow-hidden bg-cover' style={{backgroundImage : `url(${picture})`}}>
                        </div>
                    </div>
                }

                {/* ///////////////////// */}
            </div>
        </>
    )
}

export default Profilelist