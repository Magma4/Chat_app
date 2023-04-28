import React, { useContext } from "react";
// import Add from "../img/add.png";
// import Video from "../img/video.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  const displayName = data.user?.displayName;
  const capitalizedDisplayName = displayName ? displayName.charAt(0).toUpperCase() + displayName.slice(1) : "";

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{capitalizedDisplayName}</span>
        <div className="chatIcons">
          {/* <img src={Video} alt="" />
          <img src={Add} alt="" /> */}
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
