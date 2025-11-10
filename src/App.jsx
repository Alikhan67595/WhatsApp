import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Chats from './pages/Chats.jsx'
import Status from './pages/Status.jsx'
import Profile from './pages/Profile.jsx'
import Setting from './pages/Setting.jsx'
import Communities from './pages/Communities.jsx'
import Channels from './pages/Channels.jsx'
import Login from "./pages/Auth/Login.jsx"
import Signup from "./pages/Auth/Signup.jsx"
import Authlogin from './pages/Auth/Authlogin.jsx'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Chats />} />
      <Route path="/status" element={<Status />} />
      <Route path="/channels" element={<Channels />} />
      <Route path="/Communities" element={<Communities />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/profile" element={<Profile />} />

      <Route path='/auth' element={<Authlogin/>}>
        <Route path='login' element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
      <Route path='*' element={<>404 Error</>} />

    </Routes>
  )
}

export default App