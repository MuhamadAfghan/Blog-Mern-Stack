import React from "react";
import { useNavigate } from "react-router-dom";
import { LoginBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} alt="Login Background" className="bg-image" />
      </div>
      <div className="right">
        <h1 className="title">Login</h1>

        <form action="" className="form" onSubmit={() => navigate("/")}>
          <Input label="Email" placeholder="Your email" />
          <Gap height={18} />
          <Input label="Password" placeholder="Your password" />
          <Gap height={50} />
          <Button>Submit</Button>
          <Gap height={100} />
          <Link title="Register" onClick={() => navigate("/register")} />
        </form>
      </div>
    </div>
  );
};

export default Login;
