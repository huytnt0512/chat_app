import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <div className="navbar">
        <span className="logo">H Chat</span>
        <div className="left">
          <img src={currentUser.photoURL} alt="" />
          <span>{currentUser.displayName}</span>
          <button onClick={() => signOut(auth)}>Đăng xuất</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
