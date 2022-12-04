import React from "react";
import "./ChatWindow.scss";
import Messages from "./Messages";
import Input from "./Input";
import Info from "./Info";
const ChatWindow = () => {
  return (
    <>
      <div className="chatWindow">
        <Info />
        <Messages />
        <Input />
      </div>
    </>
  );
};

export default ChatWindow;
