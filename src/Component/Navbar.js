import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './Auth'
const Navbar = () => {
  const auth=useAuth()
  return (
    <div>
      <nav className='navbar'>
        <NavLink to='/'>Home</NavLink>
        {/* {auth.user==='admin' && <NavLink to='/admin'>Admin</NavLink>} */}
        <NavLink to='/admin'>Admin</NavLink>
        <NavLink to='/user'>User</NavLink>
        <NavLink to='/profile'>Profile</NavLink>
        {!auth.user && <NavLink to='/login'>Login</NavLink>}
        {!auth.user && <NavLink to='/signup'>Signup</NavLink>}
      </nav>
    </div>
  )
}

export default Navbar
