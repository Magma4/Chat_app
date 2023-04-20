import React from 'react'
import Add from '../img/profile.jpg'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>FaxTel</span>
      <div className='user'>
        <img src={Add} alt="" />
        <span>Raymond</span>
        <button onClick={()=>signOut(auth)}>Logout</button>
      </div>
      </div>
  )
}

export default Navbar