import React from "react";
import "./Home.scss";
import Sidebar from "./../../Components/Sidebar/Sidebar";
import ChatWindow from "./../../Components/ChatWindow/ChatWindow";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="container">
          <Sidebar />
          <ChatWindow />
        </div>
      </div>
    </>
  );
};

export default Home;
