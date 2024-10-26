import React from "react";
import CreateBlog from "../CreateBlog";
import DetailBlog from "../DetailBlog";
import Home from "../Home";
import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "../../components";
import "./mainApp.scss";

const MainApp = () => {
  return (
    <div className="main-app-wrapper">
      <div class="header-wrapper">
        <Header />
      </div>
      <div class="content-wrapper">
        <Routes>
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/detail-blog" element={<DetailBlog />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <div class="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
};

export default MainApp;
