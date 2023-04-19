import React from 'react'
import Attach from "../img/attach.png"
import Photo from "../img/photo.png"

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type your message...' />
      <div className="send">
        <img src={Attach} alt="" />
        <input type="file" style={{display:"none"}} id="file" />
        <label htmlFor="file">
          <img src={Photo} alt="" />
        </label>
        <button>Send</button>
      </div>
      
    </div>
  )
}

export default Input