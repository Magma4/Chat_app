import React from 'react'
import Add from "../img/add.png"
import Video from "../img/video.png"
import More from "../img/more.png"
import Messages from "./Messages"
import Input from "./Input"

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Papi</span>
        <div className="chatIcons">
          <img src={Video} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat