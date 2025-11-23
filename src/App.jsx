import React from 'react'
import { Route, Routes } from 'react-router-dom'
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
import DefaultEmptyChat from './pages/Chat/DefaultEmptyChat.jsx'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path='chat/:id' element={<Users />}/>
     
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

      <Route path='/auth' element={<Authlogin />}>
        <Route path='login' element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
      <Route path='*' element={<>404 Error</>} />

    </Routes>
  )
}

export default App