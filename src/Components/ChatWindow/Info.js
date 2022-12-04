import React, { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";

const Info = () => {
  const { data } = useContext(ChatContext);
  return (
    <>
      <div className="info">
        <span>{data.user?.displayName}</span>
        <div className="action">
          <i className="fas fa-video"></i>
          <i className="fas fa-user-plus"></i>
          <i className="fas fa-ellipsis-h"></i>
        </div>
      </div>
    </>
  );
};

export default Info;
