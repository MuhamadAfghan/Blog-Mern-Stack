import React from "react";
import { RegisterBg } from "../../assets";
import "./detailBlog.scss";
import { Button, Gap } from "../../components";
import { useNavigate } from "react-router-dom";

const DetailBlog = () => {
  const navigate = useNavigate();
  return (
    <div className="detail-blog-wrapper">
      <div className="button-back">
        <Button onClick={() => navigate("/")}>Kembali</Button>
      </div>
      <Gap height={20} />
      <img src={RegisterBg} className="img-cover" alt="Detail-Blog" />
      <p className="blog-title">Title Blog</p>
      <p className="blog-author">Author - Date Post</p>
      <p className="blog-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem earum
        minus et labore cum magnam ipsum doloribus nulla ut. Distinctio alias at
        nostrum a debitis aperiam corrupti architecto, id nam!
      </p>
    </div>
  );
};

export default DetailBlog;
