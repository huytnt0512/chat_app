import React, { useState } from "react";
import "./Register.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <>
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">H_CHAT</span>
          <span className="title">Đăng Nhập</span>
          <form className="form" onSubmit={handleSubmit}>
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <button>Đăng Nhập</button>
            {err && <span>Tài khoản hoặc mật khẩu không đúng</span>}
          </form>
          <p>
            Bạn chưa có tài khoản?<Link to="/register">Đăng ký</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
