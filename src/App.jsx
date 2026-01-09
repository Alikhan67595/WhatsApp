import React, { useEffect, useState } from 'react'
import { Route, Routes,useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from './redux/auth/userSlice.js'
import Users from './pages/Users.jsx'
import Status from './pages/Status.jsx'
import Profile from './pages/Profile.jsx'
import Setting from './pages/Setting.jsx'
import Communities from './pages/Communities.jsx'
import Channels from './pages/Channels.jsx'
import Login from "./pages/Auth/Login.jsx"
import Signup from "./pages/Auth/Signup.jsx"
import Authlogin from './pages/Auth/Authlogin.jsx'
import All from './pages/Chat/All.jsx'
import Unread from './pages/Chat/Unread.jsx'
import Favorites from './pages/Chat/Favorites.jsx'
import Groups from './pages/Chat/Groups.jsx'
import CallLog from './pages/CallLog.jsx'
import UserChats from './pages/Chat/UserChats.jsx'
import axios from 'axios'
import socket from './socket.js'
import { api_server_key } from './server.js'



const App = () => {
  const user = useSelector(state => state.user.user)
  console.log("Current User:", user)
  const dispatch = useDispatch()

  const [loading , setLoading] = useState(true)



  const handelFetchUser = async()=>{
      try {
         let apiRes = await axios.get(`${api_server_key}/api/user/fetchuser`,{withCredentials:true})
         console.log(apiRes.data.user)
        dispatch(setUser(apiRes.data.user))
        setLoading(false)
      } catch (error) {
        
      }
    }

    useEffect(()=>{
      handelFetchUser()
    },[])


    useEffect(()=>{


      if(!user?._id) return

      //   socket.on("connect",()=>{
      //   console.log("socket Id", socket.id)
        
        
      //   socket.emit("join-room",user._id)
      // })

   if(user && user?._id) {
    socket.connect()
       
      socket.on("connect",()=>{
      console.log("socket Id", socket.id)
      
    })
    
    socket.emit("join-room",user._id)

    }


      

    },[user?._id])

  
  let routes;

  if(user){
routes = (<Routes>
      <Route path="/" element={<Users/>} />
      <Route path='/chat' element={<UserChats />}/>
     
      <Route path="/users" element={<Users />} >
        <Route index element={<All/>}/>
        <Route path='unread' element={<Unread/>}/>
        <Route path='favorites' element={<Favorites/>}/>
        <Route path='groups' element={<Groups/>}/>
      </Route>
      <Route path="/status" element={<Status />} />
      <Route path="/channels" element={<Channels />} />
      <Route path="/communities" element={<Communities />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/profile" element={<Profile />} />
      <Route path='/call' element={<CallLog />} />

      
       
      <Route path='*' element={<>404 Error</>} />

    </Routes>)
  } else if(!user){
routes = (
  <Routes>
          <Route path="/" element={<Authlogin />} />
        <Route path='/auth/login' element={<Login/>} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="*" element={<Authlogin />} />
     
</Routes>
)
  }


  return (
    <>
    {
      loading ? (<>Loading...</>) :
    (routes)  
    }
  </>
  )
}

export default App