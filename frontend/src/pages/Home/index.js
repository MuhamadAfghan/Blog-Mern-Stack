import React from "react";
import { BlogItem, Button, Gap } from "../../components";
import "./home.scss";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button onClick={() => navigate("/create-blog")}>Create Blog</Button>
      </div>
      <Gap height={20} />
      <div class="content-blog-wrapper">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
      <div class="pagination-wrapper">
        <Button>Previous</Button>
        <Gap width={20} />
        <Button>Next</Button>
      </div>
    </div>
  );
};

export default Home;
