import React from "react";
import "./blogItem.scss";
import { RegisterBg } from "../../../assets";
import { Button } from "../../atoms";
import { useNavigate } from "react-router-dom";

const BlogItem = () => {
  const navigate = useNavigate();
  return (
    <div className="blog-item">
      <img className="image-thumb" src={RegisterBg} alt="post" />
      <div className="detail-content">
        <h2 className="title" onClick={() => navigate("/detail-blog")}>
          Title Blog
        </h2>
        <p className="author">Author - Date Post</p>
        <p className="body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, dolore,
          a amet, officiis nobis dolores vitae architecto necessitatibus minus
          obcaecati iure!
        </p>
        <Button onClick={() => navigate("/detail-blog")}>View Detail</Button>
      </div>
    </div>
  );
};

export default BlogItem;
