import React, { useContext } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { AuthContext } from '../context/AuthContext';
import Logo from "../img/logo 2.png";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  const handleImageClick = () => {
    window.open(currentUser.photoURL, "_blank");
  };

  const capitalizeName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  return (
    <div className='navbar'>
      <span className='logo'>Samaritan
        <img src={Logo} alt="" />
      </span>
      <div className='user'>
        <img src={currentUser.photoURL} alt="" onClick={handleImageClick} />
        <span>{capitalizeName(currentUser.displayName)}</span>
        <button onClick={()=>signOut(auth)}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
