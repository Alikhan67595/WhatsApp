import { useState, useEffect, useRef } from 'react'
import { BackIcon, CommunityIcon, NewGroupIcon, NewContactIcon, CrossCircle, CheckCircleFilled, } from '../Icons/Icons.jsx'
import { useForm } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import {setUser} from '../../redux/auth/userSlice.js'

export const UserIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
  <circle cx="12" cy="7" r="4"></circle>
</svg>;

export const UserVerifiedIcon = () => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 32 32"
      height="20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M 12 2 C 8.144531 2 5 5.144531 5 9 C 5 11.410156 6.230469 13.550781 8.09375 14.8125 C 4.527344 16.34375 2 19.882813 2 24 L 4 24 C 4 19.570313 7.570313 16 12 16 C 13.375 16 14.65625 16.359375 15.78125 16.96875 C 14.671875 18.34375 14 20.101563 14 22 C 14 26.40625 17.59375 30 22 30 C 26.40625 30 30 26.40625 30 22 C 30 17.59375 26.40625 14 22 14 C 20.253906 14 18.628906 14.574219 17.3125 15.53125 C 16.871094 15.253906 16.390625 15.019531 15.90625 14.8125 C 17.769531 13.550781 19 11.410156 19 9 C 19 5.144531 15.855469 2 12 2 Z M 12 4 C 14.773438 4 17 6.226563 17 9 C 17 11.773438 14.773438 14 12 14 C 9.226563 14 7 11.773438 7 9 C 7 6.226563 9.226563 4 12 4 Z M 22 16 C 25.324219 16 28 18.675781 28 22 C 28 25.324219 25.324219 28 22 28 C 18.675781 28 16 25.324219 16 22 C 16 18.675781 18.675781 16 22 16 Z M 25.28125 19.28125 L 22 22.5625 L 19.71875 20.28125 L 18.28125 21.71875 L 21.28125 24.71875 L 22 25.40625 L 22.71875 24.71875 L 26.71875 20.71875 Z"></path>
    </svg>
  )
}


const NewContact = ({ setIsNewContact }) => {

  const user = useSelector(state => state.user.user)
  const dispatch = useDispatch()
  const [available, setAvailable] = useState(null)
  const [emailorUserName, setEmailorUserName] = useState(null)
  const [contactId, setContactId] = useState(null)
  const [profilePhoto, setProfilePhoto] = useState(null)


  const formSchema = yup.object({
    contactName: yup.string().required("Contact name is required").min(3, 'Name must be at least 3 characters long'),
    emailorUserName: yup.string().required("Email or username is required").min(3, 'Must be at least 3 characters long'),
  })

  const {
    handleSubmit,
    register,
    watch,
    reset,
    setValue,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: yupResolver(formSchema)
  })

  // handel check userName 
  const handelCheckUserName = async () => {
    try {
      let findUser = await axios.post(`http://localhost:3000/api/user/findcontact`, { emailOrUserName: emailorUserName }, {
        withCredentials: true
      })
      setAvailable(findUser.data.user)
      setContactId(findUser.data.id)
      setProfilePhoto(findUser.data.profilePhoto)


      console.log(findUser.data.id)
      console.log(findUser.data.user)
      console.log(findUser.data)


    } catch (error) {
      console.log(error)
    }
  }


  const handelsaveContact = async (data) => {
    try {
     let {contactName , emailorUserName} = data
      let saveContact = await axios.post(`http://localhost:3000/api/user/addcontact/${user._id}`, {contactId, contactName,emailorUserName,profilePhoto} , {
        withCredentials: true
      })


      dispatch(setUser(saveContact.data.user))
      console.log(data)
      console.log(saveContact.data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (emailorUserName) {
      handelCheckUserName()
    }
  },[emailorUserName])
  return (
    <div className='select-none flex flex-col p-2 bg-[#161717] w-full h-full'>
      <div className='flex items-center'>
        <span onClick={() => setIsNewContact(false)} className='p-[8px] rounded-full hover:bg-[#2d2e2e] cursor-pointer duration-150 ease-in-out transition-all'><BackIcon /></span>
        <h1 className='px-3 p-2  text-[16px] font-semibold'>New contact</h1>
      </div>


      <div className='flex flex-col w-full h-full items-center gap-6 text-[16px] '>

        {/* Name save input div */}
        <div className='flex items-center w-[90%] pt-20 gap-2'>
          <div><UserVerifiedIcon /></div>
          <div className='border-b-2 border-[#FFFFFF80] focus-within:border-[#21c063] w-full'><input className='outline-none w-full placeholder:text-[16px]' {...register('contactName')} type="text" placeholder='First name' /></div>
        </div>


        {/* search input div username or email */}
        <div className='flex items-center w-[90%] pt-20 gap-2'>
          <div><UserIcon /></div>
          <div className='flex items-center border-b-2 border-[#FFFFFF80] focus-within:border-[#21c063] w-full'><input className='outline-none w-full placeholder:text-[16px]' {...register('emailorUserName')} type="text" placeholder='Search from username or email' onChange={(e) => setEmailorUserName(e.target.value)} value={emailorUserName} />{available !== null &&<span className='pb-1'>{available ? <CheckCircleFilled size='21px' color='#21c063' /> : <CrossCircle color='red' size='21px' />}</span>}</div>
        </div>


        <div className='pt-10 w-[90%]'>
          <button disabled={!available} onClick={handleSubmit(handelsaveContact)} type='submit' className='bg-[#21c063] hover:bg-[#1aa457] duration-150 ease-in-out transition-all text-[16px] font-semibold text-[#0a0a0a] w-full py-2 rounded-[12px]'>Create a new contact</button>
        </div>

      </div>

    </div>
  )
}

export default NewContact