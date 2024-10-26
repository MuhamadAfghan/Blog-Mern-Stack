import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Login, MainApp, Register } from "../../pages";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<MainApp />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
