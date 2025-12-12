import React from 'react'
import emptypic from '../../assets/emptypic.svg'
import { Typewriter } from 'react-simple-typewriter'
import { Github } from '../../components/Icons/Icons'

const DefaultEmptyChat = ({className}) => {
  return (
    <>
    <div className='w-full h-full flex flex-col justify-center items-center max-[768px]-hidden'>
    <div className={`${className} h-[250px] w-[250px] bg-no-repeat bg-center bg-contain`} style={{backgroundImage : `url(${emptypic})`}} >
      {/* <img src={emptypic} alt="" /> */}
    </div>



 {/* auto typing  */}
    <div className=' h-[20px] text-[35px] font-[300] select-none text-center'>
        <Typewriter
  words={['Hello! everyone...', "I'm Muhammad Ali Khan", 'I am a MERN stack developer...', 'Check out my GitHub for more projects...', 'Thank you for visiting!']}
  loop={true}
//   cursor
  cursorStyle="_"
  typeSpeed={70}
  deleteSpeed={60}
  delaySpeed={1000}
/>
    </div>

<div className='mt-14 '>
    <button className='inline-flex items-center gap-2 px-6 py-2 bg-[#36c571] rounded-[25px] text-[16px] text-[#161717] font-semibold transition-transform duration-200 ease-in-out hover:scale-105' type="button" onClick={()=>window.open("https://github.com/Alikhan67595?tab=repositories")}><Github/> Github</button>
</div>

    </div>
    </>
  )
}

export default DefaultEmptyChat