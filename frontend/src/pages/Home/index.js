import React, { useEffect, useState } from "react";
import { BlogItem, Button, Gap } from "../../components";
import "./home.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../config/redux/action/homeAction";

const Home = () => {
  const navigate = useNavigate();
  const { allPosts, page } = useSelector((state) => state.homeReducer);
  const [currentPage, setCurrentPage] = useState(page.currentPage);
  const dispatch = useDispatch();

  console.log("data state global:", allPosts);
  console.log("current page", page);

  useEffect(() => {
    dispatch(setPosts(currentPage));
  }, [dispatch, currentPage]);

  const previous = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
    navigate(`?page=${currentPage}`);
  };

  const next = () => {
    if (currentPage === page.totalPage) return;
    setCurrentPage(currentPage + 1);
    navigate(`?page=${currentPage}`);
  };

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
        <Button onClick={previous}>Previous</Button>
        <Gap width={20} />
        <p className="text-page">
          {" "}
          {currentPage} / {page.totalPage}
        </p>
        <Gap width={20} />
        <Button onClick={next}>Next</Button>
      </div>
    </div>
  );
};

export default Home;
