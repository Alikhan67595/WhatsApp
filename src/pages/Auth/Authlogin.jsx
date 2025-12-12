import React from 'react'
import { NavLink} from 'react-router-dom'

const Authlogin = () => {
  return (
    <>
<div>
<NavLink to="/auth/login">login</NavLink>
<NavLink to="/auth/signup">signup</NavLink>
</div>
    </>
  )
}

export default Authlogin