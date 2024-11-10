import React, { useEffect } from "react";
import { BlogItem, Button, Gap } from "../../components";
import "./home.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../config/redux/action/homeAction";

const Home = () => {
  const navigate = useNavigate();
  const { allPosts } = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();

  console.log("data state global:", allPosts);

  useEffect(() => {
    dispatch(setPosts());
  }, [dispatch]);

  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button onClick={() => navigate("/create-blog")}>Create Blog</Button>
      </div>
      <Gap height={20} />
      <div className="content-blog-wrapper">
        {allPosts &&
          allPosts.map((post) => {
            return (
              <BlogItem
                key={post._id}
                id={post._id}
                title={post.title}
                body={post.body}
                author={post.author}
                image={`http://localhost:4000/${post.image}`}
                date={post.createdAt}
              />
            );
          })}
      </div>
      <div className="pagination-wrapper">
        <Button>Previous</Button>
        <Gap width={20} />
        <Button>Next</Button>
      </div>
    </div>
  );
};

export default Home;
