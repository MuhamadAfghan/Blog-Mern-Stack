import React from "react";
import "./register.scss";
import { RegisterBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} alt="Register Background" className="bg-image" />
      </div>
      <div className="right">
        <h1 className="title">Register</h1>

        <form action="" className="form" onSubmit={() => navigate("/login")}>
          <Input label="Full Name" placeholder="Your full name" />
          <Gap height={18} />
          <Input label="Email" placeholder="Your email" />
          <Gap height={18} />
          <Input label="Password" placeholder="Your password" />
          <Gap height={50} />
          <Button>Submit</Button>
          <Gap height={100} />
          <Link title="Kembali ke Login" onClick={() => navigate("/login")} />
        </form>
      </div>
    </div>
  );
};

export default Register;
