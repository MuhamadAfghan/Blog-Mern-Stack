import React from "react";
import "./blogItem.scss";
// import { RegisterBg } from "../../../assets";
import { Button } from "../../atoms";
import { useNavigate } from "react-router-dom";

const BlogItem = ({ id, author, title, body, image, date }) => {
  const navigate = useNavigate();
  return (
    <div className="blog-item" key={id}>
      <img className="image-thumb" src={image} alt="post" />
      <div className="detail-content">
        <h2 className="title" onClick={() => navigate("/detail-blog")}>
          {title}
        </h2>
        <p className="author">
          {author.name} - {date}
        </p>
        <p className="body">{body}</p>
        <Button onClick={() => navigate("/detail-blog")}>View Detail</Button>
      </div>
    </div>
  );
};

export default BlogItem;
