import React from 'react'
import Add from '../img/profile.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>FaxTel</span>
      <div className='user'>
        <img src={Add} alt="" />
        <span>Raymond</span>
        <button>Logout</button>
      </div>
      </div>
  )
}

export default Navbar